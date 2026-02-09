
import React, { useState } from 'react';
import { Recipe, AgeCategory } from '../types';

interface RecipeHomeViewProps {
  recipes: Recipe[];
}

const RecipeHomeView: React.FC<RecipeHomeViewProps> = ({ recipes }) => {
  const [selectedAge, setSelectedAge] = useState<AgeCategory | 'All'>('All');

  const filteredRecipes = selectedAge === 'All' 
    ? recipes 
    : recipes.filter(r => r.ageCategory === selectedAge);

  const categories: { label: string, value: AgeCategory | 'All' }[] = [
    { label: 'TODOS', value: 'All' },
    { label: '6 MESES', value: '6m' },
    { label: '7-9 M', value: '7-9m' },
    { label: '10-12 M', value: '10-12m' },
    { label: '1-2 AÑOS', value: '1-2a' },
    { label: 'SNACKS', value: 'Snacks' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header matching the screenshot */}
      <header className="sticky top-0 z-50 bg-white px-5 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[18px] bg-[#ff5e92] flex items-center justify-center text-white shadow-lg shadow-pink-100">
              <span className="material-symbols-outlined fill-1 text-2xl">restaurant</span>
            </div>
            <div>
              <h1 className="text-[10px] font-black text-[#ff5e92] uppercase tracking-[0.2em] mb-0.5">MAMÁ EN APUROS</h1>
              <p className="text-xl font-bold text-zinc-900 tracking-tight">Recetario Digital</p>
            </div>
          </div>
          <button className="w-11 h-11 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400">
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
                  ? 'bg-zinc-900 text-white shadow-xl' 
                  : 'bg-white border border-zinc-100 text-zinc-400 hover:border-zinc-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      {/* Recipe List */}
      <main className="p-5 space-y-10">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="flex flex-col bg-white rounded-[32px] overflow-hidden shadow-[0_15px_45px_-15px_rgba(0,0,0,0.08)] border border-zinc-50">
            {/* Image Section */}
            <div className="relative w-full aspect-[1/1] sm:aspect-[4/3]">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Category Badge (Left) */}
              <div className="absolute top-5 left-5">
                <div className="px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-lg">
                  <span className="text-[11px] font-black uppercase text-[#ff5e92]">{recipe.ageCategory}</span>
                </div>
              </div>

              {/* Time Badge (Right) */}
              <div className="absolute top-5 right-5">
                <div className="px-4 py-1.5 bg-zinc-900/90 backdrop-blur-md rounded-full shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-white">schedule</span>
                  <span className="text-[11px] font-black text-white">{recipe.time}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-7">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-zinc-900 leading-tight tracking-tight pr-4">{recipe.title}</h2>
                <button className="text-zinc-200 hover:text-pink-500 transition-colors shrink-0 pt-1">
                  <span className="material-symbols-outlined text-[28px]">favorite</span>
                </button>
              </div>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed italic mb-8">
                "{recipe.description}"
              </p>
              
              <div className="flex items-center justify-between border-t border-zinc-50 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="px-3 py-1 bg-zinc-50 rounded-lg text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    {recipe.difficulty}
                  </div>
                  {recipe.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-[#578e76] uppercase tracking-wider bg-[#c1f0db]/30 px-3 py-1 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
                {/* Book icon button in black circle */}
                <button className="flex items-center justify-center size-12 rounded-[20px] bg-zinc-900 text-white shadow-xl shadow-zinc-200 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[22px]">auto_stories</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      
      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-zinc-200 uppercase tracking-[0.5em]">MAMÁ EN APUROS DIGITAL</p>
      </footer>
    </div>
  );
};

export default RecipeHomeView;
