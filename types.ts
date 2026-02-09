
export type ViewType = 'home' | 'pantry' | 'shopping' | 'freezer';

export type AgeCategory = '6m' | '7-9m' | '10-12m' | '1-2a' | 'Snacks';

export interface Ingredient {
  id: string;
  name: string;
  icon: string;
  selected?: boolean;
}

export interface FreezerItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
  reheatingTips: string[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: 'FRUTERÍA' | 'LÁCTEOS' | 'PASILLOS' | 'CARNICERÍA';
  checked: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  time: string;
  difficulty: 'Baja' | 'Media' | 'Dificil';
  ageCategory: AgeCategory;
  tags: string[];
  imageUrl: string;
  isFavorite?: boolean;
  isQuick?: boolean;
}
