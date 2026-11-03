"use client";

import React from "react";
import Image from "next/image";
import { PortfolioCategory } from "../../types/portfolio";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  category: PortfolioCategory;
  onSelect: (category: PortfolioCategory) => void;
}

export function PortfolioCard({ category, onSelect }: PortfolioCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(category)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(category);
        }
      }}
      aria-label={`Buka portofolio ${category.visualTitle}`}
      className="group relative cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-white rounded-[26px] sm:rounded-[30px] transition-all duration-300 hover:-translate-y-2 active:scale-[0.98] select-none w-full max-w-[360px] sm:max-w-[380px] md:max-w-[400px]"
    >
      {/* 
        Card container with exact 480:555 aspect ratio matching user PNG/JPG assets.
        The image completely fills the card with rounded borders and shadow.
      */}
      <div className="relative w-full aspect-[480/555] bg-[#3887d8] rounded-[26px] sm:rounded-[30px] overflow-hidden border-[3px] border-white/80 shadow-xl hover:shadow-2xl">
        {/* Full card asset with typography & mockups baked in */}
        <Image
          src={category.thumbnailUrl}
          alt={category.visualTitle}
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
          priority
        />

        {/* Subtle top gloss reflection */}
        <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

        {/* Floating Detail Pill on Hover */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-white/95 text-[#285B9D] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-xs">
            <span>Detail</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}
