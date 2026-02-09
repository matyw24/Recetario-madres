
import React, { useState } from 'react';
import { ShoppingItem } from '../types';
import { supabase } from '../supabaseClient';

interface ShoppingListViewProps {
  items: ShoppingItem[];
  setItems: React.Dispatch<React.SetStateAction<ShoppingItem[]>>;
  onOpenSettings: () => void;
}

const ShoppingListView: React.FC<ShoppingListViewProps> = ({ items, setItems, onOpenSettings }) => {
  const [newItemName, setNewItemName] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const toggleCheck = async (id: string) => {
    const item = items.find(i => i.id === id);
    if (!item) return;

    const newChecked = !item.checked;

    // Optimistic
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, checked: newChecked } : item
    ));

    // DB
    await supabase.from('shopping_items').update({ checked: newChecked }).eq('id', id);
  };

  const deleteItem = async (id: string) => {
    // Optimistic
    setItems(prev => prev.filter(item => item.id !== id));
    // DB
    await supabase.from('shopping_items').delete().eq('id', id);
  };

  const addItem = async () => {
    if (!newItemName.trim()) return;
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: newItemName,
      category: 'PASILLOS',
      checked: false
    };
    
    // Optimistic
    setItems(prev => [...prev, newItem]);
    
    // DB
    await supabase.from('shopping_items').insert(newItem);
    
    setNewItemName('');
  };

  const handleClearClick = () => {
    if (items.length > 0) {
      setShowClearConfirm(true);
    }
  };

  const confirmClear = async () => {
    // Optimistic
    setItems([]);
    setShowClearConfirm(false);

    // DB - assuming we delete everything in table or filter by user if auth existed
    await supabase.from('shopping_items').delete().neq('id', 'placeholder'); // Hacky delete all
  };

  const categories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div className="min-h-screen pb-32 relative bg-bg-light dark:bg-zinc-900 transition-colors duration-300">
      <header className="sticky top-0 z-20 bg-bg-light/95 dark:bg-zinc-900/95 backdrop-blur-md px-6 pt-12 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-text-main dark:text-white">Lista de Compras</h1>
          <button 
             onClick={onOpenSettings}
             className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
           >
             <span className="material-symbols-outlined">menu</span>
           </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-text-muted dark:text-text-muted/80 font-medium">Reduce la fatiga de decisión</p>
          <button 
            onClick={handleClearClick}
            disabled={items.length === 0}
            className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all ${
              items.length > 0
                ? 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-300 dark:text-zinc-600 cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined text-sm">delete_forever</span>
            Vaciar
          </button>
        </div>
      </header>

      <main className="px-6 space-y-8 mt-6">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center opacity-50">
            <span className="material-symbols-outlined text-5xl mb-2 text-zinc-400 dark:text-zinc-600">shopping_basket</span>
            <p className="text-zinc-500 dark:text-zinc-400">Tu lista está vacía</p>
          </div>
        ) : null}

        {categories.map(cat => (
          <section key={cat}>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#578e76] dark:text-[#a8e5cc] text-xl">
                {cat === 'FRUTERÍA' ? 'nutrition' : cat === 'LÁCTEOS' ? 'egg_alt' : 'inventory_2'}
              </span>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500">{cat}</h2>
            </div>
            <div className="space-y-3">
              {items.filter(i => i.category === cat).map(item => (
                <div 
                  key={item.id}
                  className={`group flex items-start gap-3 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-transparent shadow-sm transition-all ${item.checked ? 'opacity-60 bg-zinc-50 dark:bg-zinc-800/50' : 'hover:border-primary/30'}`}
                >
                  <div className="relative flex items-center justify-center mt-0.5 shrink-0 cursor-pointer" onClick={() => toggleCheck(item.id)}>
                    <input 
                      type="checkbox"
                      checked={item.checked}
                      readOnly
                      className="peer h-6 w-6 appearance-none rounded-full border-2 border-primary checked:bg-primary transition-all cursor-pointer"
                    />
                    <span className="material-symbols-outlined absolute text-xs text-text-main font-bold scale-0 peer-checked:scale-100 transition-transform pointer-events-none">check</span>
                  </div>
                  
                  <div 
                    className="flex-1 min-w-0 cursor-pointer pt-0.5" 
                    onClick={() => toggleCheck(item.id)}
                  >
                    <p className={`text-text-main dark:text-white font-medium text-sm break-words leading-relaxed ${item.checked ? 'line-through decoration-primary decoration-2' : ''}`}>
                      {item.name}
                    </p>
                  </div>

                  <button 
                    onClick={() => deleteItem(item.id)}
                    className="shrink-0 size-8 flex items-center justify-center rounded-full text-zinc-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors active:scale-90"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 p-6 pointer-events-none z-30 bg-gradient-to-t from-bg-light via-bg-light/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80 pt-12">
        <div className="max-w-[430px] mx-auto pointer-events-auto flex gap-3 items-end">
          <div className="flex-1 bg-white dark:bg-zinc-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-zinc-700 overflow-hidden flex items-center px-4 min-h-[56px]">
            <span className="material-symbols-outlined text-gray-400 mr-2 shrink-0">add</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-text-main dark:text-white py-4 placeholder:text-gray-400 text-sm outline-none" 
              placeholder="Añadir nuevo item..." 
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addItem()}
            />
          </div>
          <button 
            onClick={addItem}
            disabled={!newItemName.trim()}
            className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-lg transition-all shrink-0 ${
              newItemName.trim() 
                ? 'bg-primary text-text-main active:scale-95 hover:bg-primary-dark' 
                : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
            }`}
          >
            <span className="material-symbols-outlined font-bold">arrow_upward</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowClearConfirm(false)}
          ></div>
          <div className="bg-white dark:bg-zinc-800 w-full max-w-xs rounded-2xl shadow-2xl p-6 relative z-10 animate-in zoom-in-95 duration-200">
            <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center mb-4 mx-auto">
              <span className="material-symbols-outlined text-2xl">delete_sweep</span>
            </div>
            <h3 className="text-lg font-bold text-center text-text-main dark:text-white mb-2">¿Vaciar lista?</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Esta acción eliminará <strong>todos</strong> los items de tu lista de compras. No se puede deshacer.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 py-3 text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-zinc-700 rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmClear}
                className="flex-1 py-3 text-sm font-bold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-200 dark:shadow-none"
              >
                Sí, vaciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingListView;
