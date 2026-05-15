import { MetadataRoute } from 'next';
import { treatmentsData } from '@/src/data/treatments';
import { journalData } from '@/src/data/journal';
import { specialistsData } from '@/src/data/specialists';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smileavenuedchadapsar.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const treatmentPages: MetadataRoute.Sitemap = treatmentsData.map((t) => ({
    url: `${baseUrl}/treatments/${t.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const journalPages: MetadataRoute.Sitemap = journalData.map((j) => ({
    url: `${baseUrl}/journal/${j.id}`,
    lastModified: new Date(j.publishDate) || new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const specialistPages: MetadataRoute.Sitemap = specialistsData.map((s) => ({
    url: `${baseUrl}/specialists/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...treatmentPages, ...specialistPages, ...journalPages];
}
