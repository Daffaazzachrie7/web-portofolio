"use client";

import React, { useState } from "react";
import { Plus, Minus, Building2, Calendar, BookOpen } from "lucide-react";
import { Experience } from "../../types/portfolio";

interface ExperienceTabProps {
  experiences?: Experience[];
}

const defaultExperiences: Experience[] = [
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

export function ExperienceTab({
  experiences = defaultExperiences,
}: ExperienceTabProps) {
  // Default first item opened
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "1": true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full space-y-4">
      {experiences.map((exp) => {
        const isExpanded = !!expandedIds[exp.id];

        return (
          <div
            key={exp.id}
            className="border-b border-white/20 pb-4 last:border-b-0 transition-colors"
          >
            {/* Clickable Header Accordion */}
            <button
              type="button"
              onClick={() => toggleExpand(exp.id)}
              className="w-full flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg py-1"
              aria-expanded={isExpanded}
            >
              <div className="flex items-center gap-3">
                <span className="p-1 rounded-md bg-white/10 group-hover:bg-white/20 transition-colors">
                  {isExpanded ? (
                    <Minus className="w-5 h-5 text-white stroke-[3]" />
                  ) : (
                    <Plus className="w-5 h-5 text-white stroke-[3]" />
                  )}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  {exp.title}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-white/80 font-medium hidden sm:inline-block">
                {exp.period}
              </span>
            </button>

            {/* Expandable Detail Content */}
            {isExpanded && (
              <div className="mt-3 pl-9 sm:pl-10 space-y-2.5 animate-fadeIn">
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-sky-100 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-white/90" />
                    {exp.organization}
                  </span>
                  {exp.field && (
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-white/90" />
                      {exp.field}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 sm:hidden">
                    <Calendar className="w-4 h-4 text-white/90" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                  {exp.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
