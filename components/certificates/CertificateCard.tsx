"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Certificate } from "../../types/certificate";
import { Award, Calendar, ExternalLink, ZoomIn, CheckCircle } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
  onViewImage: (imageUrl: string, title: string) => void;
}

export function CertificateCard({
  certificate,
  onViewImage,
}: CertificateCardProps) {
  return (
    <div className="bg-[#1b4379]/80 border-2 border-white/25 hover:border-white/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl transition-all duration-200">
      <div>
        {/* Certificate Image Preview with Zoom Overlay */}
        <div className="relative w-full aspect-[4/2.8] rounded-xl overflow-hidden bg-black/30 border border-white/20 mb-4 group cursor-pointer">
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />

          <button
            type="button"
            onClick={() => onViewImage(certificate.imageUrl, certificate.title)}
            aria-label={`Perbesar gambar sertifikat ${certificate.title}`}
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm"
          >
            <div className="bg-white/30 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <ZoomIn className="w-4 h-4 text-white" />
              <span>Perbesar Sertifikat</span>
            </div>
          </button>
        </div>

        {/* Category Pill & Year */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="bg-[#5798D8] text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm">
            {certificate.categoryName || certificate.categoryId}
          </span>
          {certificate.year && (
            <span className="text-white/80 text-xs flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-sky-300" />
              {certificate.year}
            </span>
          )}
        </div>

        {/* Certificate Title */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
          {certificate.title}
        </h3>

        {/* Issuer */}
        <div className="flex items-center gap-1.5 text-sky-200 text-xs sm:text-sm font-semibold mt-1">
          <Award className="w-4 h-4 shrink-0 text-yellow-300" />
          <span>{certificate.issuer}</span>
        </div>

        {/* Description */}
        {certificate.description && (
          <p className="text-white/85 text-xs sm:text-sm mt-2.5 leading-relaxed font-normal">
            {certificate.description}
          </p>
        )}

        {/* Skills */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="bg-white/15 text-white/95 text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Verification Link */}
      {certificate.verificationUrl && (
        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
          <a
            href={certificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-200 hover:text-white transition-colors"
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verifikasi Kredensial</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>

          <button
            type="button"
            onClick={() => onViewImage(certificate.imageUrl, certificate.title)}
            className="text-xs font-semibold text-white/80 hover:text-white underline cursor-pointer"
          >
            Lihat Full
          </button>
        </div>
      )}
    </div>
  );
}
