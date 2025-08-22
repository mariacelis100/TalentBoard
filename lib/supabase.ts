import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
// Necesitarás reemplazar estos valores con los de tu proyecto
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Para Prisma, usaremos la URL directa de PostgreSQL
export const getDatabaseUrl = () => {
  // Esta URL debe ser reemplazada con la URL real de tu proyecto Supabase
  // Formato: postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
  return process.env.DATABASE_URL || 'postgresql://postgres:12345678@db.profesor-empre.supabase.co:5432/postgres';
}; 