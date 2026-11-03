-- =========================================================
-- MASTER SETUP SCRIPT FOR DAFFA MOCHAMMAD AZZACHRIE PORTFOLIO
-- Jalankan skrip ini sekali di menu SQL Editor di dashboard Supabase Anda.
-- =========================================================

-- 1. TABEL SKILLS
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. TABEL EXPERIENCES
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

-- 3. TABEL PROJECTS
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    visual_title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL DEFAULT 'general',
    category_group TEXT DEFAULT 'aplikasi',
    category_label TEXT DEFAULT 'Aplikasi Mobile',
    tagline TEXT,
    description TEXT NOT NULL,
    long_description TEXT,
    key_points TEXT[] DEFAULT '{}',
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

-- 4. TABEL CERTIFICATES
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

-- 5. TABEL CHICKENS (AYAM ANIMASI)
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

-- 6. TABEL CHICKEN_CERTIFICATES (MAPPING AYAM DENGAN SERTIFIKAT)
CREATE TABLE IF NOT EXISTS public.chicken_certificates (
    chicken_id TEXT NOT NULL REFERENCES public.chickens(id) ON DELETE CASCADE,
    certificate_id TEXT NOT NULL REFERENCES public.certificates(id) ON DELETE CASCADE,
    display_order INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (chicken_id, certificate_id)
);

-- AKTIFKAN ROW LEVEL SECURITY (RLS)
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chickens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chicken_certificates ENABLE ROW LEVEL SECURITY;

-- IZINKAN PUBLIK UNTUK MEMBACA DATA (SELECT)
DROP POLICY IF EXISTS "Public skills are readable by all" ON public.skills;
CREATE POLICY "Public skills are readable by all" ON public.skills FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public experiences are readable by all" ON public.experiences;
CREATE POLICY "Public experiences are readable by all" ON public.experiences FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public projects are readable by all" ON public.projects;
CREATE POLICY "Public projects are readable by all" ON public.projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public certificates are readable by all" ON public.certificates;
CREATE POLICY "Public certificates are readable by all" ON public.certificates FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public chickens are readable by all" ON public.chickens;
CREATE POLICY "Public chickens are readable by all" ON public.chickens FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public chicken_certificates are readable by all" ON public.chicken_certificates;
CREATE POLICY "Public chicken_certificates are readable by all" ON public.chicken_certificates FOR SELECT USING (true);

-- SEED DATA AWAL: PROJECTS
INSERT INTO public.projects (
    id, title, visual_title, slug, category, category_group, category_label, tagline, description, long_description, key_points, technologies, thumbnail_url, screenshots, github_url, display_order, highlight_position, featured
) VALUES
(
    'checked-app',
    'CheckED - Eating Disorder Screening',
    'aplikasi',
    'checked-app',
    'mobile',
    'aplikasi',
    'Aplikasi Mobile',
    'Aplikasi Android untuk skrining awal gangguan makan berbasis kuesioner medis',
    'Aplikasi Android untuk membantu skrining awal indikasi eating disorder. Memproses kuesioner secara otomatis dan memberikan edukasi pola makan sehat.',
    'CheckED dibuat menggunakan Kotlin dan Jetpack Compose dengan arsitektur MVVM. Aplikasi ini memproses kuesioner medis terstandar langsung di perangkat (offline-first), menghitung skor risiko, dan menampilkan hasil evaluasi beserta saran preventif.',
    ARRAY['Kuesioner interaktif dengan kalkulasi skor risiko instan', 'Penyimpanan riwayat tes secara lokal dengan Room Database', 'UI modern menggunakan Jetpack Compose dan Material 3'],
    ARRAY['Kotlin', 'Jetpack Compose', 'Android', 'Room DB', 'MVVM'],
    '/images/cards/card-aplikasi.jpg',
    ARRAY['/images/cards/card-aplikasi.jpg', '/images/projects/checked-app.png'],
    'https://github.com/daffamochammad',
    1,
    'left-bottom',
    true
),
(
    'journal-analysis',
    'Klasifikasi Jurnal Ilmiah (Analisis IndoBERT)',
    'Konsep Analis',
    'analisis-jurnal-indobert',
    'data-analysis',
    'analis',
    'Analisis Data',
    'Analisis pemrosesan teks abstrak jurnal teknologi dan evaluasi model IndoBERT',
    'Eksplorasi pra-pemrosesan teks abstrak jurnal dan analisis performa fine-tuning IndoBERT untuk klasifikasi multi-topik.',
    'Riset ini menganalisis dataset abstrak jurnal berbahasa Indonesia dalam kategori Machine Learning, IoT, dan Cybersecurity. Meliputi tahapan text cleaning, subword tokenization IndoBERT, serta evaluasi metrik akurasi (Precision, Recall, F1-Score) untuk mengukur performa model pada teks ilmiah.',
    ARRAY['Evaluasi tokenisasi IndoBERT pada istilah teknologi campuran bahasa Indonesia-Inggris', 'Performa optimal pada kategori Machine Learning dengan F1-score 92%', 'Analisis kurva training loss yang stabil tanpa overfitting'],
    ARRAY['Python', 'IndoBERT', 'PyTorch', 'Transformers', 'Scikit-Learn', 'Matplotlib'],
    '/images/cards/card-konsep-analis.jpg',
    ARRAY['/images/cards/card-konsep-analis.jpg', '/images/projects/journal-analysis.png'],
    'https://github.com/daffamochammad',
    2,
    'right-top',
    true
),
(
    'journal-ml-web',
    'Web App Deteksi Topik Jurnal (IndoBERT)',
    'web & Machine learning',
    'web-klasifikasi-jurnal',
    'ml-web',
    'ml-web',
    'Web & ML',
    'Aplikasi web interaktif untuk klasifikasi abstrak jurnal secara real-time',
    'Antarmuka web interaktif berbasis Streamlit untuk menguji model klasifikasi jurnal dengan visualisasi probabilitas prediksi.',
    'Aplikasi web yang menghubungkan model IndoBERT secara langsung dengan pengguna. Pengguna cukup memasukkan abstrak artikel untuk melihat prediksi topik beserta persentase probabilitas tiap kategori secara instan.',
    ARRAY['Inferensi model langsung dengan visualisasi probabilitas multi-kelas', 'Riwayat pencarian sesi untuk kemudahan perbandingan teks', 'Desain antarmuka responsif bernuansa dark mode'],
    ARRAY['Python', 'Streamlit', 'IndoBERT', 'PyTorch', 'NLP'],
    '/images/cards/card-web-ml.jpg',
    ARRAY['/images/cards/card-web-ml.jpg', '/images/projects/journal-ml-web.png'],
    'https://github.com/daffamochammad',
    3,
    'right-bottom',
    true
)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    visual_title = EXCLUDED.visual_title,
    tagline = EXCLUDED.tagline,
    description = EXCLUDED.description,
    long_description = EXCLUDED.long_description,
    key_points = EXCLUDED.key_points,
    technologies = EXCLUDED.technologies,
    thumbnail_url = EXCLUDED.thumbnail_url,
    screenshots = EXCLUDED.screenshots;

-- SEED DATA AWAL: SKILLS
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

-- SEED DATA AWAL: EXPERIENCES
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

-- SEED DATA AWAL: CERTIFICATES
INSERT INTO public.certificates (id, title, issuer, year, image_url, verification_url, category_id, category_name, description, skills, display_order) VALUES
(
    'cert-ds-01',
    'Data Science & Data Analytics Specialization',
    'Universitas Gunadarma / Digital Talent Scholarship',
    2024,
    '/images/certificates/cert-data-science.png',
    'https://www.linkedin.com/in/daffa-mochammad-azzachrie',
    'data-science',
    'Data Science & Analytics',
    'Sertifikasi kompetensi dalam bidang analisis data, statistika inferensial, eksplorasi data mendalam, pemodelan data prediktif, dan visualisasi wawasan bisnis menggunakan Python dan SQL.',
    ARRAY['Python', 'Data Analysis', 'SQL', 'Pandas', 'Statistical Modeling'],
    1
),
(
    'cert-android-01',
    'Android Mobile Application Development & UI/UX',
    'Infinite Learning Indonesia',
    2024,
    '/images/certificates/cert-android.png',
    'https://www.linkedin.com/in/daffa-mochammad-azzachrie',
    'android',
    'Android Development',
    'Penyelesaian program intensif Studi Independen bersertifikat yang berfokus pada ekosistem native Android modern menggunakan Kotlin, Jetpack Compose, arsitektur MVVM, dan integrasi API RESTful.',
    ARRAY['Kotlin', 'Jetpack Compose', 'Android SDK', 'MVVM', 'Room Database'],
    2
)
ON CONFLICT (id) DO NOTHING;

-- SEED DATA AWAL: CHICKENS
INSERT INTO public.chickens (id, label, sprite_url, initial_x_percent, initial_y_percent, direction, duration_seconds, wander_distance_percent, display_order) VALUES
('chicken-1', 'Sertifikat Data Science & Analytics', '/images/chickens/chicken-scroll.png', 16, 24, 'right', 16, 18, 1),
('chicken-2', 'Sertifikat Android Development', '/images/chickens/chicken-scroll.png', 50, 30, 'left', 20, 16, 2)
ON CONFLICT (id) DO NOTHING;

-- SEED DATA AWAL: CHICKEN CERTIFICATES MAPPING
INSERT INTO public.chicken_certificates (chicken_id, certificate_id, display_order) VALUES
('chicken-1', 'cert-ds-01', 1),
('chicken-2', 'cert-android-01', 2)
ON CONFLICT (chicken_id, certificate_id) DO NOTHING;
