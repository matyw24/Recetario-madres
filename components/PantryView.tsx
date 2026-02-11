
import React, { useState } from 'react';
import { Ingredient } from '../types';

interface PantryViewProps {
  ingredients: Ingredient[];
  onToggle: (id: string) => void;
  selectedCount: number;
  onSearch: () => void;
  onOpenSettings: () => void;
}

const PantryView: React.FC<PantryViewProps> = ({ ingredients, onToggle, selectedCount, onSearch, onOpenSettings }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Normalize text to ignore accents and case (e.g., "limón" == "limon")
  const normalize = (text: string) => 
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const filtered = ingredients.filter(i => 
    normalize(i.name).includes(normalize(searchTerm))
  ).sort((a, b) => {
    // Show selected items first
    if (a.selected && !b.selected) return -1;
    if (!a.selected && b.selected) return 1;
    // Then alphabetical
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-col min-h-screen bg-bg-light dark:bg-zinc-900 transition-colors duration-300">
      <header className="flex items-center justify-between p-4 pt-6">
        <button onClick={onSearch} className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-text-main dark:text-white">Mi Despensa</h1>
        <button 
          onClick={onOpenSettings}
          className="flex size-10 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      <section className="px-6 pt-2 pb-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white">
          ¿Qué tienes hoy a mano?
        </h2>
        <p className="mt-2 text-text-muted dark:text-text-muted/80 text-base">
          Selecciona ingredientes para ver recetas.
        </p>
      </section>

      <div className="px-6 pb-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">search</span>
          <input 
            className="w-full rounded-2xl border-none bg-white dark:bg-zinc-800 dark:text-white py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-primary transition-all outline-none" 
            placeholder="Buscar ingrediente..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Action Button - Moved Up */}
        <button 
          onClick={onSearch}
          disabled={selectedCount === 0}
          className={`flex w-full items-center justify-center rounded-2xl h-14 px-5 text-base font-bold shadow-lg transition-all active:scale-95 ${
            selectedCount > 0 ? 'bg-primary text-text-main shadow-primary/20 hover:bg-primary-dark transform hover:-translate-y-0.5' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-600 shadow-none cursor-not-allowed'
          }`}
        >
          <span className="material-symbols-outlined mr-2">search_insights</span>
          <span>Buscar recetas ({selectedCount})</span>
        </button>
      </div>

      <main className="flex-1 px-4 pb-12">
        <div className="flex flex-wrap gap-3 justify-start">
          {filtered.map((ing) => (
            <button 
              key={ing.id}
              onClick={() => onToggle(ing.id)}
              className={`flex h-12 items-center gap-x-2 rounded-full px-5 shadow-sm transition-all active:scale-95 border ${
                ing.selected 
                  ? 'bg-primary border-primary text-text-main font-semibold' 
                  : 'bg-white dark:bg-zinc-800 border-zinc-100 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium'
              }`}
            >
              <span className={`material-symbols-outlined ${ing.selected ? 'text-text-main' : 'text-zinc-500 dark:text-zinc-400'}`}>{ing.icon}</span>
              <span className="text-sm">{ing.name}</span>
              {ing.selected && <span className="material-symbols-outlined text-xs font-bold">check</span>}
            </button>
          ))}
        </div>

        {/* Progress Bar kept at bottom of list contextually */}
        <div className="mt-8 p-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#578e76] dark:text-[#a8e5cc]">Nivel de Despensa</p>
            <span className="text-xs font-medium bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-full text-zinc-600 dark:text-zinc-300">
              {selectedCount} items
            </span>
          </div>
          <div className="w-full bg-zinc-100 dark:bg-zinc-700 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-[#578e76] dark:bg-[#a8e5cc] h-full transition-all duration-500" 
              style={{ width: `${Math.min((selectedCount / 10) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PantryView;
