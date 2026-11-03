"use client";

import React from "react";

interface MountainLayerProps {
  className?: string;
}

export function MountainLayer({ className = "" }: MountainLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden pointer-events-none select-none -mb-1 ${className}`}
    >
      {/* Crisp layered vector mountain peaks */}
      <svg
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-28 sm:h-40 md:h-52 object-cover"
        preserveAspectRatio="none"
      >
        {/* Distant Blue-Green Mountain Range */}
        <path
          d="M0 160L180 90L360 140L540 60L720 120L900 50L1080 110L1260 70L1440 130V220H0V160Z"
          fill="#2D6F72"
          fillOpacity="0.85"
        />
        {/* Mid Mountain Ridge with Shading */}
        <path
          d="M0 180L140 120L320 170L500 95L680 155L860 85L1040 145L1220 105L1440 165V220H0V180Z"
          fill="#3B8463"
        />
        {/* Near Mountain Ridge */}
        <path
          d="M0 195L220 135L420 185L640 125L840 175L1060 115L1280 165L1440 135V220H0V195Z"
          fill="#44975D"
        />
      </svg>
    </div>
  );
}
