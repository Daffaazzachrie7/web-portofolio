"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PortfolioCategory, Project } from "../../types/portfolio";
import { Modal } from "../ui/Modal";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Code2,
  Film,
  Image as ImageIcon,
} from "lucide-react";

interface CategoryDetailModalProps {
  category: PortfolioCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CategoryDetailModal({
  category,
  isOpen,
  onClose,
}: CategoryDetailModalProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [mediaTab, setMediaTab] = useState<"photos" | "video">("photos");

  // Reset indices when modal opens or category changes
  useEffect(() => {
    if (isOpen) {
      setActiveProjectIndex(0);
      setActivePhotoIndex(0);
      setMediaTab("photos");
    }
  }, [category, isOpen]);

  // Reset photo index when switching projects
  const handleSelectProject = (index: number) => {
    setActiveProjectIndex(index);
    setActivePhotoIndex(0);
    setMediaTab("photos");
  };

  if (!category) return null;

  const currentProject: Project | undefined =
    category.projects[activeProjectIndex] || category.projects[0];

  // Collect photos for current project
  const photos: string[] =
    currentProject?.screenshots && currentProject.screenshots.length > 0
      ? currentProject.screenshots
      : currentProject?.thumbnailUrl
      ? [currentProject.thumbnailUrl]
      : [];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={category.visualTitle}
      subtitle={category.subtitle}
      maxWidth="4xl"
    >
      <div className="flex flex-col gap-5 text-white pb-2">
        {/* Project Switcher Pills (Minimalist & Clean) */}
        {category.projects.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {category.projects.map((proj, idx) => {
              const isActive = idx === activeProjectIndex;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectProject(idx)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-[#1b4379] shadow-md font-bold scale-[1.02]"
                      : "bg-white/10 text-white/85 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {proj.title}
                </button>
              );
            })}
          </div>
        )}

        {currentProject && (
          <div className="flex flex-col gap-5">
            {/* Project Header Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentProject.title}
              </h3>
              {currentProject.tagline && (
                <p className="text-xs sm:text-sm text-sky-200/90 mt-1 font-medium">
                  {currentProject.tagline}
                </p>
              )}
            </div>

            {/* Media Showcase: Photos or Video */}
            {(photos.length > 0 || currentProject.videoUrl) && (
              <div className="flex flex-col gap-3">
                {/* Media Switcher Tab (if video is available) */}
                {currentProject.videoUrl && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setMediaTab("photos")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        mediaTab === "photos"
                          ? "bg-white text-[#1b4379] shadow-sm font-bold"
                          : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Screenshot ({photos.length})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMediaTab("video")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        mediaTab === "video"
                          ? "bg-sky-400 text-slate-900 shadow-sm font-bold"
                          : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      <Film className="w-3.5 h-3.5" />
                      <span>Video Demo</span>
                    </button>
                  </div>
                )}

                {/* Video Player Display */}
                {mediaTab === "video" && currentProject.videoUrl ? (
                  <div className="relative w-full h-64 sm:h-80 md:h-96 bg-black/60 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center shadow-lg">
                    <video
                      src={currentProject.videoUrl}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain rounded-2xl"
                    >
                      Browser Anda tidak mendukung tag video.
                    </video>
                  </div>
                ) : (
                  /* Main Large Photo Display with Controls */
                  photos.length > 0 && (
                    <div className="group relative w-full h-64 sm:h-80 md:h-96 bg-black/30 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center p-2 shadow-lg">
                      <Image
                        src={photos[activePhotoIndex]}
                        alt={`${currentProject.title} - Foto ${activePhotoIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 850px"
                        className="object-contain"
                        priority
                      />

                      {/* Photo Counter Pill */}
                      {photos.length > 1 && (
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                          {activePhotoIndex + 1} / {photos.length} Foto
                        </div>
                      )}

                      {/* Previous / Next Arrow Buttons */}
                      {photos.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={handlePrevPhoto}
                            aria-label="Foto sebelumnya"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center border border-white/30 backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>

                          <button
                            type="button"
                            onClick={handleNextPhoto}
                            aria-label="Foto selanjutnya"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center border border-white/30 backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>
                  )
                )}

                {/* Thumbnail Strip (Allows clicking any photo or video) */}
                <div className="flex items-center gap-2.5 overflow-x-auto py-1 scrollbar-none">
                  {photos.map((photoUrl, pIdx) => {
                    const isSelected = mediaTab === "photos" && pIdx === activePhotoIndex;
                    return (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => {
                          setMediaTab("photos");
                          setActivePhotoIndex(pIdx);
                        }}
                        className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                          isSelected
                            ? "border-white ring-2 ring-sky-300 scale-105"
                            : "border-white/30 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={photoUrl}
                          alt={`Thumbnail ${pIdx + 1}`}
                          fill
                          sizes="100px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                  {currentProject.videoUrl && (
                    <button
                      type="button"
                      onClick={() => setMediaTab("video")}
                      className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer flex flex-col items-center justify-center gap-1 bg-black/50 ${
                        mediaTab === "video"
                          ? "border-sky-300 ring-2 ring-sky-300 scale-105 text-sky-300"
                          : "border-white/30 opacity-70 hover:opacity-100 text-white"
                      }`}
                    >
                      <Film className="w-5 h-5" />
                      <span className="text-[10px] font-semibold">Video</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Concise Description */}
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              {currentProject.longDescription || currentProject.description}
            </p>

            {/* Key Points (Clean bullet list) */}
            {currentProject.keyPoints && currentProject.keyPoints.length > 0 && (
              <ul className="flex flex-col gap-2 pt-1">
                {currentProject.keyPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/95 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/15">
              <span className="text-xs text-white/70 font-medium flex items-center gap-1.5 mr-1">
                <Code2 className="w-3.5 h-3.5 text-sky-300" />
                Tools:
              </span>
              {currentProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/15 border border-white/25 text-white text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions Links */}
            {(currentProject.githubUrl || currentProject.demoUrl) && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#00245B] hover:bg-[#00337f] border border-white/30 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                {currentProject.demoUrl && (
                  <a
                    href={currentProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white text-[#285B9D] hover:bg-slate-100 font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm transition-all hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
