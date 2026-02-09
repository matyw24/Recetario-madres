
-- --- LIMPIEZA INICIAL ---
-- Si ya existen las tablas (quizás de un intento anterior), las borramos para empezar limpio.
-- CUIDADO: Esto borrará los datos si ya tienes algo guardado.
DROP TABLE IF EXISTS pantry CASCADE;
DROP TABLE IF EXISTS freezer_items CASCADE;
DROP TABLE IF EXISTS shopping_items CASCADE;

-- 1. Tabla para la Despensa (Pantry)
-- Guarda solo los IDs de los ingredientes seleccionados para persistir el estado "tengo esto".
create table pantry (
  item_id text primary key
);

-- 2. Tabla para el Freezer
-- Almacena los items congelados, cantidad y tips de descongelado.
create table freezer_items (
  id text primary key,
  name text not null,
  description text,
  quantity numeric default 1,
  image_url text,
  reheating_tips text[] -- Array de texto para guardar múltiples tips
);

-- 3. Tabla para la Lista de Compras
-- Items pendientes por comprar.
create table shopping_items (
  id text primary key,
  name text not null,
  category text,
  checked boolean default false
);

-- --- SEGURIDAD (Row Level Security - RLS) ---
-- Habilitamos RLS en todas las tablas.
alter table pantry enable row level security;
alter table freezer_items enable row level security;
alter table shopping_items enable row level security;

-- --- POLÍTICAS DE ACCESO ---
-- Como la app actual no tiene un sistema de Login de usuarios (Auth),
-- creamos políticas públicas para permitir leer y escribir desde la app.

-- Política para Despensa
create policy "Public Access Pantry" 
on pantry for all 
using (true) 
with check (true);

-- Política para Freezer
create policy "Public Access Freezer" 
on freezer_items for all 
using (true) 
with check (true);

-- Política para Compras
create policy "Public Access Shopping" 
on shopping_items for all 
using (true) 
with check (true);
