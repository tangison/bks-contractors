"use client";

import { useState, useEffect } from "react";
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
} from "lucide-react";

const WHATSAPP_NUMBER = "264817877867";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20BKS%20Contractors,%20I%20am%20interested%20in%20your%20services.`;

const services = [
  {
    name: "General Contractor",
    desc: "Comprehensive oversight and execution of structural builds from foundation to final completion.",
    icon: <Building2 size={32} />,
  },
  {
    name: "Construction Management",
    desc: "Rigorous scheduling, material logistics, and strict quality assurance protocols.",
    icon: <ClipboardList size={32} />,
  },
  {
    name: "Renovations",
    desc: "Strategic structural updates, modernization, and comprehensive facility expansions.",
    icon: <Hammer size={32} />,
  },
  {
    name: "Plumbing",
    desc: "Industrial and commercial water, drainage, and complex pipeline system installations.",
    icon: <Wrench size={32} />,
  },
  {
    name: "Electrical",
    desc: "High-voltage wiring, panel upgrades, and secure commercial electrical systems.",
    icon: <Zap size={32} />,
  },
  {
    name: "Roofing",
    desc: "Durable commercial roofing systems engineered for extreme weather resistance and longevity.",
    icon: <HomeIcon size={32} />,
  },
  {
    name: "Waste Removal",
    desc: "Efficient site clearing, hazardous debris management, and post-construction cleanup.",
    icon: <Trash2 size={32} />,
  },
];

const safetyItems = [
  "Multi-Disciplinary Site Supervisors",
  "Certified Plumbers & Electricians",
  "OSHA Compliant Operations",
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

  // Lock body scroll when mobile menu is open
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

  return (
    <div className="min-h-screen flex flex-col relative bg-[#F5F5F5] text-[#1A2A3A]">
      {/* ===== FLOATING NAVIGATION ===== */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 pt-4 transition-all duration-500">
        <header
          className={`pointer-events-auto w-full max-w-7xl transition-all duration-500 flex justify-between items-center ${
            scrolled
              ? "bg-[#1A2A3A]/95 backdrop-blur-md border border-[#4A6A8A]/40 shadow-2xl py-3 px-6 lg:px-8 rounded-xl"
              : "bg-transparent border-transparent py-5 px-6 lg:px-12"
          }`}
          role="banner"
        >
          {/* Logo Image — replaces text wordmark */}
          <a
            href="https://bkscontractors.cc"
            className="flex items-center select-none cursor-pointer"
            aria-label="BKS Contractors — Home"
          >
            <Image
              src="/bks-logo.svg"
              alt="BKS Contractors logo"
              width={160}
              height={56}
              priority
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
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
              className="bg-[#F26522] text-[#FFFFFF] font-[var(--font-subheading)] text-sm py-2.5 px-6 rounded hover:bg-[#d9561c] transition-colors active:scale-95 flex items-center gap-2 uppercase tracking-wider"
            >
              Hire Us on WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
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
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    className="origin-center transition-all duration-300"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    className="origin-center transition-all duration-300"
                  />
                </>
              ) : (
                <>
                  <line
                    x1="4"
                    y1="9"
                    x2="20"
                    y2="9"
                    className="transition-all duration-300"
                  />
                  <line
                    x1="4"
                    y1="15"
                    x2="20"
                    y2="15"
                    className="transition-all duration-300"
                  />
                </>
              )}
            </svg>
          </button>
        </header>
      </div>

      {/* ===== MOBILE NAV DROPDOWN ===== */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[#1A2A3A] transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-28 px-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <a
          href="#services"
          className="font-[var(--font-subheading)] text-2xl text-[#F5F5F5] py-6 border-b border-[#4A6A8A]/20 focus-visible:ring-2 focus-visible:ring-[#F26522] rounded px-2"
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
          className="mt-8 bg-[#F26522] text-[#FFFFFF] font-[var(--font-subheading)] text-xl py-4 px-6 rounded text-center w-full shadow-lg uppercase tracking-wider"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Message Us on WhatsApp
        </a>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-grow" id="main-content">
        {/* ===== HERO SECTION ===== */}
        <section
          className="relative bg-[#1A2A3A] pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Abstract Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#F5F5F5"
                    strokeWidth="1"
                  />
                </pattern>
                <pattern
                  id="diagonal"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M-1,1 l2,-2 M0,20 l20,-20 M19,21 l2,-2"
                    fill="none"
                    stroke="#4A6A8A"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#diagonal)" />
            </svg>
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-6 border border-[#4A6A8A] bg-[#4A6A8A]/20 px-4 py-2 rounded">
                <span
                  className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"
                  aria-hidden="true"
                ></span>
                <span className="font-[var(--font-subheading)] text-sm text-[#F5F5F5] uppercase tracking-wider">
                  Available Now for Deployment
                </span>
              </div>
              <h1
                id="hero-heading"
                className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-[#FFFFFF] leading-[1.1] mb-8 tracking-tight"
              >
                BUILDING
                <br />
                TOMORROW&apos;S
                <br />
                <span className="text-[#F26522]">FOUNDATIONS</span> TODAY.
              </h1>
              <p className="text-xl md:text-2xl text-[#F5F5F5]/80 max-w-2xl mb-10 leading-relaxed">
                From general contracting and site management to structural
                renovations and heavy utilities. We execute with exact
                tolerances.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-[#FFFFFF] font-[var(--font-subheading)] text-lg py-4 px-8 rounded hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-[#25D366]/20 uppercase tracking-wider"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  WhatsApp Direct
                </a>
                <a
                  href="https://bkscontractors.cc"
                  className="bg-transparent border-2 border-[#4A6A8A] text-[#FFFFFF] font-[var(--font-subheading)] text-lg py-4 px-8 rounded hover:bg-[#4A6A8A]/20 transition-colors flex items-center justify-center uppercase tracking-wider"
                >
                  Visit Portal
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
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
                  COMPREHENSIVE SERVICES
                </h2>
                <div
                  className="w-20 h-2 bg-[#F26522]"
                  aria-hidden="true"
                ></div>
                <p className="mt-6 text-lg text-[#4A6A8A]">
                  As a full-service general contractor, we manage every phase of
                  the construction lifecycle. From ground-breaking to electrical
                  finishing.
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

        {/* ===== SAFETY / COMMITMENT SECTION ===== */}
        <section
          id="safety"
          className="bg-[#4A6A8A] py-20 lg:py-32 relative overflow-hidden"
          aria-labelledby="safety-heading"
        >
          <div
            className="absolute right-0 top-0 h-full w-1/3 bg-[#1A2A3A] hidden lg:block transform -skew-x-12 translate-x-20"
            aria-hidden="true"
          ></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  id="safety-heading"
                  className="font-[var(--font-heading)] text-4xl md:text-5xl text-[#FFFFFF] mb-6 tracking-tight"
                >
                  ENGINEERED FOR SAFETY.
                  <br /> BUILT FOR DURABILITY.
                </h2>
                <div
                  className="w-20 h-2 bg-[#F26522] mb-8"
                  aria-hidden="true"
                ></div>
                <p className="text-lg text-[#F5F5F5] mb-8 leading-relaxed max-w-lg">
                  Construction requires exact execution. We employ rigorous
                  quality control and compliant safety standards across all
                  disciplines — whether we are laying foundations, routing
                  plumbing, or installing heavy electrical arrays.
                </p>

                <ul className="space-y-4" role="list">
                  {safetyItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[#FFFFFF]"
                    >
                      <ShieldCheck
                        className="text-[#F26522] shrink-0"
                        size={24}
                        aria-hidden="true"
                      />
                      <span className="font-[var(--font-subheading)] text-sm tracking-wide uppercase">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Block */}
              <div className="relative w-full bg-[#1A2A3A] border-4 border-[#F26522] p-8 lg:p-12 text-center">
                <h3 className="font-[var(--font-heading)] text-3xl text-white mb-4 tracking-tight">
                  READY TO BUILD?
                </h3>
                <p className="text-[#4A6A8A] mb-8">
                  Send us your project scope via WhatsApp for immediate review
                  by our engineering and management team.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F26522] text-[#FFFFFF] font-[var(--font-subheading)] text-lg py-4 px-10 rounded hover:bg-[#d9561c] transition-transform hover:scale-105 uppercase tracking-wider"
                >
                  Start Conversation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer
        className="bg-[#1A2A3A] pt-16 pb-10 border-t-[12px] border-[#F26522] mt-auto"
        role="contentinfo"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Footer Logo Image — replaces text wordmark */}
            <a
              href="https://bkscontractors.cc"
              className="flex items-center select-none cursor-pointer"
              aria-label="BKS Contractors — Home"
            >
              <Image
                src="/bks-logo.svg"
                alt="BKS Contractors logo"
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
                className="text-[#4A6A8A] hover:text-[#F26522] transition-colors"
              >
                bkscontractors.cc
              </a>
            </div>
          </div>

          <div className="border-t border-[#4A6A8A]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#4A6A8A] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} BKS Contractors. General
              Contracting &amp; Construction Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP WIDGET ===== */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] hover:scale-110 transition-all duration-300 group flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#F26522] focus-visible:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <span
          className="absolute w-full h-full rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping"
          aria-hidden="true"
        ></span>
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
}