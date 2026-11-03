"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Mail } from "lucide-react";

interface SocialLinksProps {
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}

export function SocialLinks({
  email = "daffamochammad@gmail.com",
  instagramUrl = "https://instagram.com/daffamochammad",
  linkedinUrl = "https://www.linkedin.com/in/daffa-mochammad-azzachrie",
}: SocialLinksProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 z-20">
      {/* 1. Email Card */}
      <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {/* Google M Icon */}
            <svg className="w-6 h-6" viewBox="0 0 48 48">
              <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.66,0,3-1.34,3-3V16.2z"/>
              <path fill="#1e88e5" d="M3,16.2l3.65,2.54l6.35,5.96L13,40H6c-1.66,0-3-1.34-3-3V16.2z"/>
              <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,24.7 24,32.95 35,24.7 36,17"/>
              <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L8.6,7.65C7.3,6.67,5.5,6.9,4.4,8.1C3.5,9.2,3,10.7,3,12.298z"/>
              <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l4.4-3.55c1.3-0.98,3.1-0.75,4.2,0.45C44.5,9.2,45,10.7,45,12.298z"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-lg">Email</h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1 font-mono break-all">
            {email}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-white/15 flex items-center gap-2">
          <a
            href={`mailto:${email}`}
            className="flex-1 bg-white text-[#00245B] hover:bg-slate-100 font-bold text-xs sm:text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Kirim Email</span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Salin alamat email"
            aria-label="Salin alamat email"
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors active:scale-95"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-300" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* 2. LinkedIn Card */}
      <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#0A66C2] shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {/* LinkedIn Icon */}
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-lg">LinkedIn</h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1">
            Daffa Mochammad Azzachrie
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-white/15">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs sm:text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            <span>Kunjungi Profil</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 3. Instagram Card */}
      <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {/* Instagram Icon */}
            <svg className="w-6 h-6 text-white fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-lg">Instagram</h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1 font-mono">
            @daffamochammad
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-white/15">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-bold text-xs sm:text-sm py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            <span>Lihat Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
