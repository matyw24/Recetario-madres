
import React, { useState } from 'react';
import { FreezerItem } from '../types';

interface FreezerViewProps {
  items: FreezerItem[];
  setItems: React.Dispatch<React.SetStateAction<FreezerItem[]>>;
}

const FreezerView: React.FC<FreezerViewProps> = ({ items, setItems }) => {
  const [selectedItemForTips, setSelectedItemForTips] = useState<FreezerItem | null>(null);

  const updateQuantity = (id: string, delta: number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-bg-light/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm">
          <span className="material-symbols-outlined text-text-main">chevron_left</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Mi Freezer</h1>
        <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm">
          <span className="material-symbols-outlined text-text-main">account_circle</span>
        </button>
      </header>

      <main className="px-4 pt-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-text-main">Snacks Congelados</h2>
          <p className="text-text-muted text-sm mt-1 font-medium">Logística nutricional simplificada.</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-primary/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full overflow-hidden bg-primary/20 flex-shrink-0 border-2 border-primary/30">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-text-main">{item.name}</h3>
                    <p className="text-xs text-text-muted font-medium">{item.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-bg-light rounded-full p-1 border border-primary/20">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="size-8 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="size-8 rounded-full flex items-center justify-center bg-primary text-text-main shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedItemForTips(item)}
                className="flex items-center gap-2 text-[10px] font-extrabold text-[#578e76] uppercase tracking-widest mt-1 text-left"
              >
                <span className="material-symbols-outlined text-[18px]">info</span>
                Tips de Recalentado
              </button>
            </div>
          ))}
        </div>

        <button className="w-full mt-8 bg-white border-2 border-dashed border-primary/50 text-text-muted font-bold py-4 rounded-xl flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">add_circle</span>
          Agregar Item
        </button>
      </main>

      {/* Modal Mockup */}
      {selectedItemForTips && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-4 animate-in fade-in">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedItemForTips(null)}
          ></div>
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative z-10 border border-primary/20 animate-in slide-in-from-bottom-10 duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full"></div>
            <div className="flex justify-between items-start mb-6 pt-2">
              <h4 className="text-xl font-bold">Tips de Recalentado</h4>
              <button onClick={() => setSelectedItemForTips(null)} className="text-gray-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {selectedItemForTips.reheatingTips.map((tip, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-primary/20 p-3 rounded-full h-fit">
                    <span className="material-symbols-outlined text-[#578e76]">
                      {idx === 0 ? 'microwave' : idx === 1 ? 'oven_gen' : 'timer'}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-text-main">{tip.split(':')[0]}</p>
                    <p className="text-sm text-gray-600">{tip.split(':')[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setSelectedItemForTips(null)}
              className="w-full mt-8 bg-primary text-text-main font-bold py-4 rounded-full shadow-md active:scale-95 transition-transform"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreezerView;
