import { Project, PortfolioCategory } from "../../types/portfolio";

export const initialProjects: Project[] = [
  // ================= APLIKASI =================
  {
    id: "checked-app",
    title: "CheckED - Eating Disorder Screening",
    visualTitle: "aplikasi",
    slug: "checked-app",
    category: "mobile",
    categoryGroup: "aplikasi",
    categoryLabel: "Aplikasi Mobile",
    tagline: "Aplikasi Android untuk skrining awal gangguan makan berbasis kuesioner medis",
    description:
      "Aplikasi Android untuk membantu skrining awal indikasi eating disorder. Memproses kuesioner secara otomatis dan memberikan edukasi pola makan sehat.",
    longDescription:
      "CheckED dibuat menggunakan Kotlin dan Jetpack Compose dengan arsitektur MVVM. Aplikasi ini memproses kuesioner medis terstandar langsung di perangkat (offline-first), menghitung skor risiko, dan menampilkan hasil evaluasi beserta saran preventif.",
    keyPoints: [
      "Kuesioner interaktif dengan kalkulasi skor risiko instan",
      "Penyimpanan riwayat tes secara lokal dengan Room Database",
      "UI modern menggunakan Jetpack Compose dan Material 3",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android", "Room DB", "MVVM"],
    thumbnailUrl: "/images/projects/checked-app.png",
    screenshots: [
      "/images/cards/card-aplikasi.jpg",
      "/images/projects/checked-app.png",
    ],
    githubUrl: "https://github.com/daffamochammad",
    display_order: 1,
    highlightCardPosition: "left-bottom",
    featured: true,
  },
  {
    id: "habit-tracker-app",
    title: "Habit & Water Tracker",
    visualTitle: "aplikasi",
    slug: "habit-tracker",
    category: "mobile",
    categoryGroup: "aplikasi",
    categoryLabel: "Aplikasi Mobile",
    tagline: "Aplikasi Android untuk memantau konsumsi air dan kebiasaan harian",
    description:
      "Aplikasi pencatat rutinitas harian dengan pengingat otomatis dan visualisasi progress mingguan.",
    longDescription:
      "Aplikasi Android native yang dirancang untuk membantu pengguna membangun kebiasaan hidup sehat, seperti minum air tepat waktu dan mencatat aktivitas harian. Menggunakan WorkManager untuk notifikasi terjadwal yang hemat baterai.",
    keyPoints: [
      "Pengingat terjadwal hemat daya menggunakan Android WorkManager",
      "Grafik progres mingguan interaktif",
      "Navigasi simpel dan responsif",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "WorkManager", "StateFlow"],
    thumbnailUrl: "/images/projects/checked-app.png",
    screenshots: [
      "/images/projects/checked-app.png",
      "/images/cards/card-aplikasi.jpg",
    ],
    githubUrl: "https://github.com/daffamochammad",
    display_order: 2,
    featured: false,
  },

  // ================= KONSEP ANALIS =================
  {
    id: "journal-analysis",
    title: "Klasifikasi Jurnal Ilmiah (Analisis IndoBERT)",
    visualTitle: "Konsep Analis",
    slug: "analisis-jurnal-indobert",
    category: "data-analysis",
    categoryGroup: "analis",
    categoryLabel: "Analisis Data",
    tagline: "Analisis pemrosesan teks abstrak jurnal teknologi dan evaluasi model IndoBERT",
    description:
      "Eksplorasi pra-pemrosesan teks abstrak jurnal dan analisis performa fine-tuning IndoBERT untuk klasifikasi multi-topik.",
    longDescription:
      "Riset ini menganalisis dataset abstrak jurnal berbahasa Indonesia dalam kategori Machine Learning, IoT, dan Cybersecurity. Meliputi tahapan text cleaning, subword tokenization IndoBERT, serta evaluasi metrik akurasi (Precision, Recall, F1-Score) untuk mengukur performa model pada teks ilmiah.",
    keyPoints: [
      "Evaluasi tokenisasi IndoBERT pada istilah teknologi campuran bahasa Indonesia-Inggris",
      "Performa optimal pada kategori Machine Learning dengan F1-score 92%",
      "Analisis kurva training loss yang stabil tanpa overfitting",
    ],
    technologies: ["Python", "IndoBERT", "PyTorch", "Transformers", "Scikit-Learn", "Matplotlib"],
    thumbnailUrl: "/images/projects/journal-analysis.png",
    screenshots: [
      "/images/cards/card-konsep-analis.jpg",
      "/images/projects/journal-analysis.png",
    ],
    githubUrl: "https://github.com/daffamochammad",
    display_order: 3,
    highlightCardPosition: "right-top",
    featured: true,
  },
  {
    id: "customer-churn-analysis",
    title: "Customer Churn & Cohort Analysis",
    visualTitle: "Konsep Analis",
    slug: "customer-churn-analysis",
    category: "data-analysis",
    categoryGroup: "analis",
    categoryLabel: "Analisis Data",
    tagline: "Analisis pola retensi pelanggan telekomunikasi dan pemodelan prediktif",
    description:
      "Eksplorasi data untuk memahami faktor utama yang mempengaruhi pembatalan langganan (churn) pengguna.",
    longDescription:
      "Menganalisis korelasi data pelanggan menggunakan metode EDA, korelasi fitur, dan segmentasi cohort. Menguji algoritma klasifikasi (Random Forest & XGBoost) untuk mendeteksi profil pelanggan berisiko tinggi.",
    keyPoints: [
      "Identifikasi faktor kontrak bulanan sebagai pemicu utama potensi churn",
      "Analisis cohort retensi pengguna pada 90 hari pertama",
      "Penanganan dataset imbalanced menggunakan teknik SMOTE",
    ],
    technologies: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Seaborn"],
    thumbnailUrl: "/images/projects/journal-analysis.png",
    screenshots: [
      "/images/projects/journal-analysis.png",
      "/images/cards/card-konsep-analis.jpg",
    ],
    githubUrl: "https://github.com/daffamochammad",
    display_order: 4,
    featured: false,
  },

  // ================= WEB & MACHINE LEARNING =================
  {
    id: "journal-ml-web",
    title: "Web App Deteksi Topik Jurnal (IndoBERT)",
    visualTitle: "web & Machine learning",
    slug: "web-klasifikasi-jurnal",
    category: "ml-web",
    categoryGroup: "ml-web",
    categoryLabel: "Web & ML",
    tagline: "Aplikasi web interaktif untuk klasifikasi abstrak jurnal secara real-time",
    description:
      "Antarmuka web interaktif berbasis Streamlit untuk menguji model klasifikasi jurnal dengan visualisasi probabilitas prediksi.",
    longDescription:
      "Aplikasi web yang menghubungkan model IndoBERT secara langsung dengan pengguna. Pengguna cukup memasukkan abstrak artikel untuk melihat prediksi topik beserta persentase probabilitas tiap kategori secara instan.",
    keyPoints: [
      "Inferensi model langsung dengan visualisasi probabilitas multi-kelas",
      "Riwayat pencarian sesi untuk kemudahan perbandingan teks",
      "Desain antarmuka responsif bernuansa dark mode",
    ],
    technologies: ["Python", "Streamlit", "IndoBERT", "PyTorch", "NLP"],
    thumbnailUrl: "/images/projects/journal-ml-web.png",
    screenshots: [
      "/images/cards/card-web-ml.jpg",
      "/images/projects/journal-ml-web.png",
    ],
    githubUrl: "https://github.com/daffamochammad",
    display_order: 5,
    highlightCardPosition: "right-bottom",
    featured: true,
  },
  {
    id: "sentiment-web-dashboard",
    title: "Web Analisis Sentimen Teks",
    visualTitle: "web & Machine learning",
    slug: "sentiment-web-dashboard",
    category: "ml-web",
    categoryGroup: "ml-web",
    categoryLabel: "Web & ML",
    tagline: "Dashboard interaktif untuk analisis sentimen teks opini publik",
    description:
      "Aplikasi web untuk menganalisis sentimen kalimat atau berkas CSV secara cepat dengan grafik visual interaktif.",
    longDescription:
      "Dashboard web yang memudahkan pemrosesan sentimen teks bahasa Indonesia. Mendukung input teks langsung maupun batch file CSV dengan visualisasi grafik distribusi sentimen (positif, netral, negatif).",
    keyPoints: [
      "Dukungan input teks langsung dan upload batch file CSV",
      "Grafik visual interaktif distribusi sentimen",
      "Ekspor hasil analisis ke format spreadsheet",
    ],
    technologies: ["Python", "Streamlit", "Transformers", "Plotly", "Pandas"],
    thumbnailUrl: "/images/projects/journal-ml-web.png",
    screenshots: [
      "/images/projects/journal-ml-web.png",
      "/images/cards/card-web-ml.jpg",
    ],
    githubUrl: "https://github.com/daffamochammad",
    display_order: 6,
    featured: false,
  },
];

export const initialCategories: PortfolioCategory[] = [
  {
    id: "aplikasi",
    visualTitle: "aplikasi",
    title: "Aplikasi",
    subtitle: "Koleksi aplikasi mobile dan software",
    highlightPosition: "left-bottom",
    thumbnailUrl: "/images/cards/card-aplikasi.jpg",
    projects: initialProjects.filter((p) => p.categoryGroup === "aplikasi" || p.category === "mobile"),
  },
  {
    id: "analis",
    visualTitle: "Konsep Analis",
    title: "Konsep Analis",
    subtitle: "Hasil analisis data dan riset konsep",
    highlightPosition: "right-top",
    thumbnailUrl: "/images/cards/card-konsep-analis.jpg",
    projects: initialProjects.filter((p) => p.categoryGroup === "analis" || p.category === "data-analysis"),
  },
  {
    id: "ml-web",
    visualTitle: "web & Machine learning",
    title: "Web & Machine Learning",
    subtitle: "Aplikasi web interaktif dan machine learning",
    highlightPosition: "right-bottom",
    thumbnailUrl: "/images/cards/card-web-ml.jpg",
    projects: initialProjects.filter((p) => p.categoryGroup === "ml-web" || p.category === "ml-web"),
  },
];
