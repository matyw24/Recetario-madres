
import React, { useState, useMemo } from 'react';

interface HomeDashboardViewProps {
  onNavigate: (view: 'recipes' | 'pantry') => void;
  onOpenSettings: () => void;
}

// --- DATOS DUROS (INFORMACIÓN REAL) ---

const TIPS_DB = [
  {
    id: 1,
    title: "¿Tu bebé no come carne?",
    short: "¿Qué tal si la sustituyes por proteína vegetal?",
    content: "A veces la textura de la carne es difícil. Prueba ofrecer lentejas, garbanzos, tofu o mantequilla de maní (sin azúcar) para cubrir sus requerimientos de proteína y hierro. Combínalos con vitamina C (fruta o pimiento) para mejor absorción."
  },
  {
    id: 2,
    title: "La importancia del Hierro",
    short: "A partir de los 6 meses, las reservas bajan.",
    content: "A los 6 meses, las reservas de hierro del bebé nacidas con él comienzan a agotarse. Prioriza alimentos ricos en hierro en al menos una comida al día: carnes, legumbres, huevo o cereales fortificados."
  },
  {
    id: 3,
    title: "No obligues a comer",
    short: "Ellos deciden cuánto, tú decides qué.",
    content: "La división de responsabilidad es clave: Tú eliges la calidad y el horario. El bebé decide si come y cuánto come. Esto fomenta una relación saludable con la comida a largo plazo."
  }
];

const FOODS_DB = [
  { 
    name: 'Palta', 
    img: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?w=300&q=80',
    safe_offer: 'Ofrecer una rebanada grande (tipo gajo) con parte de la cáscara dejada abajo para mejor agarre (antideslizante) o triturada en pan.',
    nutrients: 'Grasas saludables, Fibra, Potasio.'
  },
  { 
    name: 'Brócoli', 
    img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&q=80',
    safe_offer: 'Ofrecer ramilletes grandes cocidos al vapor hasta que estén tiernos. El tallo sirve de mango para que el bebé lo agarre.',
    nutrients: 'Hierro, Vitamina C, Calcio.'
  },
  { 
    name: 'Fresas', 
    img: 'https://static.wikia.nocookie.net/esharrypotter/images/7/76/Fresa.jpg/revision/latest?cb=20200713112301',
    safe_offer: 'Si son grandes y duras, ofrecer enteras para chupar. Si son blandas, cortar en láminas o cuartos. Nunca dar enteras pequeñas que quepan en la boca.',
    nutrients: 'Vitamina C (ayuda a absorber hierro).'
  },
  { 
    name: 'Huevo', 
    img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&q=80',
    safe_offer: 'Bien cocido (yema y clara cuajadas). Ofrecer en tiras de tortilla o huevo duro partido en cuartos. Es un alérgeno común, introducir por separado.',
    nutrients: 'Proteína completa, Colina, Hierro.'
  },
  {
    name: 'Banana',
    img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300&q=80',
    safe_offer: 'Ofrecer 1/3 de plátano pelado (empujando un poco la fruta hacia afuera de la cáscara para agarre). Evita trozos redondos.',
    nutrients: 'Potasio, Vitamina B6, Energía rápida.'
  },
  {
    name: 'Tomate',
    img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&q=80',
    safe_offer: 'Tomates grandes en gajos (cuartos). Tomates cherry SIEMPRE cortados en 4 partes longitudinalmente.',
    nutrients: 'Licopeno, Vitamina C, Hidratación.'
  },
  {
    name: 'Carne',
    img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&q=80',
    safe_offer: 'Ofrecer en tiras largas y fibrosas (que no pueda arrancar trozos grandes) para chupar los jugos, o en hamburguesas muy suaves.',
    nutrients: 'Hierro hemo (alta absorción), Zinc, B12.'
  }
];

const RISKS_DB = [
  { 
    title: 'Miel', 
    desc: 'Riesgo botulismo', 
    icon: 'hive',
    details: 'Prohibida antes de los 12 meses. Puede contener esporas de Clostridium botulinum que el intestino inmaduro del bebé no puede procesar, causando botulismo infantil, una enfermedad grave.'
  },
  { 
    title: 'Azúcar', 
    desc: 'Caries y obesidad', 
    icon: 'cookie',
    details: 'Evitar antes de los 2 años. No aporta nutrientes y predispone a la obesidad, diabetes y caries, además de alterar la preferencia del paladar hacia lo excesivamente dulce.'
  },
  { 
    title: 'Sal', 
    desc: 'Sobrecarga renal', 
    icon: 'salt',
    details: 'Evitar antes de los 12 meses. Los riñones del bebé no están listos para filtrar exceso de sodio. Cocina sin sal y separa la porción del bebé antes de salar para la familia.'
  },
  { 
    title: 'Enteros', 
    desc: 'Riesgo asfixia', 
    icon: 'nut',
    details: 'Frutos secos enteros, uvas enteras, salchichas en rodajas, caramelos duros y popcorn son los principales causantes de atragantamiento. Siempre triturar o cortar adecuadamente.'
  },
];

const GUIDES_DB = [
  { 
    id: 'arcada',
    title: 'Arcada vs Atragantamiento', 
    icon: 'sick', 
    img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80', // Bebé en silla
    content: `
      **Arcada (Gagging):** Es un reflejo de seguridad. Es ruidoso, el bebé se pone rojo, tose y expulsa la comida hacia adelante. ¡Es normal! No intervengas, solo observa con calma.
      
      **Atragantamiento (Choking):** Es silencioso. El bebé no puede toser, ni llorar, ni respirar. Puede ponerse azulado. ¡Requiere intervención inmediata! (Maniobra de Heimlich/RCP).
      
      Es vital aprender a diferenciarlos antes de iniciar la alimentación complementaria.
    `
  },
  { 
    id: 'cuando',
    title: 'Cuándo empezar (Requisitos)', 
    icon: 'calendar_today', 
    img: 'https://mibebeyyo.elmundo.es/images/bebes2/productos-piel-bebe.webp', // Actualizado
    content: `
      La OMS recomienda iniciar a los 6 meses cumplidos.
      
      **Señales de que está listo:**
      1. Se mantiene sentado con mínimo apoyo (control de tronco).
      2. Ha perdido el reflejo de extrusión (no empuja todo con la lengua hacia afuera).
      3. Muestra interés activo por la comida de los adultos.
      4. Puede agarrar objetos y llevarlos a la boca.
      
      No adelantar la alimentación evita problemas digestivos y de alergias.
    `
  },
  { 
    id: 'como',
    title: 'Cómo empezar: BLW vs Papillas', 
    icon: 'high_quality', 
    img: 'https://images.unsplash.com/photo-1563865436874-9aef32095fad?w=400&q=80', // Bebé comiendo con manos
    content: `
      **BLW (Baby Led Weaning):** El bebé come trozos seguros con sus manos. Fomenta la autonomía y la masticación.
      
      **Papillas:** Alimentación con cuchara guiada por el adulto. Transición gradual a texturas.
      
      **BLISS:** Una versión de BLW que pone énfasis en ofrecer siempre: 1 alimento rico en hierro + 1 alimento energético + 1 fruta/verdura en cada comida.
      
      ¡Elige el método que te dé más paz mental! Ambos son válidos si se ofrecen alimentos saludables.
    `
  },
  {
    id: 'alergenos',
    title: 'Introducción de Alérgenos',
    icon: 'warning',
    img: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=400&q=80', // Alimentos varios
    content: `
      **Regla de oro:** Introducirlos uno por uno, por la mañana y en pequeñas cantidades.
      
      **Principales alérgenos:** Huevo, leche, maní, frutos secos, soja, trigo, pescado, mariscos.
      
      Espera 3 días antes de introducir otro alérgeno nuevo para identificar reacciones.
    `
  },
  {
    id: 'agua',
    title: 'El Agua: ¿Cuándo y Cómo?',
    icon: 'water_drop',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQbPAXhAQfUa50B9n_h_cuK7n3M4Y9ArEeA&s', // Actualizado
    content: `
      **Antes de los 6 meses:** Lactancia exclusiva (materna o fórmula). No necesitan agua.
      
      **Desde los 6 meses:** Ofrecer pequeños sorbos de agua en vaso abierto o con pajita/sorbete con las comidas.
      
      **Objetivo:** Aprender a beber, no hidratar (la leche sigue siendo la fuente principal).
    `
  }
];

const BLOG_DB = [
  { 
    title: 'Mi bebé se niega a comer, ¿por qué?', 
    img: 'https://i.blogs.es/3c4d02/2560_3000/840_560.jpg', // Actualizado
    body: "Es normal que el apetito fluctúe. Puede ser por dentición, enfermedad, sueño o simplemente una fase de crecimiento más lenta. No presiones. Ofrece alimentos variados y mantén el ambiente relajado. Si el crecimiento es normal, no hay de qué preocuparse."
  },
  { 
    title: 'Transición a la mesa familiar', 
    img: 'https://images.unsplash.com/photo-1576489922094-2cfe89fb1733?w=800&q=80', // Madre y bebé comiendo
    body: "Alrededor de los 9-10 meses, los bebés mejoran su 'pinza' (dedo índice y pulgar). Es el momento ideal para reducir purés y ofrecer trozos pequeños de lo que come la familia (adaptado sin sal/azúcar). Comer en familia fomenta la imitación."
  },
  { 
    title: 'Snacks seguros para llevar', 
    img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80', // Bebé comiendo fruta
    body: "Lleva básicos no perecederos: avena, mantequilla de maní, bananas o aguacates (se consiguen en todos lados). Un buen babero de silicona y una botella de agua son imprescindibles. ¡Flexibilidad es la clave!"
  },
  {
    title: 'Alivio para la dentición',
    img: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=800&q=80', // Bebé mordiendo juguete
    body: "Ofrecer alimentos fríos (pero no congelados duros) puede ayudar. Bastones de pepino frío, mango frío o un paño limpio húmedo y frío para morder. Evita geles anestésicos y collares de ámbar por riesgo de asfixia."
  },
  {
    title: 'Comer fuera de casa',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', // Restaurante familiar
    body: "No temas llevar a tu bebé a restaurantes. Pide vegetales al vapor sin sal, fruta fresca o lleva algo preparado de casa. La clave es la limpieza de la trona y tener a mano toallitas húmedas."
  }
];

const HomeDashboardView: React.FC<HomeDashboardViewProps> = ({ onNavigate, onOpenSettings }) => {
  const [activeTab, setActiveTab] = useState<'inicio' | 'guias' | 'consejos'>('inicio');
  
  // State para Modales
  const [modalContent, setModalContent] = useState<any | null>(null);
  const [modalType, setModalType] = useState<'tip' | 'food' | 'risk' | 'guide' | 'blog' | null>(null);

  // Tip Aleatorio del día
  const dailyTip = useMemo(() => TIPS_DB[Math.floor(Math.random() * TIPS_DB.length)], []);

  const openModal = (type: 'tip' | 'food' | 'risk' | 'guide' | 'blog', content: any) => {
    setModalType(type);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalType(null);
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-[#f6f8f7] dark:bg-zinc-900 pb-24 transition-colors duration-300 font-sans relative">
      
      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center sticky top-0 z-30 bg-[#f6f8f7]/90 dark:bg-zinc-900/90 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-black text-text-main dark:text-white tracking-tight">Hola, Mamá</h1>
          <p className="text-sm text-text-muted font-medium">¿Qué aprendemos hoy?</p>
        </div>
        <button 
          onClick={onOpenSettings}
          className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Tabs */}
      <div className="px-6 mb-6 flex gap-4 overflow-x-auto hide-scrollbar">
        {['inicio', 'guias', 'consejos'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeTab === tab
                ? 'bg-[#c1f0db] text-[#101915] shadow-lg shadow-[#c1f0db]/30 scale-105'
                : 'bg-white dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 border border-transparent'
            }`}
          >
            {tab === 'inicio' ? 'Inicio' : tab === 'guias' ? 'Guías' : 'Blog & Consejos'}
          </button>
        ))}
      </div>

      <main className="px-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {activeTab === 'inicio' && (
          <>
            {/* Tip del día */}
            <div 
              onClick={() => openModal('tip', dailyTip)}
              className="bg-white dark:bg-zinc-800 rounded-[32px] p-6 shadow-sm border border-zinc-100 dark:border-zinc-700 relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#c1f0db]"></div>
              <div className="inline-block px-3 py-1 bg-[#c1f0db] rounded-full mb-3">
                <span className="text-[10px] font-black text-[#101915] uppercase tracking-widest">Tip del día</span>
              </div>
              <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 leading-snug group-hover:text-[#578e76] transition-colors">
                {dailyTip.short}
              </h3>
              <div className="flex justify-end">
                 <button className="size-8 rounded-full bg-zinc-100 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 group-hover:bg-[#c1f0db] group-hover:text-[#101915] transition-colors">
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                 </button>
              </div>
            </div>

            {/* Alimentos • Cómo ofrecer */}
            <div className="bg-white dark:bg-zinc-800 rounded-[32px] p-6 shadow-sm border border-zinc-100 dark:border-zinc-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-text-main dark:text-white flex items-center gap-2">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-500 p-1 rounded-md material-symbols-outlined text-lg">nutrition</span>
                  Alimentos • Cómo ofrecer
                </h3>
              </div>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                {FOODS_DB.map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => openModal('food', item)}
                    className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group"
                  >
                    <div className="size-20 rounded-2xl bg-zinc-100 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 group-hover:text-primary-dark transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* +800 Recetas Promo */}
            <div 
              onClick={() => onNavigate('recipes')}
              className="relative overflow-hidden rounded-[32px] p-6 shadow-sm cursor-pointer active:scale-95 transition-transform group"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                 <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" className="w-full h-full object-cover" alt="Food background" />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                 <div className="flex justify-between items-start mb-4">
                    <div className="bg-white/20 backdrop-blur-md text-white size-10 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined">restaurant_menu</span>
                    </div>
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-white mb-1">+800 Recetas</h3>
                    <p className="text-sm text-zinc-200 mb-0 font-medium">Saludables, fáciles y rápidas.</p>
                 </div>
              </div>
            </div>

            {/* Banner Alimentos Prohibidos */}
            <div className="bg-red-50 dark:bg-red-900/10 rounded-[32px] p-6 border border-red-100 dark:border-red-900/30">
               <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-red-500 text-2xl">warning</span>
                  <h3 className="font-bold text-red-700 dark:text-red-300">Alimentos Prohibidos</h3>
               </div>
               <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                  {RISKS_DB.map((risk, i) => (
                     <div 
                        key={i} 
                        onClick={() => openModal('risk', risk)}
                        className="min-w-[120px] bg-white dark:bg-zinc-800 p-3 rounded-2xl flex flex-col items-center text-center shadow-sm cursor-pointer hover:bg-red-50 dark:hover:bg-zinc-700 transition-colors"
                     >
                        <span className="material-symbols-outlined text-red-400 mb-1">{risk.icon}</span>
                        <span className="text-xs font-bold text-zinc-800 dark:text-white">{risk.title}</span>
                        <span className="text-[10px] text-zinc-500 leading-tight mt-1">{risk.desc}</span>
                     </div>
                  ))}
               </div>
            </div>
          </>
        )}

        {activeTab === 'guias' && (
          <div className="space-y-4">
             <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">Guía de Alimentación</h2>
             
             {GUIDES_DB.map((guide, i) => (
                <div 
                    key={i} 
                    onClick={() => openModal('guide', guide)}
                    className="bg-white dark:bg-zinc-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform cursor-pointer border border-zinc-100 dark:border-zinc-700 hover:shadow-md"
                >
                   <div className="w-20 h-20 rounded-xl bg-zinc-100 overflow-hidden flex-shrink-0 relative">
                      <img src={guide.img} alt={guide.title} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1">
                      <h3 className="font-bold text-text-main dark:text-white text-sm mb-1">{guide.title}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary-dark bg-primary/10 px-2 py-0.5 rounded-md">
                        Leer guía
                      </span>
                   </div>
                   <span className="material-symbols-outlined text-zinc-300">chevron_right</span>
                </div>
             ))}
          </div>
        )}

        {activeTab === 'consejos' && (
          <div className="space-y-6">
             <div>
                <h2 className="text-lg font-bold text-text-main dark:text-white mb-4">Blog & Consejos</h2>
                <div className="space-y-4">
                  {BLOG_DB.map((blog, i) => (
                    <div 
                        key={i} 
                        onClick={() => openModal('blog', blog)}
                        className="group relative rounded-[24px] overflow-hidden aspect-[16/9] shadow-md cursor-pointer active:scale-[0.98] transition-all"
                    >
                       <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                       {/* Improved Gradient Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                          <span className="material-symbols-outlined text-pink-400 mb-2 bg-white/10 backdrop-blur-md p-1.5 rounded-full w-fit">auto_stories</span>
                          <h3 className="text-white font-bold text-xl leading-tight drop-shadow-sm">{blog.title}</h3>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        )}

      </main>

      {/* --- MODAL DE DETALLE --- */}
      {modalType && modalContent && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white dark:bg-zinc-900 animate-in slide-in-from-bottom duration-300">
            {/* Header Modal */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50">
                <button onClick={closeModal} className="size-10 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <span className="text-xs font-black uppercase tracking-widest text-[#578e76] dark:text-[#a8e5cc]">
                    {modalType === 'tip' ? 'TIP DEL DÍA' : 
                     modalType === 'food' ? 'ALIMENTO' :
                     modalType === 'risk' ? 'PRECAUCIÓN' : 
                     modalType === 'guide' ? 'GUÍA' : 'BLOG'}
                </span>
                <div className="w-10"></div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pb-24">
                {modalType === 'tip' && (
                    <div className="flex flex-col items-center text-center mt-10">
                        <div className="size-20 bg-[#c1f0db] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#c1f0db]/30 animate-in zoom-in duration-300">
                            <span className="material-symbols-outlined text-4xl text-[#101915]">lightbulb</span>
                        </div>
                        <h2 className="text-2xl font-black text-text-main dark:text-white mb-4">{modalContent.title}</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">{modalContent.content}</p>
                    </div>
                )}

                {modalType === 'food' && (
                    <div>
                        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 bg-zinc-100 shadow-sm">
                             <img src={modalContent.img} alt={modalContent.name} className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-3xl font-black text-text-main dark:text-white mb-2">{modalContent.name}</h2>
                        <div className="bg-[#f6f8f7] dark:bg-zinc-800 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 mb-6">
                            <h4 className="font-bold text-sm text-[#578e76] uppercase mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">restaurant</span>
                                Forma Segura de Ofrecer
                            </h4>
                            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{modalContent.safe_offer}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-zinc-400 uppercase mb-2">Nutrientes Clave</h4>
                            <p className="text-zinc-600 dark:text-zinc-400 font-medium">{modalContent.nutrients}</p>
                        </div>
                    </div>
                )}

                {modalType === 'risk' && (
                    <div className="flex flex-col items-center text-center mt-10">
                         <div className="size-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 animate-pulse">
                            <span className="material-symbols-outlined text-5xl text-red-500">{modalContent.icon}</span>
                        </div>
                        <h2 className="text-2xl font-black text-red-600 dark:text-red-400 mb-2">{modalContent.title}</h2>
                        <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-6">{modalContent.desc}</h3>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed bg-red-50 dark:bg-zinc-800 p-6 rounded-2xl text-left border border-red-100 dark:border-red-900/30">
                            {modalContent.details}
                        </p>
                    </div>
                )}

                {modalType === 'guide' && (
                    <div>
                         <div className="w-full aspect-video rounded-3xl overflow-hidden mb-6 bg-zinc-100 relative shadow-sm">
                             <img src={modalContent.img} alt={modalContent.title} className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h2 className="text-2xl font-black text-white leading-tight">{modalContent.title}</h2>
                             </div>
                        </div>
                        <div className="prose dark:prose-invert prose-zinc max-w-none">
                            {modalContent.content.split('\n').map((line: string, i: number) => (
                                line.trim().startsWith('**') ? 
                                <h4 key={i} className="font-bold text-lg mt-6 mb-2 text-[#578e76] flex items-center gap-2">
                                   <span className="size-2 rounded-full bg-[#578e76] inline-block"></span>
                                   {line.replace(/\*\*/g, '')}
                                </h4> :
                                <p key={i} className="text-zinc-600 dark:text-zinc-300 mb-2 leading-relaxed text-base">{line}</p>
                            ))}
                        </div>
                    </div>
                )}

                 {modalType === 'blog' && (
                    <div>
                        <div className="w-full aspect-[2/1] rounded-3xl overflow-hidden mb-6 bg-zinc-100 shadow-sm relative">
                             <img src={modalContent.img} alt={modalContent.title} className="w-full h-full object-cover" />
                             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pink-500 shadow-sm">
                                Blog MamiCook
                             </div>
                        </div>
                        <h2 className="text-2xl font-black text-text-main dark:text-white mb-6 leading-tight">{modalContent.title}</h2>
                        <div className="p-6 bg-[#f6f8f7] dark:bg-zinc-800 rounded-3xl">
                            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-[#c1f0db]">
                                {modalContent.body}
                            </p>
                        </div>
                    </div>
                )}

            </div>
            
            <div className="p-6 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 sticky bottom-0">
                <button 
                    onClick={closeModal}
                    className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl shadow-lg active:scale-[0.98] transition-transform"
                >
                    Entendido
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default HomeDashboardView;
