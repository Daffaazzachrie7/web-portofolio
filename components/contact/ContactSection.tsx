"use client";

import React from "react";
import { SocialLinks } from "./SocialLinks";
import { ArrowUp } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

export function ContactSection({
  email,
  instagramUrl,
  linkedinUrl,
}: ContactSectionProps) {
  const scrollToTop = () => {
    // 1. Try scrollIntoView on the root element
    const topElement = document.getElementById("top") || document.getElementById("home") || document.body;
    if (topElement && typeof topElement.scrollIntoView === "function") {
      topElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 2. Comprehensive fallback for window and document elements
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch {}

    if (typeof document !== "undefined") {
      if (document.documentElement) {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      if (document.body) {
        document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#1C4B82] via-[#123663] to-[#0A1F3B] z-10 flex flex-col justify-between pb-8 pt-0"
    >
      {/* 100% Seamless organic transition curve: meadow green (#91DF6B) to contact blue (#1C4B82) */}
      <div
        aria-hidden="true"
        className="w-full overflow-hidden pointer-events-none select-none block -mt-[1px] leading-none"
      >
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20 block"
          preserveAspectRatio="none"
        >
          {/* Top solid green matching Certificate Meadow bottom */}
          <rect width="1440" height="100" fill="#91DF6B" />
          {/* Smooth organic wave transitioning into the Contact deep blue */}
          <path
            d="M0 45 C320 90, 680 15, 1020 70 C1220 95, 1360 30, 1440 50 V100 H0 Z"
            fill="#1C4B82"
          />
        </svg>
      </div>

      {/* Subtle organic light accent in the background */}
      <div
        aria-hidden="true"
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none select-none"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center mt-6 sm:mt-10">
        {/* Title: contact */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] select-none">
          contact
        </h2>

        <p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed font-normal">
          Tertarik berkolaborasi atau berdiskusi seputar proyek data science, machine learning, atau mobile engineering? Mari terhubung!
        </p>

        {/* Social Link Cards */}
        <div className="w-full mt-10 sm:mt-12">
          <SocialLinks
            email={email}
            instagramUrl={instagramUrl}
            linkedinUrl={linkedinUrl}
          />
        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 select-none">
        {/* Brand identity */}
        <div className="flex items-center text-white/90 font-mono font-medium">
          <span className="text-white/60 mr-1.5">|</span>
          <span className="font-bold">d.azzachrie</span>
          <span className="ml-2 text-white/60 text-[11px]">&gt;_ Data Analyst &amp; Mobile</span>
        </div>

        {/* Copyright */}
        <div>
          &copy; {new Date().getFullYear()} Daffa Mochammad Azzachrie. All rights reserved.
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="group flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <span>Kembali ke Atas</span>
          <div className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors">
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
