import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Camera, FileText, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader } from "../../components/site/SiteHeader";
import { SiteFooter } from "../../components/site/SiteFooter";
import { Reveal } from "../../components/Reveal";
import { CLINIC, SITE_URL } from "../../lib/clinic";

export const metadata: Metadata = {
  title: "Image Credits & Clinical Image Licensing | Smile Clinique",
  description:
    "How Smile Clinique handles patient consent, clinical photography, radiographs and image licensing. Contact the clinic in Malabar Hill, Mumbai for media use.",
  alternates: {
    canonical: "/image-credits/",
  },
  openGraph: {
    title: "Image Credits & Clinical Image Licensing | Smile Clinique",
    description:
      "Patient consent, clinical image credits and licensing information for Smile Clinique in Malabar Hill, Mumbai.",
    url: "/image-credits/",
    siteName: CLINIC.shortName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Image Credits & Clinical Image Licensing | Smile Clinique",
    description:
      "Patient consent, clinical image credits and licensing information for Smile Clinique in Malabar Hill, Mumbai.",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/image-credits/#webpage`,
      url: `${SITE_URL}/image-credits/`,
      name: "Image Credits & Clinical Image Licensing | Smile Clinique",
      description:
        "Patient consent, clinical image credits and licensing information for Smile Clinique in Malabar Hill, Mumbai.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#dentist` },
      publisher: { "@id": `${SITE_URL}/#dentist` },
      dateModified: "2026-10-28",
    },
    {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#dentist`,
      name: CLINIC.name,
      alternateName: CLINIC.shortName,
      url: SITE_URL,
      telephone: CLINIC.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.street,
        addressLocality: CLINIC.locality,
        addressRegion: CLINIC.region,
        postalCode: CLINIC.postalCode,
        addressCountry: CLINIC.country,
      },
    },
  ],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.42em] text-aura-accent">
      <span className="h-px w-10 bg-aura-accent/40" />
      {children}
    </div>
  );
}

export default function ImageCreditsPage() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-aura-beige font-sans text-aura-black">
        <section className="relative overflow-hidden bg-[#fff9f9] pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-aura-accent/15 blur-[110px]" />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-12">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 font-sans text-[10px] uppercase tracking-[0.22em] text-aura-black/40"
            >
              <Link href="/" className="transition-colors hover:text-aura-black">
                Home
              </Link>
              <span className="text-aura-black/20">/</span>
              <span className="text-aura-black/70">Image credits</span>
            </nav>
            <Reveal className="max-w-4xl">
              <SectionLabel>Image credits & licensing</SectionLabel>
              <h1 className="mt-6 font-sans text-[12vw] font-bold leading-[0.94] tracking-tight text-[#1a202c] md:text-[5vw]">
                Images with consent.
                <br />
                <span className="font-serif font-light italic text-aura-accent">
                  Credit where it is due.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-aura-black/60 md:text-lg">
                Clinical photography and radiographs help patients understand
                treatment, but they also carry responsibility. This page explains
                how Smile Clinique handles consent, copyright and licensing for
                images published on this website.
              </p>
              <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[10px] uppercase tracking-[0.18em] text-aura-black/35">
                <span>Updated 28 October 2026</span>
                <span className="h-1 w-1 rounded-full bg-aura-black/20" />
                <span>Malabar Hill, Mumbai</span>
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <SectionLabel>Patient consent</SectionLabel>
                <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4vw]">
                  Consent comes{" "}
                  <span className="font-serif font-light italic text-aura-accent">
                    first.
                  </span>
                </h2>
                <div className="mt-8 space-y-5 font-sans text-[15px] leading-relaxed text-aura-black/60 md:text-base">
                  <p>
                    Clinical photographs and radiographs of identifiable patients
                    are published only with the patient's consent. Where possible,
                    identifying details are cropped or omitted. Consent is
                    documented by the treating clinician and can be withdrawn;
                    images are removed when a patient asks us to do so.
                  </p>
                  <p>
                    Real-patient evidence images currently appear on the dental
                    implants and clear aligners pages. Other treatment pages use
                    representative or illustrative imagery until patient-specific
                    images are available with consent.
                  </p>
                  <p>
                    Clinical images are educational. They are not a promise of a
                    particular result. Individual anatomy, healing, hygiene and
                    maintenance all affect outcomes.
                  </p>
                </div>

                <div className="mt-10 rounded-[2rem] border border-aura-accent/15 bg-aura-beige p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-aura-accent" />
                    <h2 className="font-sans text-lg font-semibold">
                      Copyright & licensing
                    </h2>
                  </div>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-aura-black/55">
                    Unless otherwise stated, clinical photographs, radiographs,
                    illustrations, video and website imagery are the copyright of
                    Smile Clinique and Dr. Nidhi Mehta. They may not be reproduced,
                    republished, edited or used commercially without written
                    permission. Short quotations with a credit and a link back to
                    this page may be considered for editorial use.
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-aura-black/55">
                    For licensing, media, academic or educational use, contact
                    the clinic before using an image. We may ask for a description
                    of the intended use and a credit line.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="sticky top-36 space-y-4">
                  <div className="rounded-[2rem] bg-aura-black p-7 text-white">
                    <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                      Media & licensing
                    </p>
                    <h2 className="mt-3 font-serif text-3xl leading-tight">
                      Ask before you use.
                    </h2>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-white/55">
                      Tell us what you want to use, where it will appear and how
                      long it will stay online. We will confirm whether permission
                      can be granted.
                    </p>
                    <a
                      href={CLINIC.phoneHref}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-aura-black transition-colors hover:bg-aura-accent hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {CLINIC.phoneDisplay}
                    </a>
                  </div>
                  <div className="rounded-[1.75rem] border border-black/5 bg-white p-6">
                    <div className="flex items-center gap-3">
                      <Camera className="h-4 w-4 text-aura-accent" />
                      <p className="font-display text-[8px] uppercase tracking-[0.28em] text-aura-accent">
                        What is published
                      </p>
                    </div>
                    <ul className="mt-4 space-y-3 font-sans text-[12px] leading-relaxed text-aura-black/55">
                      <li>Dental implants: real patient case with consent.</li>
                      <li>Clear aligners: real frontal and profile progress with consent.</li>
                      <li>Other pages: representative clinical imagery or illustrations.</li>
                      <li>No patient names, contact details or identifying records are shown.</li>
                    </ul>
                  </div>
                  <div className="rounded-[1.75rem] border border-black/5 bg-white p-6">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-aura-accent" />
                      <p className="font-display text-[8px] uppercase tracking-[0.28em] text-aura-accent">
                        Need a correction?
                      </p>
                    </div>
                    <p className="mt-4 font-sans text-[12px] leading-relaxed text-aura-black/55">
                      If you are a patient and want an image removed, or you
                      believe an image has been credited incorrectly, contact the
                      clinic and we will review it promptly.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-aura-beige py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-5 md:px-12">
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-5 font-sans text-[10vw] font-bold leading-[1.02] tracking-tight md:text-[4vw]">
                Licensing enquiries,{" "}
                <span className="font-serif font-light italic text-aura-accent">
                  handled properly.
                </span>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                {
                  title: "Call the clinic",
                  body: CLINIC.phoneDisplay,
                  href: CLINIC.phoneHref,
                  label: "Call",
                },
                {
                  title: "WhatsApp",
                  body: "Send a message with the image and intended use.",
                  href: CLINIC.whatsappHref,
                  label: "Message",
                },
                {
                  title: "Visit",
                  body: CLINIC.addressLine,
                  href: CLINIC.mapsUrl,
                  label: "Open maps",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between rounded-[2rem] border border-black/5 bg-white p-6 transition-all duration-500 hover:border-aura-accent/30 hover:shadow-aura-soft"
                >
                  <div>
                    <p className="font-display text-[8px] uppercase tracking-[0.3em] text-aura-accent">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-sans text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-aura-black/55">
                      {item.body}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-6 h-4 w-4 text-aura-black/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-aura-accent" />
                </a>
              ))}
            </div>
            <p className="mt-8 max-w-3xl font-sans text-[11px] leading-relaxed text-aura-black/40">
              This page is informational and does not grant a licence. Written
              permission is required before any image is reused, republished or
              used commercially. Clinical content on this website is not a
              substitute for an in-person examination or personalised treatment
              plan.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
