"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  className?: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  maxWidth = "3xl",
  children,
  headerRight,
  className,
  triggerRef,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

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

  const maxWidthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  }[maxWidth];

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "generic-modal-title" : undefined}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full flex flex-col animate-in zoom-in-95 duration-200 max-h-[90vh]",
          maxWidthClass
        )}
      >
        <div
          className={cn(
            "relative bg-[#285B9D] border-[5px] sm:border-[7px] border-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden flex flex-col max-h-[88vh]",
            className
          )}
        >
          {/* Header Row */}
          {(title || headerRight) && (
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/20 mb-3 sm:mb-4 gap-3 shrink-0">
              <div>
                {title && (
                  <h2
                    id="generic-modal-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-black italic text-white tracking-tight"
                  >
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-white/80 text-xs sm:text-sm mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                {headerRight}
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
            </div>
          )}

          {/* Fallback floating close button if no header title */}
          {!title && !headerRight && (
            <div className="absolute top-4 right-4 z-20">
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
          )}

          {/* Modal Content */}
          <div className="overflow-y-auto custom-modal-scrollbar pr-1 sm:pr-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
