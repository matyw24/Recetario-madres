
import React, { useState } from 'react';
import { ShoppingItem } from '../types';

interface ShoppingListViewProps {
  items: ShoppingItem[];
  setItems: React.Dispatch<React.SetStateAction<ShoppingItem[]>>;
}

const ShoppingListView: React.FC<ShoppingListViewProps> = ({ items, setItems }) => {
  const [newItemName, setNewItemName] = useState('');

  const toggleCheck = (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = () => {
    if (!newItemName.trim()) return;
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: newItemName,
      category: 'PASILLOS',
      checked: false
    };
    setItems(prev => [...prev, newItem]);
    setNewItemName('');
  };

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div className="min-h-screen pb-32">
      <header className="sticky top-0 z-20 bg-bg-light/80 backdrop-blur-md px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-text-main">Lista de Compras</h1>
          <button 
            onClick={() => setItems(prev => prev.filter(i => !i.checked))}
            className="text-sm font-semibold text-[#578e76] px-4 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
          >
            Vaciar
          </button>
        </div>
        <p className="text-sm text-text-muted font-medium">Reduce la fatiga de decisión</p>
      </header>

      <main className="px-6 space-y-8">
        {categories.map(cat => (
          <section key={cat}>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#578e76] text-xl">
                {cat === 'FRUTERÍA' ? 'nutrition' : cat === 'LÁCTEOS' ? 'egg_alt' : 'inventory_2'}
              </span>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">{cat}</h2>
            </div>
            <div className="space-y-2">
              {items.filter(i => i.category === cat).map(item => (
                <label 
                  key={item.id}
                  className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-transparent shadow-sm active:scale-[0.98] transition-all cursor-pointer ${item.checked ? 'opacity-60' : ''}`}
                >
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => toggleCheck(item.id)}
                      className="peer h-6 w-6 appearance-none rounded-full border-2 border-primary checked:bg-primary transition-all"
                    />
                    <span className="material-symbols-outlined absolute text-xs text-text-main font-bold scale-0 peer-checked:scale-100 transition-transform">check</span>
                  </div>
                  <p className={`text-text-main font-medium ${item.checked ? 'line-through decoration-primary decoration-2' : ''}`}>
                    {item.name}
                  </p>
                </label>
              ))}
            </div>
          </section>
        ))}
      </main>

      <div className="fixed bottom-24 left-0 right-0 p-6 pointer-events-none">
        <div className="max-w-[430px] mx-auto pointer-events-auto flex gap-3">
          <div className="flex-1 bg-white rounded-full shadow-xl border border-gray-100 overflow-hidden flex items-center px-4">
            <span className="material-symbols-outlined text-gray-400 mr-2">add</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-text-main py-4 placeholder:text-gray-400 text-sm outline-none" 
              placeholder="Añadir nuevo item..." 
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
            />
          </div>
          <button 
            onClick={addItem}
            className="bg-primary text-text-main h-14 w-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined font-bold">arrow_upward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListView;
