
import React, { useState, useMemo } from 'react';
import { Recipe, AgeCategory } from '../types';

interface RecipeHomeViewProps {
  recipes: Recipe[];
  onAddToShoppingList: (items: string[]) => void;
  selectedPantryIngredients?: string[];
  onClearPantryFilter?: () => void;
  onOpenSettings: () => void;
}

const RecipeHomeView: React.FC<RecipeHomeViewProps> = ({ 
  recipes, 
  onAddToShoppingList,
  selectedPantryIngredients = [],
  onClearPantryFilter,
  onOpenSettings
}) => {
  const [selectedAge, setSelectedAge] = useState<AgeCategory | 'All'>('All');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isCookingMode, setIsCookingMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // --- Logic for Lists ---
  const filteredRecipes = useMemo(() => {
    let result = recipes;

    // 1. Filter by Age
    if (selectedAge !== 'All') {
      result = result.filter(r => r.ageCategory === selectedAge);
    }

    // 2. Filter by Pantry Ingredients (Inclusive: if recipe has ANY of the selected ingredients)
    if (selectedPantryIngredients.length > 0) {
      result = result.filter(recipe => {
        // Check if any of the recipe ingredients string contains any of the selected pantry ingredient names
        return selectedPantryIngredients.some(pantryItem => 
          recipe.ingredients.some(recipeIng => 
            recipeIng.toLowerCase().includes(pantryItem.toLowerCase())
          )
        );
      });
    }

    return result;
  }, [recipes, selectedAge, selectedPantryIngredients]);

  const categories: { label: string, value: AgeCategory | 'All' }[] = [
    { label: 'TODOS', value: 'All' },
    { label: '6 MESES', value: '6m' },
    { label: '7-9 M', value: '7-9m' },
    { label: '10-12 M', value: '10-12m' },
    { label: '1-2 AÑOS', value: '1-2a' },
    { label: 'SNACKS', value: 'Snacks' }
  ];

  // --- Handlers ---
  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
    setIsCookingMode(false);
    setCurrentStep(0);
  };

  const startCooking = () => {
    setIsCookingMode(true);
    setCurrentStep(0);
  };

  const handleAddToShopping = () => {
    if (selectedRecipe) {
      onAddToShoppingList(selectedRecipe.ingredients);
      // Small visual feedback (alert for simplicity, toast in real app)
      alert('Ingredientes agregados a la lista de compras');
    }
  };

  // --- Views ---

  // 1. COOKING MODE VIEW (Immersive)
  if (isCookingMode && selectedRecipe) {
    const totalSteps = selectedRecipe.instructions.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
      <div className="fixed inset-0 z-[100] bg-zinc-900 text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <button onClick={() => setIsCookingMode(false)} className="text-zinc-400 hover:text-white">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="text-xs font-bold uppercase tracking-widest text-[#578e76]">Modo Cocina</div>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-800 h-1">
          <div className="bg-[#ff5e92] h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Main Step Content */}
        <div className="flex-1 flex flex-col justify-center px-8 pb-10">
          <div className="mb-4 text-zinc-500 font-bold uppercase tracking-widest">
            Paso {currentStep + 1} de {totalSteps}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            {selectedRecipe.instructions[currentStep]}
          </h2>
        </div>

        {/* Controls */}
        <div className="p-8 pb-12 flex items-center justify-between bg-zinc-900 border-t border-zinc-800">
          <button 
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(p => p - 1)}
            className={`flex items-center justify-center size-14 rounded-full border border-zinc-700 transition-colors ${currentStep === 0 ? 'opacity-30' : 'hover:bg-zinc-800'}`}
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>

          {currentStep < totalSteps - 1 ? (
            <button 
              onClick={() => setCurrentStep(p => p + 1)}
              className="flex items-center gap-3 px-8 h-14 bg-white text-zinc-900 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
            >
              <span>Siguiente</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          ) : (
             <button 
              onClick={() => setIsCookingMode(false)}
              className="flex items-center gap-3 px-8 h-14 bg-[#ff5e92] text-white rounded-full font-bold shadow-lg shadow-pink-900/20 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined">check</span>
              <span>Finalizar</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // 2. RECIPE DETAIL VIEW
  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white pb-24 animate-in slide-in-from-right duration-300">
        {/* Navigation */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-zinc-50 dark:border-zinc-800">
          <button onClick={handleCloseRecipe} className="size-10 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex gap-2">
            <button onClick={handleAddToShopping} className="size-10 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-[#578e76] transition-colors" title="Agregar ingredientes a compras">
              <span className="material-symbols-outlined">add_shopping_cart</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-pink-500 transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="px-5 pt-4 pb-8">
           <div className="w-full aspect-[4/3] rounded-[32px] bg-primary/20 flex items-center justify-center mb-6 overflow-hidden relative">
              <span className="material-symbols-outlined text-7xl text-primary-dark/40">restaurant_menu</span>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-zinc-600 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {selectedRecipe.time}
              </div>
           </div>
           
           <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-[#ff5e92]/10 text-[#ff5e92] rounded-lg text-[10px] font-black uppercase tracking-widest">
                {selectedRecipe.ageCategory}
              </span>
              {selectedRecipe.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black text-[#578e76] uppercase tracking-wider bg-[#c1f0db]/30 px-3 py-1 rounded-lg">
                  #{tag}
                </span>
              ))}
           </div>

           <h1 className="text-3xl font-black text-zinc-900 dark:text-white leading-tight mb-2">{selectedRecipe.title}</h1>
           <p className="text-zinc-500 dark:text-zinc-400 italic text-sm">{selectedRecipe.description}</p>
        </div>

        {/* Ingredients Section */}
        <div className="px-5 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Ingredientes</h3>
            <span className="text-xs font-bold text-zinc-400">{selectedRecipe.ingredients.length} items</span>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-5 space-y-3">
            {selectedRecipe.ingredients.map((ing, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#578e76] shrink-0"></div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">{ing}</p>
              </div>
            ))}
            <button 
              onClick={handleAddToShopping}
              className="w-full mt-4 py-3 bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded-xl text-xs font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-300 hover:border-[#578e76] hover:text-[#578e76] transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              Agregar todo a lista
            </button>
          </div>
        </div>

        {/* Cooking Mode Button */}
        <div className="px-5 mb-8">
           <button 
             onClick={startCooking}
             className="w-full h-14 bg-[#ff5e92] rounded-[24px] shadow-lg shadow-pink-200 dark:shadow-none text-white font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-transform"
           >
             <span className="material-symbols-outlined text-2xl">play_circle</span>
             Modo Cocina
           </button>
        </div>

        {/* Instructions Section */}
        <div className="px-5 mb-24">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Preparación</h3>
          </div>
          <div className="space-y-6 relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-zinc-100 dark:bg-zinc-800"></div>

            {selectedRecipe.instructions.map((step, i) => (
              <div key={i} className="relative flex gap-5">
                <div className="size-8 rounded-full bg-zinc-900 dark:bg-zinc-700 text-white flex items-center justify-center text-sm font-bold shrink-0 z-10 shadow-lg ring-4 ring-white dark:ring-zinc-900">
                  {i + 1}
                </div>
                <div className="pt-1 pb-4">
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3. RECIPE LIST VIEW (Default)
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      {/* Header matching the screenshot */}
      <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 px-5 pt-8 pb-4 shadow-sm dark:shadow-zinc-800/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[18px] bg-[#ff5e92] flex items-center justify-center text-white shadow-lg shadow-pink-100 dark:shadow-none">
              <span className="material-symbols-outlined fill-1 text-2xl">restaurant</span>
            </div>
            <div>
              <h1 className="text-[10px] font-black text-[#ff5e92] uppercase tracking-[0.2em] mb-0.5">MAMÁ EN APUROS</h1>
              <p className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Recetario Digital</p>
            </div>
          </div>
          <button 
            onClick={onOpenSettings}
            className="w-11 h-11 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Categories Pills */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
          {categories.map((cat) => (
            <button 
              key={cat.value}
              onClick={() => setSelectedAge(cat.value)}
              className={`flex shrink-0 items-center justify-center px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-wider transition-all duration-200 ${
                selectedAge === cat.value 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl' 
                  : 'bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>
      
      {/* Active Pantry Filters Banner */}
      {selectedPantryIngredients.length > 0 && (
        <div className="px-5 pt-4">
          <div className="bg-[#578e76]/10 border border-[#578e76]/20 rounded-2xl p-4 flex items-start justify-between">
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#578e76] mb-2">Usando tu despensa:</p>
              <div className="flex flex-wrap gap-2">
                {selectedPantryIngredients.map(ing => (
                  <span key={ing} className="bg-white text-[#578e76] px-2 py-1 rounded-md text-[10px] font-bold border border-[#578e76]/20">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
            {onClearPantryFilter && (
              <button 
                onClick={onClearPantryFilter}
                className="text-zinc-400 hover:text-zinc-600 p-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Recipe List */}
      <main className="p-5 space-y-10">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              onClick={() => handleOpenRecipe(recipe)}
              className="flex flex-col bg-white dark:bg-zinc-800 rounded-[32px] overflow-hidden shadow-[0_15px_45px_-15px_rgba(0,0,0,0.08)] border border-zinc-50 dark:border-zinc-700 cursor-pointer active:scale-[0.98] transition-all"
            >
              {/* Image Placeholder Section */}
              <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary-dark/40">restaurant_menu</span>
                
                {/* Category Badge (Left) */}
                <div className="absolute top-5 left-5">
                  <div className="px-4 py-1.5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-full shadow-lg">
                    <span className="text-[11px] font-black uppercase text-[#ff5e92]">{recipe.ageCategory}</span>
                  </div>
                </div>

                {/* Time Badge (Right) */}
                <div className="absolute top-5 right-5">
                  <div className="px-4 py-1.5 bg-zinc-900/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-full shadow-lg flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-white">schedule</span>
                    <span className="text-[11px] font-black text-white">{recipe.time}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-7">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight pr-4">{recipe.title}</h2>
                  <button className="text-zinc-200 dark:text-zinc-600 hover:text-pink-500 transition-colors shrink-0 pt-1">
                    <span className="material-symbols-outlined text-[28px]">favorite</span>
                  </button>
                </div>
                <p className="text-zinc-400 dark:text-zinc-500 text-sm font-medium leading-relaxed italic mb-8">
                  "{recipe.description}"
                </p>
                
                <div className="flex items-center justify-between border-t border-zinc-50 dark:border-zinc-700 pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="px-3 py-1 bg-zinc-50 dark:bg-zinc-700 rounded-lg text-[10px] font-black text-zinc-400 dark:text-zinc-300 uppercase tracking-widest">
                      {recipe.difficulty}
                    </div>
                    {recipe.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-[#578e76] dark:text-[#a8e5cc] uppercase tracking-wider bg-[#c1f0db]/30 px-3 py-1 rounded-lg">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {/* Open icon button in black circle */}
                  <button className="flex items-center justify-center size-12 rounded-[20px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl shadow-zinc-200 dark:shadow-none">
                    <span className="material-symbols-outlined text-[22px]">auto_stories</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <span className="material-symbols-outlined text-4xl text-zinc-300 dark:text-zinc-600 mb-4">no_meals</span>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">No hay recetas que coincidan con tu búsqueda.</p>
            <button 
              onClick={() => {
                if (onClearPantryFilter) onClearPantryFilter();
                setSelectedAge('All');
              }}
              className="mt-4 text-[#ff5e92] font-bold text-sm"
            >
              Ver todas las recetas
            </button>
          </div>
        )}
      </main>
      
      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-zinc-200 dark:text-zinc-700 uppercase tracking-[0.5em]">MAMÁ EN APUROS DIGITAL</p>
      </footer>
    </div>
  );
};

export default RecipeHomeView;
