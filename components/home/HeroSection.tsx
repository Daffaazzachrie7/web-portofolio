"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/Button";
import { DetailModal } from "../profile/DetailModal";
import { Skill, Experience } from "../../types/portfolio";

interface HeroSectionProps {
  skills?: Skill[];
  experiences?: Experience[];
  aboutParagraphs?: string[];
  githubUrl?: string;
  cvPath?: string;
}

export function HeroSection({
  skills,
  experiences,
  aboutParagraphs,
  githubUrl = "https://github.com/daffamochammad",
  cvPath = "/documents/cv.pdf",
}: HeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailBtnRef = useRef<HTMLButtonElement>(null);

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "CV_Daffa_Mochammad_Azzachrie.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenGithub = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="relative flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 md:py-20 z-10">
      {/* Hero Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Three-line Bold Italic Name */}
        <h1 className="flex flex-col text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic text-white tracking-tight leading-[0.92] select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
          <span>Daffa</span>
          <span>Mochammad</span>
          <span>Azzachrie</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 md:mt-8 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide uppercase select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          Data Analyst | Software Development | UI/UX &amp; Mobile Engineering
        </p>

        {/* Action Buttons */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Detail Button */}
          <Button
            ref={detailBtnRef}
            variant="primary"
            onClick={() => setIsModalOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            className="min-w-[120px] sm:min-w-[130px]"
          >
            Detail
          </Button>

          {/* Download CV Button */}
          <Button
            variant="navy"
            onClick={handleDownloadCv}
            className="min-w-[140px] sm:min-w-[150px]"
          >
            Download cv
          </Button>

          {/* Github Button */}
          <Button
            variant="navy"
            onClick={handleOpenGithub}
            className="min-w-[120px] sm:min-w-[130px]"
          >
            Github
          </Button>
        </div>
      </div>

      {/* Detail Modal Component */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTab="about"
        skills={skills}
        experiences={experiences}
        aboutParagraphs={aboutParagraphs}
        triggerRef={detailBtnRef}
      />
    </section>
  );
}
