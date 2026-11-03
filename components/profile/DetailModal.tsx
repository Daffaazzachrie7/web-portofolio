"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { TabType, Skill, Experience } from "../../types/portfolio";
import { AboutTab } from "./AboutTab";
import { SkillsTab } from "./SkillsTab";
import { ExperienceTab } from "./ExperienceTab";
import { cn } from "../../lib/utils";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: TabType;
  skills?: Skill[];
  experiences?: Experience[];
  aboutParagraphs?: string[];
  photoSrc?: string;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function DetailModal({
  isOpen,
  onClose,
  initialTab = "about",
  skills,
  experiences,
  aboutParagraphs,
  photoSrc,
  triggerRef,
}: DetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync activeTab with initialTab when opening
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Lock background scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open for accessibility
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      triggerRef?.current?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen || !mounted) return null;

  const tabs: { id: TabType; label: string }[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "skills" },
    { id: "experience", label: "experience" },
  ];

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl flex flex-col pt-3 animate-in zoom-in-95 duration-200 max-h-[92vh]"
      >
        {/* Top Floating Tabs */}
        <div className="flex items-end gap-2 sm:gap-3 pl-4 sm:pl-8 z-10 -mb-[1px]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "font-bold text-sm sm:text-base md:text-lg transition-all duration-150 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  isActive
                    ? "bg-[#5798D8] text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-t-2xl shadow-md -translate-y-0.5"
                    : "bg-[#00245B] hover:bg-[#00337f] text-white/90 hover:text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-t-xl"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Window Card */}
        <div className="relative bg-[#285B9D] border-[6px] sm:border-[8px] border-white rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-9 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
          {/* Top Row: Heading and Close Button */}
          <div className="flex items-center justify-between pb-3 sm:pb-5 shrink-0">
            <h2
              id="modal-title"
              className="text-3xl sm:text-4xl md:text-5xl font-black italic text-white tracking-tight capitalize select-none"
            >
              {activeTab === "about"
                ? "About"
                : activeTab === "skills"
                ? "Skills"
                : "Experience"}
            </h2>

            {/* White Square Close Button with Blue X */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-slate-100 rounded-md sm:rounded-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              <X
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#285B9D] stroke-[3]"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Modal Tab Body with Custom Scrollbar */}
          <div className="overflow-y-auto custom-modal-scrollbar pr-2 sm:pr-3 pt-2">
            {activeTab === "about" && (
              <AboutTab paragraphs={aboutParagraphs} photoSrc={photoSrc} />
            )}
            {activeTab === "skills" && <SkillsTab skills={skills} />}
            {activeTab === "experience" && (
              <ExperienceTab experiences={experiences} />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
