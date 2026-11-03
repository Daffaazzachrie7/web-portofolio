"use client";

import React, { useState } from "react";
import { Certificate, Chicken } from "../../types/certificate";
import { GrassSection } from "../landscape/GrassSection";
import { WalkingChicken } from "./WalkingChicken";
import { CertificateModal } from "./CertificateModal";
import { Award } from "lucide-react";

interface CertificateSectionProps {
  chickens: Chicken[];
  certificates: Certificate[];
}

export function CertificateSection({
  chickens,
  certificates,
}: CertificateSectionProps) {
  const [selectedChicken, setSelectedChicken] = useState<Chicken | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectChicken = (chicken: Chicken) => {
    setSelectedChicken(chicken);
    setIsModalOpen(true);
  };

  const activeCertificates = selectedChicken
    ? certificates.filter((c) =>
        selectedChicken.certificateIds.includes(c.id)
      )
    : [];

  return (
    <section
      id="certificate"
      aria-label="Certificate Section"
      className="relative w-full z-20 flex flex-col"
    >
      {/* Open, unconfined meadow without white divider bars */}
      <GrassSection
        hasDividerTop={false}
        hasDividerBottom={false}
        className="pt-10 sm:pt-14 pb-12 sm:pb-16"
      >
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center">
          {/* Header Block */}
          <div className="text-center mb-6 sm:mb-8 select-none z-30">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
              certificate
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-emerald-950 font-bold max-w-lg mx-auto leading-relaxed">
              Klik ayam atau pilih kategori di bawah untuk menjelajahi sertifikat pelatihan dan program yang telah saya selesaikan
            </p>
          </div>

          {/* Broad, Open Meadow Zone without any box border */}
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden">
            {chickens.map((chicken) => (
              <WalkingChicken
                key={chicken.id}
                chicken={chicken}
                onSelect={handleSelectChicken}
                isPaused={isModalOpen}
              />
            ))}
          </div>

          {/* Category Filter Pills (clean floating pills below the open meadow) */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 z-30">
            {chickens.map((chicken) => {
              const certCount = certificates.filter((c) =>
                chicken.certificateIds.includes(c.id)
              ).length;
              return (
                <button
                  key={chicken.id}
                  type="button"
                  onClick={() => handleSelectChicken(chicken)}
                  className="group bg-[#00245B]/90 hover:bg-[#00245B] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full border border-white/50 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <Award className="w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform" />
                  <span>{chicken.label.replace("Sertifikat ", "")}</span>
                  <span className="bg-white/20 text-[11px] sm:text-xs px-2 py-0.5 rounded-full text-white/95 font-mono">
                    {certCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </GrassSection>

      {/* Certificate Modal */}
      <CertificateModal
        chicken={selectedChicken}
        certificates={activeCertificates}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
