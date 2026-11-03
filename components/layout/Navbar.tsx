"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  activeTab?: string;
}

export function Navbar({ activeTab = "home" }: NavbarProps) {
  const [currentSection, setCurrentSection] = useState(activeTab);

  const navItems = [
    { label: "home", id: "home", href: "#home" },
    { label: "Projects", id: "portfolio", href: "#portfolio" },
    { label: "certificate", id: "certificate", href: "#certificate" },
    { label: "contact", id: "contact", href: "#contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ["home", "portfolio", "certificate", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setCurrentSection(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full pt-5 md:pt-7 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 z-40 relative">
      {/* Brand Identity / Logo */}
      <Link
        href="#home"
        onClick={(e) => handleNavClick(e, "#home", "home")}
        className="flex flex-col select-none text-left self-start md:self-auto cursor-pointer group"
      >
        <div className="flex items-center text-slate-900 font-bold tracking-tight text-lg md:text-xl font-mono">
          <span className="text-slate-800 font-normal mr-1 text-xl">|</span>
          <span className="group-hover:text-blue-900 transition-colors">
            d.azzachrie
          </span>
        </div>
        <div className="text-slate-800/90 text-xs md:text-sm font-medium tracking-tight pl-2.5 font-mono">
          &gt;_ Data Analyst &amp; Mobile
        </div>
      </Link>

      {/* Capsule Navigation Menu */}
      <nav
        aria-label="Main Navigation"
        className="bg-white/20 hover:bg-white/25 backdrop-blur-md border border-white/30 rounded-full p-1.5 flex items-center shadow-lg transition-all duration-200 overflow-x-auto max-w-full"
      >
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`inline-block text-sm sm:text-base px-4 sm:px-6 py-1.5 rounded-full transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-white/45 shadow-sm text-white font-bold"
                      : "text-white/85 hover:text-white font-medium hover:bg-white/20"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
