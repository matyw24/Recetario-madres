
import React, { useState, useMemo, useEffect } from 'react';
import { ViewType, Ingredient, FreezerItem, ShoppingItem, Recipe } from './types';
import { INITIAL_INGREDIENTS, INITIAL_RECIPES } from './constants';
import PantryView from './components/PantryView';
import FreezerView from './components/FreezerView';
import ShoppingListView from './components/ShoppingListView';
import RecipeHomeView from './components/RecipeHomeView';
import HomeDashboardView from './components/HomeDashboardView';
import SettingsMenu from './components/SettingsMenu';
import AuthView from './components/AuthView';
import { supabase } from './supabaseClient';
import { Session } from '@supabase/supabase-js';

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

  // Default view is now 'home' (The new dashboard), recipes is separate
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [ingredients, setIngredients] = useState<Ingredient[]>(INITIAL_INGREDIENTS);
  const [freezerItems, setFreezerItems] = useState<FreezerItem[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  
  // Recipes State (Solo locales)
  const [recipes, setRecipes] = useState<Recipe[]>(INITIAL_RECIPES);
  
  // Settings & Theme State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Session Management ---
  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingSession(false);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoadingSession(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // --- Load Data from Supabase (Only if session exists) ---
  useEffect(() => {
    if (!session) return;

    const loadData = async () => {
      // 1. Load Freezer
      const { data: freezerData } = await supabase.from('freezer_items').select('*');
      if (freezerData) {
        const mappedFreezer: FreezerItem[] = freezerData.map((f: any) => ({
          id: f.id,
          name: f.name,
          description: f.description,
          quantity: f.quantity,
          imageUrl: f.image_url || '',
          reheatingTips: f.reheating_tips || []
        }));
        setFreezerItems(mappedFreezer);
      }

      // 2. Load Shopping List
      const { data: shoppingData } = await supabase.from('shopping_items').select('*');
      if (shoppingData) {
        setShoppingList(shoppingData);
      }
    };

    loadData();
  }, [session]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // --- HOOKS MUST BE BEFORE EARLY RETURNS ---
  const selectedIngredientsCount = useMemo(() => ingredients.filter(i => i.selected).length, [ingredients]);
  
  const selectedIngredientNames = useMemo(() => 
    ingredients.filter(i => i.selected).map(i => i.name), 
  [ingredients]);

  // --- Auth Guard ---
  if (loadingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f8f7] dark:bg-zinc-900">
        <span className="material-symbols-outlined text-4xl text-[#c1f0db] animate-spin">progress_activity</span>
      </div>
    );
  }

  if (!session) {
    return <AuthView />;
  }

  // --- Main App Logic ---

  const toggleIngredient = async (id: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Debes iniciar sesión para guardar');
      return;
    }

    const ingredient = ingredients.find(i => i.id === id);
    if (!ingredient) return;

    const isSelected = !ingredient.selected;

    setIngredients(prev => prev.map(ing => 
      ing.id === id ? { ...ing, selected: isSelected } : ing
    ));

    if (isSelected) {
      const nuevoItem = { item_id: id, user_id: user.id };
      console.log("Intentando guardar:", nuevoItem);
      await supabase.from('pantry').insert(nuevoItem);
    } else {
      await supabase.from('pantry').delete().eq('item_id', id).eq('user_id', user.id);
    }
  };

  const clearPantrySelection = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Debes iniciar sesión para guardar');
      return;
    }

    setIngredients(prev => prev.map(ing => ({ ...ing, selected: false })));
    await supabase.from('pantry').delete().eq('user_id', user.id);
  };

  const addToShoppingList = async (items: string[]) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('Debes iniciar sesión para guardar');
      return;
    }

    const newItems: ShoppingItem[] = items.map((item, index) => ({
      id: `shop_${Date.now()}_${index}`,
      name: item,
      category: 'PASILLOS', 
      checked: false,
      user_id: user.id
    }));

    setShoppingList(prev => [...prev, ...newItems]);
    console.log("Intentando guardar:", newItems);
    await supabase.from('shopping_items').insert(newItems);
  };

  const handleLogout = async () => {
    setIsSettingsOpen(false);
    await supabase.auth.signOut();
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeDashboardView 
          onNavigate={(view) => setCurrentView(view)} 
          onOpenSettings={() => setIsSettingsOpen(true)}
        />;
      case 'recipes':
        return <RecipeHomeView 
          recipes={recipes} 
          onAddToShoppingList={addToShoppingList}
          selectedPantryIngredients={selectedIngredientNames}
          onClearPantryFilter={clearPantrySelection}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />;
      case 'pantry':
        return <PantryView 
          ingredients={ingredients} 
          onToggle={toggleIngredient} 
          selectedCount={selectedIngredientsCount}
          onSearch={() => setCurrentView('recipes')}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />;
      case 'freezer':
        return <FreezerView 
          items={freezerItems} 
          setItems={setFreezerItems} 
          onOpenSettings={() => setIsSettingsOpen(true)}
        />;
      case 'shopping':
        return <ShoppingListView 
          items={shoppingList} 
          setItems={setShoppingList} 
          onOpenSettings={() => setIsSettingsOpen(true)}
        />;
      default:
        return null;
    }
  };

  return (
    <div className={`max-w-[430px] mx-auto min-h-screen relative overflow-x-hidden pb-24 bg-white dark:bg-zinc-900 transition-colors duration-300`}>
      {renderView()}

      <SettingsMenu 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onLogout={handleLogout}
        userEmail={session.user.email}
      />

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-t border-zinc-50 dark:border-zinc-800 px-4 py-3 flex justify-between items-end z-50 transition-colors duration-300">
        <NavButton 
          active={currentView === 'home'} 
          icon="home" 
          label="Inicio" 
          onClick={() => setCurrentView('home')} 
        />
        <NavButton 
          active={currentView === 'recipes'} 
          icon="restaurant" 
          label="Recetas" 
          onClick={() => setCurrentView('recipes')} 
        />
        <NavButton 
          active={currentView === 'pantry'} 
          icon="inventory_2" 
          label="Despensa" 
          onClick={() => setCurrentView('pantry')} 
        />
        <NavButton 
          active={currentView === 'shopping'} 
          icon="shopping_cart" 
          label="Compras" 
          onClick={() => setCurrentView('shopping')} 
        />
        <NavButton 
          active={currentView === 'freezer'} 
          icon="kitchen" 
          label="Freezer" 
          onClick={() => setCurrentView('freezer')} 
        />
      </nav>

      {/* iOS Home Indicator */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full z-[60]"></div>
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ active, icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 min-w-[50px] transition-all ${active ? 'text-zinc-900 dark:text-white' : 'text-zinc-300 dark:text-zinc-600'}`}
  >
    <div className={`p-1 rounded-xl transition-all duration-300 ${active ? 'bg-[#c1f0db] dark:bg-[#578e76]/40 -translate-y-2' : ''}`}>
      <span className={`material-symbols-outlined text-[24px] ${active ? 'fill-1 text-[#101915] dark:text-[#c1f0db]' : ''}`} style={{ fontWeight: active ? '700' : '400' }}>{icon}</span>
    </div>
    <span className={`text-[9px] font-black uppercase tracking-wider transition-opacity duration-300 ${active ? 'opacity-100 text-[#578e76] dark:text-[#a8e5cc] -translate-y-1' : 'opacity-0 h-0 overflow-hidden'}`}>{label}</span>
  </button>
);

export default App;
