
import React, { useState, useMemo, useEffect } from 'react';
import { ViewType, Ingredient, FreezerItem, ShoppingItem, Recipe } from './types';
import { INITIAL_INGREDIENTS, INITIAL_FREEZER_ITEMS, INITIAL_SHOPPING_LIST, INITIAL_RECIPES } from './constants';
import PantryView from './components/PantryView';
import FreezerView from './components/FreezerView';
import ShoppingListView from './components/ShoppingListView';
import RecipeHomeView from './components/RecipeHomeView';
import SettingsMenu from './components/SettingsMenu';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [ingredients, setIngredients] = useState<Ingredient[]>(INITIAL_INGREDIENTS);
  const [freezerItems, setFreezerItems] = useState<FreezerItem[]>(INITIAL_FREEZER_ITEMS);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(INITIAL_SHOPPING_LIST);
  const [recipes] = useState<Recipe[]>(INITIAL_RECIPES);
  
  // Settings & Theme State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleIngredient = (id: string) => {
    setIngredients(prev => prev.map(ing => 
      ing.id === id ? { ...ing, selected: !ing.selected } : ing
    ));
  };

  const clearPantrySelection = () => {
    setIngredients(prev => prev.map(ing => ({ ...ing, selected: false })));
  };

  const addToShoppingList = (items: string[]) => {
    const newItems: ShoppingItem[] = items.map((item, index) => ({
      id: `shop_${Date.now()}_${index}`,
      name: item,
      category: 'PASILLOS', // Default category for quick add
      checked: false
    }));
    setShoppingList(prev => [...prev, ...newItems]);
  };

  const selectedIngredientsCount = useMemo(() => ingredients.filter(i => i.selected).length, [ingredients]);
  
  // Extract names of selected ingredients to pass to the recipe filter
  const selectedIngredientNames = useMemo(() => 
    ingredients.filter(i => i.selected).map(i => i.name), 
  [ingredients]);

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
      />

      {/* Navigation Bar matching the screenshot style */}
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
