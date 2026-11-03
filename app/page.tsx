import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { PortfolioSection } from "../components/portfolio/PortfolioSection";
import { MountainLayer } from "../components/landscape/MountainLayer";
import { ForestLayer } from "../components/landscape/ForestLayer";
import { CertificateSection } from "../components/certificates/CertificateSection";
import { ContactSection } from "../components/contact/ContactSection";
import { createServerClient } from "../lib/supabase/server";
import { Skill, Experience, Project } from "../types/portfolio";
import { Certificate, Chicken } from "../types/certificate";
import { initialProjects } from "../lib/data/projects";
import { initialCertificates } from "../lib/data/certificates";
import { initialChickens } from "../lib/data/chickens";
import Image from "next/image";

export const revalidate = 60; // revalidate every minute if dynamic data is updated

const fallbackSkills: Skill[] = [
  { id: "1", name: "Python" },
  { id: "2", name: "Kotlin" },
  { id: "3", name: "Java" },
  { id: "4", name: "Streamlit" },
  { id: "5", name: "React" },
  { id: "6", name: "Natural Language Processing (NLP)" },
  { id: "7", name: "Android Development" },
  { id: "8", name: "Git / GitHub" },
  { id: "9", name: "Machine Learning" },
  { id: "10", name: "Team Collaboration" },
  { id: "11", name: "Fast Learner" },
];

const fallbackExperiences: Experience[] = [
  {
    id: "1",
    title: "Studi Independen",
    organization: "Infinite Learning Indonesia",
    field: "Android Mobile Application Development & UI/UX",
    period: "ATA 2024–2025",
    description:
      "Mengikuti program Studi Independen yang berfokus pada pengembangan aplikasi Android dan UI/UX. Kegiatan meliputi pembelajaran Kotlin, Jetpack Compose, prinsip desain antarmuka, dan kolaborasi dalam tim proyek.",
  },
];

const fallbackAboutParagraphs = [
  "Daffa Mochammad Azzachrie adalah mahasiswa tingkat akhir Teknik Informatika di Universitas Gunadarma yang memiliki minat pada Data Science, Machine Learning, dan Software Development.",
  "Saya memiliki pengalaman mengerjakan proyek analisis data, klasifikasi teks menggunakan Natural Language Processing, pengembangan aplikasi berbasis web, serta pengembangan aplikasi Android menggunakan Kotlin dan Jetpack Compose.",
  "Saya tertarik mengembangkan solusi berbasis teknologi melalui analisis data, pengolahan informasi, dan pengembangan perangkat lunak.",
];

export default async function HomePage() {
  let skills: Skill[] = fallbackSkills;
  let experiences: Experience[] = fallbackExperiences;
  let projects: Project[] = initialProjects;
  let certificates: Certificate[] = initialCertificates;
  let chickens: Chicken[] = initialChickens;

  // Supabase data loading with graceful fallback
  const supabase = createServerClient();
  if (supabase) {
    try {
      const [skillsRes, expRes, projRes, certRes, chickRes] = await Promise.all([
        supabase
          .from("skills")
          .select("id, name, display_order")
          .order("display_order", { ascending: true }),
        supabase
          .from("experiences")
          .select("id, title, organization, field, period, description, display_order")
          .order("display_order", { ascending: true }),
        supabase
          .from("projects")
          .select("*")
          .order("display_order", { ascending: true }),
        supabase
          .from("certificates")
          .select("*")
          .order("display_order", { ascending: true }),
        supabase
          .from("chickens")
          .select("*")
          .order("display_order", { ascending: true }),
      ]);

      if (skillsRes.data && skillsRes.data.length > 0) {
        skills = skillsRes.data;
      }
      if (expRes.data && expRes.data.length > 0) {
        experiences = expRes.data;
      }
      if (projRes.data && projRes.data.length > 0) {
        projects = projRes.data.map((p: any) => ({
          id: p.id,
          title: p.title,
          visualTitle: p.visual_title || p.title,
          slug: p.slug,
          category: p.category,
          categoryGroup: p.category_group || p.category,
          categoryLabel: p.category_label || p.category,
          tagline: p.tagline,
          description: p.description,
          longDescription: p.long_description,
          keyPoints: p.key_points || [],
          technologies: p.technologies || [],
          thumbnailUrl: p.thumbnail_url,
          screenshots: p.screenshots || [],
          videoUrl: p.video_url,
          githubUrl: p.github_url,
          demoUrl: p.demo_url,
          display_order: p.display_order,
          highlightCardPosition: p.highlight_position,
          featured: p.featured,
        }));
      }
      if (certRes.data && certRes.data.length > 0) {
        certificates = certRes.data.map((c: any) => ({
          id: c.id,
          title: c.title,
          issuer: c.issuer,
          year: c.year,
          imageUrl: c.image_url,
          verificationUrl: c.verification_url,
          categoryId: c.category_id,
          categoryName: c.category_name,
          description: c.description,
          skills: c.skills || [],
          display_order: c.display_order,
        }));
      }
      if (chickRes.data && chickRes.data.length > 0) {
        // Query chicken_certificates mapping
        const mappingRes = await supabase.from("chicken_certificates").select("*");
        const mapping = mappingRes.data || [];

        chickens = chickRes.data.map((ch: any) => ({
          id: ch.id,
          label: ch.label,
          spriteUrl: ch.sprite_url,
          certificateIds: mapping
            .filter((m: any) => m.chicken_id === ch.id)
            .map((m: any) => m.certificate_id),
          initialPosition: {
            xPercent: Number(ch.initial_x_percent) || 50,
            yPercent: Number(ch.initial_y_percent) || 50,
          },
          direction: ch.direction || "right",
          durationSeconds: Number(ch.duration_seconds) || 20,
          wanderDistancePercent: Number(ch.wander_distance_percent) || 12,
        }));
      }
    } catch {
      // Gracefully fall back to local typed datasets
    }
  }

  const githubUrl =
    process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Daffazzachrie7";
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/daffaazzachrie";
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/daffa-mochammad-azzachrie";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "daffaazzachrie@gmail.com";

  return (
    <main id="top" className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#3887d8]">
      {/* ================= SECTION 1: HOME ================= */}
      <div className="relative min-h-screen w-full flex flex-col justify-between">
        {/* Sky with Clouds Backdrop for Home */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sky-background.jpg"
            alt="Sky with clouds background"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle gradient towards the bottom of Home so it blends seamlessly into Portfolio blue */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-[#3887d8]" />
        </div>

        {/* Capsule Navigation Bar */}
        <Navbar activeTab="home" />

        {/* Hero Section */}
        <HeroSection
          skills={skills}
          experiences={experiences}
          aboutParagraphs={fallbackAboutParagraphs}
          githubUrl={githubUrl}
          cvPath="/documents/cv.pdf"
        />

        {/* Spacing / Scroll prompt indicator */}
        <div className="w-full py-4 text-center z-10 select-none text-xs text-white/60 font-medium">
          scroll down &darr;
        </div>
      </div>

      {/* ================= SECTION 2: PORTFOLIO ================= */}
      <div className="relative w-full bg-[#3887d8] z-10 flex flex-col">
        {/* Portfolio Content */}
        <PortfolioSection projects={projects} />

        {/* Landscape Transition: Mountain & Forest Layers */}
        <div className="relative w-full z-0 pointer-events-none mt-4 sm:mt-6">
          {/* Mountain Layer (behind) */}
          <MountainLayer />

          {/* Forest Layer (in front of mountains) */}
          <ForestLayer className="-mt-16 sm:-mt-24 md:-mt-32" />
        </div>
      </div>

      {/* ================= SECTION 3: CERTIFICATES (WALKING CHICKENS) ================= */}
      <CertificateSection
        chickens={chickens}
        certificates={certificates}
      />

      {/* ================= SECTION 4: CONTACT ================= */}
      <ContactSection
        email={email}
        instagramUrl={instagramUrl}
        linkedinUrl={linkedinUrl}
      />
    </main>
  );
}
