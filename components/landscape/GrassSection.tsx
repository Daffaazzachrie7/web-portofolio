"use client";

import React from "react";

interface GrassSectionProps {
  children?: React.ReactNode;
  className?: string;
  hasDividerTop?: boolean;
  hasDividerBottom?: boolean;
}

export function GrassSection({
  children,
  className = "",
  hasDividerTop = false,
  hasDividerBottom = false,
}: GrassSectionProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-b from-[#56B545] via-[#74CB58] to-[#91DF6B] ${className}`}
    >
      {/* Optional top divider (disabled per user request) */}
      {hasDividerTop && (
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 w-full h-1.5 sm:h-2 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] z-30"
        />
      )}

      {/* Subtle natural rolling hills contours */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-30"
      >
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 160 C320 100, 640 220, 960 140 C1200 80, 1360 180, 1440 130 V400 H0 Z"
            fill="#3E9B2F"
            fillOpacity="0.35"
          />
          <path
            d="M0 260 C280 200, 560 300, 880 220 C1160 160, 1320 280, 1440 210 V400 H0 Z"
            fill="#3E9B2F"
            fillOpacity="0.45"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Optional bottom divider (disabled per user request) */}
      {hasDividerBottom && (
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 w-full h-1.5 sm:h-2 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.15)] z-30"
        />
      )}
    </div>
  );
}
