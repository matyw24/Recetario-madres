
import React, { useState, useMemo, useEffect } from 'react';
import { ViewType, Ingredient, FreezerItem, ShoppingItem, Recipe } from './types';
import { INITIAL_INGREDIENTS, INITIAL_RECIPES } from './constants';
import PantryView from './components/PantryView';
import FreezerView from './components/FreezerView';
import ShoppingListView from './components/ShoppingListView';
import RecipeHomeView from './components/RecipeHomeView';
import SettingsMenu from './components/SettingsMenu';
import AuthView from './components/AuthView';
import { supabase } from './supabaseClient';
import { Session } from '@supabase/supabase-js';

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

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

  const toggleIngredient = (id: string) => {
    setIngredients(prev => prev.map(ing => 
      ing.id === id ? { ...ing, selected: !ing.selected } : ing
    ));
  };

  const clearPantrySelection = () => {
    setIngredients(prev => prev.map(ing => ({ ...ing, selected: false })));
  };

  const addToShoppingList = async (items: string[]) => {
    const newItems: ShoppingItem[] = items.map((item, index) => ({
      id: `shop_${Date.now()}_${index}`,
      name: item,
      category: 'PASILLOS', 
      checked: false
    }));

    setShoppingList(prev => [...prev, ...newItems]);
    await supabase.from('shopping_items').insert(newItems);
  };

  const handleLogout = async () => {
    setIsSettingsOpen(false);
    await supabase.auth.signOut();
  };

  const renderView = () => {
    switch (currentView) {
      case 'pantry':
        return <PantryView 
          ingredients={ingredients} 
          onToggle={toggleIngredient} 
          selectedCount={selectedIngredientsCount}
          onSearch={() => setCurrentView('home')}
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
      case 'home':
      default:
        return <RecipeHomeView 
          recipes={recipes} 
          onAddToShoppingList={addToShoppingList}
          selectedPantryIngredients={selectedIngredientNames}
          onClearPantryFilter={clearPantrySelection}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />;
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

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-t border-zinc-50 dark:border-zinc-800 px-8 py-5 flex justify-between items-center z-50 transition-colors duration-300">
        <NavButton 
          active={currentView === 'home'} 
          icon="restaurant" 
          label="RECETAS" 
          onClick={() => setCurrentView('home')} 
        />
        <NavButton 
          active={currentView === 'pantry'} 
          icon="inventory_2" 
          label="DESPENSA" 
          onClick={() => setCurrentView('pantry')} 
        />
        <NavButton 
          active={currentView === 'shopping'} 
          icon="shopping_cart" 
          label="COMPRAS" 
          onClick={() => setCurrentView('shopping')} 
        />
        <NavButton 
          active={currentView === 'freezer'} 
          icon="kitchen" 
          label="FREEZER" 
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
    className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-zinc-900 dark:text-white font-black' : 'text-zinc-300 dark:text-zinc-600'}`}
  >
    <span className={`material-symbols-outlined text-[26px] ${active ? 'fill-1' : ''}`} style={{ fontWeight: active ? '700' : '400' }}>{icon}</span>
    <span className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-[#578e76] dark:text-[#a8e5cc]' : 'text-zinc-300 dark:text-zinc-600'}`}>{label}</span>
  </button>
);

export default App;
