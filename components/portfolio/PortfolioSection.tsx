"use client";

import React, { useState, useMemo } from "react";
import { Project, PortfolioCategory } from "../../types/portfolio";
import { PortfolioCard } from "./PortfolioCard";
import { CategoryDetailModal } from "./CategoryDetailModal";
import { PortfolioGalleryModal } from "./PortfolioGalleryModal";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { initialCategories } from "../../lib/data/projects";

interface PortfolioSectionProps {
  projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isSingleProjectModalOpen, setIsSingleProjectModalOpen] = useState(false);

  // Group projects into the 3 categories
  const categories = useMemo<PortfolioCategory[]>(() => {
    const appProjects = projects.filter(
      (p) =>
        p.categoryGroup === "aplikasi" ||
        p.category === "mobile" ||
        p.visualTitle.toLowerCase().includes("aplikasi")
    );
    const analysisProjects = projects.filter(
      (p) =>
        p.categoryGroup === "analis" ||
        p.category === "data-analysis" ||
        p.visualTitle.toLowerCase().includes("analis")
    );
    const mlWebProjects = projects.filter(
      (p) =>
        p.categoryGroup === "ml-web" ||
        p.category === "ml-web" ||
        p.visualTitle.toLowerCase().includes("web")
    );

    return [
      {
        id: "aplikasi",
        visualTitle: "aplikasi",
        title: "Aplikasi",
        subtitle: "Koleksi aplikasi mobile dan software",
        highlightPosition: "left-bottom",
        thumbnailUrl: "/images/cards/card-aplikasi.jpg",
        projects: appProjects.length > 0 ? appProjects : initialCategories[0].projects,
      },
      {
        id: "analis",
        visualTitle: "Konsep Analis",
        title: "Konsep Analis",
        subtitle: "Hasil analisis data dan riset konsep",
        highlightPosition: "right-top",
        thumbnailUrl: "/images/cards/card-konsep-analis.jpg",
        projects: analysisProjects.length > 0 ? analysisProjects : initialCategories[1].projects,
      },
      {
        id: "ml-web",
        visualTitle: "web & Machine learning",
        title: "Web & Machine Learning",
        subtitle: "Aplikasi web interaktif dan integrasi machine learning",
        highlightPosition: "right-bottom",
        thumbnailUrl: "/images/cards/card-web-ml.jpg",
        projects: mlWebProjects.length > 0 ? mlWebProjects : initialCategories[2].projects,
      },
    ];
  }, [projects]);

  const catAplikasi = categories.find((c) => c.id === "aplikasi") || categories[0];
  const catAnalis = categories.find((c) => c.id === "analis") || categories[1];
  const catMlWeb = categories.find((c) => c.id === "ml-web") || categories[2];

  const handleOpenCategory = (cat: PortfolioCategory) => {
    setSelectedCategory(cat);
    setIsCategoryModalOpen(true);
  };

  const handleSelectProjectFromGallery = (project: Project) => {
    setSelectedProject(project);
    setIsSingleProjectModalOpen(true);
  };

  return (
    <section
      id="portfolio"
      aria-label="Portfolio Section"
      className="relative w-full z-10 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto flex flex-col"
    >
      {/* 2-Column Responsive Grid with Equal Width and Balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
        {/* Left Column: Header + Card 1 (Aplikasi) */}
        <div className="flex flex-col items-center md:items-start gap-8 sm:gap-10">
          {/* Header Block */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] select-none">
              Portofolio
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/95 leading-relaxed font-normal">
              Berikut beberapa proyek yang pernah saya kerjakan dalam bidang pengembangan aplikasi, analisis data, dan teknologi berbasis machine learning.
            </p>

            <button
              type="button"
              onClick={() => setIsGalleryModalOpen(true)}
              className="mt-3.5 inline-flex items-center gap-1 text-sm sm:text-base font-bold text-white hover:text-sky-200 transition-colors cursor-pointer select-none focus:outline-none focus-visible:underline"
              aria-label="Lihat seluruh portofolio"
            >
              <span>see more &gt;</span>
            </button>
          </div>

          {/* Card 1: Aplikasi */}
          {catAplikasi && (
            <div className="w-full flex justify-center md:justify-start pt-2">
              <PortfolioCard
                category={catAplikasi}
                onSelect={handleOpenCategory}
              />
            </div>
          )}
        </div>

        {/* Right Column: Card 2 (Konsep Analis) and Card 3 (Web & ML) */}
        <div className="flex flex-col items-center md:items-end gap-10 sm:gap-12 md:pt-4">
          {/* Card 2: Konsep Analis */}
          {catAnalis && (
            <div className="w-full flex justify-center md:justify-end">
              <PortfolioCard
                category={catAnalis}
                onSelect={handleOpenCategory}
              />
            </div>
          )}

          {/* Card 3: Web & Machine Learning */}
          {catMlWeb && (
            <div className="w-full flex justify-center md:justify-end">
              <PortfolioCard
                category={catMlWeb}
                onSelect={handleOpenCategory}
              />
            </div>
          )}
        </div>
      </div>

      {/* Category Detail Modal */}
      <CategoryDetailModal
        category={selectedCategory}
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
      />

      {/* Single Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isSingleProjectModalOpen}
        onClose={() => setIsSingleProjectModalOpen(false)}
      />

      {/* See More Portfolio Gallery Modal */}
      <PortfolioGalleryModal
        projects={projects}
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        onSelectProject={handleSelectProjectFromGallery}
      />
    </section>
  );
}
