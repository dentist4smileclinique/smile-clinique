import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { CLINIC, HOME_SECTIONS } from "../../lib/clinic";
import { TREATMENTS } from "../../lib/treatments";

export function SiteFooter() {
  return (
    <footer className="relative z-[110] mt-24 overflow-hidden rounded-t-[3rem] bg-aura-accent px-6 pb-10 pt-16 text-aura-white shadow-[0_-20px_50px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,0.12)] md:rounded-t-[6rem] md:px-12 md:pb-14 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16)_0%,_transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[10px] uppercase tracking-[0.45em] text-white/60">
              Your journey begins here
            </p>
            <h2 className="mt-6 max-w-xl font-sans text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
              Step into <br />
              <span className="font-serif font-light italic text-white/80">
                excellence.
              </span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-white/70">
              Premium, evidence-led dental care in Malabar Hill, Mumbai. Consult
              Dr. Nidhi Mehta and start with a diagnosis, not a package.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-aura-black transition-colors hover:bg-aura-black hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                {CLINIC.phoneDisplay}
              </a>
              <a
                href={CLINIC.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
              >
                WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="font-display text-[9px] uppercase tracking-[0.4em] text-white/50">
                Treatments
              </h3>
              <ul className="mt-5 space-y-3">
                {TREATMENTS.map((treatment) => (
                  <li key={treatment.slug}>
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="group inline-flex items-start gap-2 font-sans text-sm leading-snug text-white/80 transition-colors hover:text-white"
                    >
                      <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5" />
                      {treatment.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/treatments"
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
                  >
                    All treatments
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-7">
              <div>
                <h3 className="font-display text-[9px] uppercase tracking-[0.4em] text-white/50">
                  Visit
                </h3>
                <div className="mt-5 flex items-start gap-3 font-sans text-sm leading-relaxed text-white/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <span>
                    G 3, Akashdeep Building, Dongersi Road,
                    <br />
                    Malabar Hill, Mumbai - 400006
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 font-sans text-sm leading-relaxed text-white/80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <span>
                    Mon–Sat: 9 AM–1 PM | 4 PM–7 PM
                    <br />
                    Sunday: Closed
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 font-sans text-sm leading-relaxed text-white/80">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                  <span>
                    <a
                      href={CLINIC.phoneHref}
                      className="block transition-colors hover:text-white"
                    >
                      {CLINIC.phoneDisplay}
                    </a>
                    <a
                      href={CLINIC.landlineHref}
                      className="block transition-colors hover:text-white"
                    >
                      {CLINIC.landlineDisplay}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-7 font-sans text-[10px] uppercase tracking-[0.22em] text-white/55 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Smile Clinique. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={HOME_SECTIONS.services} className="hover:text-white">
              Treatments
            </Link>
            <Link href={HOME_SECTIONS.cases} className="hover:text-white">
              Results
            </Link>
            <Link href={HOME_SECTIONS.location} className="hover:text-white">
              Location
            </Link>
            <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Google Maps
            </a>
          </div>
        </div>
        <p className="mt-5 max-w-4xl font-sans text-[10px] leading-relaxed text-white/45">
          Informational content only. It is not a substitute for a clinical
          examination, diagnosis or personalised treatment plan. Individual
          results vary. Dental treatment carries risks; suitability is assessed
          in person.
        </p>
      </div>
    </footer>
  );
}
