
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLogout?: () => void;
  userEmail?: string;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ 
  isOpen, 
  onClose, 
  isDarkMode, 
  toggleDarkMode, 
  onLogout,
  userEmail 
}) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleFeedbackSubmit = async () => {
    if (!feedbackText.trim()) return;
    
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const newFeedback = {
        user_id: user?.id || null,
        email: userEmail || 'Invitado',
        content: feedbackText,
        created_at: new Date().toISOString()
      };

      await supabase.from('user_feedback').insert(newFeedback);
      
      setFeedbackText('');
      setIsFeedbackOpen(false);
      alert('¡Gracias por tu opinión! Nos ayuda mucho a mejorar.');
    } catch (error) {
      console.error('Error saving feedback:', error);
      alert('Hubo un error al enviar tu opinión. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Drawer */}
      <div className="relative w-3/4 max-w-xs bg-white dark:bg-zinc-900 h-full shadow-2xl p-6 animate-in slide-in-from-right duration-300 flex flex-col overflow-y-auto">
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
           <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium truncate max-w-[200px]">
             {userEmail || 'Invitado'}
           </p>
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

           <button 
             onClick={() => setIsFeedbackOpen(true)}
             className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-200 group"
           >
              <div className="size-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </div>
              <span className="font-bold text-sm">Danos tu opinión</span>
           </button>
        </div>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 mt-4">
           {onLogout && (
             <button 
              onClick={onLogout}
              className="w-full py-3.5 text-red-500 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
             >
                <span className="material-symbols-outlined text-lg">logout</span>
                Cerrar Sesión
             </button>
           )}
           <p className="text-center text-[10px] text-zinc-400 mt-4 uppercase tracking-widest">Version 2.4.0</p>
        </div>
      </div>

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsFeedbackOpen(false)}
          ></div>
          <div className="bg-white dark:bg-zinc-900 w-full max-w-sm rounded-2xl shadow-2xl p-6 relative z-10 animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsFeedbackOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="text-center mb-6">
              <div className="size-12 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">¿Qué te parece la app?</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Cuéntanos qué te gusta y qué podríamos mejorar para ayudarte más en tu día a día.
              </p>
            </div>

            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Escribe tu opinión o sugerencia aquí..."
              className="w-full h-32 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none mb-4"
            />

            <button
              onClick={handleFeedbackSubmit}
              disabled={isSubmitting || !feedbackText.trim()}
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                isSubmitting || !feedbackText.trim()
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
                  : 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/30'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar opinión'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
