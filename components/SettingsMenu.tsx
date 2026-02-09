
import React from 'react';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ isOpen, onClose, isDarkMode, toggleDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div className="relative w-3/4 max-w-xs bg-white dark:bg-zinc-900 h-full shadow-2xl p-6 animate-in slide-in-from-right duration-300 flex flex-col">
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
           <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="flex flex-col items-center mt-10 mb-8">
           <div className="size-20 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4 ring-4 ring-white dark:ring-zinc-800 shadow-lg">
              <span className="material-symbols-outlined text-4xl text-pink-500">face_3</span>
           </div>
           <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Mamá en Apuros</h2>
           <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Premium Member</p>
        </div>

        <div className="space-y-3 flex-1">
           <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                 <div className="size-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                     <span className="material-symbols-outlined text-lg">dark_mode</span>
                 </div>
                 <span className="font-bold text-sm text-zinc-700 dark:text-zinc-200">Modo Oscuro</span>
              </div>
              <button 
                onClick={toggleDarkMode}
                className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${isDarkMode ? 'bg-indigo-500' : 'bg-zinc-200 dark:bg-zinc-700'}`}
              >
                <div className={`size-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : ''}`}></div>
              </button>
           </div>
           
           <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-200 group">
              <div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">notifications</span>
              </div>
              <span className="font-bold text-sm">Notificaciones</span>
           </button>
           
           <button className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-200 group">
              <div className="size-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg">settings</span>
              </div>
              <span className="font-bold text-sm">Configuración</span>
           </button>
        </div>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
           <button className="w-full py-3.5 text-red-500 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">logout</span>
              Cerrar Sesión
           </button>
           <p className="text-center text-[10px] text-zinc-400 mt-4 uppercase tracking-widest">Version 2.4.0</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
