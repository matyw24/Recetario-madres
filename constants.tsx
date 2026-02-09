
import { Ingredient, FreezerItem, ShoppingItem, Recipe } from './types';

export const INITIAL_INGREDIENTS: Ingredient[] = [
  // Verduras y Frutas
  { id: 'v1', name: 'Acelga', icon: 'nutrition' },
  { id: 'v2', name: 'Ajo', icon: 'eco' },
  { id: 'v3', name: 'Albahaca', icon: 'eco' },
  { id: 'v4', name: 'Apio', icon: 'nutrition' },
  { id: 'v5', name: 'Arvejas', icon: 'grain' },
  { id: 'v6', name: 'Batata', icon: 'nutrition' },
  { id: 'v7', name: 'Berenjena', icon: 'nutrition' },
  { id: 'v8', name: 'Brócoli', icon: 'eco' },
  { id: 'v9', name: 'Calabaza / Anco', icon: 'nutrition' },
  { id: 'v10', name: 'Cebolla', icon: 'nutrition' },
  { id: 'v11', name: 'Cebolla de Verdeo', icon: 'nutrition' },
  { id: 'v12', name: 'Champiñones', icon: 'nutrition' },
  { id: 'v13', name: 'Choclo', icon: 'grain' },
  { id: 'v14', name: 'Coliflor', icon: 'eco' },
  { id: 'v15', name: 'Espinaca', icon: 'eco' },
  { id: 'v16', name: 'Lechuga', icon: 'nutrition' },
  { id: 'v17', name: 'Limón', icon: 'nutrition' },
  { id: 'v18', name: 'Mandarina', icon: 'nutrition' },
  { id: 'v19', name: 'Manzana', icon: 'nutrition' },
  { id: 'v20', name: 'Morrón Rojo', icon: 'nutrition' },
  { id: 'v21', name: 'Morrón Verde', icon: 'nutrition' },
  { id: 'v22', name: 'Naranja', icon: 'nutrition' },
  { id: 'v23', name: 'Palta', icon: 'nutrition' },
  { id: 'v24', name: 'Papa', icon: 'fiber_manual_record' },
  { id: 'v25', name: 'Pepino', icon: 'nutrition' },
  { id: 'v26', name: 'Perejil', icon: 'eco' },
  { id: 'v27', name: 'Plátano / Banana', icon: 'nutrition' },
  { id: 'v28', name: 'Puerro', icon: 'nutrition' },
  { id: 'v29', name: 'Remolacha', icon: 'nutrition' },
  { id: 'v30', name: 'Repollo', icon: 'nutrition' },
  { id: 'v31', name: 'Tomate', icon: 'nutrition' },
  { id: 'v32', name: 'Zanahoria', icon: 'nutrition' },
  { id: 'v33', name: 'Zapallito Verde', icon: 'nutrition' },
  { id: 'v34', name: 'Zucchini', icon: 'nutrition' },

  // Carnes y Proteínas
  { id: 'p1', name: 'Atún', icon: 'set_meal' },
  { id: 'p2', name: 'Bife de Chorizo', icon: 'dinner_dining' },
  { id: 'p3', name: 'Carne Picada', icon: 'dinner_dining' },
  { id: 'p4', name: 'Cerdo / Bondiola', icon: 'dinner_dining' },
  { id: 'p5', name: 'Huevo', icon: 'egg' },
  { id: 'p6', name: 'Jamón Cocido', icon: 'dinner_dining' },
  { id: 'p7', name: 'Merluza', icon: 'set_meal' },
  { id: 'p8', name: 'Milanesas', icon: 'dinner_dining' },
  { id: 'p9', name: 'Pollo (Pechuga)', icon: 'dinner_dining' },
  { id: 'p10', name: 'Pollo (Pata-Muslo)', icon: 'dinner_dining' },
  { id: 'p11', name: 'Roast Beef / Paleta', icon: 'dinner_dining' },
  { id: 'p12', name: 'Salmón', icon: 'set_meal' },

  // Lácteos
  { id: 'd1', name: 'Crema de Leche', icon: 'icecream' },
  { id: 'd2', name: 'Dulce de Leche', icon: 'cookie' },
  { id: 'd3', name: 'Leche', icon: 'local_drink' },
  { id: 'd4', name: 'Manteca', icon: 'icecream' },
  { id: 'd5', name: 'Queso Crema', icon: 'icecream' },
  { id: 'd6', name: 'Queso Cremoso', icon: 'cheese' },
  { id: 'd7', name: 'Queso Rallado', icon: 'cheese' },
  { id: 'd8', name: 'Ricota', icon: 'cheese' },
  { id: 'd9', name: 'Yogurt', icon: 'icecream' },

  // Almacén y Granos
  { id: 'a1', name: 'Aceite', icon: 'oil_barrel' },
  { id: 'a2', name: 'Arroz', icon: 'grain' },
  { id: 'a3', name: 'Avena', icon: 'bakery_dining' },
  { id: 'a4', name: 'Azúcar', icon: 'cookie' },
  { id: 'a5', name: 'Cacao', icon: 'cookie' },
  { id: 'a6', name: 'Fideos / Pasta', icon: 'ramen_dining' },
  { id: 'a7', name: 'Garbanzos', icon: 'grain' },
  { id: 'a8', name: 'Harina 0000', icon: 'bakery_dining' },
  { id: 'a9', name: 'Harina Leudante', icon: 'bakery_dining' },
  { id: 'a10', name: 'Lentejas', icon: 'grain' },
  { id: 'a11', name: 'Pan Rallado', icon: 'bakery_dining' },
  { id: 'a12', name: 'Polenta', icon: 'grain' },
  { id: 'a13', name: 'Porotos', icon: 'grain' },
  { id: 'a14', name: 'Puré de Tomate', icon: 'soup_kitchen' },
  { id: 'a15', name: 'Quinoa', icon: 'grain' },
  { id: 'a16', name: 'Tapas de Empanada', icon: 'lunch_dining' },
  { id: 'a17', name: 'Tapas de Tarta', icon: 'lunch_dining' },
  { id: 'a18', name: 'Vinagre', icon: 'oil_barrel' },
  { id: 'a19', name: 'Yerba Mate', icon: 'local_cafe' },
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
  // --- EXISTING RECIPES ---
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
    ingredients: [
      '1/4 taza de avena en hojuelas',
      '1/2 taza de agua o leche materna',
      '1/2 plátano maduro',
      'Pizca de canela (opcional)'
    ],
    instructions: [
      'Tritura un poco la avena si las hojuelas son muy grandes.',
      'Cocina la avena con el agua a fuego medio hasta que espese (5 min).',
      'Machaca el plátano con un tenedor hasta hacerlo puré.',
      'Mezcla el plátano con la avena cocida.',
      'Espolvorea un poco de canela y sirve tibio.'
    ]
  },
  {
    id: 'r2',
    title: 'Hamburguesa de Ternera y Zapallo',
    description: 'Proteína suave y fácil de digerir. Textura ideal para los 7 meses.',
    time: '20 min',
    difficulty: 'Baja',
    ageCategory: '7-9m',
    tags: ['HIERRO', 'PROTEÍNA'],
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '100g de carne molida de ternera magra',
      '1/4 taza de zapallo rallado fino',
      '1 cucharadita de aceite de oliva',
      'Pizca de orégano'
    ],
    instructions: [
      'En un bowl, mezcla la carne molida con el zapallo rallado.',
      'Añade el orégano y mezcla bien con las manos.',
      'Forma pequeñas hamburguesas del tamaño de la palma de tu bebé.',
      'Calienta el aceite en una sartén antiadherente.',
      'Cocina las hamburguesas 4 minutos por lado o hasta que estén bien cocidas por dentro.',
      'Deja enfriar antes de ofrecer.'
    ]
  },
  {
    id: 'r3',
    title: 'Tortillas de Zanahoria',
    description: 'Coloridas y llenas de fibra. Fáciles de agarrar por el bebé.',
    time: '30 min',
    difficulty: 'Media',
    ageCategory: '6m',
    tags: ['BLW', 'ALTA FIBRA'],
    imageUrl: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 zanahoria grande rallada',
      '1 huevo',
      '2 cucharadas de harina de avena',
      '1 cucharadita de perejil picado'
    ],
    instructions: [
      'Ralla la zanahoria y exprime el exceso de agua con una toalla limpia.',
      'Bate el huevo en un bowl y agrega la zanahoria, la harina y el perejil.',
      'Mezcla hasta obtener una masa homogénea.',
      'Calienta una sartén con un poco de aceite.',
      'Vierte cucharadas de la mezcla y aplana ligeramente.',
      'Cocina 3 minutos por lado hasta que estén doradas.'
    ]
  },
  {
    id: 's_01',
    title: 'Donas de Manzana',
    description: 'Rodajas de manzana con mantequilla de nueces y toppings divertidos.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'EXPRESS'],
    imageUrl: 'https://images.unsplash.com/photo-1629143609802-b2512a537f52?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 manzana roja',
      '2 cucharadas de mantequilla de maní (sin azúcar)',
      '1 cucharadita de semillas de chía o cáñamo'
    ],
    instructions: [
      'Lava la manzana y quítale el corazón (centro).',
      'Corta la manzana en rodajas horizontales (forma de dona).',
      'Unta cada rodaja con mantequilla de maní.',
      'Espolvorea las semillas por encima.'
    ]
  },
  {
    id: 's_02',
    title: 'Paletas Fresakiwi',
    description: 'Mango licuado con yogurt y trozos de kiwi. Refrescante y natural.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRÍO', 'VITAMINAS'],
    imageUrl: 'https://images.unsplash.com/photo-1517424907994-6b2a4729c118?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 taza de mango picado',
      '1 taza de yogurt natural sin azúcar',
      '1 kiwi pelado y picado en trocitos pequeños'
    ],
    instructions: [
      'Licúa el mango con el yogurt hasta obtener una crema suave.',
      'Coloca los trocitos de kiwi en el fondo de los moldes para paletas.',
      'Vierte la mezcla de mango y yogurt en los moldes.',
      'Inserta los palitos y congela por al menos 4 horas.'
    ]
  },
  {
    id: 's_03',
    title: 'Coquiplatano',
    description: 'Bolitas de plátano maduro con coco al horno. Dulce y saludable.',
    time: '20 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['TROPICAL', 'SIN AZÚCAR'],
    imageUrl: 'https://images.unsplash.com/photo-1601342630310-80252668516d?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '2 plátanos maduros',
      '1/2 taza de coco rallado sin azúcar',
      'Canela al gusto'
    ],
    instructions: [
      'Precalienta el horno a 180°C.',
      'Machaca los plátanos hasta hacerlos puré.',
      'Mezcla con la mitad del coco rallado y la canela.',
      'Forma bolitas con las manos húmedas.',
      'Pasa las bolitas por el coco restante.',
      'Hornea por 15 minutos hasta que el coco dore.'
    ]
  },
  {
    id: 's_04',
    title: 'Bites de Pollo y Palta',
    description: 'Mezcla cremosa de pollo y aguacate en pequeños bocados.',
    time: '15 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'GRASAS'],
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1/2 pechuga de pollo cocida y desmenuzada',
      '1/2 palta (aguacate) madura',
      'Gotitas de limón',
      'Cilantro picado (opcional)'
    ],
    instructions: [
      'En un bowl, machaca la palta con el limón.',
      'Agrega el pollo desmenuzado y el cilantro.',
      'Mezcla bien hasta que todo esté integrado.',
      'Forma pequeñas bolitas o "bites".',
      'Sirve inmediatamente o refrigera por 20 min para que tomen firmeza.'
    ]
  },
  {
    id: 's_05',
    title: 'Yogurt Bark',
    description: 'Corteza de yogurt congelada con frutos rojos frescos.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['CALCIO', 'SNACK'],
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 taza de yogurt griego natural',
      '1/2 taza de frutos rojos picados (fresas, arándanos)',
      '1 cucharada de mantequilla de almendras (opcional)'
    ],
    instructions: [
      'Cubre una bandeja o plato con papel manteca.',
      'Esparce el yogurt formando una capa de medio centímetro de grosor.',
      'Agrega gotitas de mantequilla de almendras y haz remolinos con un palillo.',
      'Coloca los frutos rojos encima presionando ligeramente.',
      'Congela por 2 horas y rompe en trozos irregulares (cortezas).'
    ]
  },
  {
    id: 'r_10',
    title: 'Salmón en salsa de coco',
    description: 'Filete de salmón suave con una salsa ligera de coco y yogurt.',
    time: '40 min',
    difficulty: 'Media',
    ageCategory: '10-12m',
    tags: ['OMEGA 3', 'GOURMET'],
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 filete de salmón fresco',
      '1/4 taza de leche de coco',
      '1 cucharada de yogurt natural',
      'Ralladura de limón'
    ],
    instructions: [
      'Cocina el salmón al vapor o a la plancha hasta que esté tierno.',
      'En una olla pequeña, calienta la leche de coco suavemente.',
      'Retira del fuego y mezcla con el yogurt y la ralladura de limón.',
      'Desmenuza el salmón (revisando espinas) y báñalo con la salsa.',
      'Acompaña con arroz o vegetales al vapor.'
    ]
  },
  {
    id: 'r_11',
    title: 'Albóndigas de Berenjena',
    description: 'Berenjena asada con tomate seco y ajo. Sabores mediterráneos.',
    time: '45 min',
    difficulty: 'Media',
    ageCategory: '1-2a',
    tags: ['VEGGIE', 'SABROSO'],
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 berenjena mediana',
      '1 huevo',
      '1/2 taza de pan rallado',
      '1 diente de ajo picado',
      'Salsa de tomate casera'
    ],
    instructions: [
      'Asa la berenjena en el horno, pélala y pica la pulpa.',
      'Mezcla la pulpa de berenjena con el huevo, pan rallado y ajo.',
      'Forma albóndigas y hornéalas a 200°C por 20 minutos.',
      'Calienta la salsa de tomate y agrega las albóndigas cocidas.',
      'Cocina a fuego lento 5 minutos más para que tomen sabor.'
    ]
  },
  {
    id: 's_20',
    title: 'Galletas de Quinoa',
    description: 'Quinoa cocida con plátano maduro al horno. Superalimento portátil.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FIBRA', 'SALUDABLE'],
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
    ingredients: [
      '1 taza de quinoa cocida',
      '2 plátanos muy maduros',
      '1 cucharadita de vainilla'
    ],
    instructions: [
      'Precalienta el horno a 180°C.',
      'Machaca los plátanos en un bowl.',
      'Agrega la quinoa cocida y la vainilla. Mezcla bien.',
      'Coloca cucharadas de la mezcla en una bandeja con papel manteca.',
      'Dales forma redonda y hornea por 20-25 minutos hasta que doren.'
    ]
  },

  // --- NEW 50 SNACK RECIPES ---
  {
    id: 'snack_new_1',
    title: 'Rollitos de Jamón y Queso',
    description: 'Snack clásico, rápido y lleno de proteína para la lonchera.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['LONCHERA', 'PROTEÍNA'],
    imageUrl: 'https://images.unsplash.com/photo-1596910547037-846b1980329f?q=80&w=600&auto=format&fit=crop',
    ingredients: ['2 fetas de jamón cocido', '2 fetas de queso en barra', 'Queso crema (opcional)'],
    instructions: ['Extiende la feta de jamón.', 'Coloca el queso encima.', 'Enrolla firmemente y corta en bocados pequeños.']
  },
  {
    id: 'snack_new_2',
    title: 'Pinchos Caprese Mini',
    description: 'Coloridos y frescos. Ideales para que los niños coman tomate.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['VEGGIE', 'FRESCO'],
    imageUrl: 'https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tomates cherry', 'Bolitas de mozzarella (bocconcini)', 'Hojas de albahaca fresca'],
    instructions: ['Lava los tomates y la albahaca.', 'Inserta un tomate, una hoja de albahaca y una bolita de queso en un palillo corto.', 'Repite hasta terminar.']
  },
  {
    id: 'snack_new_3',
    title: 'Chips de Manzana',
    description: 'Crujientes rodajas de manzana horneadas. Sustituto saludable de papas fritas.',
    time: '45 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'CRUJIENTE'],
    imageUrl: 'https://images.unsplash.com/photo-1623592395697-3f33664d436d?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 manzana roja', 'Canela en polvo'],
    instructions: ['Corta la manzana en rodajas muy finas (mandolina es ideal).', 'Coloca en bandeja con papel manteca y espolvorea canela.', 'Hornea a temperatura muy baja (100°C) por 45-60 min hasta que sequen.']
  },
  {
    id: 'snack_new_4',
    title: 'Bastones de Zanahoria con Hummus',
    description: 'El dip perfecto para vegetales. Lleno de hierro y calcio.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['VEGGIE', 'DIP'],
    imageUrl: 'https://images.unsplash.com/photo-1637822521948-4cb98e470878?q=80&w=600&auto=format&fit=crop',
    ingredients: ['2 zanahorias', '1 taza de garbanzos cocidos', 'Jugo de limón', 'Aceite de oliva'],
    instructions: ['Corta las zanahorias en bastones.', 'Procesa los garbanzos con limón y aceite hasta lograr una pasta.', 'Sirve los bastones junto al hummus.']
  },
  {
    id: 'snack_new_5',
    title: 'Tortitas de Arroz con Palta',
    description: 'Base crujiente con grasas saludables. Listo en segundos.',
    time: '3 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['RÁPIDO', 'SALUDABLE'],
    imageUrl: 'https://images.unsplash.com/photo-1621257007727-4148003f9829?q=80&w=600&auto=format&fit=crop',
    ingredients: ['2 tortitas de arroz inflado', '1/2 palta madura', 'Semillas de sésamo'],
    instructions: ['Unta la palta sobre las tortitas.', 'Decora con semillas de sésamo por encima.']
  },
  {
    id: 'snack_new_6',
    title: 'Huevos de Codorniz',
    description: 'Divertidos por su tamaño pequeño, perfectos para manitos chicas.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'LONCHERA'],
    imageUrl: 'https://images.unsplash.com/photo-1563292787-814d42010839?q=80&w=600&auto=format&fit=crop',
    ingredients: ['6 huevos de codorniz', 'Agua'],
    instructions: ['Hierve los huevos por 4-5 minutos.', 'Enfría en agua helada y pélalos con cuidado.', 'Envía en un tupper pequeño.']
  },
  {
    id: 'snack_new_7',
    title: 'Barritas de Avena y Miel',
    description: 'Energía casera sin conservantes. Ideales para el recreo.',
    time: '25 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['CASERO', 'ENERGÍA'],
    imageUrl: 'https://images.unsplash.com/photo-1590483038663-8dc94129b057?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 taza de avena', '1/2 taza de miel (para +2 años)', 'Frutos secos picados'],
    instructions: ['Mezcla la avena y frutos secos.', 'Calienta la miel y vierte sobre la mezcla.', 'Prensa en un molde y refrigera antes de cortar en barras.']
  },
  {
    id: 'snack_new_8',
    title: 'Mini Sándwiches de Pepino',
    description: 'Frescos y crujientes, usando pepino como "pan".',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['VEGGIE', 'SIN HARINA'],
    imageUrl: 'https://images.unsplash.com/photo-1606101256038-d68a9f60b451?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 pepino grande', 'Queso crema', 'Jamon o pavo'],
    instructions: ['Corta el pepino en rodajas gruesas.', 'Úsalas como tapas para hacer sándwiches con el queso y jamón en el medio.']
  },
  {
    id: 'snack_new_9',
    title: 'Bolitas de Energía de Dátiles',
    description: 'Dulces naturales sin azúcar añadida. Sabor a caramelo.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['DULCE', 'SIN COCCIÓN'],
    imageUrl: 'https://images.unsplash.com/photo-1594982637255-7489ba111758?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 taza de dátiles sin carozo', '1/2 taza de nueces', 'Coco rallado'],
    instructions: ['Procesa los dátiles y nueces hasta formar una pasta.', 'Forma bolitas con las manos.', 'Pásalas por coco rallado.']
  },
  {
    id: 'snack_new_10',
    title: 'Uvas Congeladas',
    description: 'Golosinas naturales perfectas para días de calor.',
    time: '2 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'VERANO'],
    imageUrl: 'https://images.unsplash.com/photo-1596238641974-9f7962eb7b1a?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Uvas sin semillas (verdes o rojas)'],
    instructions: ['Lava bien las uvas y sécalas.', 'Coloca en una bolsa hermética y congela por 2 horas.', 'Consumir directamente del freezer (corte longitudinal para <4 años).']
  },
  {
    id: 'snack_new_11',
    title: 'Mini Muffins de Huevo',
    description: 'Omelettes en forma de muffin. Fáciles de comer con la mano.',
    time: '20 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'SALADO'],
    imageUrl: 'https://images.unsplash.com/photo-1502479268686-353df1846171?q=80&w=600&auto=format&fit=crop',
    ingredients: ['3 huevos', 'Espinaca picada', 'Queso rallado'],
    instructions: ['Bate los huevos con la espinaca y el queso.', 'Vierte en moldes de muffins engrasados.', 'Hornea a 180°C por 15 minutos.']
  },
  {
    id: 'snack_new_12',
    title: 'Garbanzos Crocantes',
    description: 'Snack salado y crujiente lleno de fibra.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FIBRA', 'CRUJIENTE'],
    imageUrl: 'https://images.unsplash.com/photo-1597401391742-880c55490a2a?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Garbanzos cocidos', 'Aceite de oliva', 'Pimentón dulce'],
    instructions: ['Seca bien los garbanzos.', 'Mézclalos con aceite y pimentón.', 'Hornea a 200°C por 20-30 min moviendo a la mitad.']
  },
  {
    id: 'snack_new_13',
    title: 'Rollitos de Tortilla (Wrap)',
    description: 'Versión mini de un wrap, fácil de manipular.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['LONCHERA', 'VERSÁTIL'],
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tortilla de trigo o maíz', 'Hummus o queso crema', 'Espinaca fresca'],
    instructions: ['Unta la tortilla con el hummus.', 'Coloca hojas de espinaca.', 'Enrolla y corta en rodajas tipo espiral.']
  },
  {
    id: 'snack_new_14',
    title: 'Daditos de Queso y Uva',
    description: 'Combinación dulce-salada clásica.',
    time: '3 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['RÁPIDO', 'CALCIO'],
    imageUrl: 'https://images.unsplash.com/photo-1601309584849-c1432f94d930?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Queso en cubo (Gouda o Tybo)', 'Uvas sin semillas'],
    instructions: ['Corta el queso en cubos del tamaño de las uvas.', 'Mezcla en un tupper o alterna en palillos.']
  },
  {
    id: 'snack_new_15',
    title: 'Batido de Frutilla y Avena',
    description: 'Desayuno o merienda bebible y llenador.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['BEBIBLE', 'FRUTA'],
    imageUrl: 'https://images.unsplash.com/photo-1563632938361-512c01990479?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 taza de leche', '5 frutillas', '2 cdas de avena instantánea'],
    instructions: ['Licúa todos los ingredientes hasta que esté suave.', 'Sirve frío.']
  },
  {
    id: 'snack_new_16',
    title: 'Mini Panqueques de Remolacha',
    description: 'Color rosa divertido y vegetal escondido.',
    time: '15 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['COLORIDO', 'VEGGIE'],
    imageUrl: 'https://images.unsplash.com/photo-1598514930607-4228c2e680a1?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 remolacha cocida', '1 huevo', '1/2 taza harina avena', 'Leche'],
    instructions: ['Licúa la remolacha con el huevo y leche.', 'Agrega harina hasta tener consistencia de pancake.', 'Cocina en sartén vuelta y vuelta.']
  },
  {
    id: 'snack_new_17',
    title: 'Trufas de Zanahoria y Coco',
    description: 'Como el pastel de zanahoria pero en bocaditos crudos.',
    time: '15 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['DULCE', 'VEGGIE'],
    imageUrl: 'https://images.unsplash.com/photo-1522256449129-cb53d623275c?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 taza zanahoria rallada fina', '1/2 taza nueces molidas', 'Coco rallado', 'Dátiles'],
    instructions: ['Procesa todo junto hasta formar una masa.', 'Haz bolitas y refrigera.']
  },
  {
    id: 'snack_new_18',
    title: 'Sandwich de Manzana',
    description: 'Manzana crujiente con relleno cremoso.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'RÁPIDO'],
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Manzana verde', 'Mantequilla de maní', 'Granola'],
    instructions: ['Corta la manzana en rodajas.', 'Unta mantequilla de maní en una rodaja, agrega granola y tapa con otra rodaja.']
  },
  {
    id: 'snack_new_19',
    title: 'Pochoclos Caseros',
    description: 'Snack de grano entero, mejor hecho en casa con poco aceite.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['CEREAL', 'COMPARTIR'],
    imageUrl: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Maíz pisingallo', 'Aceite', 'Pizca de sal o azúcar'],
    instructions: ['Calienta aceite en olla, agrega maíz y tapa.', 'Mueve la olla hasta que dejen de explotar.']
  },
  {
    id: 'snack_new_20',
    title: 'Gelatina con Frutas',
    description: 'Versión mejorada de la gelatina con trozos de fruta real.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRESCO', 'POSTRE'],
    imageUrl: 'https://images.unsplash.com/photo-1528659570783-6677f8ce0731?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Gelatina de sabor', 'Trozos de durazno o pera'],
    instructions: ['Prepara la gelatina según el paquete.', 'Agrega la fruta picada antes de que cuaje y refrigera.']
  },
  {
    id: 'snack_new_21',
    title: 'Mugcake de Limón',
    description: 'Bizcochuelo individual en taza en microondas.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['CALIENTE', 'EXPRESS'],
    imageUrl: 'https://images.unsplash.com/photo-1579294248744-9388147d2ce8?q=80&w=600&auto=format&fit=crop',
    ingredients: ['4 cdas harina', '2 cdas azúcar', '1 huevo', 'Jugo limón', 'Aceite'],
    instructions: ['Mezcla todo en una taza apta microondas.', 'Cocina 1:30 a 2 minutos en potencia máxima.']
  },
  {
    id: 'snack_new_22',
    title: 'Triangulitos de Tofu',
    description: 'Tofu empanado crujiente, fuente de calcio vegetal.',
    time: '20 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['VEGANO', 'PROTEÍNA'],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tofu firme', 'Pan rallado', 'Salsa de soja'],
    instructions: ['Corta el tofu en triángulos.', 'Pásalo por salsa de soja y luego pan rallado.', 'Hornea o dora en sartén hasta que esté crocante.']
  },
  {
    id: 'snack_new_23',
    title: 'Espirales de Hojaldre',
    description: 'Masa de tarta rellena enrollada.',
    time: '20 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['HORNO', 'SALADO'],
    imageUrl: 'https://images.unsplash.com/photo-1573155734285-05d6cb04c35a?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tapa de pascualina (hojaldre)', 'Queso rallado', 'Jamón picado'],
    instructions: ['Estira la masa, cubre con jamón y queso.', 'Enrolla y corta rodajas.', 'Hornea 15 min hasta dorar.']
  },
  {
    id: 'snack_new_24',
    title: 'Tomates Cherry Rellenos',
    description: 'Bocados frescos y cremosos.',
    time: '15 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['GOURMET', 'FRESCO'],
    imageUrl: 'https://images.unsplash.com/photo-1627838522308-596918d3568c?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tomates cherry', 'Atún', 'Queso crema'],
    instructions: ['Corta una tapita al tomate y vacía con cuidado.', 'Mezcla atún con queso crema y rellena.']
  },
  {
    id: 'snack_new_25',
    title: 'Bastones de Batata',
    description: 'Más dulces y nutritivos que las papas fritas.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['HORNO', 'GUARNICIÓN'],
    imageUrl: 'https://images.unsplash.com/photo-1565492868202-b06f1224d06a?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Batatas', 'Aceite', 'Pimentón'],
    instructions: ['Corta batatas en bastones.', 'Mezcla con aceite y condimentos.', 'Hornea a fuego fuerte para que doren.']
  },
  {
    id: 'snack_new_26',
    title: 'Mousse de Palta y Cacao',
    description: 'Postre cremoso y saludable. No se nota la palta.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['POSTRE', 'SALUDABLE'],
    imageUrl: 'https://images.unsplash.com/photo-1549646401-49934751480f?q=80&w=600&auto=format&fit=crop',
    ingredients: ['1 palta madura', '2 cdas cacao amargo', 'Miel o endulzante'],
    instructions: ['Procesa todo hasta obtener una crema lisa.', 'Refrigera antes de servir.']
  },
  {
    id: 'snack_new_27',
    title: 'Crackers de Semillas',
    description: 'Galletas saladas llenas de omega 3.',
    time: '40 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['SIN HARINA', 'CRUJIENTE'],
    imageUrl: 'https://images.unsplash.com/photo-1590403756857-e17578ce8f46?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Mix de semillas (lino, chía, sésamo)', 'Agua', 'Sal'],
    instructions: ['Hidrata las semillas en agua hasta que suelten el gel.', 'Extiende en placa finita y hornea lento hasta secar.']
  },
  {
    id: 'snack_new_28',
    title: 'Brochetas de Pollo Frío',
    description: 'Sobras de pollo convertidas en snack.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'RECICLAJE'],
    imageUrl: 'https://images.unsplash.com/photo-1627993078496-d8054b1f6d33?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Pollo cocido en cubos', 'Queso', 'Tomate'],
    instructions: ['Ensarta un cubo de pollo, uno de queso y uno de tomate en palillos pequeños.']
  },
  {
    id: 'snack_new_29',
    title: 'Empanaditas de Choclo',
    description: 'Clásicas y amadas por los niños.',
    time: '30 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['ALMUERZO', 'LONCHERA'],
    imageUrl: 'https://images.unsplash.com/photo-1616866199468-d064560d2681?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tapas de copetín', 'Salsa blanca espesa', 'Choclo en grano'],
    instructions: ['Mezcla choclo con salsa blanca y queso.', 'Rellena las tapas, cierra y hornea.']
  },
  {
    id: 'snack_new_30',
    title: 'Bocaditos de Arroz Inflado',
    description: 'Como las barritas comerciales pero caseras.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['CEREAL', 'DULCE'],
    imageUrl: 'https://images.unsplash.com/photo-1520630736862-58837e2996d9?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Arroz inflado', 'Mantequilla de maní', 'Miel'],
    instructions: ['Derrite mantequilla de maní con miel.', 'Mezcla con el arroz.', 'Enfría en molde y corta.']
  },
  {
    id: 'snack_new_31',
    title: 'Peras Asadas con Canela',
    description: 'Postre tibio y reconfortante.',
    time: '20 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'POSTRE'],
    imageUrl: 'https://images.unsplash.com/photo-1639148301548-262141528659?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Peras firmes', 'Canela', 'Jugo de naranja'],
    instructions: ['Corta peras a la mitad.', 'Rocía con jugo y canela.', 'Hornea hasta tiernas.']
  },
  {
    id: 'snack_new_32',
    title: 'Salchichas de Pollo Caseras',
    description: 'Sin conservantes, hechas en casa.',
    time: '40 min',
    difficulty: 'Dificil',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'CASERO'],
    imageUrl: 'https://images.unsplash.com/photo-1595480749195-25b447817eb4?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Pechuga de pollo', 'Manzana rallada', 'Condimentos'],
    instructions: ['Procesa el pollo crudo con manzana y especias.', 'Dale forma en papel film y hierve o cocina al vapor.']
  },
  {
    id: 'snack_new_33',
    title: 'Tortilla de Papas en Cubos',
    description: 'La clásica tortilla cortada para picar.',
    time: '30 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['CLÁSICO', 'LONCHERA'],
    imageUrl: 'https://images.unsplash.com/photo-1601625471616-8c4c5750269d?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Papas', 'Huevos', 'Cebolla'],
    instructions: ['Haz una tortilla tradicional.', 'Deja enfriar bien y corta en cubos de 2x2cm.']
  },
  {
    id: 'snack_new_34',
    title: 'Crepes de Avena Rellenos',
    description: 'Masa finita y flexible.',
    time: '15 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['MERIENDA', 'FLEXIBLE'],
    imageUrl: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Harina de avena', 'Leche', 'Huevo'],
    instructions: ['Mezcla hasta lograr masa líquida.', 'Haz crepes finos en sartén.', 'Rellena con fruta o queso.']
  },
  {
    id: 'snack_new_35',
    title: 'Galletitas de Calabaza',
    description: 'Naranjas, suaves y nutritivas.',
    time: '25 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['VEGGIE', 'DULCE'],
    imageUrl: 'https://images.unsplash.com/photo-1558223637-29969616335a?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Puré de calabaza', 'Harina', 'Azúcar mascabo', 'Aceite'],
    instructions: ['Mezcla húmedos con secos.', 'Forma galletas.', 'Hornea 15 min a 180°C.']
  },
  {
    id: 'snack_new_36',
    title: 'Chips de Kale',
    description: 'Hojas verdes súper crujientes.',
    time: '15 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['VERDE', 'CRUJIENTE'],
    imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Hojas de Kale (sin tallo)', 'Aceite oliva', 'Sal'],
    instructions: ['Masajea las hojas con aceite.', 'Hornea a fuego medio hasta que estén secas y crujientes (cuidado que se queman rápido).']
  },
  {
    id: 'snack_new_37',
    title: 'Mandarinas con Chocolate',
    description: 'Gajos de fruta bañados.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['DULCE', 'FRUTA'],
    imageUrl: 'https://images.unsplash.com/photo-1599321908977-80252668516d?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Mandarinas', 'Chocolate amargo derretido'],
    instructions: ['Pela la mandarina.', 'Sumerge la mitad de cada gajo en chocolate.', 'Deja enfriar sobre papel manteca.']
  },
  {
    id: 'snack_new_38',
    title: 'Quesadillas de Frijoles',
    description: 'Tortillas rellenas de pasta de porotos.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'CALIENTE'],
    imageUrl: 'https://images.unsplash.com/photo-1502447951590-25816913c323?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Tortillas de trigo', 'Porotos negros pisados', 'Queso'],
    instructions: ['Unta pasta de porotos en tortilla, agrega queso.', 'Tapa con otra tortilla y dora en sartén hasta derretir queso.']
  },
  {
    id: 'snack_new_39',
    title: 'Mini Albóndigas de Pavo',
    description: 'Carne magra en formato bocado.',
    time: '25 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['PROTEÍNA', 'SALADO'],
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Carne picada de pavo/pollo', 'Avena', 'Huevo'],
    instructions: ['Mezcla todo y condimenta.', 'Haz bolitas pequeñas.', 'Hornea hasta que estén cocidas.']
  },
  {
    id: 'snack_new_40',
    title: 'Sushi de Pan de Molde',
    description: 'Falsos sushis divertidos para niños.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['DIVERSIÓN', 'LONCHERA'],
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Pan de molde sin corteza', 'Queso crema', 'Palta/Jamón'],
    instructions: ['Aplana el pan con palote.', 'Rellena y enrolla.', 'Corta en rodajas como sushi.']
  },
  {
    id: 'snack_new_41',
    title: 'Smoothie Bowl en Frasco',
    description: 'Yogur espeso con frutas para llevar.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRESCO', 'PORTÁTIL'],
    imageUrl: 'https://images.unsplash.com/photo-1626078436815-585350c379a2?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Yogur natural', 'Banana', 'Frutos rojos congelados'],
    instructions: ['Licúa el yogur con frutas congeladas para que quede espeso.', 'Coloca en frasco y pon granola arriba.']
  },
  {
    id: 'snack_new_42',
    title: 'Galletas de Avena y Manzana',
    description: 'Suaves y húmedas, tipo abuelita.',
    time: '25 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['HORNO', 'FIBRA'],
    imageUrl: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Avena', 'Manzana rallada', 'Harina integral', 'Aceite'],
    instructions: ['Mezcla manzana, aceite y azúcar.', 'Agrega secos.', 'Hornea por 15 min.']
  },
  {
    id: 'snack_new_43',
    title: 'Rollitos de Lechuga',
    description: 'Wraps frescos sin masa.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['LIGERO', 'VEGGIE'],
    imageUrl: 'https://images.unsplash.com/photo-1632782736171-87a34614d9b2?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Hojas de lechuga grandes', 'Pollo', 'Zanahoria rallada'],
    instructions: ['Usa la hoja como tortilla.', 'Rellena y enrolla.']
  },
  {
    id: 'snack_new_44',
    title: 'Frutillas Rellenas',
    description: 'Postre elegante y simple.',
    time: '10 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['FRUTA', 'GOURMET'],
    imageUrl: 'https://images.unsplash.com/photo-1621245645934-0498b9a13eb4?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Frutillas grandes', 'Yogur griego o queso crema endulzado'],
    instructions: ['Ahueca un poco las frutillas.', 'Rellena con la crema.']
  },
  {
    id: 'snack_new_45',
    title: 'Nachos de Pan Pita',
    description: 'Chips caseros para dipear.',
    time: '15 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['CRUJIENTE', 'SALADO'],
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Pan pita', 'Aceite oliva', 'Orégano'],
    instructions: ['Corta el pan en triángulos.', 'Pincela con aceite y orégano.', 'Hornea hasta dorar.']
  },
  {
    id: 'snack_new_46',
    title: 'Budín de Banana Express',
    description: 'En licuadora, todo junto.',
    time: '40 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FÁCIL', 'DULCE'],
    imageUrl: 'https://images.unsplash.com/photo-1587849187127-393226d9d150?q=80&w=600&auto=format&fit=crop',
    ingredients: ['2 bananas', '2 huevos', '1/3 taza aceite', '1.5 taza harina'],
    instructions: ['Licúa banana, huevo y aceite.', 'Mezcla con harina.', 'Hornea en budinera.']
  },
  {
    id: 'snack_new_47',
    title: 'Palitos de Queso al Horno',
    description: 'Masa de queso crujiente.',
    time: '20 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['SALADO', 'QUESO'],
    imageUrl: 'https://images.unsplash.com/photo-1550953282-5d41f3056094?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Queso rallado', 'Manteca', 'Harina'],
    instructions: ['Forma una masa con partes iguales de los 3.', 'Haz tiritas.', 'Hornea hasta dorar.']
  },
  {
    id: 'snack_new_48',
    title: 'Sandwich de Pera y Ricota',
    description: 'Combinación suave y fresca.',
    time: '5 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['FRESCO', 'LÁCTEO'],
    imageUrl: 'https://images.unsplash.com/photo-1549488347-1941d441113b?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Pan integral', 'Ricota', 'Láminas de pera'],
    instructions: ['Tuesta el pan.', 'Unta ricota y coloca la pera.']
  },
  {
    id: 'snack_new_49',
    title: 'Pancakes de Espinaca',
    description: 'Hulk pancakes, verdes y fuertes.',
    time: '15 min',
    difficulty: 'Media',
    ageCategory: 'Snacks',
    tags: ['VERDE', 'DESAYUNO'],
    imageUrl: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Espinaca cruda', 'Banana', 'Huevo', 'Avena'],
    instructions: ['Licúa todo junto.', 'Cocina como pancakes normales.']
  },
  {
    id: 'snack_new_50',
    title: 'Mix de Frutos Secos',
    description: 'Para niños mayores que ya mastican bien.',
    time: '2 min',
    difficulty: 'Baja',
    ageCategory: 'Snacks',
    tags: ['ENERGÍA', '+2 AÑOS'],
    imageUrl: 'https://images.unsplash.com/photo-1605307399823-37542d99d3e8?q=80&w=600&auto=format&fit=crop',
    ingredients: ['Nueces', 'Almendras', 'Pasas de uva', 'Cereales'],
    instructions: ['Mezcla todo en un frasco hermético.', 'Sirve porciones pequeñas.']
  }
];
