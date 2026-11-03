"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project, CategoryType } from "../../types/portfolio";
import { Modal } from "../ui/Modal";
import { ArrowUpRight, Filter } from "lucide-react";

interface PortfolioGalleryModalProps {
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function PortfolioGalleryModal({
  projects,
  isOpen,
  onClose,
  onSelectProject,
}: PortfolioGalleryModalProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | CategoryType>("all");

  const filterTabs: { id: "all" | CategoryType; label: string }[] = [
    { id: "all", label: "Semua" },
    { id: "analis", label: "Konsep Analis" },
    { id: "aplikasi", label: "Aplikasi" },
    { id: "ml-web", label: "Web & Machine Learning" },
  ];

  const filteredProjects = projects.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "analis") {
      return item.categoryGroup === "analis" || item.category === "data-analysis";
    }
    if (activeFilter === "aplikasi") {
      return item.categoryGroup === "aplikasi" || item.category === "mobile";
    }
    if (activeFilter === "ml-web") {
      return item.categoryGroup === "ml-web" || item.category === "ml-web";
    }
    return true;
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Semua Portofolio"
      subtitle="Koleksi proyek analisis, aplikasi, dan web & machine learning"
      maxWidth="4xl"
    >
      <div className="flex flex-col gap-5 py-2">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter className="w-4 h-4 text-sky-300 shrink-0 mr-1" />
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-[#1b4379] shadow-md font-bold"
                    : "bg-white/10 text-white/85 hover:bg-white/20 border border-white/20"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                onClose();
                onSelectProject(item);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClose();
                  onSelectProject(item);
                }
              }}
              className="group text-left bg-[#1b4379]/70 hover:bg-[#1b4379] border-2 border-white/20 hover:border-white/60 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-1 active:scale-[0.99] outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/30 mb-3 border border-white/10">
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#00245B]/90 backdrop-blur-sm border border-white/30 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {item.categoryLabel || item.visualTitle}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/85 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technologies & Action */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                  {item.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/15 text-white/90 text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="text-[10px] text-white/60 self-center">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-white group-hover:text-sky-300 shrink-0">
                  <span>Lihat Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
