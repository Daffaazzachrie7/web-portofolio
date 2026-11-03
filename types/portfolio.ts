export type TabType = "about" | "skills" | "experience";

export interface Skill {
  id: string;
  name: string;
  display_order?: number;
  created_at?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  field?: string;
  period: string;
  description: string;
  display_order?: number;
  created_at?: string;
}

export interface ProfileData {
  name: string;
  role: string;
  subRole: string;
  headline: string;
  aboutParagraphs: string[];
  skills: Skill[];
  experiences: Experience[];
  socialLinks: {
    github: string;
    cvPath: string;
  };
}

export type CategoryType = "analis" | "aplikasi" | "ml-web";

export interface Project {
  id: string;
  title: string;
  visualTitle: string; // "aplikasi", "Konsep Analis", "web & Machine learning"
  slug: string;
  category: "mobile" | "data-analysis" | "ml-web" | "general";
  categoryGroup?: CategoryType;
  categoryLabel?: string;
  tagline: string;
  description: string;
  longDescription?: string;
  keyPoints?: string[];
  technologies: string[];
  thumbnailUrl: string;
  screenshots?: string[]; // Multiple photos to showcase
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  display_order: number;
  highlightCardPosition?: "left-bottom" | "right-top" | "right-bottom";
  featured?: boolean;
}

export interface PortfolioCategory {
  id: CategoryType;
  visualTitle: string; // "aplikasi", "Konsep Analis", "web & Machine learning"
  title: string;
  subtitle: string;
  highlightPosition: "left-bottom" | "right-top" | "right-bottom";
  thumbnailUrl: string;
  projects: Project[];
}
