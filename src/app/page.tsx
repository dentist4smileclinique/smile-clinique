"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback, ReactNode } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValueEvent } from 'motion/react';
import { ArrowUpRight, Plus, Star, ArrowRight, BookOpen, Menu, X, ArrowDown, ScanLine, Sparkles, Gem, Activity, Smile, ChevronDown, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Lenis from 'lenis';

function TypewriterText({ text, className, delay = 0, isMobile = false }: { text: string, className?: string, delay?: number, isMobile?: boolean }) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.4, delay: isMobile ? 0 : delay + index * 0.02, ease: "easeOut" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function RevealImage({ src, alt, className, imageClassName, isMobile = false }: { src: string, alt: string, className?: string, imageClassName?: string, isMobile?: boolean }) {
  return (
    <motion.div
      initial={{ clipPath: isMobile ? "none" : "inset(100% 0 0 0)", opacity: isMobile ? 0 : 1, y: isMobile ? 20 : 0 }}
      whileInView={{ clipPath: isMobile ? "none" : "inset(0% 0 0 0)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.19, 1, 0.22, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="w-full h-full relative"
      >
        <Image
          src={src}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${imageClassName || ''}`}
          alt={alt}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

function Magnetic({ children, className }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TestimonialCard({ theme, quote, author, location, img, isMobile = false }: { theme: 'light' | 'lime' | 'image', quote?: string, author: string, location: string, img?: string, isMobile?: boolean }) {
  return (
    <div
      className={`relative w-[88vw] md:w-[450px] h-[520px] md:h-[650px] p-10 md:p-14 flex flex-col justify-between overflow-hidden shrink-0 rounded-[2.5rem] md:rounded-[3rem] ${
        isMobile ? 'shadow-md' : 'shadow-aura-deep'
      } ${theme === 'lime' ? 'bg-[#D9FF00] text-black' :
          theme === 'image' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >
      {theme === 'image' && img && (
        <div className="absolute inset-0 z-0">
          <Image src={img} fill sizes="(max-width: 768px) 320px, 450px" className="object-cover opacity-80" alt={`Patient testimonial from ${author}`} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      )}

      {/* Quote */}
      <div className="relative z-10 p-2">
        {quote && (
          <h3 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight">
            "{quote}"
          </h3>
        )}
      </div>

      {/* Footer (Author) */}
      <div className="relative z-10 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-sm font-bold shadow-aura-soft ${theme === 'lime' ? 'bg-black text-[#D9FF00]' : 'bg-black text-white'}`}>
            {author.split(' ')[0][0]}{author.split(' ')?.length > 1 ? author.split(' ')[1][0] : ''}
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight">{author}</span>
            <span className="font-display text-xs opacity-70 tracking-tight">{location}</span>
          </div>
        </div>

        {theme === 'image' && (
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center shadow-aura-soft">
            <Star className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What makes your approach to dentistry different?",
    answer: "By rejecting the clinical coldness of traditional dentistry, we bring a gentle, empathetic approach to advanced dental care. We treat the human smile not just as a physical attribute, but as a profound expression of inner vitality and confidence."
  },
  {
    question: "Is cosmetic dentistry painful?",
    answer: "No. Under the guidance of Dr. Nidhi Mehta's 15+ years of expertise, we employ atraumatic surgical protocols engineered for rapid, complication-free recovery. We prioritize a painless and anxiety-free experience."
  },
  {
    question: "Do you still use traditional putty for dental impressions?",
    answer: "Absolutely not. We utilize a state-of-the-art intraoral scanner to capture a true-color 3D replica of your teeth in under 60 seconds, completely eliminating the discomfort and gag reflex associated with traditional putty."
  },
  {
    question: "Do you offer invisible aligners?",
    answer: "Yes. We specialize in comprehensive invisible aligner treatments. Through our 'Diagnostic Blueprint' and virtual rendering, you can preview the final outcome of your alignment before we even begin."
  },
  {
    question: "Do you only offer cosmetic procedures?",
    answer: "While we are renowned for luxury cosmetic dentistry, Lumina® Porcelain veneers, and invisible aligners, our expertise spans the full spectrum of dental care—from routine restorations and root canals to complex, fully rehabilitative cases."
  },
  {
    question: "Where in Mumbai is your clinic located?",
    answer: "We are a boutique dental practice located at G 3, Akashdeep Building, Dongersi Road in the heart of Malabar Hill, Mumbai - 400006."
  },
  {
    question: "What are your operating hours?",
    answer: "Smile Clinique is open from Monday to Saturday, 9:00 AM to 1:00 PM, and 4:00 PM to 7:00 PM. We recommend booking your appointment in advance to ensure dedicated focus."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://smilecliniquedental.com/#dentist",
      "name": "Smile Clinique Dental Care Centre",
      "alternateName": "Smile Clinique",
      "description": "Premium cosmetic and comprehensive dental care by Dr. Nidhi Mehta in Malabar Hill, Mumbai. Specializing in smile design, implants, veneers, invisible aligners, and full mouth rehabilitation.",
      "url": "https://smilecliniquedental.com",
      "telephone": "+91-9820627550",
      "image": "https://smilecliniquedental.com/hero.png",
      "logo": "https://smilecliniquedental.com/smilecliniqueicon.png",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G 3, Akashdeep Building, Dongersi Road",
        "addressLocality": "Malabar Hill",
        "addressRegion": "Mumbai",
        "postalCode": "400006",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.9553,
        "longitude": 72.8007
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "16:00",
          "closes": "19:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Nidhi Mehta",
        "jobTitle": "BDS, Comprehensive Dentist & Founder",
        "knowsAbout": ["Cosmetic Dentistry", "Oral Implantology", "Full Mouth Rehabilitation", "Orthodontics"]
      },
      "medicalSpecialty": [
        "CosmeticDentistry",
        "DentalImplants",
        "Orthodontics",
        "Prosthodontics"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Mouth Rehabilitation",
              "description": "Comprehensive structural and aesthetic dental reconstruction for complex cases."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Porcelain Veneers & Smile Design",
              "description": "Custom artisanal porcelain veneers for the ultimate aesthetic transformation."
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5"
      }
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://smilecliniquedental.com/#webpage",
      "url": "https://smilecliniquedental.com",
      "name": "Smile Clinique - Premium Dental Care Mumbai",
      "about": { "@id": "https://smilecliniquedental.com/#dentist" },
      "mainEntity": { "@id": "https://smilecliniquedental.com/#dentist" }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://smilecliniquedental.com"
    }
  ]
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "name": "Full Mouth Rehabilitation",
      "description": "Comprehensive functional and aesthetic rebuild of the entire dental architecture.",
      "procedureType": "Surgical and Restorative",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "Prosthodontics"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Porcelain Veneers",
      "description": "Artisanal hand-finished ceramic veneers for aesthetic smile transformation.",
      "procedureType": "Cosmetic",
      "relevantSpecialty": {
        "@type": "MedicalSpecialty",
        "name": "CosmeticDentistry"
      }
    }
  ]
};

function FAQItem({ question, answer, isOpen, onClick, onHover, onLeave }: { question: string, answer: string, isOpen: boolean, onClick: () => void, onHover: () => void, onLeave: () => void }) {
  return (
    <div 
      className="border-b border-aura-black/10 py-8 cursor-none pointer-events-auto group"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex justify-between items-center gap-6">
        <h3 className={`font-sans font-medium text-2xl md:text-3xl tracking-tight transition-colors duration-500 ${isOpen ? 'text-aura-accent' : 'text-aura-black group-hover:text-aura-accent/70'}`}>
          {question}
        </h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-500 ${isOpen ? 'bg-aura-accent text-white border-aura-accent' : 'border-aura-black/10 text-aura-black group-hover:bg-aura-black/5'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-6 font-sans text-lg text-aura-black/60 leading-relaxed max-w-4xl pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <img 
      src="/smilecliniqueiconhehe.svg" 
      alt="Smile Clinique Logo" 
      className={className} 
    />
  );
}

const Grain = ({ disabled }: { disabled?: boolean }) => {
  if (disabled) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] animate-grain"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
  );
};

const ArcCard = ({ index, totalCards, progress, card, onHover, onLeave, windowWidth }: {
  index: number,
  totalCards: number,
  progress: any,
  card: any,
  onHover: () => void,
  onLeave: () => void,
  windowWidth: number,
  key?: React.Key
}) => {
  const isMobile = windowWidth < 768;
  const dist = useTransform(
    progress,
    [0, 0.7, 1],
    [index + 1, index - (totalCards - 1), index - (totalCards - 1)]
  );

  const xFactor = isMobile ? 180 : 500; // Much tighter swing on mobile to keep cards centered
  const yFactor = isMobile ? 40 : 50;

  const x = useTransform(dist, d => d * xFactor);
  const y = useTransform(dist, d => Math.abs(d) * yFactor + Math.pow(d, 2) * yFactor);
  const rotate = useTransform(dist, d => d * (isMobile ? 8 : 15));
  const zIndex = useTransform(dist, d => 100 - Math.abs(Math.round(d)));
  const scale = useTransform(dist, d => (isMobile ? 0.9 : 1) - Math.abs(d) * 0.05); // Larger cards on mobile

  return (
    <motion.div
      style={{ x, y, rotate, zIndex, scale }}
      className="absolute top-1/2 left-1/2 -track-center -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-none origin-bottom px-4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <TestimonialCard {...card} isMobile={isMobile} />
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const arcContainerRef = useRef<HTMLDivElement>(null);
  const spaceRef = useRef<HTMLElement>(null);
  const casesRef = useRef<HTMLElement>(null);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // Smooth Scroll Initialization (Lenis) — desktop only for better mobile perf
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouch);
    
    if (isTouch) return; // Native scroll is faster on mobile

    // Performance-tuned Lenis for desktop
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Custom Cursor (Spring physics for smoother feel)
  const cursorX = useSpring(0, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 30 });

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsLoaded(true), 400);
    }, 1800);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Hero Scroll Effects
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.85]);
  const heroBorderRadius = useTransform(heroProgress, [0, 1], ["0px", "40px"]);
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);


  // Arc Carousel Scroll Effects
  const { scrollYProgress: arcProgress } = useScroll({
    target: arcContainerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: spaceProgress } = useScroll({
    target: spaceRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: casesProgress } = useScroll({
    target: casesRef,
    offset: ["start end", "end start"]
  });
  const casesBgOpacity = useTransform(casesProgress, [0.2, 0.4, 0.8, 0.95], [0, 1, 1, 0]);
  const casesTextColor = useTransform(casesProgress, [0.2, 0.4, 0.8, 0.95], ["#ffffff", "#1a202c", "#1a202c", "#ffffff"]);
  const spaceOverlayOpacity = useTransform(spaceProgress, [0.3, 0.5, 0.7], [0, 0.3, 0]);



  const teamMembers = [
    { name: "Dr. Nidhi Mehta", role: "Founder & Lead Dentist", img: "/drnidhi.JPG", bio: "Leading Smile Clinique with a vision for comprehensive, aesthetic-focused dental mastery and patient-centric care.", category: "Leadership" },
    { name: "Expert Associates", role: "Specialist Team", img: "/methodology_3.png", bio: "A curated team of specialists dedicated to the highest standards of clinical precision and patient comfort.", category: "Clinical" },
  ];

  const workflowPhases = [
    { title: "Diagnostic Blueprint", phase: "Phase 01", img: "/methodology_1.png", desc: "Sub-millimeter digital mapping of your facial architecture using 3D scanning and AI analysis.", tags: ["Analysis", "3D Scan"] },
    { title: "Aesthetic Simulation", phase: "Phase 02", img: "/methodology_2.png", desc: "Virtual rendering and tangible mockups of your potential, allowing you to preview the final result before we begin.", tags: ["Digital Twin", "Mockup"] },
    { title: "World-Class Restoration", phase: "Phase 03", img: "/methodology_3.png", desc: "Meticulous selection of world-class dental restorations from premier global laboratories.", tags: ["Global Standards", "Precision"] },
    { title: "Harmonic Integration", phase: "Phase 04", img: "/methodology_4_integration_1776380162441.png", desc: "Flawless structural placement for enduring, natural brilliance that becomes completely indistinguishable from nature.", tags: ["Delivery", "Integration"] },
  ];

  // Workflow Scroll Logic for Accordion
  // Remove complex scroll logic that caused whitespace issues
  const [currentPhase, setCurrentPhase] = useState(0);
  return (
    <div ref={containerRef} className={`min-h-screen bg-aura-beige font-sans text-aura-black relative selection:bg-aura-black selection:text-aura-beige ${isMobile ? 'cursor-auto' : 'aura-grain cursor-none'}`}>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Grain disabled={isMobile} />
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center overflow-hidden rounded-full border border-aura-beige/20"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 100 : 12,
          height: isHovering ? 100 : 12,
          opacity: isLoading ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 250, damping: 30, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isHovering && cursorText && (
            <motion.span
              key={cursorText}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] text-aura-beige uppercase tracking-[0.3em] font-medium"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>



      {/* Film Grain Layer */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}></div>

      {/* Navigation - Exact Screenshot Match */}
      <nav 
        aria-label="Main navigation" 
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-24 py-4 md:py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-aura-soft pt-4' 
            : 'bg-transparent pt-8 md:pt-12'
        }`}
      >
        {/* Logo */}
        <div className="pointer-events-auto flex items-center gap-4">
          <div className="relative w-14 h-14 md:w-20 md:h-20 shrink-0 flex items-center justify-center group">
            <LogoIcon className="w-full h-full p-0.5 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-chancery text-[26px] md:text-[32px] tracking-normal text-[#2d3748] leading-[0.8]">Smile Clinique</span>
            <span className="font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-[#2d3748]/60 mt-2 md:mt-3 pl-0.5 md:pl-1">by Dr. Nidhi Mehta</span>
          </div>
        </div>

        {/* Center Nav Pill */}
        <div className={`hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-md px-8 py-3 rounded-full border border-black/[0.05] font-sans text-[13px] font-medium text-[#2d3748]/80 pointer-events-auto shadow-aura-soft transition-all duration-500 ${scrolled ? 'scale-90 opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {[
            { label: 'Treatments', href: '#treatments' },
            { label: 'Our Clinic', href: 'https://maps.app.goo.gl/9R6wR89u792Y7X7Z7' },
            { label: 'Testimonials', href: '#testimonials' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'Our Clinic' ? '_blank' : undefined}
              rel={item.label === 'Our Clinic' ? 'noopener noreferrer' : undefined}
              onMouseEnter={() => { setIsHovering(true); setCursorText(item.label === 'Our Clinic' ? "Visit" : "Go"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              className="hover:text-[#2d3748] transition-colors duration-300 cursor-none"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pointer-events-auto flex items-center gap-4">
          <Magnetic>
            <a href="tel:+919820627550" onMouseEnter={() => { setIsHovering(true); setCursorText("Call"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }} className="bg-[#1e293b] text-white px-6 py-2.5 rounded-full text-[12px] font-medium hover:bg-black transition-all duration-300 cursor-none shadow-aura-soft">
              Book Now
            </a>
          </Magnetic>
        </div>
      </nav>

      <main id="main-content" role="main">
      {/* 1. The Hero - Single Image Background Seamless Blend Match */}
      <section className="relative min-h-[100vh] md:h-[110vh] w-full bg-[#fcfcfc] overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Visual Layer - Image */}
        <div className="relative w-full md:absolute md:inset-y-0 md:left-0 md:w-[45%] h-[65vh] md:h-full z-0 overflow-hidden" 
             style={windowWidth > 768 ? { WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)', maskImage: 'linear-gradient(to right, black 60%, transparent 100%)' } : {}}>
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src="/hero.png"
              fill
              sizes="100vw"
              className="object-cover object-[70%_20%] md:object-[75%_20%]"
              alt="Beautiful smile showcasing premium dental care at Smile Clinique Mumbai"
              priority
            />
            {/* Mobile Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] via-transparent to-transparent md:hidden z-10" />
          </motion.div>
        </div>

        {/* Typography Layer */}
        <div className="relative z-10 w-full flex justify-center md:justify-end items-center pointer-events-none -mt-32 md:mt-0 px-6 md:px-24 md:pr-[2%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col items-center md:items-end w-full md:w-[55%] lg:w-[50%]"
          >
            <h1 className="flex flex-col items-center text-center md:items-end md:text-right">

              <span className="font-chancery text-[12vw] md:text-[5.5vw] text-[#1a2456] leading-[1.05] tracking-[0.01em]">Smile Clinique</span>
              <span className="font-chancery text-[8.5vw] md:text-[4.2vw] text-[#1a2456] leading-[1.05] tracking-[0.01em] -mt-1 md:-mt-2">Dental Care Centre</span>
            </h1>
            <span className="font-chancery text-[4.5vw] md:text-[1.8vw] text-[#1a202c]/50 tracking-normal mt-3 md:mt-5">by Dr. Nidhi Mehta</span>
            <div className="w-full flex justify-center md:justify-end mt-6 md:mt-10">
              <p className="font-sans text-sm md:text-xl text-[#1a202c]/60 font-light tracking-wide text-center md:text-right max-w-[280px] md:max-w-none">
                Mumbai&apos;s Trusted <br className="md:hidden" /> Dental Care Centre.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Interactive Cards at Bottom */}
        <div className="absolute bottom-6 md:bottom-16 left-0 right-0 z-30 px-6 md:px-24 flex flex-col md:flex-row items-center md:items-end gap-4 pointer-events-none">
          <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pointer-events-auto px-1 py-4">
            {/* Card 1: Expanded (Preventive Care) */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white p-5 rounded-2xl border border-black/5 shadow-aura-soft w-[85vw] md:w-[360px] shrink-0 snap-center flex flex-col"
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-3 items-start flex-1">
                  <div className="w-14 h-10 rounded-lg overflow-hidden shrink-0 mt-0.5 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070"
                      fill
                      sizes="56px"
                      className="object-cover"
                      alt="Preventive dental check-up and professional cleaning at Smile Clinique Malabar Hill"
                    />
                  </div>
                  <h4 className="font-sans font-medium text-[#2d3748] text-[15px] pt-1 leading-tight tracking-tight">Preventive Care</h4>
                </div>
              </div>

              <p className="text-[11px] text-[#2d3748]/70 leading-[1.6] mt-4 font-medium pr-2">
                Healthy smiles begin with prevention. Our team provides regular check-ups, professional cleanings, and personalized guidance to protect your teeth and gums.
              </p>
            </motion.div>

            {/* Other Cards */}
            {[
              { title: 'Cosmetic Dentistry', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=400&auto=format&fit=crop' },
              { title: 'Orthodontics', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop' },
              { title: 'Implants & Restorations', img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=400&auto=format&fit=crop' }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                className="bg-white p-4 rounded-2xl border border-black/5 shadow-aura-soft flex items-center justify-between w-[75vw] md:w-[280px] snap-center shrink-0 hover:bg-[#f8f9fa] transition-colors duration-300 pointer-events-auto"
              >
                <div className="flex items-center gap-3">
                  <div className="w-[50px] h-[40px] rounded-lg overflow-hidden shrink-0 relative">
                    <Image src={card.img} fill sizes="50px" className="object-cover" alt={card.title} />
                  </div>
                  <span className="font-sans font-medium text-[14px] text-[#2d3748] leading-tight tracking-tight">{card.title}</span>
                </div>
                <Plus className="w-5 h-5 text-[#2d3748]/40" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[10px] uppercase tracking-[0.5em] opacity-40">
          ( About us )
        </div>
      </section>

      {/* 2. The Manifesto (Art & Science) - MOVED AS SECOND SECTION */}
      <section id="manifesto" className="relative z-10 py-48 md:py-64 bg-white overflow-hidden min-h-[120vh] flex items-center justify-center rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.03),inset_0_2px_0_rgba(255,255,255,0.3)]">
        {/* Soft Ambient Light Top */}
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-aura-beige/80 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Architectural Tiling Grid with Gradient Base (FULL FRAME) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Animated Deep Glows */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aura-gold/5 text-transparent" />
          {!isMobile && (
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vw] bg-aura-accent rounded-full blur-[120px]"
            />
          )}

          {/* Engineering Tiling Square Grid Overlay (Macro) */}
          <div
            className="absolute inset-0 opacity-60 mix-blend-multiply"
            style={{
              backgroundImage: `
                 linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
               `,
              backgroundSize: '100px 100px'
            }}
          />

          {/* Faint Micro-Grid inside large grid */}
          <div
            className="absolute inset-0 opacity-50 mix-blend-multiply"
            style={{
              backgroundImage: `
                 linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                 linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
               `,
              backgroundSize: '25px 25px'
            }}
          />

          {/* Sweeping Light Ray */}
          {!isMobile && (
            <motion.div
              animate={{ x: ["-200%", "200%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[500px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 -skew-x-[20deg] blur-[40px] mix-blend-overlay"
            />
          )}
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative w-full h-full z-10">

          {/* Illustration Stickers (Aesthetic Float - Widely Scattered) */}
          <motion.div
            style={{ y: useTransform(heroProgress, [0.3, 0.8], [0, -80]), rotate: -15 }}
            className="absolute top-[10%] left-[2%] md:left-[6%] z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center justify-center shadow-sm border border-black/5"
          >
            <span className="text-3xl md:text-4xl drop-shadow-sm grayscale hover:grayscale-0 transition-all duration-300">🦷</span>
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.4, 0.9], [0, 90]), rotate: 15 }}
            className="absolute bottom-[12%] right-[5%] md:right-[8%] z-20 bg-[#F2D1D5]/90 backdrop-blur-md p-4 rounded-full flex items-center justify-center shadow-aura-soft border border-black/5"
          >
            <Smile className="w-8 h-8 text-[#A06B71]" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.5, 1], [0, -50]), rotate: 8 }}
            className="absolute top-[15%] right-[12%] md:right-[18%] z-20 bg-aura-gold/10 backdrop-blur-md p-3 rounded-xl flex items-center justify-center shadow-sm border border-aura-gold/20 hidden md:flex"
          >
            <Sparkles className="w-6 h-6 text-aura-gold-dark" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.2, 0.7], [0, 60]), rotate: -8 }}
            className="absolute bottom-[20%] left-[8%] md:left-[14%] z-20 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full flex items-center justify-center shadow-sm border border-black/5 hidden md:flex"
          >
            <span className="font-display text-[9px] uppercase tracking-widest text-aura-black font-medium">Radiance</span>
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.3, 0.9], [0, 40]), rotate: 45 }}
            className="absolute top-[45%] left-[5%] md:left-[18%] z-20 bg-transparent hidden md:flex items-center justify-center"
          >
            <Plus className="w-8 h-8 text-aura-black/20" strokeWidth={1} />
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.4, 1], [0, -70]), rotate: -20 }}
            className="absolute bottom-[40%] right-[15%] md:right-[22%] z-20 bg-white/80 backdrop-blur-md p-4 rounded-full hidden md:flex items-center justify-center shadow-sm border border-black/5"
          >
            <Star className="w-5 h-5 text-aura-gold" strokeWidth={1.5} />
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.2, 0.8], [0, -30]), rotate: 5 }}
            className="absolute top-[60%] right-[3%] md:right-[8%] z-20 bg-aura-mint-light/80 backdrop-blur-md p-3 rounded-lg flex items-center justify-center shadow-sm border border-aura-mint/50 hidden lg:flex"
          >
            <Activity className="w-6 h-6 text-aura-accent" strokeWidth={1.5} />
          </motion.div>


          {/* Centered Masterpiece Text */}
          <div className="relative z-30 flex flex-col items-center text-center px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: isMobile ? "none" : "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: isMobile ? "none" : "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl relative z-30"
            >
              <h2 className="font-sans font-bold text-[8.5vw] md:text-[4.5vw] leading-[1.2] text-[#1a202c] tracking-tight drop-shadow-sm">
                We treat the human smile not as <br className="hidden md:block" />
                a mere feature, but as the absolute <br className="hidden md:block" />
                <span className="relative inline-block my-1 md:my-0">
                  <span className="relative z-10 italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-aura-gold-dark via-aura-accent to-aura-gold pr-2">signature of vitality.</span>
                  <div className="absolute top-[60%] left-[-2%] w-[104%] h-[40%] bg-aura-mint-light/80 -rotate-1 -z-10 rounded-full blur-[2px]" />
                </span> <br className="hidden md:block" />
                Quality is our architectural truth.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. About the Founder */}
      <section id="founder" className="scroll-mt-[100px] relative z-20 py-24 md:py-48 px-6 md:px-12 bg-aura-beige overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        {/* Mint Ambient Light */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-aura-mint opacity-50 blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-24 md:gap-32 relative z-10">

          {/* Left: Text & Story */}
          <div className="lg:w-1/2">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-[9px] uppercase tracking-[0.7em] mb-12 text-aura-accent flex items-center gap-6"
              >
                <div className="w-12 h-[1px] bg-aura-accent/30" />
                The Visionary
              </motion.div>
              <motion.h2
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans font-bold tracking-tight text-[11vw] lg:text-[5vw] leading-[1.05] text-aura-black mb-8 md:mb-12"
              >
                The Architect of <br className="md:hidden" /> <span className="font-serif italic font-light text-aura-gold">Aesthetics.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h3 className="font-sans text-xl md:text-2xl font-medium text-aura-black mb-6">
                  Dr. Nidhi Mehta has established a premium sanctuary for comprehensive and transformative dental care.
                </h3>

                <p className="font-sans text-base md:text-lg text-aura-black/60 leading-relaxed mb-16">
                  Rejecting the clinical coldness of traditional dentistry, she brings a gentle, empathetic approach to a full spectrum of dental treatments. From routine restorations to the most complex fully-rehabilitative cases, she delivers immaculate precision and enduring oral health.
                </p>

                {/* Quote Card (Glassmorphic) */}
                <div className="aura-glass p-8 md:p-10 rounded-[2rem] border border-white/40 shadow-aura-soft mb-12 md:mb-16 relative overflow-hidden">
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 text-aura-gold/20 font-serif text-6xl md:text-8xl leading-none">&quot;</div>
                  <p className="relative z-10 font-serif text-xl md:text-3xl text-aura-black italic leading-snug">
                    True aesthetic dentistry is invisible. We don't just restore teeth; we restore the uninhibited freedom to express joy.
                  </p>
                </div>

                {/* Pills/Badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-full border border-aura-black/10 font-display text-[10px] uppercase tracking-[0.2em] text-aura-black bg-white/50 backdrop-blur-sm shadow-sm">
                    Maharashtra University of Health Sciences
                  </div>
                  <div className="px-6 py-3 rounded-full border border-aura-black/10 font-display text-[10px] uppercase tracking-[0.2em] text-aura-black bg-white/50 backdrop-blur-sm shadow-sm">
                    Dental Council of India
                  </div>
                  <div className="px-6 py-3 rounded-full border border-aura-black/10 font-display text-[10px] uppercase tracking-[0.2em] text-aura-black bg-white/50 backdrop-blur-sm shadow-sm">
                    {new Date().getFullYear() - 2009}+ Years Exp.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="lg:w-1/2 relative w-full">
            <motion.div
              initial={isMobile ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-aura-deep group pointer-events-auto cursor-none border border-black/5"
              onMouseEnter={() => { setIsHovering(true); setCursorText("Founder"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
            >
              <motion.div
                className="absolute inset-0 h-[110%] transition-transform duration-[3s] group-hover:scale-105 group-hover:translate-y-0 -translate-y-[5%]"
              >
                <Image
                  src="/drnidhi.JPG"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                  alt="Dr. Nidhi Mehta – BDS, Comprehensive Dentist and Founder of Smile Clinique, Malabar Hill, Mumbai"
                  loading="lazy"
                />
              </motion.div>

              {/* Reference-inspired shape accent (Top Right) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-aura-gold opacity-80 z-20" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

              {/* Name Plate Overlay */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 aura-glass-dark p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                <h4 className="font-serif text-2xl md:text-3xl text-white mb-1 md:mb-2 italic">Dr. Nidhi Mehta</h4>
                <p className="font-display text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-aura-gold">BDS, Comprehensive Dentist & Founder</p>
              </div>

              {/* Subtle Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Digital Innovation (Scanner Video) */}
      <section id="space" ref={spaceRef} className="scroll-mt-[100px] relative z-30 bg-aura-black -mt-16 rounded-t-[4rem] md:rounded-t-[5rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <motion.div 
          style={{ opacity: spaceOverlayOpacity }}
          className="absolute inset-0 z-20 bg-aura-accent pointer-events-none mix-blend-overlay"
        />
        <div className="relative w-full h-[80vh] md:h-[100vh] flex items-center justify-center cursor-none group" onMouseEnter={() => { setIsHovering(true); setCursorText("Watch"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}>
          {/* Background Video */}
          <video
            src="https://assets.smilecliniquedental.com/scan.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/diagnostic-xray.png"
            className="absolute inset-0 w-full h-full object-cover opacity-80 will-change-transform"
          />
          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-aura-black via-aura-black/20 to-aura-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,27,38,0.7)_100%)] pointer-events-none" />

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-10 pb-16 md:pb-20 pt-8 md:pt-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-[8px] md:text-[9px] uppercase tracking-[0.7em] text-aura-gold mb-4 md:mb-6 flex items-center gap-4"
              >
                <div className="w-8 h-[1px] bg-aura-gold/50" />
                Digital Impressions
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-sans font-bold tracking-tight text-[11vw] lg:text-[6vw] leading-[1.05] text-white"
              >
                Seamless <br className="hidden md:block" /> <span className="font-serif italic font-light text-aura-gold">Scanning.</span>
              </motion.h2>
            </div>

            {/* Right Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="w-full md:w-[480px] aura-glass-dark p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="font-serif text-xl md:text-3xl text-white italic mb-4">Advanced Scanning Technology</h3>
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed mb-6 md:mb-8">
                Experience the future of dentistry. Our intraoral scanner captures a perfectly accurate, full-color 3D replica of your teeth in under 60 seconds — eliminating traditional impression discomfort.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="px-4 py-2 rounded-full border border-white/20 text-[7px] md:text-[8px] uppercase tracking-widest text-white/50 bg-white/5 backdrop-blur-md">60 Second Scan</span>
                <span className="px-4 py-2 rounded-full border border-white/20 text-[7px] md:text-[8px] uppercase tracking-widest text-white/50 bg-white/5 backdrop-blur-md">True-Color 3D</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. The Masterpiece (Services Bento) */}
      <section id="services" className="relative z-[40] py-24 md:py-48 px-6 md:px-12 bg-white overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
            <div className="max-w-2xl text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-[10px] uppercase tracking-[0.5em] text-aura-accent mb-8"
              >
                The Masterpiece
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-bold tracking-tight text-[11vw] md:text-[4.5vw] leading-[1.05] text-[#1a202c]"
              >
                Curating the <br /><span className="font-serif italic font-light text-aura-accent">Inimitable Smile</span>
              </motion.h2>
            </div>
            <p className="font-sans text-base md:text-lg text-[#2d3748]/60 mb-2 leading-relaxed max-w-sm text-left italic border-l-2 border-aura-accent/20 pl-8">
              "We don't just treat teeth; we architect confidence through clinical mastery and aesthetic intuition."
            </p>
          </div>

          {/* Mobile Bento (Dedicated Stack) */}
          {isMobile ? (
            <div className="flex flex-col gap-6">
              {/* Card 1: Full Mouth Rehab */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black text-white rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-aura-soft"
              >
                <div className="absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2030" fill className="object-cover opacity-50" alt="Full mouth dental rehabilitation and reconstruction for complex functional and aesthetic cases" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-4 h-4 text-aura-gold" />
                    <span className="font-display text-[10px] uppercase tracking-[0.4em] text-white/50">Signature</span>
                  </div>
                  <h3 className="font-sans font-bold text-[12vw] leading-[0.95] tracking-tight mb-8">Full Mouth<br />Rehabilitation</h3>
                </div>
                <div className="relative z-10">
                  <p className="font-sans text-base text-white/70 mb-10 leading-relaxed">
                    Comprehensive functional and aesthetic rebuild of your entire dental architecture for peak performance and absolute confidence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Reconstruction', 'Bite Correction', 'Aesthetics'].map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[9px] uppercase tracking-widest text-white/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Smile Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-aura-beige rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[450px] shadow-aura-soft"
              >
                <div className="absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070" fill className="object-cover opacity-20" alt="Digital smile design and aesthetic mapping for porcelain veneers and aesthetic transformation" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-sans font-bold text-[10vw] leading-none tracking-tight mb-6 text-aura-black">Smile<br />Design</h3>
                  <p className="font-sans text-base text-aura-black/60 leading-relaxed mb-8">Architecting the perfect aesthetic frame for your face using minimally invasive porcelain and digital modeling.</p>
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-aura-black text-white flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Implants */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-aura-black text-white rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[450px] shadow-aura-soft"
              >
                <div className="absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2070" fill className="object-cover opacity-40" alt="Premium titanium and zirconia dental implants for permanent tooth replacement at Smile Clinique Mumbai" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 rotate-45 border border-aura-accent/50" />
                  </div>
                  <h3 className="font-sans font-bold text-[10vw] leading-none tracking-tight mb-6 text-white">Implants</h3>
                  <p className="font-sans text-base text-white/50 leading-relaxed">Premium titanium and zirconia implant systems for permanent, lifelike tooth replacement.</p>
                </div>
                <div className="relative z-10 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-white/30" />
                </div>
              </motion.div>

              {/* Card 4: Orthodontics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[450px] shadow-aura-soft"
              >
                <div className="relative z-10">
                  <span className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent mb-6 block">Precision</span>
                  <h3 className="font-sans font-bold text-[10vw] leading-none tracking-tight mb-6 text-aura-black">Orthodontics</h3>
                  <p className="font-sans text-base text-aura-black/60 leading-relaxed mb-8">Modern invisible solutions to align your teeth with comfort and clinical precision.</p>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070" fill className="object-cover" alt="Orthodontic treatment and invisible aligners for precise teeth alignment and occlusion correction" />
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-6">
              {/* Card 1: Full Mouth Rehab (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="col-span-8 bg-black text-white rounded-[3rem] p-20 relative overflow-hidden flex flex-col justify-between group cursor-none shadow-aura-soft will-change-transform"
              >
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-[3s]">
                  <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2030" fill className="object-cover opacity-60" alt="Comprehensive full mouth dental rehabilitation treatment result showcasing total smile reconstruction" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-4 h-4 text-aura-gold" />
                    <span className="font-display text-[10px] uppercase tracking-[0.4em] text-white/50">Signature</span>
                  </div>
                  <h3 className="font-sans font-bold text-6xl leading-[0.95] tracking-tight mb-8">Full Mouth<br />Rehabilitation</h3>
                </div>
                <div className="relative z-10 max-w-md">
                  <p className="font-sans text-xl text-white/70 mb-10 leading-relaxed">
                    Comprehensive functional and aesthetic rebuild of your entire dental architecture for peak performance and absolute confidence.
                  </p>
                  <div className="flex gap-3">
                    {['Reconstruction', 'Bite Correction', 'Aesthetics'].map(tag => (
                      <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Smile Design (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="col-span-4 bg-aura-beige rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between group cursor-none shadow-aura-soft"
              >
                <div className="relative z-10">
                  <h3 className="font-sans font-bold text-4xl leading-none tracking-tight mb-4 text-aura-black">Smile<br />Design</h3>
                  <p className="font-sans text-sm text-aura-black/60 leading-relaxed">Architecting the perfect aesthetic frame for your face using minimally invasive porcelain and digital modeling.</p>
                </div>
                <div className="relative z-10 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-aura-black text-white flex items-center justify-center group-hover:bg-aura-accent transition-colors duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Implants (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="col-span-4 bg-aura-black text-white rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-between group cursor-none shadow-aura-soft"
              >
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-[5s]">
                  <Image src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2070" fill className="object-cover opacity-40" alt="Advanced dental implant surgery for clinical excellence and long-term functional stability" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 rotate-45 border border-aura-accent/50" />
                  </div>
                  <h3 className="font-sans font-bold text-4xl leading-none tracking-tight mb-4 text-white">Implants</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">Premium titanium and zirconia implant systems for permanent, lifelike tooth replacement.</p>
                </div>
                <div className="relative z-10 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-white transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Card 4: Orthodontics (Desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="col-span-8 bg-white rounded-[3rem] p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group cursor-none shadow-aura-soft"
              >
                <div className="relative z-10 flex-1">
                  <span className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent mb-6 block">Precision</span>
                  <h3 className="font-sans font-bold text-5xl leading-none tracking-tight mb-6 text-aura-black">Orthodontics &<br />Clear Aligners</h3>
                  <p className="font-sans text-base text-aura-black/60 max-w-sm leading-relaxed mb-8">Modern invisible solutions to align your teeth with comfort and clinical precision.</p>
                  <button className="px-8 py-3 rounded-full bg-aura-black text-white text-xs uppercase tracking-widest hover:bg-aura-accent transition-colors duration-500 pointer-events-auto">View Details</button>
                </div>
                <div className="relative w-1/3 h-full rounded-[2rem] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070" fill className="object-cover" alt="Modern orthodontic solutions including clear aligners for adults and children at Smile Clinique" />
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* 6. The Precision Protocol (Workflow) */}
      <section id="workflow" className="relative z-[50] py-24 md:py-48 px-6 md:px-12 bg-white overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
            <div className="max-w-2xl text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-[10px] uppercase tracking-[0.5em] text-aura-accent mb-8"
              >
                The Protocol
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-bold tracking-tight text-[11vw] md:text-[4.5vw] leading-[1.05] text-[#1a202c]"
              >
                The Anatomy of <br /><span className="font-serif italic font-light text-aura-accent">Transformation</span>
              </motion.h2>
            </div>
          </div>

          {/* Workflow (Mobile Dedicated vs Desktop) */}
          {isMobile ? (
            <div className="flex flex-col gap-4 w-full">
              {workflowPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  onViewportEnter={() => setCurrentPhase(i)}
                  viewport={{ amount: 0.3, margin: "-15% 0px -15% 0px" }}
                  animate={{ 
                    height: currentPhase === i ? 420 : 90,
                    backgroundColor: currentPhase === i ? "#FFE9ED" : "#0A0A0B",
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full relative rounded-[2.5rem] overflow-hidden shadow-aura-deep group border border-white/5"
                >
                  <Image src={phase.img} fill className={`object-cover ${currentPhase === i ? 'opacity-20' : 'opacity-40'}`} alt={`${phase.title} – ${phase.desc}`} />
                  {currentPhase !== i && <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />}
                  
                  {/* Collapsed Header Overlay */}
                  <motion.div 
                    animate={{ 
                      opacity: currentPhase === i ? 0 : 1,
                      color: currentPhase === i ? "#1a202c" : "#ffffff"
                    }}
                    className="absolute inset-0 flex items-center justify-between px-10 z-20 pointer-events-none"
                  >
                    <span className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent">{phase.phase}</span>
                    <h4 className="font-serif text-base">{phase.title}</h4>
                  </motion.div>

                  <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                    <motion.span 
                      animate={{ opacity: currentPhase === i ? 1 : 0 }}
                      className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent"
                    >
                      {phase.phase}
                    </motion.span>
                    <motion.div
                      animate={{ 
                        opacity: currentPhase === i ? 1 : 0,
                        y: currentPhase === i ? 0 : 20,
                        color: currentPhase === i ? "#1a202c" : "#ffffff"
                      }}
                    >
                      <h3 className="font-serif text-[8vw] mb-4 leading-none">{phase.title}</h3>
                      <p className={`font-sans text-xs mb-6 leading-relaxed line-clamp-3 ${currentPhase === i ? 'text-black/60' : 'text-white/60'}`}>{phase.desc}</p>
                      <div className="flex gap-2">
                        {phase.tags.map(tag => (
                          <span key={tag} className={`px-3 py-1 rounded-full border text-[7px] uppercase tracking-widest ${currentPhase === i ? 'border-black/10 text-black/40' : 'border-white/10 text-white/40'}`}>{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex h-[80vh] gap-4 w-full">
              {workflowPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex-1 relative group rounded-[3rem] overflow-hidden bg-aura-black shadow-aura-deep will-change-transform"
                >
                  <Image src={phase.img} fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[5s]" alt={`${phase.title} – Detailed clinical workflow`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <span className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent">{phase.phase}</span>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-aura-accent transition-colors duration-500">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-5xl text-white mb-4 leading-none">{phase.title}</h3>
                      <p className="font-sans text-base text-white/60 mb-6 leading-relaxed">{phase.desc}</p>
                      <div className="flex gap-3">
                        {phase.tags.map(tag => (
                          <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/40">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* 7. The Absolute Authority (Team) */}
      <section id="team" className="relative z-[60] py-24 md:py-48 px-6 md:px-12 bg-aura-beige overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        <div className="absolute inset-0 opacity-[0.02] aura-grain pointer-events-none" />
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
            <div className="max-w-2xl text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-[10px] uppercase tracking-[0.5em] text-aura-accent mb-8"
              >
                Our Experts
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-bold tracking-tight text-[11vw] md:text-[4.5vw] leading-[1.05] text-[#1a202c]"
              >
                The Absolute <br /><span className="font-serif italic font-light text-aura-accent">Authority</span>
              </motion.h2>
            </div>
            <div className="hidden md:flex gap-4 mb-2">
              <button onClick={() => setActiveMember(prev => (prev > 0 ? prev - 1 : 1))} className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-none pointer-events-auto group bg-white/50 backdrop-blur-sm shadow-aura-soft">
                <ArrowRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" />
              </button>
              <button onClick={() => setActiveMember(prev => (prev < 1 ? prev + 1 : 0))} className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-none pointer-events-auto group bg-white/50 backdrop-blur-sm shadow-aura-soft">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[700px] w-full">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                onClick={() => setActiveMember(i)}
                animate={{
                  flex: activeMember === i ? (windowWidth > 768 ? 4 : 1) : (windowWidth > 768 ? 0.8 : 0.2),
                }}
                className={`relative overflow-hidden rounded-[2.5rem] cursor-none group transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeMember === i ? 'bg-white shadow-aura-deep' : 'bg-aura-white border border-black/5'}`}
              >
                <motion.div
                  animate={{
                    filter: activeMember === i ? 'grayscale(0%) brightness(100%)' : 'grayscale(100%) brightness(60%)',
                    scale: activeMember === i ? 1.05 : 1.1,
                  }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image src={member.img} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" alt={`${member.name} – ${member.role}`} loading="lazy" />
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end h-[60%] pointer-events-none">
                  <motion.div
                    animate={{ opacity: activeMember === i ? 1 : 0, y: activeMember === i ? 0 : 40 }}
                    transition={{ duration: 0.8, delay: activeMember === i ? 0.3 : 0 }}
                  >
                    <p className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent mb-4">{member.role}</p>
                    <h3 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-[0.9] tracking-tight">{member.name}</h3>
                    <p className="font-sans text-base md:text-lg text-white/70 max-w-md leading-relaxed line-clamp-2 md:line-clamp-none mb-8">{member.bio}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Visual Proof (Cases Gallery) */}
      <section id="cases" ref={casesRef} className="relative z-[70] py-48 bg-aura-black text-aura-white overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-aura-deep">
        <motion.div 
          className="absolute inset-0 bg-[#FFE9ED]"
          style={{ opacity: casesBgOpacity }}
        />
        {/* Abstract Background */}
        <div className="absolute inset-0 aura-mask opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 100% 0, var(--color-aura-accent) 0.5px, transparent 0)', backgroundSize: '60px 60px' }} />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-[9px] uppercase tracking-[0.6em] mb-12 text-aura-accent flex items-center gap-6"
            >
              <div className="w-12 h-[1px] bg-aura-accent/30" />
              Visual Proof
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              style={{ color: casesTextColor }}
              className="font-sans font-bold tracking-tight text-[11vw] lg:text-[7vw] leading-[1.05] mb-12 transition-colors duration-500"
            >
              Curated <br /> <span className="font-serif italic font-light text-aura-accent">Outcomes</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/outcome_smile.png", category: "Architectural Smile", title: "Lumina® Porcelain" },
              { src: "/outcome_implants.png", category: "Full Arch", title: "Swiss Restoration" },
              { src: "/outcome_veneers.png", category: "Miniature Veneers", title: "Minimal Invasive" },
              { src: "/outcome_tech.png", category: "Design", title: "Virtual Modeling" }
            ].map((caseItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden pointer-events-auto cursor-none shadow-aura-soft border border-aura-black/5"
                onMouseEnter={() => { setIsHovering(true); setCursorText("View"); }}
                onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              >
                <Image src={caseItem.src} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 duration-[3s]" alt={`${caseItem.title} – ${caseItem.category} dental treatment result at Smile Clinique`} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-10 left-10 p-4">
                  <p className="font-display text-[8px] uppercase tracking-[0.4em] text-aura-white mb-2">{caseItem.category}</p>
                  <h3 className="font-serif font-light text-2xl italic text-aura-white">{caseItem.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Large CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mt-48 w-full bg-aura-white border border-aura-black/5 shadow-aura-medium p-12 md:p-32 rounded-[3.5rem] md:rounded-[5rem] flex flex-col md:flex-row justify-between items-start md:items-center text-left gap-20"
          >
            <div className="px-6 md:px-0">
              <h3 className="font-sans font-bold tracking-tight text-[11vw] md:text-[5vw] mb-6 text-aura-black leading-tight">Ready to redefine <br /> your smile?</h3>
              <p className="font-sans text-base text-aura-black/60 max-w-sm">Join the 1500 + patients who chose premium boutique dental care.</p>
            </div>
            <a href="tel:+919820627550" className="group relative w-64 h-64 rounded-full bg-aura-black flex items-center justify-center pointer-events-auto cursor-none overflow-hidden" onMouseEnter={() => { setIsHovering(true); setCursorText("Call"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}>
              <div className="absolute inset-0 bg-aura-accent scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
              <span className="relative z-10 font-display text-[10px] uppercase tracking-[0.5em] text-aura-white transition-colors duration-500">Book Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* All Treatments Ticker */}
      <section className="py-24 md:py-32 border-t border-aura-black/5 overflow-hidden relative bg-aura-beige">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 text-center">
          <h2 className="font-sans font-bold tracking-tight text-[11vw] md:text-[5vw] text-aura-black leading-tight">
            <span className="font-serif italic font-light opacity-50">Every</span> <TypewriterText text="Treatment We Offer" delay={0.2} isMobile={isMobile} />
          </h2>
          <p className="font-sans text-base text-aura-black/50 mt-6 max-w-2xl mx-auto">Comprehensive dental care under one roof — from preventive checkups to complex full-mouth rehabilitations.</p>
        </div>

        <div className="relative">
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-aura-beige to-transparent z-10" />
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-aura-beige to-transparent z-10" />

          {/* Row 1 — scrolls left */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            className="flex gap-6 items-center w-max mb-6"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['Root Canal Treatment', 'Dental Implants', 'Invisible Aligners', 'Smile Design', 'Full Mouth Rehabilitation', 'Teeth Whitening', 'Dental Crowns & Bridges', 'Orthodontic Braces', 'Porcelain Veneers', 'Gum Treatments'].map((treatment) => (
                  <div key={`${treatment}-${i}`} className="flex items-center gap-3 px-8 py-4 rounded-full border border-aura-black/8 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white hover:shadow-aura-soft hover:border-aura-accent/20 transition-all duration-500 group shrink-0">
                    <span className="w-2 h-2 rounded-full bg-aura-accent/40 group-hover:bg-aura-accent transition-colors duration-300" />
                    <span className="font-sans text-sm font-medium text-aura-black/70 whitespace-nowrap group-hover:text-aura-black transition-colors duration-300">{treatment}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Row 2 — scrolls right */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
            className="flex gap-6 items-center w-max mb-6"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['Tooth Extraction', 'Wisdom Tooth Surgery', 'Dental Fillings', 'Pediatric Dentistry', 'Dentures', 'TMJ / Jaw Pain Treatment', 'Teeth Cleaning & Scaling', 'Bone Grafting', 'Sinus Lift', 'Oral Cancer Screening'].map((treatment) => (
                  <div key={`${treatment}-${i}`} className="flex items-center gap-3 px-8 py-4 rounded-full border border-aura-black/8 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white hover:shadow-aura-soft hover:border-aura-accent/20 transition-all duration-500 group shrink-0">
                    <span className="w-2 h-2 rounded-full bg-aura-gold/40 group-hover:bg-aura-gold transition-colors duration-300" />
                    <span className="font-sans text-sm font-medium text-aura-black/70 whitespace-nowrap group-hover:text-aura-black transition-colors duration-300">{treatment}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Row 3 — scrolls left (slower) */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
            className="flex gap-6 items-center w-max"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['Night Guards & Mouth Guards', 'Cosmetic Contouring', 'Laser Dentistry', 'Fluoride Therapy', 'Composite Bonding', 'Digital Smile Makeover', 'Ceramic Onlays & Inlays', 'Periodontal Surgery', 'Preventive Care', 'Emergency Dental Care'].map((treatment) => (
                  <div key={`${treatment}-${i}`} className="flex items-center gap-3 px-8 py-4 rounded-full border border-aura-black/8 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white hover:shadow-aura-soft hover:border-aura-accent/20 transition-all duration-500 group shrink-0">
                    <span className="w-2 h-2 rounded-full bg-aura-mint/60 group-hover:bg-aura-accent transition-colors duration-300" />
                    <span className="font-sans text-sm font-medium text-aura-black/70 whitespace-nowrap group-hover:text-aura-black transition-colors duration-300">{treatment}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>



      {/* 11. FAQ Section */}
      <section id="faq" className="relative z-[95] py-24 md:py-48 px-6 md:px-12 bg-aura-beige overflow-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <div className="mb-20">
             <div className="font-display text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-4 text-aura-accent">
               <div className="w-12 h-[1px] bg-aura-accent/30" /> Client Inquiries
             </div>
             <h2 className="font-sans font-bold tracking-tight text-[11vw] md:text-[7vw] leading-[1.05] text-aura-black mb-6">
               Frequently <br/><span className="font-serif italic font-light text-aura-accent">Asked</span>
             </h2>
          </div>
          
          <div className="flex flex-col border-t border-aura-black/10">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeFaq === i}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                onHover={() => { setIsHovering(true); setCursorText(activeFaq === i ? "Close" : "Open"); }}
                onLeave={() => { setIsHovering(false); setCursorText(""); }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. The Manifesto (Psychology of Trust) */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-white relative overflow-hidden text-center">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-16 rounded-full border border-aura-black/10 flex items-center justify-center shadow-aura-soft"
          >
            <Star className="w-8 h-8 md:w-12 md:h-12 text-aura-accent" />
          </motion.div>
          <h2 className="font-serif text-[8vw] md:text-[6vw] lg:text-[7vw] leading-tight text-aura-black mb-16">
            "We believe that a smile is not merely a physical attribute, but a profound expression of <span className="italic text-aura-accent">human connection</span> and <span className="italic text-aura-accent">inner vitality</span>."
          </h2>
          <div className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-black/40">
            The Smile Clinique Manifesto
          </div>
        </div>
      </section>

      {/* 9. Patient Stories (Cyclical Arc Carousel) */}
      <section id="testimonials" ref={arcContainerRef} className="relative z-[100] h-[600vh] bg-aura-beige -mt-16 rounded-t-[4rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        <div className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden pt-16">

          {/* Background Large Text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-6"
            style={{ backgroundImage: 'radial-gradient(circle at center, rgba(217, 255, 0, 0.2) 0%, transparent 50%)' }}
          >
            <h2 className="font-display font-bold text-[15vw] md:text-[18vw] leading-[0.85] uppercase tracking-tighter text-aura-black/5 text-center mix-blend-multiply">
              WELLNESS<br />STORIES
            </h2>
          </div>

          {/* Cards Container */}
          <div className="relative w-full h-[600px] max-w-[1600px] mx-auto z-10 pointer-events-none perspective-[1000px] mt-24 will-change-transform">
            {[
              { theme: 'light' as const, quote: "Visited Dr. Nidhi at Smile Clinique in Malabar Hill. Fabulous experience. All precautions taken care off. Superb skill!", author: "Nancy Mehta", location: "Google Review • 5 Stars" },
              { theme: 'image' as const, author: "Nancy Mehta", location: "Google Review • 5 Stars", img: "/nancy2.png" },
              { theme: 'lime' as const, quote: "Good doctors, well equipped, honest advice, good work. Aur kya chahiye! Perfect clinical skill and finesse.", author: "Himanshu Dhoria", location: "Mumbai Resident" },
              { theme: 'image' as const, author: "Himanshu Dhoria", location: "Google Review • 5 Stars", img: "/himanshu2.png" }
            ].map((card, i, arr) => (
              <ArcCard
                key={i}
                index={i}
                totalCards={arr.length}
                progress={arcProgress}
                card={card}
                onHover={() => { setIsHovering(true); setCursorText("Story"); }}
                onLeave={() => { setIsHovering(false); setCursorText(""); }}
                windowWidth={windowWidth}
              />
            ))}
          </div>
        </div>


      </section>

      {/* Section moved to position 2 */}


      {/* 2. The Manifesto (Art & Science) - NEW SECTION */}
      {/* 9. The Action (Footer) */}


      {/* 9. The Action (Footer) */}

      {/* 9. The Action (Footer) */}
      {/* 11. Location Section */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-aura-beige relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="bg-white rounded-[3.5rem] md:rounded-[5rem] overflow-hidden shadow-aura-deep border border-black/5 flex flex-col lg:flex-row min-h-[600px] group">
            {/* Map Column */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.630131844217!2d72.7959881!3d18.9477588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cdfba84ed791%3A0x9ba637a308aabb27!2sSmile%20Clinique%20-%20Dr.%20Nidhi%20Mehta!5e0!3m2!1sen!2sin!4v1778780300517!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
            </div>
            {/* Info Column */}
            <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-white relative">
              <div className="absolute top-0 left-0 w-full h-full aura-grain opacity-[0.03] pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="font-display text-[10px] uppercase tracking-[0.5em] text-aura-accent mb-8 block">Find Us</span>
                <h2 className="font-serif text-[10vw] md:text-[4vw] text-[#1a202c] leading-none mb-12">Visit Our <br /><span className="italic font-light text-aura-accent">Sanctuary</span></h2>
                
                <div className="space-y-10">
                  <div className="flex gap-8">
                    <div className="w-12 h-12 rounded-2xl bg-aura-accent/5 flex items-center justify-center shrink-0 border border-aura-accent/10">
                      <MapPin className="w-5 h-5 text-aura-accent" />
                    </div>
                    <div>
                      <p className="font-display text-[9px] uppercase tracking-widest text-black/40 mb-2">Location</p>
                      <p className="font-sans text-base md:text-lg text-[#1a202c] leading-relaxed">
                        G 3, Akashdeep Building, <br />
                        Dongersi Road, Malabar Hill, <br />
                        Mumbai - 400006
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8">
                    <div className="w-12 h-12 rounded-2xl bg-aura-accent/5 flex items-center justify-center shrink-0 border border-aura-accent/10">
                      <Clock className="w-5 h-5 text-aura-accent" />
                    </div>
                    <div>
                      <p className="font-display text-[9px] uppercase tracking-widest text-black/40 mb-2">Operating Hours</p>
                      <p className="font-sans text-base md:text-lg text-[#1a202c]">
                        Mon – Sat: 10:00 AM – 9:00 PM <br />
                        <span className="text-aura-accent/60">Sunday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <Magnetic>
                    <a 
                      href="https://maps.app.goo.gl/9R6wR89u792Y7X7Z7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-[#1a202c] text-white px-10 py-5 rounded-full text-sm font-medium hover:bg-aura-accent transition-all duration-500 shadow-aura-soft group"
                    >
                      Get Directions
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </a>
                  </Magnetic>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-[110] bg-aura-accent text-aura-white pt-20 pb-16 px-6 md:px-12 overflow-hidden -mt-16 rounded-t-[4rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,0.1)]">
        {/* Background Texture/Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-aura-accent to-aura-black/20 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[10px] uppercase tracking-[0.4em] mb-12 flex items-center gap-4 text-aura-white/70"
          >
            <Star className="w-4 h-4 text-aura-white/70" /> Your Journey Begins Here <Star className="w-4 h-4 text-aura-white/70" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold tracking-tight text-5xl md:text-7xl lg:text-[10rem] leading-[1] mb-20 text-aura-white"
          >
            <TypewriterText text="Step Into" delay={0.2} isMobile={isMobile} /> <br /> <span className={`font-serif italic text-aura-white/80 font-light ${!isMobile ? 'mix-blend-overlay' : ''}`}>Excellence.</span>
          </motion.h2>

          <Magnetic>
            <motion.a
              href="tel:+919820627550"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => { setIsHovering(true); setCursorText("Call"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-aura-white text-aura-black flex items-center justify-center group overflow-hidden cursor-none shadow-aura-deep"
            >
              <div className="absolute inset-0 bg-aura-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 font-display text-xs md:text-sm uppercase tracking-[0.4em] font-medium group-hover:scale-110 group-hover:text-aura-white transition-all duration-700">Book Now</span>
            </motion.a>
          </Magnetic>
        </div>

        <div className="relative z-10 mt-40 pt-12 border-t border-aura-white/20 flex flex-col md:flex-row justify-between items-center gap-10 font-display text-[10px] uppercase tracking-[0.3em] text-aura-white/70 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 md:gap-8">

            <div className="flex flex-col text-left">
              <span className="font-chancery text-[28px] md:text-[40px] normal-case tracking-normal text-aura-white leading-[0.8]">Smile Clinique</span>
              <span className="font-sans text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-aura-white/50 mt-2 md:mt-3">by Dr. Nidhi Mehta</span>
            </div>
            <div className="hidden lg:flex flex-col text-left border-l border-white/20 pl-8 ml-4 gap-1.5">
              <span className="text-aura-white/90 text-[11px] tracking-widest uppercase font-semibold">Visit Our Sanctuary</span>
              <span className="text-aura-white/70 text-[10px] leading-relaxed">
                G 3, Akashdeep Building, Dongersi Road, Malabar Hill, Mumbai - 400006<br />
                Mon–Sat: 9 AM–1 PM | 4 PM–7 PM
              </span>
              <div className="flex gap-6 mt-1">
                <a href="tel:+919820627550" className="text-aura-white hover:text-white transition-colors flex items-center gap-2">
                  <span className="opacity-50 font-sans">M:</span> +91 98206 27550
                </a>
                <a href="tel:02223681440" className="text-aura-white hover:text-white transition-colors flex items-center gap-2">
                  <span className="opacity-50 font-sans">T:</span> 022 2368 1440
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Address Section */}
          <div className="lg:hidden w-full flex flex-col gap-6 mt-12 pt-12 border-t border-white/10 text-left">
             <div className="flex flex-col gap-2">
               <span className="text-aura-white/50 text-[8px] tracking-[0.3em] uppercase">Location</span>
               <span className="text-aura-white text-xs leading-relaxed">G 3, Akashdeep Building, Dongersi Road, Malabar Hill, Mumbai - 400006</span>
             </div>
             <div className="grid grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                 <span className="text-aura-white/50 text-[8px] tracking-[0.3em] uppercase">Hours</span>
                 <span className="text-aura-white text-xs">Mon–Sat: 9 AM–1 PM | 4 PM–7 PM</span>
               </div>
               <div className="flex flex-col gap-2">
                 <span className="text-aura-white/50 text-[8px] tracking-[0.3em] uppercase">Contact</span>
                 <a href="tel:+919820627550" className="text-aura-white text-xs">+91 98206 27550</a>
                 <a href="tel:02223681440" className="text-aura-white text-xs">022 2368 1440</a>
               </div>
             </div>
          </div>
          <div className="flex gap-10 items-center">
            {['Testimonials'].map((item) => (
              <a
                key={item}
                href="#testimonials"
                onMouseEnter={() => { setIsHovering(true); setCursorText("Visit"); }}
                onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
                className="hover:text-aura-white transition-colors duration-300 font-display"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9998] flex flex-col items-end gap-3 pointer-events-auto">
        {/* Tooltip Message */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block"
        >
          <a
            href="https://wa.me/919820627550?text=Hi%20Smile%20Clinique%2C%20I%27d%20like%20to%20book%20an%20appointment%20for%20a%20consultation.%20Please%20let%20me%20know%20the%20available%20slots."
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-5 py-3.5 max-w-[240px] border border-black/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-shadow duration-300">
              <p className="font-sans text-[13px] text-[#1a202c] leading-relaxed">
                👋 Hi! Need a dental appointment?{' '}
                <span className="text-[#25D366] font-semibold group-hover:underline">
                  Chat with us
                </span>
              </p>
            </div>
          </a>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          className="relative group"
        >
          {/* Pulse Ring Animation */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-[whatsapp-ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-0" />
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-[whatsapp-ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s] opacity-0" />

          <a
            href="https://wa.me/919820627550?text=Hi%20Smile%20Clinique%2C%20I%27d%20like%20to%20book%20an%20appointment%20for%20a%20consultation.%20Please%20let%20me%20know%20the%20available%20slots."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book appointment via WhatsApp"
            className="relative flex items-center justify-center w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#25D366] text-white shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.55)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer z-10"
          >
            {/* WhatsApp SVG Icon */}
            <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.004 3.2C9.002 3.2 3.3 8.9 3.3 15.9c0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.82-1.79a12.65 12.65 0 006 1.53h.01c7 0 12.7-5.7 12.7-12.7 0-3.39-1.32-6.58-3.72-8.98A12.63 12.63 0 0016.004 3.2zm0 23.2h-.01a10.52 10.52 0 01-5.36-1.47l-.38-.23-3.98 1.04 1.06-3.88-.25-.4A10.48 10.48 0 015.5 15.9c0-5.8 4.72-10.5 10.52-10.5 2.81 0 5.44 1.09 7.43 3.08a10.43 10.43 0 013.07 7.42c0 5.8-4.72 10.5-10.52 10.5zm5.76-7.87c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.87-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.14-.29-.21-.61-.37z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
