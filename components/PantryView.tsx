
import React, { useState } from 'react';
import { Ingredient } from '../types';

interface PantryViewProps {
  ingredients: Ingredient[];
  onToggle: (id: string) => void;
  selectedCount: number;
  onSearch: () => void;
}

const PantryView: React.FC<PantryViewProps> = ({ ingredients, onToggle, selectedCount, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = ingredients.filter(i => 
    i.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 pt-6">
        <button className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Mi Despensa</h1>
        <button className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm">
          <span className="material-symbols-outlined">history</span>
        </button>
      </header>

      <section className="px-6 pt-4 pb-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text-main">
          ¿Qué tienes hoy a mano?
        </h2>
        <p className="mt-2 text-text-muted text-base">
          Toque los ingredientes para seleccionarlos. Te ayudaremos a decidir qué cocinar.
        </p>
      </section>

      <div className="px-6 py-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">search</span>
          <input 
            className="w-full rounded-full border-none bg-white py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-primary transition-all outline-none" 
            placeholder="Buscar ingrediente..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <main className="flex-1 px-4 py-4">
        <div className="flex flex-wrap gap-3 justify-start">
          {filtered.map((ing) => (
            <button 
              key={ing.id}
              onClick={() => onToggle(ing.id)}
              className={`flex h-12 items-center gap-x-2 rounded-full px-5 shadow-sm transition-all active:scale-95 border ${
                ing.selected 
                  ? 'bg-primary border-primary text-text-main font-semibold' 
                  : 'bg-white border-zinc-100 text-zinc-700 font-medium'
              }`}
            >
              <span className={`material-symbols-outlined ${ing.selected ? 'text-text-main' : 'text-zinc-500'}`}>{ing.icon}</span>
              <span className="text-sm">{ing.name}</span>
              {ing.selected && <span className="material-symbols-outlined text-xs font-bold">check</span>}
            </button>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-primary/20 border border-primary/30">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#578e76]">Estado de Stock</p>
            <span className="text-xs font-medium bg-primary px-2 py-1 rounded-full text-text-main">
              {selectedCount}/10 Seleccionados
            </span>
          </div>
          <div className="w-full bg-white h-2 rounded-full overflow-hidden">
            <div 
              className="bg-[#578e76] h-full transition-all duration-500" 
              style={{ width: `${(selectedCount / 10) * 100}%` }}
            ></div>
          </div>
          <p className="mt-3 text-xs text-[#578e76] leading-relaxed">
            Añade más ingredientes para desbloquear recetas personalizadas que reducen el desperdicio.
          </p>
        </div>
      </main>

      <footer className="p-6">
        <button 
          onClick={onSearch}
          disabled={selectedCount === 0}
          className={`flex w-full items-center justify-center rounded-full h-16 px-5 text-lg font-bold shadow-xl transition-all active:scale-95 ${
            selectedCount > 0 ? 'bg-primary text-text-main shadow-primary/20' : 'bg-zinc-200 text-zinc-400 shadow-none'
          }`}
        >
          <span className="material-symbols-outlined mr-2">search_insights</span>
          <span>Buscar con lo que tengo</span>
        </button>
      </footer>
    </div>
  );
};

export default PantryView;
