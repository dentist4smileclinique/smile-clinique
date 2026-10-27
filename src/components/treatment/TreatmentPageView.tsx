import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  Gem,
  HeartPulse,
  MapPin,
  Microscope,
  Minus,
  Phone,
  Plus,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import { CLINIC } from "../../lib/clinic";
import {
  getRelatedTreatments,
  type Treatment,
  type TreatmentIcon,
} from "../../lib/treatments";
import { Reveal } from "../Reveal";
import { GrainOverlay } from "../GrainOverlay";
import { FloatingWhatsApp } from "../FloatingWhatsApp";

const ICONS: Record<TreatmentIcon, typeof Sparkles> = {
  Sparkles,
  Gem,
  Activity,
  Smile,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
      <span className="h-px w-10 bg-aura-accent/40" />
      {children}
    </div>
  );
}

function splitLastWord(text: string) {
  const words = text.trim().split(/\s+/);
  return {
    lead: words.slice(0, -1).join(" "),
    accent: words[words.length - 1],
  };
}

function SectionTitle({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const { lead, accent } = splitLastWord(title);
  return (
    <h2
      className={`mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight text-[#1a202c] md:text-[4.4vw] ${className}`}
    >
      {lead}{" "}
      <span className="font-serif font-light italic text-aura-accent">
        {accent}
      </span>
    </h2>
  );
}

function DoctorCard() {
  return (
    <div className="flex items-center gap-4 rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-aura-soft">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-aura-beige">
        <Image
          src="/treatments/dr-nidhi-mehta-dentist-malabar-hill-mumbai.webp"
          alt="Dr. Nidhi Mehta, founder of Smile Clinique in Malabar Hill, Mumbai"
          fill
          sizes="56px"
          className="object-cover object-top"
        />
      </div>
      <div>
        <p className="font-display text-[8px] uppercase tracking-[0.32em] text-aura-accent">
          Clinical guidance
        </p>
        <p className="mt-1 font-sans text-sm font-semibold text-aura-black">
          Dr. Nidhi Mehta, BDS
        </p>
        <p className="font-sans text-[11px] leading-snug text-aura-black/55">
          Founder, Smile Clinique
        </p>
      </div>
    </div>
  );
}

export function TreatmentPageView({ treatment }: { treatment: Treatment }) {
  const Icon = ICONS[treatment.icon];
  const related = getRelatedTreatments(treatment);
  const evidenceCase = treatment.evidenceCase;
  const updated = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(treatment.updated));

  const sectionLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#suitability", label: "Suitability" },
    { href: "#options", label: "Options" },
    { href: "#process", label: "Process" },
    { href: "#evidence", label: "Evidence" },
    { href: "#aftercare", label: "Aftercare" },
    { href: "#cost", label: "Cost" },
    { href: "#faq", label: "FAQs" },
  ];

  return (
    <div className="min-h-screen bg-aura-beige font-sans text-aura-black">
      <GrainOverlay />
      <main id="main-content" role="main">
        <section className="relative overflow-hidden bg-[#fff9f9] pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-aura-accent/15 blur-[110px]" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#f4dfe2] blur-[100px]" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-aura-black/40"
            >
              <Link href="/" className="transition-colors hover:text-aura-black">
                Home
              </Link>
              <ChevronDown className="h-3 w-3 -rotate-90" />
              <Link
                href="/treatments"
                className="transition-colors hover:text-aura-black"
              >
                Treatments
              </Link>
              <ChevronDown className="h-3 w-3 -rotate-90" />
              <span className="text-aura-black/70">{treatment.name}</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-7">
                <div className="flex items-center gap-3 font-display text-[9px] uppercase tracking-[0.38em] text-aura-accent">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-aura-accent/25 bg-white/70">
                    <Icon className="h-4 w-4" />
                  </span>
                  {treatment.eyebrow}
                </div>

                <h1 className="mt-6 font-sans text-[13vw] font-bold leading-[0.92] tracking-tight text-[#1a202c] md:text-[5.1vw]">
                  {treatment.h1.leading}{" "}
                  <br />
                  <span className="font-serif font-light italic text-aura-accent">
                    {treatment.h1.accent}
                  </span>{" "}
                  <span className="mt-2 block font-sans text-[0.38em] font-normal uppercase tracking-[0.22em] text-aura-black/40">
                    {treatment.h1.trailing}
                  </span>
                </h1>

                <p className="mt-7 max-w-xl font-sans text-base leading-relaxed text-aura-black/60 md:text-lg">
                  {treatment.heroLead}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {treatment.heroFacts.map((fact) => (
                    <span
                      key={fact}
                      className="rounded-full border border-black/8 bg-white/65 px-4 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-aura-black/55 backdrop-blur-sm"
                    >
                      {fact}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={CLINIC.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-aura-black px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-aura-deep transition-all duration-300 hover:bg-aura-accent"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Book a consultation
                  </a>
                  <a
                    href={CLINIC.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-aura-black transition-colors hover:border-aura-accent/40 hover:bg-white"
                  >
                    WhatsApp the clinic
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[10px] uppercase tracking-[0.18em] text-aura-black/35">
                  <span>{treatment.readingTime}</span>
                  <span className="h-1 w-1 rounded-full bg-aura-black/20" />
                  <span>Updated {updated}</span>
                  <span className="h-1 w-1 rounded-full bg-aura-black/20" />
                  <span>{CLINIC.locality}, Mumbai</span>
                </p>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-aura-deep md:rounded-[3.5rem]">
                  <Image
                    src={treatment.heroImage.src}
                    alt={treatment.heroImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className={
                      treatment.heroImageFit === "contain"
                        ? "object-contain bg-[#f6f1f0]"
                        : "object-cover"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                  <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/90 px-4 py-2 font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-aura-black shadow-aura-soft backdrop-blur-md">
                    Malabar Hill · Mumbai
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="font-serif text-lg italic leading-snug text-white/90 md:text-xl">
                      {treatment.heroImage.caption}
                    </p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {treatment.heroAside.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-black/5 bg-white/70 p-3 text-center backdrop-blur-sm"
                    >
                      <p className="font-serif text-lg leading-none text-aura-black md:text-xl">
                        {item.value}
                      </p>
                      <p className="mt-1.5 font-sans text-[8px] uppercase leading-tight tracking-[0.12em] text-aura-black/45">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="sticky top-[64px] z-40 border-y border-black/5 bg-white/85 backdrop-blur-xl md:top-[77px]">
          <div className="mx-auto max-w-[1400px] overflow-x-auto hide-scrollbar">
            <nav
              aria-label="On this page"
              className="flex min-w-max gap-1 px-4 py-2 md:px-10"
            >
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-aura-black/50 transition-colors hover:bg-aura-beige hover:text-aura-black"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <section
          id="overview"
          className="scroll-mt-36 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <SectionLabel>Overview</SectionLabel>
                <SectionTitle title={treatment.definition.title} />
                <div className="quick-answer mt-9 rounded-[2rem] border border-aura-accent/15 bg-aura-beige p-6 md:rounded-[2.5rem] md:p-8">
                  <p className="font-display text-[9px] uppercase tracking-[0.34em] text-aura-accent">
                    The short answer
                  </p>
                  <p className="mt-4 font-serif text-xl leading-relaxed text-aura-black md:text-2xl">
                    {treatment.quickAnswer}
                  </p>
                </div>
                <div className="mt-9 space-y-5 font-sans text-[15px] leading-relaxed text-aura-black/60 md:text-base">
                  {treatment.definition.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-5">
                <div className="sticky top-36 space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/5 bg-aura-beige">
                    <Image
                      src={treatment.gallery[0].src}
                      alt={treatment.gallery[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 p-5 font-sans text-[11px] leading-snug text-white/85">
                      {treatment.gallery[0].caption}
                    </p>
                  </div>
                  <DoctorCard />
                  <div className="rounded-[1.75rem] bg-aura-black p-6 text-white">
                    <p className="font-display text-[8px] uppercase tracking-[0.32em] text-aura-accent">
                      Start here
                    </p>
                    <p className="mt-3 font-serif text-2xl leading-tight">
                      A diagnosis first. A plan second.
                    </p>
                    <a
                      href={CLINIC.phoneHref}
                      className="mt-5 inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {CLINIC.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="suitability"
          className="scroll-mt-36 bg-aura-beige py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <SectionLabel>Suitability</SectionLabel>
              <SectionTitle title={treatment.signsTitle} />
            </Reveal>

            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {treatment.signs.map((sign, index) => (
                <Reveal key={sign.title} delay={index * 0.04}>
                  <div className="group flex h-full gap-5 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-aura-soft transition-colors duration-500 hover:border-aura-accent/25">
                    <span className="font-serif text-3xl leading-none text-aura-accent/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-semibold leading-snug text-aura-black">
                        {sign.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-aura-black/55">
                        {sign.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-[1.75rem] border border-aura-accent/15 bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aura-accent/10 text-aura-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <h3 className="font-sans text-lg font-semibold">
                      A good fit if you are
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {treatment.candidates.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-sans text-sm leading-relaxed text-aura-black/60"
                      >
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-aura-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="h-full rounded-[1.75rem] bg-aura-black p-7 text-white">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70">
                      <Minus className="h-4 w-4" />
                    </span>
                    <h3 className="font-sans text-lg font-semibold">
                      Not the right starting point if
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {treatment.notFor.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-sans text-sm leading-relaxed text-white/60"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aura-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-white/10 pt-5 font-sans text-[11px] leading-relaxed text-white/35">
                    This list is a guide, not a diagnosis. Suitability is
                    confirmed only after an in-person examination.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="options" className="scroll-mt-36 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <SectionLabel>Options</SectionLabel>
                <SectionTitle title={treatment.optionsTitle} />
              </Reveal>
              <Reveal delay={0.08} className="lg:col-span-5">
                <p className="font-sans text-sm leading-relaxed text-aura-black/55 md:text-base">
                  {treatment.optionsIntro}
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {treatment.options.map((option, index) => (
                <Reveal key={option.name} delay={index * 0.04}>
                  <div className="group flex h-full flex-col justify-between rounded-[2rem] border border-black/5 bg-aura-beige p-7 transition-all duration-500 hover:border-aura-accent/25 hover:bg-white hover:shadow-aura-soft">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-serif text-4xl leading-none text-aura-accent/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-aura-black/20 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-aura-accent" />
                      </div>
                      <h3 className="mt-5 font-sans text-2xl font-semibold leading-tight">
                        {option.name}
                      </h3>
                      <p className="mt-2 font-display text-[8px] uppercase tracking-[0.28em] text-aura-accent">
                        Best for · {option.bestFor}
                      </p>
                      <p className="mt-4 font-sans text-sm leading-relaxed text-aura-black/55">
                        {option.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="process"
          className="scroll-mt-36 bg-aura-beige py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <SectionLabel>Process</SectionLabel>
              <SectionTitle title={treatment.stepsTitle} />
              <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-aura-black/55 md:text-base">
                {treatment.stepsIntro}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-3 md:grid-cols-5">
              {treatment.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.05}>
                  <div className="h-full rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-aura-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-aura-black font-serif text-lg text-white">
                      {step.number}
                    </div>
                    <h3 className="mt-5 font-sans text-base font-semibold leading-snug">
                      {step.title}
                    </h3>
                    {step.duration && (
                      <p className="mt-1.5 font-display text-[8px] uppercase tracking-[0.18em] text-aura-accent">
                        {step.duration}
                      </p>
                    )}
                    <p className="mt-3 font-sans text-[12px] leading-relaxed text-aura-black/55">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="evidence"
          className="scroll-mt-36 bg-aura-black py-20 text-white md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
                  <span className="h-px w-10 bg-aura-accent/50" />
                  Evidence
                </div>
                <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4.4vw]">
                  What the literature{" "}
                  <span className="font-serif font-light italic text-aura-accent">
                    actually says
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl font-sans text-sm leading-relaxed text-white/55 md:text-base">
                  {treatment.evidence.intro}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <Microscope className="h-5 w-5 text-aura-accent" />
                    <p className="font-display text-[9px] uppercase tracking-[0.28em] text-white/60">
                      How to read this
                    </p>
                  </div>
                  <p className="mt-4 font-sans text-[12px] leading-relaxed text-white/45">
                    Survival is not the same as success. A restoration or implant
                    can remain in place while needing repair, hygiene treatment
                    or replacement. The figures below are population averages,
                    not personal guarantees.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-2">
              {treatment.evidence.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.05}>
                  <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
                    <p className="font-serif text-4xl leading-none text-aura-accent md:text-5xl">
                      {stat.value}
                    </p>
                    <h3 className="mt-4 font-sans text-base font-semibold leading-snug text-white">
                      {stat.label}
                    </h3>
                    <p className="mt-3 font-sans text-[12px] leading-relaxed text-white/45">
                      {stat.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-[2rem] border border-aura-accent/20 bg-aura-accent/10 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-aura-accent" />
                  <p className="font-sans text-[13px] leading-relaxed text-white/65">
                    {treatment.evidence.caveat}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="font-display text-[9px] uppercase tracking-[0.32em] text-white/40">
                  Selected sources
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {treatment.evidence.sources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-aura-accent/30 hover:bg-white/5"
                    >
                      <div>
                        <p className="font-sans text-[12px] font-medium text-white/75 group-hover:text-white">
                          {source.label}
                        </p>
                        <p className="mt-1 font-sans text-[11px] leading-relaxed text-white/35">
                          {source.note}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/30 transition-colors group-hover:text-aura-accent" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <SectionLabel>Why this approach</SectionLabel>
                <SectionTitle title="The difference is in the planning" />
                <div className="mt-8 space-y-3">
                  {treatment.benefits.map((benefit, index) => (
                    <div
                      key={benefit.title}
                      className="flex gap-4 rounded-[1.5rem] border border-black/5 bg-aura-beige p-5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-aura-accent shadow-aura-soft">
                        {index === 0 ? (
                          <ScanLine className="h-4 w-4" />
                        ) : index === 1 ? (
                          <HeartPulse className="h-4 w-4" />
                        ) : index === 2 ? (
                          <Star className="h-4 w-4" />
                        ) : (
                          <ShieldCheck className="h-4 w-4" />
                        )}
                      </span>
                      <div>
                        <h3 className="font-sans text-base font-semibold">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-aura-black/55">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <SectionLabel>Technology</SectionLabel>
                <SectionTitle title="Tools that support judgement" />
                <div className="mt-8 divide-y divide-black/5 border-y border-black/5">
                  {treatment.technology.map((item) => (
                    <div key={item.title} className="flex gap-4 py-5">
                      <ScanLine className="mt-0.5 h-4 w-4 shrink-0 text-aura-accent" />
                      <div>
                        <h3 className="font-sans text-base font-semibold">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-sans text-sm leading-relaxed text-aura-black/55">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-aura-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel>Clinical evidence</SectionLabel>
                {evidenceCase && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-aura-accent/20 bg-white px-3 py-1.5 font-sans text-[8px] uppercase tracking-[0.16em] text-aura-black/45">
                    <ShieldCheck className="h-3 w-3 text-aura-accent" />
                    {evidenceCase.consent}
                  </span>
                )}
              </div>
              <div className="grid gap-6 md:grid-cols-12 md:items-end">
                <div className="md:col-span-8">
                  <SectionTitle title={treatment.galleryTitle} />
                </div>
                <p className="font-sans text-[11px] leading-relaxed text-aura-black/40 md:col-span-4">
                  {treatment.galleryNote}
                </p>
              </div>
            </Reveal>

            {evidenceCase ? (
              evidenceCase.layout === "sequence" ? (
                <div className="mt-10 space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    {evidenceCase.images.map((image, index) => (
                      <Reveal
                        key={`${image.src}-${index}`}
                        delay={index * 0.06}
                      >
                        <figure className="overflow-hidden rounded-[2rem] border border-black/5 bg-white">
                          <div className="relative aspect-[3/4] bg-aura-black">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-contain"
                            />
                            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-aura-black shadow-aura-soft backdrop-blur-md">
                              {index === 0 ? "Frontal" : "Profile"} ·{" "}
                              {evidenceCase.badge ?? "Pre / Post"}
                            </span>
                          </div>
                          <figcaption className="p-4 font-sans text-[11px] leading-relaxed text-aura-black/55">
                            {image.caption}
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                  <Reveal>
                    <div className="rounded-[2rem] border border-black/5 bg-white p-6 md:p-10">
                      <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                        {evidenceCase.eyebrow ??
                          "Real patient case · Malabar Hill, Mumbai"}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-aura-black md:text-4xl">
                        {evidenceCase.title}
                      </h3>
                      <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-aura-black/55">
                        {evidenceCase.description}
                      </p>
                      <p className="mt-4 font-sans text-[11px] leading-relaxed text-aura-black/40">
                        {evidenceCase.consent} Individual results vary.
                      </p>
                      <a
                        href={CLINIC.phoneHref}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-aura-black px-5 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-aura-accent"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {evidenceCase.ctaLabel ?? "Discuss a similar case"}
                      </a>
                    </div>
                  </Reveal>
                </div>
              ) : (
                <div className="mt-10 space-y-3">
                <Reveal>
                  <div className="grid overflow-hidden rounded-[2rem] border border-black/5 bg-white md:grid-cols-12">
                    <div className="relative aspect-[4/5] bg-aura-black md:col-span-5">
                      <Image
                        src={evidenceCase.images[0].src}
                        alt={evidenceCase.images[0].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-contain"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-aura-black shadow-aura-soft backdrop-blur-md">
                        {evidenceCase.badge ?? "Before / After"}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-6 md:col-span-7 md:p-10">
                      <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                        {evidenceCase.eyebrow ??
                          "Real patient case · Malabar Hill, Mumbai"}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-aura-black md:text-4xl">
                        {evidenceCase.title}
                      </h3>
                      <p className="mt-4 font-sans text-sm leading-relaxed text-aura-black/55">
                        {evidenceCase.description}
                      </p>
                      <p className="mt-4 font-sans text-[11px] leading-relaxed text-aura-black/40">
                        {evidenceCase.consent} Individual results vary.
                      </p>
                      <a
                        href={CLINIC.phoneHref}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-aura-black px-5 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-aura-accent"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {evidenceCase.ctaLabel ?? "Discuss a similar case"}
                      </a>
                    </div>
                  </div>
                </Reveal>
                <div className="grid gap-3 md:grid-cols-3">
                  {evidenceCase.images.slice(1).map((image, index) => (
                    <Reveal
                      key={`${image.src}-${index}`}
                      delay={index * 0.06}
                    >
                      <figure className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-white">
                        <div className="relative aspect-[3/4] bg-[#0A0A0A]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                        <figcaption className="p-4 font-sans text-[11px] leading-relaxed text-aura-black/55">
                          {image.caption}
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
              )
            ) : (
              <div className="mt-10 grid gap-3 md:grid-cols-12">
                {treatment.gallery.map((image, index) => (
                  <Reveal
                    key={`${image.src}-${index}`}
                    delay={index * 0.06}
                    className={
                      index === 0
                        ? "md:col-span-7"
                        : index === 1
                          ? "md:col-span-5"
                          : "md:col-span-12"
                    }
                  >
                    <div
                      className={`group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white ${
                        index === 0
                          ? "aspect-[16/11]"
                          : index === 1
                            ? "aspect-[16/11] md:aspect-[4/5]"
                            : "aspect-[16/7]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 768px) 100vw, 58vw"
                            : index === 1
                              ? "(max-width: 768px) 100vw, 42vw"
                              : "100vw"
                        }
                        className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <p className="absolute inset-x-0 bottom-0 p-5 font-sans text-[11px] leading-snug text-white/85 md:p-6">
                        {image.caption}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <section
          id="aftercare"
          className="scroll-mt-36 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <SectionLabel>Aftercare</SectionLabel>
                <SectionTitle title="Protect the result, not just the visit" />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {treatment.aftercare.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-[1.5rem] border border-black/5 bg-aura-beige p-5"
                    >
                      <h3 className="font-sans text-base font-semibold">
                        {group.title}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 font-sans text-[12px] leading-relaxed text-aura-black/55"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aura-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="sticky top-36 space-y-4">
                  <div className="rounded-[2rem] bg-aura-black p-7 text-white">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-aura-accent" />
                      <h3 className="font-sans text-lg font-semibold">
                        Risks and honest limitations
                      </h3>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {treatment.risks.map((risk) => (
                        <li
                          key={risk}
                          className="flex gap-3 font-sans text-[12px] leading-relaxed text-white/55"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aura-accent/70" />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[2rem] border border-aura-accent/20 bg-aura-accent/10 p-6">
                    <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                      Important
                    </p>
                    <p className="mt-3 font-sans text-[12px] leading-relaxed text-aura-black/55">
                      This page is educational and does not replace a clinical
                      examination. Every treatment carries risks, and not every
                      patient is a candidate. Ask questions, request a written
                      plan, and seek a second opinion if you need one.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="cost" className="scroll-mt-36 bg-aura-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-6">
                <SectionLabel>Investment</SectionLabel>
                <SectionTitle title={treatment.costTitle} className="md:text-[3.2vw]" />
                <p className="mt-6 font-sans text-sm leading-relaxed text-aura-black/55 md:text-base">
                  {treatment.costIntro}
                </p>
                <div className="mt-8 rounded-[1.75rem] border border-black/5 bg-white p-6">
                  <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                    What a good quote should include
                  </p>
                  <p className="mt-3 font-sans text-[13px] leading-relaxed text-aura-black/55">
                    {treatment.costNote}
                  </p>
                  <a
                    href={CLINIC.phoneHref}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-aura-black px-5 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-aura-accent"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Request a written plan
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-6">
                <div className="rounded-[2rem] border border-black/5 bg-white p-7 md:p-9">
                  <h3 className="font-sans text-lg font-semibold">
                    What changes the price
                  </h3>
                  <div className="mt-5 divide-y divide-black/5 border-y border-black/5">
                    {treatment.costFactors.map((factor, index) => (
                      <div key={factor} className="flex items-start gap-4 py-4">
                        <span className="font-serif text-sm text-aura-accent/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="font-sans text-sm leading-relaxed text-aura-black/60">
                          {factor}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 font-sans text-[11px] leading-relaxed text-aura-black/40">
                    Prices are not listed on this page because a responsible
                    quote depends on your examination, imaging and the final
                    plan. Ask for an itemised estimate in writing.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-6">
                <SectionLabel>Serving Malabar Hill & South Mumbai</SectionLabel>
                <SectionTitle title="A Malabar Hill practice, close to home" />
                <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-aura-black/55 md:text-base">
                  Smile Clinique is a boutique dental practice at G 3, Akashdeep
                  Building, Dongersi Road. Patients travel from Malabar Hill and across South
                  Mumbai for treatment planning that takes the time to explain
                  the why, not just the what.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {CLINIC.areasServed.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-black/8 bg-aura-beige px-3 py-1.5 font-sans text-[9px] uppercase tracking-[0.12em] text-aura-black/50"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={CLINIC.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-aura-black px-6 py-3.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-aura-accent"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Open in maps
                  </a>
                  <a
                    href={CLINIC.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-aura-black transition-colors hover:border-aura-accent/40"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-black/5 shadow-aura-deep">
                  <Image
                    src="/treatments/smile-clinique-interior-malabar-hill-mumbai.webp"
                    alt="Smile Clinique dental practice interior in Malabar Hill, Mumbai"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="font-display text-[8px] uppercase tracking-[0.3em] text-white/60">
                      The sanctuary
                    </p>
                    <p className="mt-2 font-serif text-xl leading-snug text-white md:text-2xl">
                      {CLINIC.addressLine}
                    </p>
                    <p className="mt-2 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.16em] text-white/55">
                      <Clock className="h-3.5 w-3.5" />
                      Mon–Sat · 9 AM–1 PM & 4 PM–7 PM
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-36 bg-aura-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1000px] px-5 md:px-12">
            <Reveal>
              <SectionLabel>Questions</SectionLabel>
              <SectionTitle title="Clear answers before you commit" />
              <p className="mt-5 max-w-2xl font-sans text-sm leading-relaxed text-aura-black/55 md:text-base">
                These are the questions patients ask most often. If yours is not
                here, call the clinic or ask at your consultation.
              </p>
            </Reveal>

            <div className="mt-10 border-t border-black/10">
              {treatment.faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.02}>
                  <details className="group border-b border-black/10 py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-sans text-lg font-medium leading-snug tracking-tight text-aura-black transition-colors group-open:text-aura-accent md:text-xl">
                        {faq.question}
                      </h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-aura-black/40 transition-all duration-300 group-open:rotate-45 group-open:border-aura-accent group-open:bg-aura-accent group-open:text-white">
                        <Plus className="h-4 w-4" />
                      </span>
                    </summary>
                    <p className="mt-4 max-w-3xl pr-10 font-sans text-sm leading-relaxed text-aura-black/60">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <SectionLabel>Continue exploring</SectionLabel>
              <SectionTitle title="Related treatments" />
            </Reveal>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-aura-beige transition-all duration-500 hover:border-aura-accent/25 hover:bg-white hover:shadow-aura-soft"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.heroImage.src}
                        alt={item.heroImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-sans text-xl font-semibold leading-tight">
                        {item.name}
                      </h3>
                      <p className="mt-2 font-sans text-[12px] leading-relaxed text-aura-black/50">
                        {item.heroLead}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-display text-[8px] uppercase tracking-[0.24em] text-aura-accent">
                        Explore
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white pb-20 md:pb-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-aura-black px-7 py-14 text-white md:rounded-[4rem] md:px-16 md:py-20">
                <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full bg-aura-accent/20 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-24 left-1/4 h-[280px] w-[280px] rounded-full bg-aura-accent/10 blur-[80px]" />
                <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-7">
                    <p className="font-display text-[9px] uppercase tracking-[0.4em] text-aura-accent">
                      Your next step
                    </p>
                    <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4vw]">
                      {treatment.ctaHeadline}
                    </h2>
                    <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/55 md:text-base">
                      {treatment.ctaBody}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
                    <a
                      href={CLINIC.phoneHref}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-aura-black transition-colors hover:bg-aura-accent hover:text-white sm:w-auto"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {CLINIC.phoneDisplay}
                    </a>
                    <a
                      href={CLINIC.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 sm:w-auto"
                    >
                      WhatsApp the clinic
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <p className="mt-2 max-w-xs text-center font-sans text-[10px] leading-relaxed text-white/35 lg:text-right">
                      {CLINIC.addressLine}
                      <br />
                      Mon–Sat · 9 AM–1 PM & 4 PM–7 PM
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-6 font-sans text-[10px] leading-relaxed text-aura-black/35 md:flex-row md:items-center md:justify-between">
              <p className="max-w-3xl">
                Educational content only. It is not a substitute for a clinical
                examination, diagnosis or personalised treatment plan. Treatment
                suitability and results vary between individuals.
              </p>
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 whitespace-nowrap font-display text-[8px] uppercase tracking-[0.24em] text-aura-black/45 transition-colors hover:text-aura-accent"
              >
                <ArrowUpRight className="h-3 w-3 rotate-180" />
                All treatments
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
