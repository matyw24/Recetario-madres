
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generateRecipeImage(recipeTitle: string) {
  if (!process.env.API_KEY) return null;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `A high-quality, photorealistic studio photography of a child-friendly dish: ${recipeTitle}. 
            Natural soft lighting, clean white ceramic bowl, minimal aesthetic, top-down or 45-degree angle. 
            Fresh ingredients visible, vibrant colors, appetizing for parents. No text in the image.`,
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
  if (!process.env.API_KEY) return null;

  const prompt = `Como una experta en nutrición infantil, sugiere 3 combinaciones rápidas usando: ${ingredients.join(', ')}.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
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
              tags: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ['title', 'description', 'time', 'tags']
          }
        }
      }
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Error generating recipes:", error);
    return null;
  }
}
