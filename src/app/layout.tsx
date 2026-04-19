import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smile Clinique | Luxury Cosmetic Dentist in Malabar Hill, Mumbai',
  description: 'Experience painless, world-class dental treatments with Dr. Nidhi Mehta. Specializing in Cosmetic Dentistry, Veneers, Implants, and Invisible Aligners in Mumbai.',
  openGraph: {
    title: 'Smile Clinique',
    description: 'Luxury Cosmetic Dentist in Malabar Hill, Mumbai.',
    url: 'https://smileclinique.com',
    siteName: 'Smile Clinique',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`bg-aura-white text-aura-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
