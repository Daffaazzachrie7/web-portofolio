import { Certificate } from "../../types/certificate";

export const initialCertificates: Certificate[] = [
  // Ayam 1: Data Science
  {
    id: "cert-ds-01",
    title: "Data Science & Data Analytics Specialization",
    issuer: "Universitas Gunadarma / Digital Talent Scholarship",
    year: 2024,
    imageUrl: "/images/certificates/cert-data-science.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "data-science",
    categoryName: "Data Science & Analytics",
    description:
      "Sertifikasi kompetensi dalam bidang analisis data, statistika inferensial, eksplorasi data mendalam, pemodelan data prediktif, dan visualisasi wawasan bisnis menggunakan Python dan SQL.",
    skills: ["Python", "Data Analysis", "SQL", "Pandas", "Statistical Modeling"],
    display_order: 1,
  },
  {
    id: "cert-ds-02",
    title: "Applied Data Analysis & Business Intelligence",
    issuer: "Digital Talent Academy",
    year: 2023,
    imageUrl: "/images/certificates/cert-data-science.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "data-science",
    categoryName: "Data Science & Analytics",
    description:
      "Penguasaan teknik visualisasi data analitis, perancangan dashboard metrik performa, dan pembersihan dataset berskala besar.",
    skills: ["Data Cleaning", "Data Visualization", "Business Analytics"],
    display_order: 2,
  },

  // Ayam 2: Android Development
  {
    id: "cert-android-01",
    title: "Android Mobile Application Development & UI/UX",
    issuer: "Infinite Learning Indonesia",
    year: 2024,
    imageUrl: "/images/certificates/cert-android.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "android",
    categoryName: "Android Development",
    description:
      "Penyelesaian program intensif Studi Independen bersertifikat yang berfokus pada ekosistem native Android modern menggunakan Kotlin, Jetpack Compose, arsitektur MVVM, dan integrasi API RESTful.",
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "MVVM", "Room Database"],
    display_order: 1,
  },
  {
    id: "cert-android-02",
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: 2023,
    imageUrl: "/images/certificates/cert-android.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "android",
    categoryName: "Android Development",
    description:
      "Fondasi fundamental pengembangan aplikasi mobile Android, daur hidup Activity, Layouting, dan pemanfaatan Intent serta RecyclerView.",
    skills: ["Android Studio", "Kotlin", "UI Layouts"],
    display_order: 2,
  },

  // Ayam 3: UI/UX
  {
    id: "cert-uiux-01",
    title: "UI/UX Design & Interactive Prototyping",
    issuer: "Infinite Learning / Google For Education",
    year: 2024,
    imageUrl: "/images/certificates/cert-uiux.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "uiux",
    categoryName: "UI/UX Design",
    description:
      "Sertifikasi dalam perancangan User Interface dan User Experience dari tahap user research, wireframing, design system, hingga interactive high-fidelity prototyping berbasis Figma.",
    skills: ["Figma", "User Research", "Wireframing", "Design System", "Prototyping"],
    display_order: 1,
  },

  // Ayam 4: Machine Learning & NLP
  {
    id: "cert-ml-01",
    title: "Natural Language Processing & Machine Learning with Transformers",
    issuer: "Universitas Gunadarma Research Center",
    year: 2025,
    imageUrl: "/images/certificates/cert-machine-learning.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "machine-learning",
    categoryName: "Machine Learning & NLP",
    description:
      "Sertifikasi riset dan implementasi kecerdasan buatan berbasis deep learning, transfer learning arsitektur BERT (IndoBERT), klasifikasi multi-kelas, dan evaluasi model NLP terapan.",
    skills: ["Machine Learning", "NLP", "IndoBERT", "Transformers", "PyTorch"],
    display_order: 1,
  },
  {
    id: "cert-ml-02",
    title: "Machine Learning Foundations & Supervised Learning",
    issuer: "Dicoding Indonesia / Google",
    year: 2023,
    imageUrl: "/images/certificates/cert-machine-learning.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "machine-learning",
    categoryName: "Machine Learning & NLP",
    description:
      "Pemahaman konsep dasar machine learning, regresi linier, klasifikasi, decision trees, serta evaluasi metrik akurasi dan regularisasi.",
    skills: ["Scikit-Learn", "Regression", "Classification", "Feature Engineering"],
    display_order: 2,
  },

  // Ayam 5: Sertifikat Lainnya / Soft Skills & Tech Foundations
  {
    id: "cert-other-01",
    title: "Information Technology & Software Engineering Competence",
    issuer: "Universitas Gunadarma",
    year: 2025,
    imageUrl: "/images/certificates/cert-other.png",
    verificationUrl: "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
    categoryId: "other",
    categoryName: "Other Certifications & Competence",
    description:
      "Kompetensi akademis dan keikutsertaan program lokakarya pengembangan sistem informasi, kolaborasi tim pengembang, Version Control (Git/GitHub), dan etika profesi teknologi informasi.",
    skills: ["Git", "GitHub", "Team Collaboration", "Agile Basics", "Software Engineering"],
    display_order: 1,
  },
];
