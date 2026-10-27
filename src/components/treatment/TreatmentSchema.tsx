import { CLINIC, SITE_URL } from "../../lib/clinic";
import {
  absoluteTreatmentUrl,
  type Treatment,
} from "../../lib/treatments";

export function TreatmentSchema({ treatment }: { treatment: Treatment }) {
  const url = absoluteTreatmentUrl(treatment.slug);
  const pageId = `${url}#webpage`;
  const procedureId = `${url}#procedure`;
  const serviceId = `${url}#service`;
  const breadcrumbId = `${url}#breadcrumb`;
  const faqId = `${url}#faq`;
  const mediaImages = Array.from(
    new Map(
      [...treatment.gallery, ...(treatment.evidenceCase?.images ?? [])].map(
        (image) => [image.src, image],
      ),
    ).values(),
  );

  const address = {
    "@type": "PostalAddress",
    streetAddress: CLINIC.street,
    addressLocality: CLINIC.locality,
    addressRegion: CLINIC.region,
    postalCode: CLINIC.postalCode,
    addressCountry: CLINIC.country,
  };

  const dentist = {
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC.name,
    alternateName: CLINIC.shortName,
    url: SITE_URL,
    telephone: CLINIC.phoneDisplay,
    image: `${SITE_URL}/og/smile-clinique-mumbai.jpg`,
    priceRange: "₹₹₹",
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.latitude,
      longitude: CLINIC.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "16:00",
        closes: "19:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: CLINIC.doctor,
      jobTitle: "BDS, Founder",
    },
    hasMap: CLINIC.mapsUrl,
    sameAs: [CLINIC.mapsUrl],
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
        "@type": "MedicalWebPage",
        "@id": pageId,
        url,
        name: treatment.title,
        description: treatment.description,
        inLanguage: "en-IN",
        dateModified: treatment.updated,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": procedureId },
        mainEntity: { "@id": procedureId },
        audience: {
          "@type": "Patient",
          geographicArea: {
            "@type": "AdministrativeArea",
            name: "South Mumbai",
          },
        },
        author: {
          "@type": "Person",
          name: CLINIC.doctor,
          jobTitle: "BDS, Founder",
          worksFor: { "@id": `${SITE_URL}/#dentist` },
          url: `${SITE_URL}/#team`,
        },
        publisher: {
          "@type": "Organization",
          name: CLINIC.name,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/smilecliniqueicon.png`,
          },
        },
        citation: treatment.evidence.sources.map((source) => source.href),
        keywords: treatment.keywords.join(", "),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".quick-answer"],
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${treatment.heroImage.src}`,
          caption: treatment.heroImage.alt,
        },
        associatedMedia: mediaImages.map((image) => ({
          "@type": "ImageObject",
          contentUrl: `${SITE_URL}${image.src}`,
          url: `${SITE_URL}${image.src}`,
          caption: image.caption || image.alt,
          description: image.alt,
          creditText: CLINIC.shortName,
          copyrightNotice:
            treatment.evidenceCase?.consent ??
            "Clinical imagery courtesy of Smile Clinique.",
        })),
        breadcrumb: { "@id": breadcrumbId },
        significantLink: [
          `${SITE_URL}/treatments`,
          ...treatment.related.map((slug) => absoluteTreatmentUrl(slug)),
        ],
      },
      {
        "@type": "MedicalProcedure",
        "@id": procedureId,
        name: treatment.name,
        description: treatment.description,
        procedureType: treatment.procedureType,
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: treatment.medicalSpecialty,
        },
        performedBy: { "@id": `${SITE_URL}/#dentist` },
        availableAtOrFrom: { "@id": `${SITE_URL}/#dentist` },
        howPerformed: treatment.steps
          .map((step) => `${step.number}. ${step.title}: ${step.description}`)
          .join(" "),
        followup: treatment.aftercare
          .map((group) => `${group.title}: ${group.items.join(" ")}`)
          .join(" "),
        bodyLocation: "Mouth",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: `${treatment.name} in Malabar Hill, Mumbai`,
        serviceType: treatment.name,
        description: treatment.description,
        provider: { "@id": `${SITE_URL}/#dentist` },
        areaServed: CLINIC.areasServed.map((area) => ({
          "@type": area === "South Mumbai" ? "AdministrativeArea" : "Place",
          name: area,
        })),
        availableAtOrFrom: {
          "@type": "Place",
          name: CLINIC.shortName,
          address,
        },
        url,
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: treatment.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
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
            item: `${SITE_URL}/treatments`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: treatment.name,
            item: url,
          },
        ],
      },
      dentist,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
