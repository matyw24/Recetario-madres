
import { GoogleGenAI, Type } from "@google/genai";

// Use process.env.API_KEY directly as required by the guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateRecipeImage(recipeTitle: string) {
  if (!process.env.API_KEY) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A high-quality, photorealistic food photography of: ${recipeTitle}. 
            Natural lighting, ceramic plate, clean composition, delicious, 4k.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
}

export async function generateRecipesFromIngredients(ingredients: string[]) {
  if (!process.env.API_KEY) {
    console.warn("No API_KEY provided for recipe generation");
    return [];
  }

  const prompt = `Actúa como un chef experto en nutrición infantil. Crea 2 recetas creativas y saludables adecuadas para niños pequeños usando PRINCIPALMENTE estos ingredientes: ${ingredients.join(', ')}. Puedes añadir básicos de despensa (aceite, sal, harina, huevo).
  IMPORTANTE: Las recetas deben ser seguras, nutritivas y fáciles de comer.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              time: { type: Type.STRING },
              difficulty: { type: Type.STRING, enum: ["Baja", "Media", "Dificil"] },
              ageCategory: { type: Type.STRING, enum: ["6m", "7-9m", "10-12m", "1-2a", "Snacks"] },
              ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
              instructions: { type: Type.ARRAY, items: { type: Type.STRING } },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['title', 'description', 'time', 'difficulty', 'ageCategory', 'ingredients', 'instructions', 'tags']
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating recipes:", error);
    return [];
  }
}
