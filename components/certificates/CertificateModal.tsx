"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Certificate, Chicken } from "../../types/certificate";
import { Modal } from "../ui/Modal";
import { CertificateCard } from "./CertificateCard";
import { Award, X } from "lucide-react";

interface CertificateModalProps {
  chicken: Chicken | null;
  certificates: Certificate[];
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateModal({
  chicken,
  certificates,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const [mounted, setMounted] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!chicken) return null;

  return (
    <>
      <Modal
        isOpen={isOpen && !zoomedImage}
        onClose={onClose}
        title={chicken.label}
        subtitle={`${certificates.length} Sertifikat Terverifikasi`}
        maxWidth={certificates.length > 1 ? "4xl" : "2xl"}
      >
        <div className="py-2">
          {certificates.length === 0 ? (
            <div className="text-center py-12 px-4 bg-[#1b4379]/50 rounded-2xl border border-white/20">
              <Award className="w-12 h-12 text-white/40 mx-auto mb-3" />
              <p className="text-white font-medium text-base">
                Belum ada sertifikat yang terdaftar pada kategori ini.
              </p>
            </div>
          ) : (
            <div
              className={`grid gap-4 sm:gap-6 ${
                certificates.length > 1
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  onViewImage={(url, title) => setZoomedImage({ url, title })}
                />
              ))}
            </div>
          )}
        </div>
      </Modal>

      {/* Lightbox / Zoom Modal Portaled directly to document.body */}
      {zoomedImage && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomedImage.title}
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 border-4 border-white rounded-2xl p-3 sm:p-5 shadow-2xl flex flex-col items-center animate-in zoom-in-95 duration-200"
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/20 mb-3">
              <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1 pr-2">
                {zoomedImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="w-8 h-8 bg-white hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors shadow-md text-[#285B9D] cursor-pointer"
                aria-label="Tutup preview gambar"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>

            <div className="relative w-full aspect-[4/2.8] max-h-[70vh] rounded-xl overflow-hidden bg-black/40">
              <Image
                src={zoomedImage.url}
                alt={zoomedImage.title}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
