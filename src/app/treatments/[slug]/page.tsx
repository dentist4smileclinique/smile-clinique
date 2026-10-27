import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../components/site/SiteHeader";
import { SiteFooter } from "../../../components/site/SiteFooter";
import { TreatmentPageView } from "../../../components/treatment/TreatmentPageView";
import { TreatmentSchema } from "../../../components/treatment/TreatmentSchema";
import { CLINIC } from "../../../lib/clinic";
import { TREATMENTS, getTreatment } from "../../../lib/treatments";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    return {
      title: "Treatment not found | Smile Clinique",
    };
  }

  const canonical = `/treatments/${treatment.slug}`;

  return {
    title: { absolute: treatment.title },
    description: treatment.description,
    keywords: treatment.keywords,
    authors: [{ name: CLINIC.doctor, url: "https://smilecliniquedental.com" }],
    category: "Health",
    alternates: {
      canonical,
    },
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url: canonical,
      siteName: CLINIC.shortName,
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: treatment.ogImage,
          width: 1200,
          height: 630,
          alt: `${treatment.name} at Smile Clinique, Malabar Hill, Mumbai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.title,
      description: treatment.description,
      images: [treatment.ogImage],
    },
    other: {
      "article:modified_time": treatment.updated,
      "geo.region": "IN-MH",
      "geo.placename": "Mumbai",
      "geo.position": `${CLINIC.latitude};${CLINIC.longitude}`,
      ICBM: `${CLINIC.latitude}, ${CLINIC.longitude}`,
    },
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <TreatmentSchema treatment={treatment} />
      <TreatmentPageView treatment={treatment} />
      <SiteFooter />
    </>
  );
}
