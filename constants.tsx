
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
    ingredients: ['Nueces', 'Almendras', 'Pasas de uva', 'Cereales'],
    instructions: ['Mezcla todo en un frasco hermético.', 'Sirve porciones pequeñas.']
  },

  // --- NEW IMPORTED RECIPES (FROM USER TEXT) ---
  {
    id: 'r_new_01',
    title: 'Rollito de Zanahoria',
    description: 'Divertidos rollitos de pan con un relleno cremoso y nutritivo.',
    time: '35 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['DIVERSIÓN', 'VEGGIE'],
    imageUrl: '',
    ingredients: ['Rodaja de pan', '1 cda Yogurt', 'Zanahoria rallada', '1 Huevo', 'Canela', 'Vainilla', 'Aceite'],
    instructions: [
      'Aplasta la rodaja de pan con un rodillo.',
      'Unta el yogurt y agrega la zanahoria rallada.',
      'Enrolla el pan.',
      'Mezcla huevo, canela y vainilla en un bowl.',
      'Pasa el rollito por la mezcla de huevo.',
      'Dora en sartén con aceite por todos lados.'
    ]
  },
  {
    id: 'r_new_02',
    title: 'Arroz de Coliflor',
    description: 'Una alternativa ligera al arroz tradicional, llena de vegetales.',
    time: '40 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['ALMUERZO', 'VEGGIE'],
    imageUrl: '',
    ingredients: ['4 arbolitos de coliflor', '1/2 taza de caldo de pollo', '1 cda queso parmesano', 'Aceite'],
    instructions: [
      'Tritura el coliflor en licuadora o picadora hasta que parezca arroz.',
      'Sofríe el coliflor en aceite por 3 min.',
      'Agrega el caldo y el queso.',
      'Cocina por 5 min hasta que esté tierno.'
    ]
  },
  {
    id: 'r_new_03',
    title: 'Bolitas de Arroz y Espinaca',
    description: 'Perfectas para aprovechar sobras de arroz. Fáciles de agarrar.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['FINGER FOOD', 'HIERRO'],
    imageUrl: '',
    ingredients: ['60g queso rallado', '4 hojas espinaca', '1/2 taza arroz', '1/2 plátano', 'Harina de avena'],
    instructions: [
      'Mezcla arroz y queso en un bowl.',
      'Tritura el plátano y agrégalo.',
      'Pica finamente la espinaca y añádela.',
      'Mezcla bien y forma bolitas con la mano.',
      'Pásalas por harina de avena.',
      'Dora en sartén o al horno a 140° por 10 min.'
    ]
  },
  {
    id: 'r_new_04',
    title: 'Tostada Francesa de Arándanos',
    description: 'Desayuno dulce y especial para fines de semana.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['DESAYUNO', 'DULCE'],
    imageUrl: '',
    ingredients: ['Pan tajado', '1 huevo', 'Vainilla', 'Canela', 'Leche', '1/2 taza arándanos', '2 cdas queso crema', 'Aceite'],
    instructions: [
      'Tritura los arándanos y mézclalos con el queso crema.',
      'Mezcla huevo, vainilla, canela y leche en un bowl.',
      'Pasa el pan por la mezcla de huevo.',
      'Unta la mezcla de arándanos sobre el pan.',
      'Dora en sartén por ambos lados.'
    ]
  },
  {
    id: 'r_new_05',
    title: 'Salmón en Salsa de Coco',
    description: 'Pescado suave con un toque tropical cremoso.',
    time: '40 min',
    difficulty: 'Media',
    ageCategory: '10-12m',
    tags: ['OMEGA 3', 'GOURMET'],
    imageUrl: '',
    ingredients: ['125g salmón fresco', '1/2 taza leche de coco', '2 cdas yogur natural', '1 diente ajo', 'Cebolla', 'Aceite', 'Coco rallado'],
    instructions: [
      'Sofríe ajo y cebolla picados.',
      'Añade el salmón y dora.',
      'Mezcla leche de coco con yogur y agrégalo a la sartén.',
      'Cocina 10 min.',
      'Agrega coco rallado y cocina 2 min más.'
    ]
  },
  {
    id: 'r_new_06',
    title: 'Palitos de Coliflor',
    description: 'Forma divertida de comer vegetales. Textura suave por dentro.',
    time: '35 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['FINGER FOOD', 'VEGGIE'],
    imageUrl: '',
    ingredients: ['3 tallos coliflor cocido', '1 papa pequeña cocida', 'Queso rallado'],
    instructions: [
      'Tritura coliflor y papa con un tenedor.',
      'Agrega queso rallado y mezcla hasta formar una masa.',
      'Forma palitos con las manos.',
      'Dora en sartén con un poco de aceite.'
    ]
  },
  {
    id: 'r_new_07',
    title: 'Waffles de Yuca',
    description: 'Sin gluten, hechos con yuca (mandioca) y mucho queso.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['SIN GLUTEN', 'DESAYUNO'],
    imageUrl: '',
    ingredients: ['1 trozo yuca cocida', '1/2 taza queso mozzarella rallado'],
    instructions: [
      'Cocina la yuca hasta que esté blanda.',
      'Mezcla en bowl la yuca y el queso hasta integrar.',
      'Arma bolitas.',
      'Cocina en wafflera aceitada aplastando las bolitas.'
    ]
  },
  {
    id: 'r_new_08',
    title: 'Bocaditos de Zanahoria',
    description: 'Tortillitas naranjas llenas de calcio y vitamina A.',
    time: '25 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['CENA', 'LIGERO'],
    imageUrl: '',
    ingredients: ['1/2 zanahoria rallada', '1/2 taza queso mozzarella', '1 huevo'],
    instructions: [
      'Mezcla zanahoria rallada cruda, queso y huevo.',
      'Debe quedar una mezcla consistente.',
      'Cocina como una tortilla en sartén antiadherente.',
      'Corta en trozos o figuras.'
    ]
  },
  {
    id: 'r_new_09',
    title: 'Muffins de Coliflor y Queso',
    description: 'Ideales para preparar en cantidad y congelar.',
    time: '35 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['HORNO', 'BATCH COOKING'],
    imageUrl: '',
    ingredients: ['10 arboles coliflor', '2 huevos', '125g queso mozzarella', 'Ajo en polvo', 'Aceite de oliva'],
    instructions: [
      'Tritura el coliflor crudo hasta que parezca arroz.',
      'Mezcla con huevos, queso, aceite y ajo en polvo.',
      'Coloca en moldes de muffins.',
      'Hornea a 180°C por 15-20 min.'
    ]
  },
  {
    id: 'r_new_10',
    title: 'Nuggets de Pollo y Espinaca',
    description: 'Pollo camuflado con vegetales. Caseros y saludables.',
    time: '40 min',
    difficulty: 'Media',
    ageCategory: '10-12m',
    tags: ['PROTEÍNA', 'HIERRO'],
    imageUrl: '',
    ingredients: ['250g pechuga pollo', '2 cdas queso crema', '4 hojas espinaca', '1 huevo', '2 cdas harina trigo', '4 cdas pan rallado', 'Aceite'],
    instructions: [
      'Cocina y pica la espinaca.',
      'Tritura la pechuga de pollo cruda.',
      'Mezcla pollo, queso crema y espinaca. Forma nuggets.',
      'Pasa por harina, luego huevo batido y finalmente pan rallado.',
      'Fríe en aceite o hornea a 200°C por 15 min.'
    ]
  },
  {
    id: 'r_new_11',
    title: 'Puré de Papa con Pollo',
    description: 'Un clásico reconfortante, suave y fácil de comer.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['CLÁSICO', 'ALMUERZO'],
    imageUrl: '',
    ingredients: ['150g papa', '40g pechuga pollo', '25g poro', 'Aceite de oliva'],
    instructions: [
      'Cocina papa y poro en agua por 20 min.',
      'Añade el pollo los últimos 5 minutos.',
      'Tritura todo añadiendo agua de cocción según necesites.',
      'Sirve con un chorrito de aceite de oliva.'
    ]
  },
  {
    id: 'r_new_12',
    title: 'Bocaditos de Brócoli',
    description: 'Croquetas horneadas llenas de sabor.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['VEGGIE', 'HORNO'],
    imageUrl: '',
    ingredients: ['550g brócoli', '2 huevos', '60g harina almendra', '75g queso cheddar', '2 dientes ajo', 'Aceite de oliva'],
    instructions: [
      'Hierve el brócoli 5-10 min y escurre MUY bien el agua.',
      'Pica finamente y mezcla con huevos, queso, harina y ajo.',
      'Forma cilindros y pincela con aceite.',
      'Hornea a 180°C por 20 min hasta dorar.'
    ]
  },
  {
    id: 'r_new_13',
    title: 'Barritas de Avena y Plátano',
    description: 'Snack energético natural sin azúcar añadida.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['SNACK', 'ENERGÍA'],
    imageUrl: '',
    ingredients: ['1 plátano muy maduro', '5 cdas avena', '2 cdas leche', '3 cdas anacardos crudos', 'Canela'],
    instructions: [
      'Tritura anacardos y aplasta el plátano.',
      'Mezcla todo en un tazón y deja reposar 5 min.',
      'Pon en molde apto microondas y cocina 3-5 min a potencia alta.',
      'Corta en barritas cuando enfríe un poco.'
    ]
  },
  {
    id: 'r_new_14',
    title: 'Galletas de Aceite de Oliva',
    description: 'Galletas suaves aromáticas con naranja.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['MERIENDA', 'CASERO'],
    imageUrl: '',
    ingredients: ['Cáscara naranja', '125ml jugo naranja', '1 huevo', '400g harina repostería', '100ml aceite oliva', 'Levadura', 'Canela', '120g dátiles'],
    instructions: [
      'Hidrata y tritura los dátiles hasta hacer pasta.',
      'Mezcla huevo, jugo, ralladura, aceite y pasta de dátiles.',
      'Incorpora harina con levadura y canela.',
      'Reposa masa 30 min, estira y corta formas.',
      'Hornea 10 min a 180°C.'
    ]
  },
  {
    id: 'r_new_15',
    title: 'Pasta con Zapallo y Salchicha',
    description: 'Plato principal completo y sabroso.',
    time: '40 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['ALMUERZO', 'PRINCIPAL'],
    imageUrl: '',
    ingredients: ['200g pasta', '100g zapallo', '100g salchicha fresca', '1 diente ajo', '50g cebolla', 'Aceite oliva'],
    instructions: [
      'Saltea cebolla, ajo y zapallo en cubitos.',
      'Desmenuza la salchicha (sin piel) y añádela al sofrito.',
      'Cocina la pasta y mézclala con el sofrito.',
      'Sirve tibio.'
    ]
  },
  {
    id: 'r_new_16',
    title: 'Huevos Revueltos Suaves',
    description: 'Cena rápida y rica en proteínas.',
    time: '10 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['CENA', 'RÁPIDO'],
    imageUrl: '',
    ingredients: ['2 huevos', '1 cda leche', 'Aceite oliva'],
    instructions: [
      'Bate los huevos con la leche.',
      'Cocina en sartén a fuego lento removiendo suavemente.',
      'Retira cuando esté cuajado pero aún húmedo.'
    ]
  },
  {
    id: 'r_new_17',
    title: 'Lentejas con Arroz',
    description: 'Combinación perfecta de proteínas vegetales.',
    time: '60 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['VEGANO', 'HIERRO'],
    imageUrl: '',
    ingredients: ['300g lentejas', '200g arroz integral', '100g zanahoria', '100g cebolla', 'Aceite oliva'],
    instructions: [
      'Sofríe cebolla y zanahoria.',
      'Añade lentejas (remojadas) y cubre con agua.',
      'Cocina 30 min, añade arroz y cocina 20 min más hasta que todo esté tierno.'
    ]
  },
  {
    id: 'r_new_18',
    title: 'Nuggets de Pollo Casero',
    description: 'Versión pura carne, sin aditivos.',
    time: '60 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['FAVORITO', 'PROTEÍNA'],
    imageUrl: '',
    ingredients: ['500g pechuga pollo', '175g queso crema', '2 huevos', '4 cdas harina trigo', '4 cdas pan rallado', 'Aceite oliva'],
    instructions: [
      'Tritura el pollo y mezcla con queso crema.',
      'Forma nuggets, pasa por harina, huevo y pan rallado.',
      'Fríe en aceite medio hasta dorar bien por ambos lados.'
    ]
  },
  {
    id: 'r_new_19',
    title: 'Muffins de Coliflor XL',
    description: 'Otra variante de muffins de vegetales, muy esponjosos.',
    time: '30 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['BATCH COOKING', 'VEGGIE'],
    imageUrl: '',
    ingredients: ['350g coliflor', '5 huevos', '200g queso rallado', 'Ajo en polvo', 'Aceite oliva'],
    instructions: [
      'Tritura coliflor cruda.',
      'Mezcla con huevos batidos, queso y condimentos.',
      'Hornea en moldes a 180°C por 15-20 min.'
    ]
  },
  {
    id: 'r_new_20',
    title: 'Garbanzos con Tomate',
    description: 'Estofado rápido usando legumbres ya cocidas.',
    time: '25 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['ALMUERZO', 'LEGUMBRES'],
    imageUrl: '',
    ingredients: ['400g tomate natural', '300g garbanzos cocidos', '2 dientes ajo', 'Aceite oliva'],
    instructions: [
      'Cuela el tomate triturado para quitar exceso de agua.',
      'Sofríe tomate con ajo rallado por 10 min.',
      'Agrega garbanzos y cocina 5 min más para integrar sabores.'
    ]
  },
  {
    id: 'r_new_21',
    title: 'Colada de Avena y Manzana',
    description: 'Bebida espesa y reconfortante, ideal para días fríos.',
    time: '20 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['BEBIDA', 'AVENA'],
    imageUrl: '',
    ingredients: ['100g avena', '3 manzanas', 'Canela', 'Clavo de olor', 'Pimienta dulce', 'Agua'],
    instructions: [
      'Hierve agua con especias por 10 min.',
      'Licúa avena (remojada) y manzanas con un poco de agua.',
      'Vierte mezcla en el agua hirviendo y cocina 5 min removiendo.',
      'Cuela y sirve tibio o frío.'
    ]
  },
  {
    id: 'r_new_22',
    title: 'Bizcocho de Manzana',
    description: 'Dulce, húmedo y con fruta real en cada bocado.',
    time: '35 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['POSTRE', 'FRUTA'],
    imageUrl: '',
    ingredients: ['200g harina', '90ml aceite oliva', 'Levadura', '3 huevos', '70ml leche', '3 manzanas', 'Canela'],
    instructions: [
      'Mezcla harina, levadura, leche, huevos, aceite y canela.',
      'Añade manzanas laminadas finas.',
      'Hornea a 160°C por 25 min.'
    ]
  },
  {
    id: 'r_new_23',
    title: 'Bizcocho de Zapallo',
    description: 'Sabor especiado suave y textura increíble.',
    time: '35 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['POSTRE', 'VEGGIE'],
    imageUrl: '',
    ingredients: ['220g harina', '400g zapallo', '75ml aceite oliva', '2 huevos', 'Levadura', 'Bicarbonato', 'Canela', 'Clavo', 'Nuez moscada', 'Azúcar (opcional)'],
    instructions: [
      'Cocina el zapallo y haz puré.',
      'Mezcla huevos, aceite y puré.',
      'Incorpora secos (harina, levadura, especias).',
      'Hornea a 180°C por 20-25 min.'
    ]
  },
  {
    id: 'r_new_24',
    title: 'Pastel de Papa y Merluza',
    description: 'Una forma deliciosa de comer pescado.',
    time: '25 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['PESCADO', 'ALMUERZO'],
    imageUrl: '',
    ingredients: ['300g papas', '100g merluza', 'Aceite oliva', 'Pan rallado', 'Perejil'],
    instructions: [
      'Cocina papas y merluza.',
      'Haz puré con la papa y desmenuza el pescado.',
      'Mezcla con perejil y pan rallado. Forma pasteles.',
      'Refrigera 1h y luego dora en sartén.'
    ]
  },
  {
    id: 'r_new_25',
    title: 'Tortilla de Espinaca Dulce',
    description: 'Curiosa combinación con plátano y yogur, ¡les encanta!',
    time: '25 min',
    difficulty: 'Baja',
    ageCategory: '10-12m',
    tags: ['DESAYUNO', 'VERDE'],
    imageUrl: '',
    ingredients: ['1 taza espinacas baby', '1 yogur griego', '100g avena', '1/2 plátano'],
    instructions: [
      'Licúa todo junto hasta tener una masa.',
      'Reposa 10 min.',
      'Cocina tortitas pequeñas en sartén antiadherente.'
    ]
  }
];
