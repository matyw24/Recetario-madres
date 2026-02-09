
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthView: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup' | 'reset'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);

  // Función para traducir errores técnicos de Supabase a español amigable
  const translateError = (errorMsg: string) => {
    // Casos específicos del screenshot
    if (errorMsg.includes('Email not confirmed') || errorMsg.includes('email not confirmed')) {
      return 'Tu correo no ha sido confirmado. Revisa tu bandeja de entrada.';
    }
    if (errorMsg.includes('rate limit exceeded') || errorMsg.includes('Too many requests')) {
      return 'Has excedido el límite de intentos. Espera unos minutos.';
    }
    
    // Otros errores comunes
    if (errorMsg.includes('Invalid login credentials')) {
      return 'Credenciales inválidas. Verifica tu email y contraseña.';
    }
    if (errorMsg.includes('User already registered')) {
      return 'Ya existe una cuenta con este email.';
    }
    if (errorMsg.includes('Password should be at least')) {
      return 'La contraseña debe tener al menos 6 caracteres.';
    }
    
    // Fallback con mensaje limpio
    return errorMsg.length > 50 ? 'Ocurrió un error. Intenta nuevamente.' : errorMsg;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;

        if (data.session) {
           // Sesión iniciada automáticamente
        } else {
           setMessage('¡Cuenta creada! Revisa tu email para confirmar.');
           setMode('login');
        }
      } else if (mode === 'reset') {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: window.location.origin,
        });
        if (error) throw error;
        setMessage('Enlace de recuperación enviado.');
        setMode('login');
      }
    } catch (err: any) {
      setError(translateError(err.message || ''));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#f6f8f7] dark:bg-zinc-900 transition-colors duration-300">
      <div className="w-full max-w-sm bg-white dark:bg-zinc-800 rounded-[32px] shadow-xl p-8 animate-in zoom-in-95 duration-300">
        
        {/* Header / Logo Area */}
        <div className="flex flex-col items-center mb-6">
          <div className="size-20 rounded-[24px] bg-[#c1f0db] dark:bg-[#578e76]/30 flex items-center justify-center mb-4 shadow-lg shadow-[#c1f0db]/50 dark:shadow-none transform rotate-3">
             <span className="material-symbols-outlined text-4xl text-[#578e76] dark:text-[#a8e5cc]">restaurant_menu</span>
          </div>
          <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">MamiCook</h1>
          <p className="text-xs font-bold text-[#578e76] uppercase tracking-[0.2em] mt-1">Logística Nutricional</p>
        </div>

        {/* Error Message Style Matching Screenshot */}
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-100 flex gap-3 items-center animate-in fade-in slide-in-from-top-2">
            <span className="material-symbols-outlined text-red-500 text-xl shrink-0">error</span>
            <p className="text-xs font-semibold text-red-600 leading-tight">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {message && (
          <div className="mb-6 p-3 rounded-xl bg-green-50 border border-green-100 flex gap-3 items-center animate-in fade-in slide-in-from-top-2">
            <span className="material-symbols-outlined text-green-600 text-xl shrink-0">check_circle</span>
            <p className="text-xs font-semibold text-green-700 leading-tight">{message}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-5">
          <div>
            <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2 pl-1">Email</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">mail</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hola@mamicook.com"
                className="w-full bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none border border-transparent focus:border-[#c1f0db] focus:bg-white dark:focus:bg-black transition-all placeholder:text-zinc-300"
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div>
              <label className="block text-xs font-black text-zinc-400 uppercase tracking-widest mb-2 pl-1">Contraseña</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">lock</span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none border border-transparent focus:border-[#c1f0db] focus:bg-white dark:focus:bg-black transition-all placeholder:text-zinc-300"
                />
              </div>
            </div>
          )}

          {mode === 'login' && (
            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${rememberMe ? 'bg-[#578e76] border-[#578e76]' : 'border-zinc-300 bg-white dark:bg-zinc-700 dark:border-zinc-600'}`}>
                  {rememberMe && <span className="material-symbols-outlined text-white text-sm font-bold">check</span>}
                </div>
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} 
                />
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">Recordarme</span>
              </label>
              <button 
                type="button"
                onClick={() => { setMode('reset'); setError(null); }}
                className="text-xs font-bold text-[#578e76] hover:text-[#45725f] dark:text-[#a8e5cc] transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-[#c1f0db] hover:bg-[#a8e5cc] text-[#101915] font-black text-sm uppercase tracking-widest shadow-lg shadow-[#c1f0db]/30 dark:shadow-none transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
            ) : mode === 'login' ? (
              'INICIAR SESIÓN'
            ) : mode === 'signup' ? (
              'CREAR CUENTA'
            ) : (
              'ENVIAR ENLACE'
            )}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-4">
          {mode === 'login' ? (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              ¿No tienes cuenta?{' '}
              <button 
                onClick={() => { setMode('signup'); setError(null); }}
                className="font-bold text-[#578e76] dark:text-[#a8e5cc] hover:underline"
              >
                Regístrate
              </button>
            </p>
          ) : (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              ¿Ya tienes cuenta?{' '}
              <button 
                onClick={() => { setMode('login'); setError(null); }}
                className="font-bold text-[#578e76] dark:text-[#a8e5cc] hover:underline"
              >
                Inicia Sesión
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthView;
