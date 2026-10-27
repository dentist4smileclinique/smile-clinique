import type { Metadata } from "next";
import { SiteHeader } from "../../components/site/SiteHeader";
import { SiteFooter } from "../../components/site/SiteFooter";
import { TreatmentHubView } from "../../components/treatment/TreatmentHubView";
import { CLINIC, SITE_URL } from "../../lib/clinic";
import { TREATMENTS, absoluteTreatmentUrl } from "../../lib/treatments";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Dental Treatments in Malabar Hill, Mumbai | Smile Clinique",
  description:
    "Evidence-led guides to full mouth rehabilitation, smile design, dental implants and clear aligners at Smile Clinique, Malabar Hill, Mumbai.",
  keywords: [
    "dental treatments mumbai",
    "dentist malabar hill",
    "cosmetic dentistry mumbai",
    "dental implants mumbai",
    "clear aligners mumbai",
    "full mouth rehabilitation mumbai",
    "porcelain veneers mumbai",
    "south mumbai dentist",
  ],
  alternates: {
    canonical: "/treatments/",
  },
  openGraph: {
    title: "Dental Treatments in Malabar Hill, Mumbai | Smile Clinique",
    description:
      "Evidence-led patient guides to full mouth rehabilitation, smile design, dental implants and clear aligners in Malabar Hill, Mumbai.",
    url: "/treatments/",
    siteName: CLINIC.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og/smile-clinique-mumbai.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Clinique dental treatments in Malabar Hill, Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Treatments in Malabar Hill, Mumbai | Smile Clinique",
    description:
      "Evidence-led patient guides to dental treatments in Malabar Hill, Mumbai.",
    images: ["/og/smile-clinique-mumbai.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: CLINIC.shortName,
      publisher: { "@id": `${SITE_URL}/#dentist` },
    },
    {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#dentist`,
      name: CLINIC.name,
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
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/treatments/#webpage`,
      url: `${SITE_URL}/treatments/`,
      name: "Dental Treatments in Malabar Hill, Mumbai | Smile Clinique",
      description:
        "Evidence-led guides to dental treatments at Smile Clinique in Malabar Hill, Mumbai, including implants, veneers, full mouth rehabilitation and clear aligners.",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#dentist` },
      breadcrumb: { "@id": `${SITE_URL}/treatments/#breadcrumb` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/treatments/#list`,
      name: "Smile Clinique treatment guides",
      numberOfItems: TREATMENTS.length,
      itemListElement: TREATMENTS.map((treatment, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: treatment.name,
        url: absoluteTreatmentUrl(treatment.slug),
        description: treatment.description,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/treatments/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Treatments",
          item: `${SITE_URL}/treatments/`,
        },
      ],
    },
  ],
};

export default function TreatmentsPage() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TreatmentHubView />
      <SiteFooter />
    </>
  );
}
