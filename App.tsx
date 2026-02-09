
import React, { useState, useMemo } from 'react';
import { ViewType, Ingredient, FreezerItem, ShoppingItem, Recipe } from './types';
import { INITIAL_INGREDIENTS, INITIAL_FREEZER_ITEMS, INITIAL_SHOPPING_LIST, INITIAL_RECIPES } from './constants';
import PantryView from './components/PantryView';
import FreezerView from './components/FreezerView';
import ShoppingListView from './components/ShoppingListView';
import RecipeHomeView from './components/RecipeHomeView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [ingredients, setIngredients] = useState<Ingredient[]>(INITIAL_INGREDIENTS);
  const [freezerItems, setFreezerItems] = useState<FreezerItem[]>(INITIAL_FREEZER_ITEMS);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(INITIAL_SHOPPING_LIST);
  const [recipes] = useState<Recipe[]>(INITIAL_RECIPES);

  const toggleIngredient = (id: string) => {
    setIngredients(prev => prev.map(ing => 
      ing.id === id ? { ...ing, selected: !ing.selected } : ing
    ));
  };

  const selectedIngredientsCount = useMemo(() => ingredients.filter(i => i.selected).length, [ingredients]);

  const renderView = () => {
    switch (currentView) {
      case 'pantry':
        return <PantryView 
          ingredients={ingredients} 
          onToggle={toggleIngredient} 
          selectedCount={selectedIngredientsCount}
          onSearch={() => setCurrentView('home')} 
        />;
      case 'freezer':
        return <FreezerView 
          items={freezerItems} 
          setItems={setFreezerItems} 
        />;
      case 'shopping':
        return <ShoppingListView 
          items={shoppingList} 
          setItems={setShoppingList} 
        />;
      case 'home':
      default:
        return <RecipeHomeView recipes={recipes} />;
    }
  };

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white relative overflow-x-hidden pb-24">
      {renderView()}

      {/* Navigation Bar matching the screenshot style */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-zinc-50 px-8 py-5 flex justify-between items-center z-50">
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
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-zinc-200 rounded-full z-[60]"></div>
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
    className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-zinc-900 font-black' : 'text-zinc-300'}`}
  >
    <span className={`material-symbols-outlined text-[26px] ${active ? 'fill-1' : ''}`} style={{ fontWeight: active ? '700' : '400' }}>{icon}</span>
    <span className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-[#578e76]' : 'text-zinc-300'}`}>{label}</span>
  </button>
);

export default App;
