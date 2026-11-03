"use client";

import React from "react";

interface ForestLayerProps {
  className?: string;
}

export function ForestLayer({ className = "" }: ForestLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden pointer-events-none select-none -mb-1 ${className}`}
    >
      {/* Crisp layered forest canopy leading seamlessly into the meadow */}
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-24 sm:h-36 md:h-44 object-cover"
        preserveAspectRatio="none"
      >
        {/* Back Dense Forest Canopy */}
        <path
          d="M0 120 C100 80, 200 130, 300 90 C400 50, 500 110, 600 70 C700 40, 800 100, 900 60 C1000 30, 1100 90, 1200 65 C1300 45, 1380 85, 1440 70 V180 H0 Z"
          fill="#317D49"
        />
        {/* Front Lush Treetop Clusters */}
        <path
          d="M0 140 C80 110, 160 150, 260 120 C360 90, 440 135, 540 105 C640 75, 740 125, 840 95 C940 70, 1020 120, 1120 90 C1220 70, 1320 115, 1440 95 V180 H0 Z"
          fill="#4BAE5E"
        />
        {/* Foreground Meadow Edge blending seamlessly into the Certificate Meadow */}
        <path
          d="M0 160 C120 140, 240 165, 380 145 C520 130, 660 155, 820 140 C980 125, 1140 150, 1300 135 C1380 130, 1410 145, 1440 140 V180 H0 Z"
          fill="#56B545"
        />
      </svg>
    </div>
  );
}
