"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { CLINIC } from "../../lib/clinic";

const links = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Results", href: "/#cases" },
  { label: "Visit", href: "/#location" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled || open
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-aura-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 md:px-12 md:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/smilecliniqueiconhehe.svg"
            width={52}
            height={52}
            alt="Smile Clinique logo"
            className="h-10 w-10 object-contain md:h-12 md:w-12"
            priority
          />
          <span className="flex flex-col">
            <span className="font-chancery text-[22px] leading-none text-[#2d3748] md:text-[28px]">
              Smile Clinique
            </span>
            <span className="mt-1.5 font-sans text-[7px] uppercase tracking-[0.22em] text-[#2d3748]/60 md:text-[9px]">
              by Dr. Nidhi Mehta
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 rounded-full border border-black/5 bg-white/60 px-7 py-2.5 font-sans text-[13px] font-medium text-[#2d3748]/80 shadow-aura-soft backdrop-blur-md lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-aura-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={CLINIC.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-[#1e293b] px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white shadow-aura-soft transition-all duration-300 hover:bg-aura-black sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            Book now
          </a>
          <a
            href={CLINIC.phoneHref}
            aria-label={`Call Smile Clinique on ${CLINIC.phoneDisplay}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-aura-black shadow-aura-soft backdrop-blur-md sm:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-aura-black shadow-aura-soft backdrop-blur-md lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white/95 px-5 pb-7 pt-5 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-black/5 py-4 font-sans text-lg text-aura-black"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-aura-accent" />
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={CLINIC.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-aura-black px-5 py-4 font-sans text-xs uppercase tracking-[0.2em] text-white"
            >
              <Phone className="h-4 w-4" />
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={CLINIC.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-aura-accent/30 bg-aura-accent/10 px-5 py-4 font-sans text-xs uppercase tracking-[0.2em] text-aura-black"
            >
              WhatsApp the clinic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
