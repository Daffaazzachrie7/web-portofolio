import React from "react";
import Image from "next/image";

interface AboutTabProps {
  paragraphs?: string[];
  photoSrc?: string;
}

const defaultParagraphs = [
  "Daffa Mochammad Azzachrie adalah mahasiswa tingkat akhir Teknik Informatika di Universitas Gunadarma yang memiliki minat pada Data Science, Machine Learning, dan Software Development.",
  "Saya memiliki pengalaman mengerjakan proyek analisis data, klasifikasi teks menggunakan Natural Language Processing, pengembangan aplikasi berbasis web, serta pengembangan aplikasi Android menggunakan Kotlin dan Jetpack Compose.",
  "Saya tertarik mengembangkan solusi berbasis teknologi melalui analisis data, pengolahan informasi, dan pengembangan perangkat lunak.",
];

export function AboutTab({
  paragraphs = defaultParagraphs,
  photoSrc = "/images/profile.png",
}: AboutTabProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
      {/* Left Column: Description */}
      <div className="flex-1 space-y-4 text-white text-sm sm:text-base leading-relaxed font-normal text-left">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-white/95">
            {p}
          </p>
        ))}
      </div>

      {/* Right Column: Profile Photo */}
      <div className="w-full sm:w-auto flex justify-center md:justify-end shrink-0">
        <div className="relative bg-white rounded-xl p-1.5 shadow-md border border-white/20 overflow-hidden w-40 sm:w-48 md:w-52 aspect-[3/4] flex items-center justify-center">
          <Image
            src={photoSrc}
            alt="Daffa Mochammad Azzachrie"
            width={300}
            height={400}
            className="w-full h-full object-cover object-center rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
