
import React, { useState } from 'react';
import { FreezerItem } from '../types';
import { supabase } from '../supabaseClient';

interface FreezerViewProps {
  items: FreezerItem[];
  setItems: React.Dispatch<React.SetStateAction<FreezerItem[]>>;
  onOpenSettings: () => void;
}

const FreezerView: React.FC<FreezerViewProps> = ({ items, setItems, onOpenSettings }) => {
  const [selectedItemForTips, setSelectedItemForTips] = useState<FreezerItem | null>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  
  // Add Item Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [newItemTips, setNewItemTips] = useState('');

  const updateQuantity = async (id: string, delta: number) => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    
    const newQuantity = Math.max(0, item.quantity + delta);

    // Optimistic UI
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));

    // DB Update
    await supabase.from('freezer_items').update({ quantity: newQuantity }).eq('id', id);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      // Optimistic
      setItems(prev => prev.filter(item => item.id !== itemToDelete));
      
      // DB
      await supabase.from('freezer_items').delete().eq('id', itemToDelete);
      
      setItemToDelete(null);
    }
  };

  const handleAddItem = async () => {
    if (!newItemName.trim()) return;

    const tipsArray = newItemTips.trim() 
      ? newItemTips.split('\n').filter(t => t.trim()) 
      : ['General: Descongelar en heladera.', 'Calentar bien antes de consumir.'];

    const newItem: FreezerItem = {
      id: `freezer_${Date.now()}`,
      name: newItemName,
      description: newItemDesc || new Date().toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }),
      quantity: newItemQuantity,
      imageUrl: '', 
      reheatingTips: tipsArray
    };

    // Optimistic
    setItems(prev => [...prev, newItem]);
    
    // DB - Map to snake_case columns
    await supabase.from('freezer_items').insert({
      id: newItem.id,
      name: newItem.name,
      description: newItem.description,
      quantity: newItem.quantity,
      image_url: newItem.imageUrl,
      reheating_tips: newItem.reheatingTips
    });
    
    // Reset and close
    setNewItemName('');
    setNewItemDesc('');
    setNewItemQuantity(1);
    setNewItemTips('');
    setIsAddModalOpen(false);
  };

  return (
    <div className="min-h-screen pb-24 bg-bg-light dark:bg-zinc-900 text-text-main dark:text-white transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-bg-light/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm opacity-0 pointer-events-none">
          <span className="material-symbols-outlined text-text-main dark:text-white">chevron_left</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Mi Freezer</h1>
        <button 
          onClick={onOpenSettings}
          className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
        >
          <span className="material-symbols-outlined text-text-main dark:text-white">menu</span>
        </button>
      </header>

      <main className="px-4 pt-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white">Stock Congelado</h2>
          <p className="text-text-muted dark:text-text-muted/80 text-sm mt-1 font-medium">Gestiona tu banco de alimentos.</p>
        </div>

        <div className="space-y-4">
          {items.length === 0 && (
            <div className="text-center py-10 opacity-50 flex flex-col items-center">
              <span className="material-symbols-outlined text-5xl mb-2 text-primary-dark">kitchen</span>
              <p className="text-zinc-500 font-medium">Tu freezer está vacío</p>
            </div>
          )}
          
          {items.map((item) => (
            <div key={item.id} className="relative bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border border-primary/10 dark:border-primary/5 flex flex-col gap-3 group animate-in slide-in-from-bottom-2 duration-300">
              {/* Delete Button */}
              <button 
                onClick={() => setItemToDelete(item.id)}
                className="absolute top-2 right-2 text-zinc-300 hover:text-red-400 p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors z-10"
              >
                <span className="material-symbols-outlined text-lg">delete</span>
              </button>

              <div className="flex items-center justify-between pr-8">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full overflow-hidden bg-primary/20 flex-shrink-0 border-2 border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-dark text-2xl">ac_unit</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-text-main dark:text-white">{item.name}</h3>
                    <p className="text-xs text-text-muted dark:text-text-muted/80 font-medium">{item.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-1">
                 <button 
                  onClick={() => setSelectedItemForTips(item)}
                  className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#578e76] dark:text-[#a8e5cc] uppercase tracking-widest px-2 py-1 rounded-lg hover:bg-[#578e76]/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">info</span>
                  Tips
                </button>

                <div className="flex items-center bg-bg-light dark:bg-zinc-700 rounded-full p-1 border border-primary/20 shadow-inner">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="size-8 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-zinc-600 transition-colors text-zinc-600 dark:text-zinc-300 active:scale-90"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="w-8 text-center font-bold text-sm text-text-main dark:text-white">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="size-8 rounded-full flex items-center justify-center bg-white dark:bg-zinc-600 text-primary-dark dark:text-primary shadow-sm border border-zinc-100 dark:border-zinc-500 active:scale-90"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="w-full mt-8 bg-white dark:bg-zinc-800 border-2 border-dashed border-primary/50 text-text-muted dark:text-text-muted/80 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 dark:hover:bg-primary/5 transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined">add_circle</span>
          Agregar Item
        </button>
      </main>

      {/* Delete Confirmation Modal */}
      {itemToDelete && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-200">
           <div 
             className="absolute inset-0 bg-black/40 backdrop-blur-sm"
             onClick={() => setItemToDelete(null)}
           ></div>
           <div className="bg-white dark:bg-zinc-800 w-full max-w-xs rounded-2xl shadow-2xl p-6 relative z-10 animate-in zoom-in-95 duration-200">
             <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center mb-4 mx-auto">
               <span className="material-symbols-outlined text-2xl">delete</span>
             </div>
             <h3 className="text-lg font-bold text-center text-text-main dark:text-white mb-2">¿Eliminar del freezer?</h3>
             <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
               ¿Ya consumiste o descartaste este item?
             </p>
             <div className="flex gap-3">
               <button 
                 onClick={() => setItemToDelete(null)}
                 className="flex-1 py-3 text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-zinc-700 rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
               >
                 Cancelar
               </button>
               <button 
                 onClick={confirmDelete}
                 className="flex-1 py-3 text-sm font-bold text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-200 dark:shadow-none"
               >
                 Sí, eliminar
               </button>
             </div>
           </div>
         </div>
      )}

      {/* Add Item Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          ></div>
          <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-2xl shadow-2xl p-6 relative z-10 border border-primary/20 animate-in slide-in-from-bottom-10 duration-300">
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 dark:bg-zinc-700 rounded-full"></div>
             
             <div className="flex justify-between items-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-text-main dark:text-white">Nuevo Congelado</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="size-8 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                   <span className="material-symbols-outlined text-sm">close</span>
                </button>
             </div>

             <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Nombre</label>
                  <input 
                    type="text" 
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Ej. Salsa de Tomate"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 dark:text-white border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 rounded-xl px-4 py-3 text-sm font-medium transition-all outline-none"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                     <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Detalle / Fecha</label>
                     <input 
                        type="text" 
                        value={newItemDesc}
                        onChange={(e) => setNewItemDesc(e.target.value)}
                        placeholder="Ej. Sobras domingo"
                        className="w-full bg-zinc-50 dark:bg-zinc-800 dark:text-white border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 rounded-xl px-4 py-3 text-sm font-medium transition-all outline-none"
                      />
                  </div>
                  <div className="w-24">
                     <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Cant.</label>
                     <input 
                        type="number" 
                        min="1"
                        value={newItemQuantity}
                        onChange={(e) => setNewItemQuantity(parseInt(e.target.value) || 1)}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 dark:text-white border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 rounded-xl px-4 py-3 text-sm font-medium text-center transition-all outline-none"
                      />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">Tips de Recalentado</label>
                   <textarea 
                      value={newItemTips}
                      onChange={(e) => setNewItemTips(e.target.value)}
                      placeholder="Ej. 1 min microondas (Enter para nuevo tip)"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 dark:text-white border-transparent focus:border-primary focus:bg-white dark:focus:bg-zinc-800 focus:ring-0 rounded-xl px-4 py-3 text-sm font-medium transition-all min-h-[80px] resize-none outline-none"
                   />
                </div>

                <button 
                  onClick={handleAddItem}
                  disabled={!newItemName.trim()}
                  className={`w-full py-4 rounded-xl font-bold text-base shadow-lg mt-2 active:scale-95 transition-all ${
                    newItemName.trim() 
                      ? 'bg-primary text-text-main shadow-primary/20 hover:bg-primary-dark' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-300 dark:text-zinc-600 shadow-none cursor-not-allowed'
                  }`}
                >
                  Guardar en Freezer
                </button>
             </div>
          </div>
        </div>
      )}

      {/* Tips Modal (Existing) */}
      {selectedItemForTips && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-4 animate-in fade-in">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedItemForTips(null)}
          ></div>
          <div className="bg-white dark:bg-zinc-900 w-full max-w-md rounded-2xl shadow-2xl p-6 relative z-10 border border-primary/20 animate-in slide-in-from-bottom-10 duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 dark:bg-zinc-700 rounded-full"></div>
            <div className="flex justify-between items-start mb-6 pt-2">
              <h4 className="text-xl font-bold dark:text-white">Tips de Recalentado</h4>
              <button onClick={() => setSelectedItemForTips(null)} className="text-gray-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-6">
              {selectedItemForTips.reheatingTips && selectedItemForTips.reheatingTips.length > 0 ? (
                selectedItemForTips.reheatingTips.map((tip, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-primary/20 p-3 rounded-full h-fit shrink-0">
                      <span className="material-symbols-outlined text-[#578e76]">
                        {idx === 0 ? 'microwave' : idx === 1 ? 'oven_gen' : 'timer'}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-text-main dark:text-white">{tip.split(':')[0]}</p>
                      {tip.includes(':') && <p className="text-sm text-gray-600 dark:text-gray-400">{tip.split(':')[1]}</p>}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic text-center">No hay tips registrados para este item.</p>
              )}
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
