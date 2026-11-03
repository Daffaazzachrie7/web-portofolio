"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Chicken } from "../../types/certificate";

interface WalkingChickenProps {
  chicken: Chicken;
  onSelect: (chicken: Chicken) => void;
  isPaused?: boolean;
}

export function WalkingChicken({
  chicken,
  onSelect,
  isPaused = false,
}: WalkingChickenProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Wandering stroll distance across the meadow
  const wanderDistancePx = Math.max(60, chicken.wanderDistancePercent * 5.5);
  const isInitialRight = chicken.direction === "right";

  return (
    <div
      className="absolute select-none"
      style={{
        left: `${chicken.initialPosition.xPercent}%`,
        top: `${chicken.initialPosition.yPercent}%`,
        transform: "translate(-50%, -50%)",
        zIndex: isHovered ? 50 : 20,
      }}
    >
      {/* Moving wrapper: Moves horizontally & waddles */}
      <div
        className="relative flex flex-col items-center"
        style={{
          animationName: isInitialRight
            ? "chicken-stroll-right"
            : "chicken-stroll-left",
          animationDuration: `${chicken.durationSeconds}s`,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationPlayState: isPaused || isHovered ? "paused" : "running",
          ["--wander-px" as any]: `${wanderDistancePx}px`,
        }}
      >
        {/* Floating Tooltip: Centered directly on top of the chicken */}
        <div
          className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#00245B] border-2 border-white/80 text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-2xl pointer-events-none transition-all duration-200 z-50 flex items-center gap-1.5 ${
            isHovered
              ? "opacity-100 scale-100 -translate-y-0.5"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
        >
          <span>📜</span>
          <span>{chicken.label.replace("Sertifikat ", "")}</span>
          {/* Speech bubble arrow pointing down directly at chicken */}
          <span
            aria-hidden="true"
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#00245B]"
          />
        </div>

        {/* Interactive Button */}
        <button
          type="button"
          onClick={() => onSelect(chicken)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          aria-label={`Buka ${chicken.label}`}
          className="group relative cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-white rounded-full p-1 flex flex-col items-center"
        >
          {/* Chicken Illustration: Only this flips direction */}
          <div
            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transform group-hover:scale-110 active:scale-95 transition-transform duration-200 drop-shadow-[0_6px_10px_rgba(0,0,0,0.3)]"
            style={{
              animationName: isInitialRight
                ? "chicken-flip-right"
                : "chicken-flip-left",
              animationDuration: `${chicken.durationSeconds}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationPlayState: isPaused || isHovered ? "paused" : "running",
            }}
          >
            <Image
              src={chicken.spriteUrl}
              alt={chicken.label}
              fill
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
              className="object-contain"
              priority
            />
          </div>

          {/* Ground Shadow */}
          <div
            aria-hidden="true"
            className="w-12 sm:w-14 h-3 bg-black/20 rounded-full blur-[2px] mx-auto -mt-2 group-hover:opacity-40 transition-opacity"
          />
        </button>
      </div>

      {/* Movement keyframes for wrapper, facing direction strictly on sprite */}
      <style jsx>{`
        /* Stroll & waddle movement across meadow */
        @keyframes chicken-stroll-left {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          22% {
            transform: translateX(calc(var(--wander-px) * -0.5)) translateY(-5px);
          }
          46% {
            transform: translateX(calc(var(--wander-px) * -1)) translateY(0px);
          }
          50% {
            transform: translateX(calc(var(--wander-px) * -1)) translateY(-3px);
          }
          72% {
            transform: translateX(calc(var(--wander-px) * -0.5)) translateY(-5px);
          }
          96% {
            transform: translateX(0px) translateY(0px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        @keyframes chicken-stroll-right {
          0% {
            transform: translateX(0px) translateY(0px);
          }
          22% {
            transform: translateX(calc(var(--wander-px) * 0.5)) translateY(-5px);
          }
          46% {
            transform: translateX(calc(var(--wander-px) * 1)) translateY(0px);
          }
          50% {
            transform: translateX(calc(var(--wander-px) * 1)) translateY(-3px);
          }
          72% {
            transform: translateX(calc(var(--wander-px) * 0.5)) translateY(-5px);
          }
          96% {
            transform: translateX(0px) translateY(0px);
          }
          100% {
            transform: translateX(0px) translateY(0px);
          }
        }

        /* Sprite flip: Native sprite faces left (scaleX(1)), flipped faces right (scaleX(-1)) */
        @keyframes chicken-flip-left {
          0%, 48% {
            transform: scaleX(1);
          }
          50%, 98% {
            transform: scaleX(-1);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes chicken-flip-right {
          0%, 48% {
            transform: scaleX(-1);
          }
          50%, 98% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(-1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
