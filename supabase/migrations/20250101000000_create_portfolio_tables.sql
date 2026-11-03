-- Migration: 20250101000000_create_portfolio_tables.sql
-- Description: Create tables for portfolio skills and experiences with Row Level Security (RLS)

-- 1. Create skills table
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create experiences table
CREATE TABLE IF NOT EXISTS public.experiences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    organization TEXT,
    field TEXT,
    period TEXT,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;

-- 4. Public read-only policies (Visitors can only read)
CREATE POLICY "Allow public read-only access on skills"
    ON public.skills
    FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Allow public read-only access on experiences"
    ON public.experiences
    FOR SELECT
    TO public
    USING (true);

-- 5. Seed initial data
INSERT INTO public.skills (name, display_order) VALUES
    ('Python', 1),
    ('Kotlin', 2),
    ('Java', 3),
    ('Streamlit', 4),
    ('React', 5),
    ('Natural Language Processing (NLP)', 6),
    ('Android Development', 7),
    ('Git / GitHub', 8),
    ('Machine Learning', 9),
    ('Team Collaboration', 10),
    ('Fast Learner', 11)
ON CONFLICT DO NOTHING;

INSERT INTO public.experiences (title, organization, field, period, description, display_order) VALUES
    (
        'Studi Independen',
        'Infinite Learning Indonesia',
        'Android Mobile Application Development & UI/UX',
        'ATA 2024–2025',
        'Mengikuti program Studi Independen yang berfokus pada pengembangan aplikasi Android dan UI/UX. Kegiatan meliputi pembelajaran Kotlin, Jetpack Compose, prinsip desain antarmuka, dan kolaborasi dalam tim proyek.',
        1
    )
ON CONFLICT DO NOTHING;
