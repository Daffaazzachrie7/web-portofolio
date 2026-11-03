# Portfolio Website - Daffa Mochammad Azzachrie (Home Page)

Website portofolio profesional dan modern untuk **Daffa Mochammad Azzachrie** yang dibangun dengan fokus pada akurasi visual tinggi terhadap desain referensi, interaktivitas yang mulus, dan arsitektur kode modern.

---

## 🚀 Fitur Halaman Home

- **Hero Visual Langit Biru**: Menampilkan background awan dan langit biru (`public/images/sky-background.jpg`) yang luas dan atmosferik, dengan overlay kontras halus agar teks terbaca jelas.
- **Navbar Kapsul Transparan**:
  - Identitas/Logo teks di kiri atas: `|d.azzachrie` dengan sub-keterangan `>_ Data Analyst & Mobile`.
  - Navigasi berbentuk kapsul (*pill shape*) dengan *backdrop blur*, item aktif `home` dengan *highlight pill*, serta item placeholder visual (`Projects`, `certificate`, `contact`) tanpa membuat halaman dummy.
- **Identitas Hero Utama**:
  - Nama 3 baris tebal, miring (*italic*), dan putih: `Daffa Mochammad Azzachrie`.
  - Subjudul: `Data Analyst | Software Development | UI/UX & Mobile Engineering`.
- **Tiga Tombol Aksi Nyata**:
  - **Detail**: Membuka modal interaktif pop-up dengan tab About, Skills, dan Experience.
  - **Download CV**: Mengunduh file CV asli/resmi (`public/documents/cv.pdf`).
  - **Github**: Membuka profil GitHub resmi pada tab baru dengan atribut keamanan `noopener,noreferrer`.
- **Modal Detail Interaktif**:
  - Desain panel biru `#285B9D` dengan border putih tebal (7-8px) dan sudut membulat.
  - Tombol Close berbentuk kotak putih dengan ikon **X** biru di pojok kanan atas.
  - Tab navigasi di bagian atas:
    - **About**: Teks profil ringkas 3 paragraf dan foto profil resmi (`public/images/profile.png`).
    - **Skills**: 11 keterampilan dengan ikon `+` (Plus) tebal berwarna putih dan susunan responsif (*wrapped*).
    - **Experience**: Pengalaman Studi Independen di Infinite Learning Indonesia dengan interaksi accordion (*expand/collapse*).
  - Aksesibilitas keyboard (Escape untuk menutup, fokus kembali ke tombol Detail, *background scroll lock*).
  - Scroll internal khusus (*custom scrollbar*) saat konten melebihi tinggi panel.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15 (App Router)
- **Library UI**: React 19
- **Bahasa**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`, CSS theme variables)
- **Database & Backend**: Supabase PostgreSQL & `@supabase/supabase-js`
- **Icons**: Lucide React
- **Package Manager**: npm
- **Deployment Platform**: Vercel

---

## 📁 Struktur Folder Proyek

```text
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Konfigurasi Tailwind CSS v4 & theme variables
│   ├── layout.tsx               # Root layout dengan Next.js metadata & viewport
│   └── page.tsx                 # Server Component halaman Home (dengan fallback data)
├── components/
│   ├── home/
│   │   └── HeroSection.tsx      # Komponen utama Hero & trigger interaksi
│   ├── layout/
│   │   └── Navbar.tsx           # Navbar kapsul & identitas brand
│   ├── profile/
│   │   ├── DetailModal.tsx      # Modal utama pop-up card
│   │   ├── AboutTab.tsx         # Konten tab About (deskripsi + foto)
│   │   ├── SkillsTab.tsx        # Konten tab Skills (+ icons)
│   │   └── ExperienceTab.tsx    # Konten tab Experience (accordion)
│   └── ui/
│       └── Button.tsx           # Reusable Button (varian primary & navy)
├── lib/
│   ├── supabase/
│   │   ├── client.ts            # Supabase client-side instance
│   │   └── server.ts            # Supabase server-side helper
│   └── utils.ts                 # Classname utility (cn)
├── public/
│   ├── documents/
│   │   └── cv.pdf               # File CV siap unduh
│   └── images/
│       ├── profile.png          # Foto profil resmi Daffa
│       └── sky-background.jpg   # Background awan biru resolusi tinggi
├── supabase/
│   └── migrations/
│       └── 20250101000000_create_portfolio_tables.sql # Skema database & RLS
├── types/
│   └── portfolio.ts             # Definisi TypeScript untuk Skill, Experience, dll.
├── .env.example
├── .env.local
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 💻 Panduan Menjalankan Secara Lokal

### 1. Prasyarat
Pastikan Node.js (v18.17+ atau v20+) dan npm telah terpasang di komputer Anda.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Jika belum menghubungkan ke Supabase, biarkan variabel Supabase kosong. Aplikasi secara otomatis menggunakan data statis bawaan sehingga tetap berjalan 100% sempurna tanpa konfigurasi database awal.

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GITHUB_URL=https://github.com/daffamochammad
```

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 5. Membangun untuk Produksi (Production Build)
```bash
npm run build
npm start
```

---

## 🗄️ Konfigurasi Supabase (Opsional)

Jika ingin mengelola daftar skills atau pengalaman secara dinamis melalui Supabase:

1. Buat proyek baru di [supabase.com](https://supabase.com).
2. Buka menu **SQL Editor** pada dashboard Supabase.
3. Jalankan skrip migrasi yang tersedia pada file:
   `supabase/migrations/20250101000000_create_portfolio_tables.sql`
4. Dapatkan **Project URL** dan **anon public key** dari menu **Project Settings > API**.
5. Isi nilai tersebut ke dalam file `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://proyek-anda.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsIn...
   ```

Tabel telah dilengkapi dengan **Row Level Security (RLS)** sehingga data hanya dapat dibaca oleh publik (*read-only*), menjamin keamanan penuh.

---

## 🌐 Panduan Deployment ke Vercel

1. Push kode ke repository GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: complete home page portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
2. Kunjungi [vercel.com](https://vercel.com) dan login.
3. Pilih **Add New > Project**, lalu impor repositori GitHub Anda.
4. Di bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_GITHUB_URL`
   - `NEXT_PUBLIC_SUPABASE_URL` (opsional jika menggunakan Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (opsional jika menggunakan Supabase)
5. Klik **Deploy**. Vercel akan otomatis membangun dan merilis website portofolio Anda.
