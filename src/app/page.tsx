"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  ClipboardList,
  Hammer,
  Wrench,
  Zap,
  Home as HomeIcon,
  Trash2,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "264817877867";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20BKS%20Contractors,%20I%20am%20interested%20in%20your%20services.`;

const services = [
  {
    name: "General Contracting",
    desc: "One team handles your entire build from the foundation pour to final handover. No subcontractor headaches, no shifting timelines.",
    icon: <Building2 size={32} />,
  },
  {
    name: "Construction Management",
    desc: "We keep your project on schedule and on budget. Material ordering, site coordination, and daily progress oversight included.",
    icon: <ClipboardList size={32} />,
  },
  {
    name: "Renovations",
    desc: "We update outdated structures without the disruption. Your facility keeps running while we get the work done.",
    icon: <Hammer size={32} />,
  },
  {
    name: "Plumbing",
    desc: "Commercial water systems, drainage, and pipeline installations that pass inspection first time and last for years.",
    icon: <Wrench size={32} />,
  },
  {
    name: "Electrical",
    desc: "Panel upgrades, high-voltage wiring, and full commercial electrical fit-outs done by certified electricians.",
    icon: <Zap size={32} />,
  },
  {
    name: "Roofing",
    desc: "Roofing systems built for Namibian heat, wind, and rain. No leaks, no callbacks, no shortcuts.",
    icon: <HomeIcon size={32} />,
  },
  {
    name: "Waste Removal",
    desc: "Site clearing and debris removal to keep your project clean, safe, and moving forward.",
    icon: <Trash2 size={32} />,
  },
];

const safetyItems = [
  "On-site supervisors on every job, every day",
  "Certified tradespeople, not casual labour",
  "OSHA-compliant safety on all sites",
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  const menuFirstRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      menuFirstRef.current?.focus();
    } else {
      toggleRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  const handleMenuKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col relative bg-[#F5F5F5] text-[#1A2A3A]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F26522] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 pt-4 transition-all duration-500">
        <header
          className={`pointer-events-auto w-full max-w-7xl transition-all duration-500 flex justify-between items-center ${
            scrolled
              ? "bg-[#1A2A3A]/95 backdrop-blur-md border border-[#4A6A8A]/40 shadow-2xl py-3 px-6 lg:px-8 rounded-xl"
              : "bg-transparent border-transparent py-5 px-6 lg:px-12"
          }`}
        >
          <a
            href="https://bkscontractors.cc"
            className="flex items-center select-none"
            aria-label="BKS Contractors Home"
          >
            <Image
              src="/bks-logo.png"
              alt="BKS Contractors logo"
              width={160}
              height={56}
              priority
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            <a
              href="#services"
              className="font-[var(--font-subheading)] text-sm text-[#F5F5F5] hover:text-[#F26522] transition-colors uppercase tracking-wider"
            >
              Services
            </a>
            <a
              href="#safety"
              className="font-[var(--font-subheading)] text-sm text-[#F5F5F5] hover:text-[#F26522] transition-colors uppercase tracking-wider"
            >
              Safety
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D05518] text-[#FFFFFF] font-[var(--font-subheading)] text-sm py-2.5 px-6 rounded hover:bg-[#B84816] transition-colors active:scale-95 flex items-center gap-2 uppercase tracking-wider"
            >
              Get a Quote on WhatsApp
            </a>
          </nav>

          <button
            ref={toggleRef}
            className="md:hidden text-[#F5F5F5] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522] rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" className="origin-center transition-all duration-300" />
                  <line x1="6" y1="6" x2="18" y2="18" className="origin-center transition-all duration-300" />
                </>
              ) : (
                <>
                  <line x1="4" y1="9" x2="20" y2="9" className="transition-all duration-300" />
                  <line x1="4" y1="15" x2="20" y2="15" className="transition-all duration-300" />
                </>
              )}
            </svg>
          </button>
        </header>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        onKeyDown={handleMenuKeyDown}
        className={`fixed inset-0 z-40 bg-[#1A2A3A] transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-28 px-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <a
          ref={menuFirstRef}
          href="#services"
          className="font-[var(--font-subheading)] text-2xl text-[#F5F5F5] py-6 border-b border-[#4A6A8A]/20 rounded px-2 focus-visible:ring-2 focus-visible:ring-[#F26522]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Core Services
        </a>
        <a
          href="#safety"
          className="font-[var(--font-subheading)] text-2xl text-[#F5F5F5] py-6 border-b border-[#4A6A8A]/20 focus-visible:ring-2 focus-visible:ring-[#F26522] rounded px-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Safety Standards
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-[#D05518] text-[#FFFFFF] font-[var(--font-subheading)] text-xl py-4 px-6 rounded text-center w-full shadow-lg uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#F26522]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Message Us on WhatsApp
        </a>
      </div>

      <main className="flex-grow" id="main-content">
        <section
          className="relative bg-[#1A2A3A] pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5F5F5" strokeWidth="1" />
                </pattern>
                <pattern id="diagonal" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M-1,1 l2,-2 M0,20 l20,-20 M19,21 l2,-2" fill="none" stroke="#4A6A8A" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#diagonal)" />
            </svg>
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-6 border border-[#4A6A8A] bg-[#4A6A8A]/20 px-4 py-2 rounded">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" aria-hidden="true"></span>
                <span className="font-[var(--font-subheading)] text-sm text-[#F5F5F5] uppercase tracking-wider">
                  Building across Namibia
                </span>
              </div>
              <h1
                id="hero-heading"
                className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-[#FFFFFF] leading-[1.1] mb-8 tracking-tight"
              >
                YOUR PROJECT,
                <br />
                BUILT RIGHT.
                <br />
                <span className="text-[#F26522]">ON TIME, EVERY TIME.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#F5F5F5]/80 max-w-2xl mb-10 leading-relaxed">
                One team handles your entire build. Foundations, plumbing,
                electrical, roofing, and clean-up. No subcontractor chaos.
                No missed deadlines.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0D7A3E] text-[#FFFFFF] font-[var(--font-subheading)] text-lg py-4 px-8 rounded hover:bg-[#0a6433] transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-[#0D7A3E]/20 uppercase tracking-wider"
                >
                  <MessageCircle size={24} className="text-white" aria-hidden="true" />
                  Get Your Free Quote
                </a>
                <a
                  href="#services"
                  className="bg-transparent border-2 border-[#4A6A8A] text-[#FFFFFF] font-[var(--font-subheading)] text-lg py-4 px-8 rounded hover:bg-[#4A6A8A]/20 transition-colors flex items-center justify-center uppercase tracking-wider"
                >
                  See What We Build
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-24 bg-[#FFFFFF]"
          aria-labelledby="services-heading"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2
                  id="services-heading"
                  className="font-[var(--font-heading)] text-4xl md:text-5xl text-[#1A2A3A] mb-4 tracking-tight"
                >
                  ONE TEAM. EVERY TRADE.
                </h2>
                <div className="w-20 h-2 bg-[#F26522]" aria-hidden="true"></div>
                <p className="mt-6 text-lg text-[#4A6A8A]">
                  Most contractors specialise in one trade and sub-contract the
                  rest. We don&apos;t. Every service below is delivered by our
                  own people, so nothing falls through the cracks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, idx) => (
                <article
                  key={service.name}
                  className={`bg-[#F5F5F5] p-8 lg:p-10 border-t-4 border-[#1A2A3A] hover:border-[#F26522] transition-colors group focus-within:border-[#F26522] ${
                    idx === services.length - 1
                      ? "md:col-span-2 xl:col-span-1"
                      : ""
                  }`}
                >
                  <div
                    className="w-14 h-14 bg-[#1A2A3A] group-hover:bg-[#F26522] transition-colors flex items-center justify-center rounded-sm mb-6 text-[#FFFFFF]"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-[#1A2A3A] mb-4 uppercase tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-[#4A6A8A] leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="safety"
          className="bg-[#4A6A8A] py-20 lg:py-32 relative overflow-hidden"
          aria-labelledby="safety-heading"
        >
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#1A2A3A] hidden lg:block transform -skew-x-12 translate-x-20" aria-hidden="true"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  id="safety-heading"
                  className="font-[var(--font-heading)] text-4xl md:text-5xl text-[#FFFFFF] mb-6 tracking-tight"
                >
                  NO SHORTCUTS.
                  <br /> NO CALLBACKS.
                  <br /> <span className="text-[#FFD700]">JUST WORK THAT LASTS.</span>
                </h2>
                <div className="w-20 h-2 bg-[#F26522] mb-8" aria-hidden="true"></div>
                <p className="text-lg text-[#F5F5F5] mb-8 leading-relaxed max-w-lg">
                  Every BKS site runs under OSHA-compliant safety protocols with
                  certified tradespeople on-site daily. We don&apos;t cut
                  corners on materials, skip inspection steps, or leave until
                  the job passes its own quality check.
                </p>

                <ul className="space-y-4" role="list">
                  {safetyItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#FFFFFF]">
                      <ShieldCheck className="text-[#FFD700] shrink-0" size={24} aria-hidden="true" />
                      <span className="font-[var(--font-subheading)] text-sm tracking-wide uppercase">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative w-full bg-[#1A2A3A] border-4 border-[#F26522] p-8 lg:p-12 text-center">
                <h3 className="font-[var(--font-heading)] text-3xl text-white mb-4 tracking-tight">
                  HAVE A PROJECT IN MIND?
                </h3>
                <p className="text-[#8AABC4] mb-8">
                  Send us the details on WhatsApp. Our team reviews every
                  enquiry within the day. No forms, no waiting, no sales
                  pitch. Just an honest answer on whether we&apos;re the
                  right fit for your project.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D05518] text-[#FFFFFF] font-[var(--font-subheading)] text-lg py-4 px-10 rounded hover:bg-[#B84816] transition-transform hover:scale-105 uppercase tracking-wider"
                >
                  Get Your Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A2A3A] pt-16 pb-10 border-t-[12px] border-[#F26522] mt-auto">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <a
              href="https://bkscontractors.cc"
              className="flex items-center select-none"
              aria-label="BKS Contractors Home"
            >
              <Image
                src="/bks-logo.png"
                alt=""
                role="presentation"
                width={180}
                height={64}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </a>
            <div className="text-center md:text-right">
              <div className="font-[var(--font-subheading)] text-2xl text-[#FFFFFF] mb-1">
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-[#F26522] transition-colors">
                  +264 81 787 7867
                </a>
              </div>
              <a
                href="https://bkscontractors.cc"
                className="text-[#8AABC4] hover:text-[#F26522] transition-colors"
              >
                bkscontractors.cc
              </a>
            </div>
          </div>

          <div className="border-t border-[#4A6A8A]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8AABC4] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} BKS Contractors. General
              Contracting &amp; Construction Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#128C3E] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(18,140,62,0.5)] ring-2 ring-[#0D7A3E] hover:bg-[#0D7A3E] hover:scale-110 transition-all duration-300 group flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute w-full h-full rounded-full border-2 border-[#128C3E] opacity-0 group-hover:animate-ping" aria-hidden="true"></span>
        <MessageCircle size={32} className="relative z-10" aria-hidden="true" />
      </a>
    </div>
  );
}