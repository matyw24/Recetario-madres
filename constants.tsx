
import { Ingredient, FreezerItem, ShoppingItem, Recipe } from './types';

export const INITIAL_INGREDIENTS: Ingredient[] = [
  { id: '1', name: 'Avena', icon: 'bakery_dining' },
  { id: '2', name: 'Plátano', icon: 'nutrition' },
  { id: '3', name: 'Zanahoria', icon: 'eco' },
  { id: '4', name: 'Huevo', icon: 'egg' },
  { id: '5', name: 'Pollo', icon: 'dinner_dining' },
  { id: '6', name: 'Papa', icon: 'fiber_manual_record' },
  { id: '7', name: 'Mango', icon: 'nutrition' },
  { id: '8', name: 'Brócoli', icon: 'eco' },
  { id: '9', name: 'Lentejas', icon: 'grain' },
  { id: '10', name: 'Yogurt', icon: 'icecream' },
];

export const INITIAL_FREEZER_ITEMS: FreezerItem[] = [
  {
    id: 'f1',
    name: 'Muffins de Espinaca',
    description: 'Etapa 6 meses+',
    quantity: 6,
    imageUrl: './assets/recipes/muffins-espinaca.jpg',
    reheatingTips: [
      'Microondas: 30-45 segundos.',
      'Sartén: A fuego bajo tapado por 2 min.'
    ]
  }
];

export const INITIAL_SHOPPING_LIST: ShoppingItem[] = [
  { id: 's1', name: 'Dátiles sin hueso', category: 'PASILLOS', checked: false },
  { id: 's2', name: 'Harina de Almendras', category: 'PASILLOS', checked: false },
  { id: 's3', name: 'Kiwi maduro', category: 'FRUTERÍA', checked: true },
];

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: 'Mi primera avena',
    description: 'Avena suave con plátano y un toque de canela.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: '6m',
    tags: ['INICIO', 'SUAVE'],
    imageUrl: 'https://lh3.googleusercontent.com/gg-dl/AOI_d_-e-P-LTB_oYqwQEeoP3mX2ct3AzZX9GOkOinqNkjBDgCfW1dTHPz3wZ7PPWw2kASJs9j97UX5dQZllbVcJ4TQ0BdFkxpMPyJMOMteHt4365GY6e1Xyvus7ENmsT5vIXRQ7AY1u8c4bN5F41CQQ3Mk1cGvwJ3gfjtu4M5KXAsyKkJiZ=s1024-rj?authuser=1',
    isQuick: true,
  },
  {
    id: 'r2',
    title: 'Hamburguesa de Ternera y Zapallo',
    description: 'Proteína suave y fácil de digerir. Textura ideal para los 7 meses.',
    time: '20 min',
    difficulty: 'Baja',
    ageCategory: '7-9m',
    tags: ['HIERRO', 'PROTEÍNA'],
    imageUrl: './assets/recipes/hamburguesa-ternera.jpg',
  },
  {
    id: 'r3',
    title: 'Tortillas de Zanahoria',
    description: 'Coloridas y llenas de fibra. Fáciles de agarrar por el bebé.',
    time: '30 min',
    difficulty: 'Media',
    ageCategory: '6m',
    tags: ['BLW', 'ALTA FIBRA'],
    imageUrl: './assets/recipes/tortillas-zanahoria.jpg',
  },
  {
    id: 's_01',
    title: 'Donas de Manzana',
    description: 'Rodajas de manzana con mantequilla de nueces y toppings divertidos.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'EXPRESS'],
    imageUrl: './assets/recipes/donas-manzana.jpg'
  },
  {
    id: 's_02',
    title: 'Paletas Fresakiwi',
    description: 'Mango licuado con yogurt y trozos de kiwi. Refrescante y natural.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRÍO', 'VITAMINAS'],
    imageUrl: './assets/recipes/paletas-fresakiwi.jpg'
  },
  {
    id: 's_03',
    title: 'Coquiplatano',
    description: 'Bolitas de plátano maduro con coco al horno. Dulce y saludable.',
    time: '20 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['TROPICAL', 'SIN AZÚCAR'],
    imageUrl: './assets/recipes/coquiplatano.jpg'
  },
  {
    id: 's_04',
    title: 'Bites de Pollo y Palta',
    description: 'Mezcla cremosa de pollo y aguacate en pequeños bocados.',
    time: '15 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'GRASAS'],
    imageUrl: './assets/recipes/bites-pollo.jpg'
  },
  {
    id: 's_05',
    title: 'Yogurt Bark',
    description: 'Corteza de yogurt congelada con frutos rojos frescos.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['CALCIO', 'SNACK'],
    imageUrl: './assets/recipes/yogurt-bark.jpg'
  },
  {
    id: 'r_10',
    title: 'Salmón en salsa de coco',
    description: 'Filete de salmón suave con una salsa ligera de coco y yogurt.',
    time: '40 min',
    difficulty: 'Media',
    ageCategory: '10-12m',
    tags: ['OMEGA 3', 'GOURMET'],
    imageUrl: './assets/recipes/salmon-coco.jpg'
  },
  {
    id: 'r_11',
    title: 'Albóndigas de Berenjena',
    description: 'Berenjena asada con tomate seco y ajo. Sabores mediterráneos.',
    time: '45 min',
    difficulty: 'Media',
    ageCategory: '1-2a',
    tags: ['VEGGIE', 'SABROSO'],
    imageUrl: './assets/recipes/albondigas-berenjena.jpg'
  },
  {
    id: 's_20',
    title: 'Galletas de Quinoa',
    description: 'Quinoa cocida con plátano maduro al horno. Superalimento portátil.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FIBRA', 'SALUDABLE'],
    imageUrl: './assets/recipes/galletas-quinoa.jpg'
  }
];
