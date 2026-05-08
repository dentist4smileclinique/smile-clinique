import type { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FAFAFA',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://smilecliniquedental.com'),
  title: 'Smile Clinique | Premium Dental Care by Dr. Nidhi Mehta, Mumbai',
  description:
    'Experience painless, world-class dental treatments at Smile Clinique, Malabar Hill, Mumbai. Dr. Nidhi Mehta specializes in Cosmetic Dentistry, Full Mouth Rehabilitation, Veneers, Implants, Orthodontics, and Invisible Aligners. Book your appointment today.',
  applicationName: 'Smile Clinique',
  authors: [{ name: 'Dr. Nidhi Mehta', url: 'https://smilecliniquedental.com' }],
  generator: 'Next.js',
  keywords: [
    'dentist mumbai',
    'dentist malabar hill',
    'cosmetic dentistry mumbai',
    'dental implants mumbai',
    'smile design',
    'orthodontics',
    'invisible aligners',
    'full mouth rehabilitation',
    'dr nidhi mehta',
    'smile clinique',
    'dental care centre mumbai',
    'best dentist malabar hill',
    'painless dentistry mumbai',
    'teeth whitening mumbai',
    'porcelain veneers mumbai',
    'dental veneers south mumbai',
    'pain-free dental treatment malabar hill',
    'luxury dental clinic mumbai',
  ],
  category: 'Healthcare',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Smile Clinique | Premium Dental Care by Dr. Nidhi Mehta',
    description:
      'Premium cosmetic and comprehensive dental care at Malabar Hill, Mumbai. Specializing in smile design, implants, veneers, and full mouth rehabilitation.',
    url: 'https://smilecliniquedental.com',
    siteName: 'Smile Clinique',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Smile Clinique – Premium Dental Care by Dr. Nidhi Mehta, Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smile Clinique | Premium Dental Care by Dr. Nidhi Mehta, Mumbai',
    description:
      'Experience painless, world-class dental care at Malabar Hill, Mumbai. Cosmetic dentistry, implants, aligners & more.',
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* Preload Black Chancery font for LCP optimization */}
        <link
          rel="preload"
          href="/fonts/BlackChancery.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className={`bg-aura-white text-aura-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
