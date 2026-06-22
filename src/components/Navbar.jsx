"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full px-4 sm:px-6 lg:px-7 py-3 sm:py-4 text-white transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">

          {/* Left — Logo Icons */}
          <a href="#" className="group flex items-center gap-2">
            {/* </> Code Icon */}
            <span className="text-green-400 font-mono text-xl font-bold group-hover:text-green-300 transition-colors duration-300">
              &lt;/&gt;
            </span>

            {/* Hacker Terminal Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-green-400 group-hover:text-green-300 group-hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.6)] transition-all duration-300"
            >
              <rect x="2" y="3" width="20" height="18" rx="3" />
              <polyline points="7 9 10 12 7 15" />
              <line x1="13" y1="15" x2="17" y2="15" />
            </svg>
          </a>

          {/* Center — Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 text-[15px] lg:text-[18px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                href={link.href}
              >
                {link.name}
              </a>
            ))}

            <a
              className="hover:text-green-300 transition-all duration-300"
              href="https://appnests.in"
              target="_blank"
              rel="noreferrer"
            >
              Appnests
            </a>
          </div>

          {/* Right — Hire Me Button (Desktop) + Hamburger (Mobile) */}
          <div className="flex items-center gap-3">
            <a
              className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-300"
              href="#contact"
            >
              Hire Me
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[6px] rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-yellow-400/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "rotate-45 translate-y-[8px] bg-yellow-400"
                    : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "-rotate-45 -translate-y-[8px] bg-yellow-400"
                    : ""
                }`}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-gradient-to-b from-[#020617] via-[#0a0f1e] to-black border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Glow Effect */}
        <div className="absolute top-10 left-0 w-40 h-40 bg-green-400/5 blur-[80px] rounded-full" />
        <div className="absolute bottom-20 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] rounded-full" />

        {/* Drawer Content */}
        <div className="relative z-10 flex flex-col h-full pt-20 px-6 pb-8">
          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-[17px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 60 + 100}ms` : "0ms",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/50 group-hover:bg-yellow-400 group-hover:shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all duration-300" />
                {link.name}
              </a>
            ))}

            {/* Appnests Link */}
            <a
              href="https://appnests.in"
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-[17px] font-medium text-green-400/80 hover:text-green-300 hover:bg-white/[0.06] transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${navLinks.length * 60 + 100}ms`
                  : "0ms",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/50 group-hover:bg-green-400 group-hover:shadow-[0_0_8px_rgba(74,222,128,0.6)] transition-all duration-300" />
              Appnests
            </a>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom CTA */}
          <div
            className={`transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${(navLinks.length + 1) * 60 + 150}ms`
                : "0ms",
            }}
          >
            <div className="border-t border-white/10 pt-6 mb-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block w-full text-center py-3 rounded-xl bg-yellow-400 text-black font-semibold text-base hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all duration-300"
              >
                Hire Me
              </a>
            </div>

            <p className="text-center text-gray-600 text-xs">
              © 2026 Chandan Koranga
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
