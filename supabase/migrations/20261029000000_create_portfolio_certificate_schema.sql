-- Migration: Portfolio, Certificates, and Chicken Mapping
-- Author: Daffa Mochammad Azzachrie Portfolio System

-- 1. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  visual_title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  tagline TEXT,
  description TEXT NOT NULL,
  long_description TEXT,
  technologies TEXT[] NOT NULL DEFAULT '{}',
  thumbnail_url TEXT NOT NULL,
  screenshots TEXT[] DEFAULT '{}',
  github_url TEXT,
  demo_url TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  highlight_position TEXT,
  featured BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Certificates Table
CREATE TABLE IF NOT EXISTS public.certificates (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  issuer TEXT NOT NULL,
  year INTEGER,
  image_url TEXT NOT NULL,
  verification_url TEXT,
  category_id TEXT NOT NULL,
  category_name TEXT,
  description TEXT,
  skills TEXT[] DEFAULT '{}',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3. Chickens Table
CREATE TABLE IF NOT EXISTS public.chickens (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  sprite_url TEXT NOT NULL,
  initial_x_percent NUMERIC NOT NULL DEFAULT 50,
  initial_y_percent NUMERIC NOT NULL DEFAULT 50,
  direction TEXT NOT NULL DEFAULT 'right',
  duration_seconds NUMERIC NOT NULL DEFAULT 20,
  wander_distance_percent NUMERIC NOT NULL DEFAULT 12,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. Chicken to Certificates Mapping Table
CREATE TABLE IF NOT EXISTS public.chicken_certificates (
  chicken_id TEXT NOT NULL REFERENCES public.chickens(id) ON DELETE CASCADE,
  certificate_id TEXT NOT NULL REFERENCES public.certificates(id) ON DELETE CASCADE,
  display_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (chicken_id, certificate_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chickens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chicken_certificates ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
DROP POLICY IF EXISTS "Public projects are readable by all" ON public.projects;
CREATE POLICY "Public projects are readable by all" ON public.projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public certificates are readable by all" ON public.certificates;
CREATE POLICY "Public certificates are readable by all" ON public.certificates FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public chickens are readable by all" ON public.chickens;
CREATE POLICY "Public chickens are readable by all" ON public.chickens FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public chicken_certificates are readable by all" ON public.chicken_certificates;
CREATE POLICY "Public chicken_certificates are readable by all" ON public.chicken_certificates FOR SELECT USING (true);
