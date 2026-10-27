import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  HeartPulse,
  MapPin,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CLINIC } from "../../lib/clinic";
import { TREATMENTS } from "../../lib/treatments";
import { Reveal } from "../Reveal";
import { GrainOverlay } from "../GrainOverlay";
import { FloatingWhatsApp } from "../FloatingWhatsApp";

const alsoOffered = [
  {
    title: "Restorative & prosthodontic",
    items: [
      "Root canal treatment",
      "Dental crowns & bridges",
      "Dentures",
      "Ceramic onlays & inlays",
      "Composite bonding",
      "Tooth extraction",
      "Wisdom tooth surgery",
      "Dental fillings",
      "Bone grafting",
      "Sinus lift",
    ],
  },
  {
    title: "Cosmetic",
    items: [
      "Teeth whitening",
      "Porcelain veneers",
      "Smile design",
      "Cosmetic contouring",
      "Digital smile makeover",
      "Laser dentistry",
    ],
  },
  {
    title: "Gum & preventive",
    items: [
      "Gum treatments",
      "Periodontal surgery",
      "Teeth cleaning & scaling",
      "Fluoride therapy",
      "Preventive care",
      "Night guards & mouth guards",
      "Oral cancer screening",
    ],
  },
  {
    title: "Specialist & family",
    items: [
      "Pediatric dentistry",
      "TMJ / jaw pain treatment",
      "Emergency dental care",
      "Orthodontic braces",
      "Invisible aligners",
    ],
  },
];

export function TreatmentHubView() {
  return (
    <div className="min-h-screen bg-aura-beige font-sans text-aura-black">
      <GrainOverlay />
      <main id="main-content" role="main">
        <section className="relative overflow-hidden bg-[#fff9f9] pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-aura-accent/15 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-aura-black/40"
            >
              <Link href="/" className="transition-colors hover:text-aura-black">
                Home
              </Link>
              <span className="text-aura-black/20">/</span>
              <span className="text-aura-black/70">Treatments</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-8">
                <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
                  <span className="h-px w-10 bg-aura-accent/40" />
                  The treatment library
                </div>
                <h1 className="mt-6 font-sans text-[13vw] font-bold leading-[0.94] tracking-tight text-[#1a202c] md:text-[5.2vw]">
                  Dental treatments in Malabar Hill, Mumbai,
                  <br />
                  <span className="font-serif font-light italic text-aura-accent">
                    explained properly.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-aura-black/60 md:text-lg">
                  Evidence-led guides from Smile Clinique in Malabar Hill,
                  Mumbai, written for patients who want to understand the why,
                  the trade-offs and the realistic limits before they commit.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CLINIC.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-aura-black px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-aura-deep transition-colors hover:bg-aura-accent"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Book a consultation
                  </a>
                  <Link
                    href="/#services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-aura-black transition-colors hover:border-aura-accent/40 hover:bg-white"
                  >
                    See the signature treatments
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-4">
                <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-aura-soft backdrop-blur-sm">
                  <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                    Smile Clinique · Malabar Hill
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      {
                        icon: ScanLine,
                        title: "Diagnosis first",
                        body: "Records, scans and a clinical examination before a plan.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "No guarantees",
                        body: "Evidence, risks and alternatives are explained honestly.",
                      },
                      {
                        icon: HeartPulse,
                        title: "Maintenance matters",
                        body: "Long-term reviews are part of the treatment, not an add-on.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-aura-accent" />
                        <div>
                          <p className="font-sans text-sm font-semibold">
                            {item.title}
                          </p>
                          <p className="mt-0.5 font-sans text-[11px] leading-relaxed text-aura-black/50">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
                <span className="h-px w-10 bg-aura-accent/40" />
                In-depth guides
              </div>
              <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4.4vw]">
                Start with the{" "}
                <span className="font-serif font-light italic text-aura-accent">
                  treatment
                </span>{" "}
                you are considering
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {TREATMENTS.map((treatment, index) => (
                <Reveal key={treatment.slug} delay={index * 0.05}>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-black/5 bg-aura-beige transition-all duration-500 hover:border-aura-accent/25 hover:bg-white hover:shadow-aura-medium"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={treatment.heroImage.src}
                        alt={treatment.heroImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[2.5s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <div>
                          <p className="font-display text-[8px] uppercase tracking-[0.3em] text-white/55">
                            {treatment.eyebrow}
                          </p>
                          <h3 className="mt-2 font-serif text-2xl leading-tight text-white md:text-3xl">
                            {treatment.name}
                          </h3>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors group-hover:bg-aura-accent group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <p className="font-sans text-sm leading-relaxed text-aura-black/55">
                        {treatment.heroLead}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {treatment.heroFacts.map((fact) => (
                          <span
                            key={fact}
                            className="rounded-full border border-black/8 bg-white/60 px-3 py-1.5 font-sans text-[8px] uppercase tracking-[0.12em] text-aura-black/45"
                          >
                            {fact}
                          </span>
                        ))}
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 font-display text-[8px] uppercase tracking-[0.24em] text-aura-accent">
                        Read the guide
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-aura-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
                  <span className="h-px w-10 bg-aura-accent/40" />
                  Also offered
                </div>
                <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4vw]">
                  Comprehensive care,{" "}
                  <span className="font-serif font-light italic text-aura-accent">
                    under one roof
                  </span>
                </h2>
                <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-aura-black/55 md:text-base">
                  The four signature guides above go deep. The full practice
                  covers preventive, restorative, cosmetic, orthodontic and
                  surgical dentistry. If you are unsure where to start, call and
                  describe the problem in your own words.
                </p>
                <div className="mt-7 rounded-[1.75rem] border border-black/5 bg-white p-6">
                  <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                    Not sure what you need?
                  </p>
                  <p className="mt-3 font-sans text-[13px] leading-relaxed text-aura-black/55">
                    A consultation is a diagnosis, not a sales pitch. You can
                    leave with a plan, a second opinion, or a recommendation to
                    do nothing yet.
                  </p>
                  <a
                    href={CLINIC.phoneHref}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-aura-black px-5 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-aura-accent"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {alsoOffered.map((group, index) => (
                  <Reveal key={group.title} delay={index * 0.05}>
                    <div className="h-full rounded-[1.75rem] border border-black/5 bg-white p-6">
                      <h3 className="font-sans text-base font-semibold">
                        {group.title}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 font-sans text-[12px] leading-relaxed text-aura-black/55"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-aura-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
                <span className="h-px w-10 bg-aura-accent/40" />
                How to choose
              </div>
              <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4.4vw]">
                A simple way to{" "}
                <span className="font-serif font-light italic text-aura-accent">
                  think about it
                </span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {[
                {
                  icon: ScanLine,
                  title: "Start with the diagnosis",
                  body: "The same symptom can have different causes. A clinical examination and appropriate imaging prevent treating the wrong thing.",
                },
                {
                  icon: Sparkles,
                  title: "Choose the least invasive option",
                  body: "The best treatment is the one that solves the problem with the least irreversible change, provided it is predictable.",
                },
                {
                  icon: ShieldCheck,
                  title: "Plan for maintenance",
                  body: "Ask what the long-term reviews, cleaning and replacement costs are likely to be before you commit.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-[2rem] border border-black/5 bg-aura-beige p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-aura-accent shadow-aura-soft">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-sans text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-aura-black/55">
                      {item.body}
                    </p>
                  </div>
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
                <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-7">
                    <p className="font-display text-[9px] uppercase tracking-[0.4em] text-aura-accent">
                      Still deciding?
                    </p>
                    <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4vw]">
                      Ask a question. Get a real answer.
                    </h2>
                    <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-white/55 md:text-base">
                      You do not need to know the name of the treatment before
                      you call. Describe the problem, the goal or the worry, and
                      we will start from there.
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
                    <p className="mt-2 flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.14em] text-white/40">
                      <MapPin className="h-3.5 w-3.5" />
                      Malabar Hill, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
