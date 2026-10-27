import { MetadataRoute } from 'next';
import { TREATMENTS } from '../lib/treatments';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smilecliniquedental.com';

  const treatmentEntries: MetadataRoute.Sitemap = TREATMENTS.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: new Date(treatment.updated),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    ...treatmentEntries,
  ];
}
