"use client";
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { ArrowUpRight, Plus, Star, ArrowRight, BookOpen, Menu, X, ArrowDown, ScanLine, Sparkles, Gem, Activity, Smile, ChevronDown } from 'lucide-react';
import Lenis from 'lenis';

function TypewriterText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + index * 0.03, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function RevealImage({ src, alt, className, imageClassName }: { src: string, alt: string, className?: string, imageClassName?: string }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imageClassName || ''}`}
        referrerPolicy="no-referrer"
      />
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

function TestimonialCard({ theme, quote, author, location, img }: { theme: 'light' | 'lime' | 'image', quote?: string, author: string, location: string, img?: string }) {
  return (
    <div
      className={`relative w-[320px] md:w-[450px] h-[480px] md:h-[650px] p-10 md:p-14 shadow-aura-deep flex flex-col justify-between overflow-hidden shrink-0 rounded-[2rem] md:rounded-[3rem] ${theme === 'lime' ? 'bg-[#D9FF00] text-black' :
          theme === 'image' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >
      {theme === 'image' && img && (
        <div className="absolute inset-0 z-0">
          <img src={img} className="w-full h-full object-cover opacity-80" alt={author} />
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

const Grain = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] animate-grain"
    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
);

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

  const xFactor = isMobile ? 320 : 500;
  const yFactor = isMobile ? 30 : 50;

  const x = useTransform(dist, d => d * xFactor);
  const y = useTransform(dist, d => Math.abs(d) * yFactor + Math.pow(d, 2) * yFactor);
  const rotate = useTransform(dist, d => d * (isMobile ? 10 : 15));
  const zIndex = useTransform(dist, d => 100 - Math.abs(Math.round(d)));
  const scale = useTransform(dist, d => (isMobile ? 0.7 : 1) - Math.abs(d) * 0.05);

  return (
    <motion.div
      style={{ x, y, rotate, zIndex, scale }}
      className="absolute top-1/2 left-1/2 -track-center -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-none origin-bottom px-4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <TestimonialCard {...card} />
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const arcContainerRef = useRef<HTMLDivElement>(null);

  // Smooth Scroll Initialization (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
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



  const team = [
    { name: "Diagnostic Blueprint", role: "Phase 01", img: "/diagnostic-xray.png", bio: "Sub-millimeter digital mapping of your facial architecture using 3D scanning and AI analysis.", category: "Analysis" },
    { name: "Aesthetic Simulation", role: "Phase 02", img: "https://images.unsplash.com/photo-1611689225620-3e70248bc0f0?q=80&w=2000", bio: "Virtual rendering and tangible mockups of your potential, allowing you to preview the final result before we begin.", category: "Design" },
    { name: "Artisanal Fabrication", role: "Phase 03", img: "https://images.unsplash.com/photo-1579684428482-f109a797a162?q=80&w=2000", bio: "Hand-finished ceramics meticulously layered and glazed by our master ceramists in the innovation lab.", category: "Creation" },
    { name: "Harmonic Integration", role: "Phase 04", img: "https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?q=80&w=2000", bio: "Flawless structural placement for enduring, natural brilliance that becomes completely indistinguishable from nature.", category: "Delivery" },
  ];
  return (
    <div ref={containerRef} className="min-h-screen bg-aura-beige font-sans text-aura-black aura-grain relative cursor-none selection:bg-aura-black selection:text-aura-beige">
      <Grain />
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

      {/* Cinematic Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{
              clipPath: "inset(0 0 100% 0)",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[10000] bg-aura-black flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.05] aura-grain" />

            <div className="relative overflow-hidden px-10">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[15vw] md:text-[10vw] text-aura-beige uppercase tracking-tight leading-none flex flex-col items-center"
              >
                <span>Smile Clinique</span>
                <span className="font-sans text-[3vw] md:text-[1.5vw] normal-case mt-4 text-aura-gold/80 tracking-widest pl-2">by Dr. Nidhi Mehta</span>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-aura-gold origin-left"
              />
            </div>

            <div className="mt-12 overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[9px] uppercase tracking-[0.6em] text-aura-gold-light"
              >
                Advanced Cosmetic Dentistry
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 font-display text-[8px] uppercase tracking-[0.2em] text-aura-beige"
            >
              Malabar Hill • Mumbai
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Film Grain Layer */}
      <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }}></div>

      {/* Navigation - Exact Screenshot Match */}
      <nav className="fixed top-8 left-0 right-0 z-50 px-6 md:px-24 flex justify-between items-center pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto flex flex-col pt-2">
          <span className="font-serif text-[22px] tracking-tight text-[#2d3748] leading-[0.8]">Smile Clinique</span>
          <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-[#2d3748]/60 mt-1 pl-1">by Dr. Nidhi Mehta</span>
        </div>

        {/* Center Nav Pill */}
        <div className="hidden md:flex items-center gap-8 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-black/[0.03] font-sans text-[12px] font-medium text-[#2d3748]/80 pointer-events-auto shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          {['Treatments', 'Our Clinic', 'Contacts'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onMouseEnter={() => { setIsHovering(true); setCursorText("Go"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              className="hover:text-[#2d3748] transition-colors duration-300 cursor-none"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="pointer-events-auto">
          <Magnetic>
            <a href="#contact" onMouseEnter={() => { setIsHovering(true); setCursorText("Book"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }} className="bg-[#1e293b] text-white px-6 py-2.5 rounded-full text-[12px] font-medium hover:bg-black transition-all duration-300 cursor-none shadow-aura-soft">
              Book Online
            </a>
          </Magnetic>
        </div>
      </nav>

      {/* 1. The Hero - Single Image Background Seamless Blend Match */}
      <section className="relative min-h-[100vh] md:h-[110vh] w-full bg-[#fcfcfc] overflow-hidden pt-32 px-6 md:px-24 flex items-center pb-40 md:pb-0">

        {/* Left-Bound Image Layer acting as Background */}
        <div className="absolute inset-y-0 left-0 w-[45%] z-0 overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)', maskImage: 'linear-gradient(to right, black 80%, transparent 100%)' }}>
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            src="/hero.png"
            className="w-full h-full object-cover object-[75%_20%]"
            alt="Hero Smile"
          />
        </div>

        {/* Right-Aligned Typography layer */}
        <div className="relative z-10 w-full flex justify-end items-center pointer-events-none mt-12 pr-[2%]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex flex-col items-end w-[55%] lg:w-[55%]"
          >
            <h1 className="font-sans text-[11vw] font-normal tracking-[-0.07em] text-[#1a202c] leading-[0.8] mix-blend-multiply whitespace-nowrap drop-shadow-[0_10px_20px_rgba(255,255,255,0.2)] flex flex-col items-end">
              <span><span className="pr-3">Smile</span>Clinique</span>
              <span className="font-serif italic font-light text-[3vw] text-[#1a202c]/60 tracking-normal mt-4 drop-shadow-none">by Dr. Nidhi Mehta</span>
            </h1>
            <div className="w-full flex justify-end mt-4">
              <p className="font-sans text-xl md:text-2xl mt-8 md:mt-12 text-[#1a202c]/70 font-light tracking-wide max-w-none whitespace-nowrap">
                Malabar Hill's Trusted Dental Care Centre.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Interactive Cards at Bottom */}
        <div className="absolute bottom-6 md:bottom-16 left-0 right-0 z-30 px-6 md:px-24 flex flex-col md:flex-row items-center md:items-end gap-3 pointer-events-none md:overflow-visible">
          {/* Card 1: Expanded (Preventive Care) */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-5 rounded-[6px] border border-black/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] w-full md:w-[360px] shrink-0 pointer-events-auto flex flex-col"
          >
            <div className="flex justify-between items-start gap-3">
              <div className="flex gap-3 items-start flex-1">
                <div className="w-14 h-10 rounded-[2px] overflow-hidden shrink-0 mt-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070"
                    className="w-full h-full object-cover"
                    alt="Preventive"
                  />
                </div>
                <h4 className="font-sans font-medium text-[#2d3748] text-[15px] pt-1 leading-tight tracking-tight">Preventive Care</h4>
              </div>
            </div>

            <p className="text-[10px] text-[#2d3748]/70 leading-[1.6] mt-3 font-medium pr-2 hidden md:block">
              Healthy smiles begin with prevention. Our team provides regular check-ups, professional cleanings, and personalized guidance to protect your teeth and gums before problems arise. Prevention today means confidence tomorrow.
            </p>
          </motion.div>

          {/* Other Cards (Collapsed) */}
          <div className="hidden md:flex gap-4 mb-2 overflow-x-auto w-full scrollbar-hide py-2 px-2 -mx-2 pointer-events-auto snap-x">
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
                className="bg-white p-2.5 pr-4 rounded-[6px] border border-black/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex items-center justify-between min-w-[220px] snap-start shrink-0 hover:bg-[#f8f9fa] transition-colors duration-300 pointer-events-auto h-[60px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[36px] rounded-[4px] overflow-hidden shrink-0">
                    <img src={card.img} className="w-full h-full object-cover" alt={card.title} />
                  </div>
                  <span className="font-sans font-medium text-[13px] text-[#2d3748] leading-tight tracking-tight">{card.title}</span>
                </div>
                <span className="text-xl leading-none text-[#2d3748]/40 font-light">+</span>
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
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vw] bg-aura-accent rounded-full blur-[120px]"
          />

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
          <motion.div
            animate={{ x: ["-200%", "200%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[500px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60 -skew-x-[20deg] blur-[40px] mix-blend-overlay"
          />
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
            className="absolute top-[45%] left-[5%] md:left-[18%] z-20 bg-transparent flex items-center justify-center"
          >
            <Plus className="w-8 h-8 text-aura-black/20" strokeWidth={1} />
          </motion.div>

          <motion.div
            style={{ y: useTransform(heroProgress, [0.4, 1], [0, -70]), rotate: -20 }}
            className="absolute bottom-[40%] right-[15%] md:right-[22%] z-20 bg-white/80 backdrop-blur-md p-4 rounded-full flex items-center justify-center shadow-sm border border-black/5"
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
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl relative z-30"
            >
              <h2 className="font-sans font-bold text-[7vw] md:text-[4.5vw] leading-[1.2] text-[#1a202c] tracking-tight drop-shadow-sm">
                We treat the human smile not as <br className="hidden md:block" />
                a mere feature, but as the absolute <br className="hidden md:block" />
                <span className="relative inline-block my-2 md:my-0">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans font-bold tracking-tight text-[8vw] lg:text-[5vw] leading-[1.05] text-aura-black mb-12"
              >
                The Architect of <br /> <span className="font-serif italic font-light text-aura-gold">Aesthetics.</span>
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
                <div className="aura-glass p-10 rounded-[2rem] border border-white/40 shadow-aura-soft mb-16 relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-aura-gold/20 font-serif text-8xl leading-none">&quot;</div>
                  <p className="relative z-10 font-serif text-2xl md:text-3xl text-aura-black italic leading-snug">
                    True aesthetic dentistry is invisible. We don't just restore teeth; we restore the uninhibited freedom to express joy.
                  </p>
                </div>

                {/* Pills/Badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="px-6 py-3 rounded-full border border-aura-black/10 font-display text-[10px] uppercase tracking-[0.2em] text-aura-black bg-white/50 backdrop-blur-sm shadow-sm">
                    Mumbai University
                  </div>
                  <div className="px-6 py-3 rounded-full border border-aura-black/10 font-display text-[10px] uppercase tracking-[0.2em] text-aura-black bg-white/50 backdrop-blur-sm shadow-sm">
                    15+ Years Exp.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="lg:w-1/2 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-aura-deep group pointer-events-auto cursor-none border border-black/5"
              onMouseEnter={() => { setIsHovering(true); setCursorText("Founder"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
            >
              <motion.img
                src="/drnidhi.JPG"
                className="absolute inset-0 w-full h-[110%] object-cover transition-transform duration-[3s] group-hover:scale-105 group-hover:translate-y-0 -translate-y-[5%]"
                alt="Dr. Nidhi Mehta"
                referrerPolicy="no-referrer"
              />

              {/* Reference-inspired shape accent (Top Right) */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-aura-gold opacity-80 z-20" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

              {/* Name Plate Overlay */}
              <div className="absolute bottom-10 left-10 z-20 aura-glass-dark p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl">
                <h4 className="font-serif text-3xl text-white mb-2 italic">Dr. Nidhi Mehta</h4>
                <p className="font-display text-[9px] uppercase tracking-[0.3em] text-aura-gold">BDS, Comprehensive Dentist & Founder</p>
              </div>

              {/* Subtle Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Digital Innovation (Scanner Video) */}
      <section id="space" className="scroll-mt-[100px] relative z-30 bg-aura-black -mt-16 rounded-t-[4rem] md:rounded-t-[5rem] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="relative w-full h-[80vh] md:h-[100vh] flex items-center justify-center cursor-none group" onMouseEnter={() => { setIsHovering(true); setCursorText("Watch"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}>
          {/* Background Video */}
          <video
            src="/scan.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-aura-black via-aura-black/20 to-aura-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,27,38,0.7)_100%)] pointer-events-none" />

          <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-10 pb-20 pt-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-[9px] uppercase tracking-[0.7em] text-aura-gold mb-6 flex items-center gap-4"
              >
                <div className="w-8 h-[1px] bg-aura-gold/50" />
                Digital Impressions
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-sans font-bold tracking-tight text-[10vw] lg:text-[6vw] leading-[1.05] text-white"
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
              className="w-full md:w-[480px] aura-glass-dark p-6 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-white italic mb-4">Advanced Scanning Technology</h3>
              <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed mb-8">
                Experience the future of dentistry. Our intraoral scanner captures a perfectly accurate, full-color 3D replica of your teeth in under 60 seconds — completely eliminating the discomfort of traditional impression putty.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="px-4 py-2 rounded-full border border-white/20 text-[8px] uppercase tracking-widest text-white/50 bg-white/5 backdrop-blur-md">60 Second Scan</span>
                <span className="px-4 py-2 rounded-full border border-white/20 text-[8px] uppercase tracking-widest text-white/50 bg-white/5 backdrop-blur-md">True-Color 3D</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Disciplines of Perfection (Bento Box) */}
      <section id="treatments" className="relative z-40 py-24 md:py-48 px-6 md:px-12 bg-white overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        {/* Mint Light Overlay from Left */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-aura-mint-light/60 blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-[9px] uppercase tracking-[0.7em] mb-8 text-aura-accent flex items-center gap-6"
              >
                004 <div className="w-12 h-[1px] bg-aura-accent/30" /> Clinical Focus
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans font-bold tracking-tight text-[7vw] lg:text-[4.5vw] leading-[1.05] text-aura-black"
              >
                Disciplines of <br /> <span className="font-serif italic font-light text-aura-accent">Perfection</span>
              </motion.h2>
            </div>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">

            {/* Left Main Card (Implants) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              onMouseEnter={() => { setIsHovering(true); setCursorText("Explore"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              className="md:col-span-8 bg-black text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col justify-between group cursor-none shadow-aura-soft"
            >
              {/* Image Background */}
              <img
                src="/full-mouth-rehab.png"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                alt="Full Mouth Rehab Background"
              />
              {/* Dark Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 pointer-events-none" />

              <div className="relative z-10 w-full">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 font-display text-[9px] uppercase tracking-[0.3em] text-white font-medium shadow-sm mb-12 md:mb-16">
                  <Star className="w-3 h-3 text-aura-gold" /> Signature
                </div>

                <h3 className="font-sans font-bold text-5xl md:text-7xl leading-none text-white mb-6 md:mb-10 tracking-tight">
                  Full Mouth <br /> Rehab
                </h3>

                <p className="font-sans text-base md:text-xl text-white/80 max-w-md md:leading-relaxed">
                  Comprehensive functional and aesthetic rebuild of your entire dental architecture for peak performance and absolute confidence.
                </p>
              </div>

              {/* Bottom Nav Pills */}
              <div className="relative z-10 flex flex-wrap gap-4 mt-20">
                {['Reconstruction', 'Bite Correction', 'Aesthetics'].map((tag) => (
                  <div key={tag} className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md font-display text-[10px] uppercase tracking-[0.2em] text-white font-medium shadow-aura-soft border border-white/20 hover:bg-white hover:text-black transition-colors duration-300">
                    {tag}
                  </div>
                ))}
              </div>

              {/* Action Button (Bottom Right Desktop) */}
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-aura-accent rounded-full hidden md:flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </motion.div>

            {/* Right Column Stack */}
            <div className="md:col-span-4 flex flex-col gap-6 h-full">

              {/* Top Right Card (Root Canal - Image BG) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                onMouseEnter={() => { setIsHovering(true); setCursorText("View"); }}
                onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
                className="flex-1 rounded-[3rem] overflow-hidden relative group cursor-none shadow-aura-soft"
              >
                <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop" className="absolute inset-0 w-full h-[110%] object-cover group-hover:scale-105 transition-transform duration-[3s] -translate-y-[5%]" alt="Root Canal Treatment" />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/90 via-aura-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
                  <h4 className="font-sans font-bold text-3xl md:text-4xl text-white mb-3 tracking-tight">Smile Design</h4>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">Architecting the perfect aesthetic frame for your face using minimally invasive porcelain and digital modeling.</p>
                </div>
              </motion.div>

              {/* Bottom Right Card (Wisdom Teeth - Dark BG) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                onMouseEnter={() => { setIsHovering(true); setCursorText("View"); }}
                onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
                className="flex-1 rounded-[3rem] bg-[#1a1b26] p-8 md:p-10 relative overflow-hidden group cursor-none shadow-aura-soft flex flex-col justify-between"
              >
                {/* Decorative Icon Top Left */}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-10">
                  <div className="w-4 h-4 border border-aura-gold rounded-sm rotate-45" />
                </div>

                {/* Arrow Top Right */}
                <div className="absolute top-10 right-10 text-white/40 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="font-sans font-bold text-3xl md:text-4xl text-white mb-3 tracking-tight">Surgical Extraction</h4>
                  <p className="font-sans text-white/50 text-sm leading-relaxed max-w-[80%]">Atraumatic surgical protocols engineered for rapid, complication-free recovery.</p>
                </div>

                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-aura-accent opacity-20 blur-[60px] rounded-full pointer-events-none group-hover:opacity-40 transition-opacity duration-700" />
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. The Absolute Authority (Team) */}
      <section id="team" className="relative z-[60] py-24 md:py-48 px-6 md:px-12 bg-aura-beige overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        <div className="absolute inset-0 opacity-[0.02] aura-grain pointer-events-none" />

        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
            <div className="max-w-2xl text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-[10px] uppercase tracking-[0.5em] text-aura-accent mb-8"
              >
                Our Workflow
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-bold tracking-tight text-[7vw] md:text-[4.5vw] leading-[1.05] text-[#1a202c]"
              >
                The Anatomy of <br /><span className="font-serif italic font-light text-aura-accent">Transformation</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans text-lg text-[#2d3748]/60 mt-10 leading-relaxed max-w-xl italic border-l-2 border-aura-accent/20 pl-8"
              >
                "A meticulously engineered protocol ensuring absolute precision from the first scan to the final placement."
              </motion.p>
            </div>

            {/* Nav Arrows (Visual matching) */}
            <div className="flex gap-4 mb-2">
              <button onClick={() => setActiveMember(prev => (prev > 0 ? prev - 1 : team.length - 1))} className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-none pointer-events-auto group bg-white/50 backdrop-blur-sm shadow-aura-soft" onMouseEnter={() => { setIsHovering(true); setCursorText("Prev"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}>
                <ArrowRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" />
              </button>
              <button onClick={() => setActiveMember(prev => (prev < team.length - 1 ? prev + 1 : 0))} className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-none pointer-events-auto group bg-white/50 backdrop-blur-sm shadow-aura-soft" onMouseEnter={() => { setIsHovering(true); setCursorText("Next"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Accordion Container */}
          <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[700px] w-full">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                onClick={() => setActiveMember(i)}
                onMouseEnter={() => { if (windowWidth > 768) setActiveMember(i); setIsHovering(true); setCursorText(member.category); }}
                onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
                animate={{
                  flex: activeMember === i ? (windowWidth > 768 ? 4 : 1) : (windowWidth > 768 ? 0.8 : 0.2),
                }}
                className={`relative overflow-hidden rounded-[2.5rem] cursor-none group transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeMember === i ? 'bg-white shadow-aura-deep' : 'bg-aura-white border border-black/5'}`}
              >
                {/* Background Image with Liquid Zoom */}
                <motion.img
                  src={member.img}
                  alt={member.name}
                  animate={{
                    filter: activeMember === i ? 'grayscale(0%) brightness(100%) blur(0px)' : 'grayscale(100%) brightness(60%) blur(2px)',
                    scale: activeMember === i ? 1.05 : 1.2,
                    x: activeMember === i ? 0 : (i % 2 === 0 ? 20 : -20)
                  }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Vertical Text for collapsed state */}
                <AnimatePresence>
                  {activeMember !== i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.4, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <span className="font-serif text-[2.8rem] text-white whitespace-nowrap rotate-90 tracking-tighter mix-blend-overlay">
                        {member.name.split(' ').pop()}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end h-[60%] pointer-events-none">
                  <motion.div
                    animate={{
                      opacity: activeMember === i ? 1 : 0,
                      y: activeMember === i ? 0 : 40
                    }}
                    transition={{ duration: 0.8, delay: activeMember === i ? 0.3 : 0, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-12 h-[1px] bg-aura-accent/50" />
                      <p className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-accent">
                        {member.role}
                      </p>
                    </div>
                    <h3 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-[0.9] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-white/70 max-w-md leading-relaxed line-clamp-2 md:line-clamp-none mb-8">
                      {member.bio}
                    </p>
                    <div className="flex gap-4">
                      <span className="px-4 py-1 rounded-full border border-white/20 text-[9px] uppercase tracking-widest text-white/50">{member.category}</span>
                      <span className="px-4 py-1 rounded-full border border-white/20 text-[9px] uppercase tracking-widest text-white/50">Premium Care</span>
                    </div>
                  </motion.div>
                </div>

                {/* Stripe-style hover border effect */}
                <div className={`absolute inset-0 border-[3px] transition-opacity duration-1000 ${activeMember === i ? 'border-aura-accent/30 opacity-100' : 'border-transparent opacity-0'} rounded-[2.5rem] pointer-events-none`} />
                <div className="absolute inset-0 opacity-[0.05] aura-grain pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Visual Proof (Cases Gallery) */}
      <section id="cases" className="relative z-[70] py-48 bg-aura-beige text-aura-black overflow-hidden rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        {/* Abstract Background */}
        <div className="absolute inset-0 aura-mask opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle at 100% 0, var(--color-aura-accent) 0.5px, transparent 0)', backgroundSize: '60px 60px' }} />
        {/* Mint Light Overlay from Right */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-aura-mint/40 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-32">
            <div className="font-display text-[9px] uppercase tracking-[0.6em] mb-12 text-aura-accent flex items-center gap-6">
              <div className="w-12 h-[1px] bg-aura-accent/30" />
              Visual Proof
            </div>
            <h2 className="font-sans font-bold tracking-tight text-[10vw] lg:text-[7vw] leading-[1.05] mb-12">
              Curated <br /> <span className="font-serif italic font-light text-aura-accent">Outcomes</span>
            </h2>
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
                <img src={caseItem.src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 duration-[3s]" alt={caseItem.title} />
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
            className="mt-48 w-full bg-aura-white border border-aura-black/5 shadow-aura-medium p-24 md:p-32 rounded-[5rem] flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-20"
          >
            <div>
              <h3 className="font-sans font-bold tracking-tight text-4xl md:text-5xl mb-6 text-aura-black">Ready to redefine <br /> your smile?</h3>
              <p className="font-sans text-base text-aura-black/60 max-w-sm">Join the 500+ patients who chose premium boutique dental care.</p>
            </div>
            <button className="group relative w-64 h-64 rounded-full bg-aura-black flex items-center justify-center pointer-events-auto cursor-none overflow-hidden" onMouseEnter={() => { setIsHovering(true); setCursorText("Book"); }} onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}>
              <div className="absolute inset-0 bg-aura-accent scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
              <span className="relative z-10 font-display text-[10px] uppercase tracking-[0.5em] text-aura-white transition-colors duration-500">Book Now</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 md:py-32 border-t border-aura-black/5 overflow-hidden relative bg-aura-beige">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-20 text-center">
          <h2 className="font-sans font-bold tracking-tight text-4xl md:text-5xl text-aura-black">
            <span className="font-serif italic font-light opacity-50">Trusted by</span> <TypewriterText text="Mumbai's Elite" delay={0.2} />
          </h2>
        </div>

        <div className="relative">
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-aura-beige to-transparent z-10" />
          <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-aura-beige to-transparent z-10" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex gap-24 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700 w-max"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-6 font-serif text-3xl whitespace-nowrap text-aura-black"><Star className="w-8 h-8 text-aura-gold" /> Indian Dental Association</div>
                <div className="flex items-center gap-6 font-serif text-3xl whitespace-nowrap text-aura-black"><Star className="w-8 h-8 text-aura-gold" /> Excellence in Cosmetic Dentistry</div>
                <div className="flex items-center gap-6 font-serif text-3xl whitespace-nowrap text-aura-black"><Star className="w-8 h-8 text-aura-gold" /> Premium Healthcare Standard</div>
                <div className="flex items-center gap-6 font-serif text-3xl whitespace-nowrap text-aura-black"><Star className="w-8 h-8 text-aura-gold" /> Design in Healthcare</div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. The Journal (Thought Leadership) */}
      <section id="journal" className="relative z-[90] py-24 md:py-48 px-6 md:px-12 overflow-hidden bg-white rounded-t-[4rem] md:rounded-t-[5rem] -mt-16 shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        {/* Ambient Light */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-aura-mint-light/50 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-aura-gold/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-10">
            <div>
              <div className="font-display text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-4 text-aura-black/40">
                <BookOpen className="w-4 h-4 text-aura-gold" /> Insights <BookOpen className="w-4 h-4 text-aura-gold" />
              </div>
              <h2 className="relative z-10 font-sans font-bold tracking-tight text-4xl md:text-7xl leading-none text-aura-black">
                <TypewriterText text="The" delay={0.2} /> <span className="font-serif italic font-light text-aura-gold">Journal</span>
              </h2>
            </div>
            <Magnetic>
              <button
                onMouseEnter={() => { setIsHovering(true); setCursorText("Read"); }}
                onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
                className="px-8 py-4 rounded-full border border-aura-black/10 text-aura-black font-display text-[10px] uppercase tracking-[0.3em] hover:bg-aura-black hover:text-aura-beige transition-all duration-700 cursor-none shadow-aura-soft"
              >
                Read All
              </button>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Featured Article (Overlapping Layout) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => { setIsHovering(true); setCursorText("Featured"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              className="lg:col-span-7 relative group cursor-none"
            >
              <RevealImage
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop"
                alt="Journal Featured"
                className="w-full h-[50vh] md:h-[70vh] rounded-[3rem] overflow-hidden shadow-aura-deep"
              />

              {/* Overlapping Glass Card */}
              <div className="absolute bottom-10 left-6 right-6 md:left-10 md:-right-10 aura-glass p-10 md:p-14 rounded-[3rem] shadow-aura-deep border border-white/30 transition-transform duration-700 group-hover:-translate-y-6">
                <div className="flex items-center gap-4 font-display text-[9px] uppercase tracking-[0.3em] text-aura-gold mb-6">
                  <span>Aesthetics</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-aura-black/10" />
                  <span>5 Min Read</span>
                </div>
                <h3 className="font-sans font-bold tracking-tight text-3xl md:text-5xl text-aura-black mb-6 leading-tight">The Psychology of a Perfect Smile: Beyond the Surface</h3>
                <p className="font-sans text-base text-aura-black/60 mb-10 line-clamp-2 leading-relaxed">Discover how subtle changes in dental aesthetics can profoundly impact self-perception, confidence, and social interactions in our latest deep dive.</p>
                <div className="flex items-center gap-3 text-aura-black font-display text-[10px] uppercase tracking-[0.3em] group-hover:text-aura-gold transition-colors duration-300">
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" />
                </div>
              </div>
            </motion.div>

            {/* Side Articles */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-12 lg:pl-12 mt-20 lg:mt-0">
              {[
                { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop", category: "Technology", title: "Why 3D Scanning is the Future of Non-Invasive Dentistry" },
                { img: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=2070&auto=format&fit=crop", category: "Wellness", title: "Holistic Approaches to Oral Health and Longevity" },
                { img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop", category: "Materials", title: "The Evolution of Biocompatible Ceramic Veneers" },
                { img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070", category: "Prevention", title: "Early Detection: How AI identifies decay before it starts" }
              ].map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
                  onMouseEnter={() => { setIsHovering(true); setCursorText("Read"); }}
                  onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
                  className="flex gap-8 items-center group cursor-none pb-8 border-b border-aura-black/5 last:border-0"
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] overflow-hidden shrink-0 shadow-aura-soft">
                    <RevealImage src={article.img} alt={article.title} className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" />
                  </div>
                  <div>
                    <div className="font-display text-[9px] uppercase tracking-[0.3em] text-aura-accent mb-3">{article.category}</div>
                    <h4 className="font-sans font-bold tracking-tight text-2xl md:text-3xl text-aura-black leading-tight group-hover:text-aura-accent transition-colors duration-500">{article.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
             <h2 className="font-sans font-bold tracking-tight text-5xl md:text-7xl leading-none text-aura-black mb-6">
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
          <h2 className="font-serif text-3xl md:text-6xl lg:text-7xl leading-tight text-aura-black mb-16">
            "We believe that a smile is not merely a physical attribute, but a profound expression of <span className="italic text-aura-accent">human connection</span> and <span className="italic text-aura-accent">inner vitality</span>."
          </h2>
          <div className="font-display text-[10px] uppercase tracking-[0.4em] text-aura-black/40">
            The Smile Clinique Manifesto
          </div>
        </div>
      </section>

      {/* 9. Patient Stories (Cyclical Arc Carousel) */}
      <section id="testimonials" ref={arcContainerRef} className="relative z-[100] h-[400vh] bg-aura-beige -mt-16 rounded-t-[4rem] md:rounded-t-[6rem] shadow-[0_-20px_50px_rgba(0,0,0,0.02),inset_0_2px_0_rgba(255,255,255,0.3)]">
        <div className="sticky top-0 h-[100vh] w-full flex items-center justify-center overflow-hidden pt-16">

          {/* Background Large Text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-10"
            style={{ backgroundImage: 'radial-gradient(circle at center, rgba(217, 255, 0, 0.2) 0%, transparent 50%)' }}
          >
            <h2 className="font-display font-bold text-[18vw] leading-[0.85] uppercase tracking-tighter text-aura-black/5 text-center mix-blend-multiply">
              WELLNESS<br />STORIES<br />SHARE
            </h2>
          </div>

          {/* Cards Container */}
          <div className="relative w-full h-[600px] max-w-[1600px] mx-auto z-10 pointer-events-none perspective-[1000px] mt-24">
            {[
              { theme: 'light' as const, quote: "Visited Dr. Nidhi at Smile Clinique in Malabar Hill. Fabulous experience. All precautions taken care off. Superb skill!", author: "Nancy Mehta", location: "Google Review • 5 Stars" },
              { theme: 'image' as const, author: "Himanshu Dhoria", location: "Google Review • 5 Stars", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000" },
              { theme: 'lime' as const, quote: "Good doctors, well equipped, honest advice, good work. Aur kya chahiye! Perfect clinical skill and finesse.", author: "Himanshu Dhoria", location: "Mumbai Resident" },
              { theme: 'image' as const, author: "Sunila P.", location: "Google Review • 5 Stars", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000" }
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
            <TypewriterText text="Step Into" delay={0.2} /> <br /> <span className="font-serif italic text-aura-white/80 font-light mix-blend-overlay">Excellence.</span>
          </motion.h2>

          <Magnetic>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseEnter={() => { setIsHovering(true); setCursorText("Book"); }}
              onMouseLeave={() => { setIsHovering(false); setCursorText(""); }}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-aura-white text-aura-black flex items-center justify-center group overflow-hidden cursor-none shadow-aura-deep"
            >
              <div className="absolute inset-0 bg-aura-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 font-display text-xs md:text-sm uppercase tracking-[0.4em] font-medium group-hover:scale-110 group-hover:text-aura-white transition-all duration-700">Book Now</span>
            </motion.button>
          </Magnetic>
        </div>

        <div className="relative z-10 mt-40 pt-12 border-t border-aura-white/20 flex flex-col md:flex-row justify-between items-center gap-10 font-display text-[10px] uppercase tracking-[0.3em] text-aura-white/70 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl normal-case tracking-normal text-aura-white leading-none">Smile Clinique</span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-white/50 mt-1">by Dr. Nidhi Mehta</span>
            </div>
            <span className="text-aura-white/90 text-xs text-left border border-white/10 p-4 rounded-xl bg-black/20 backdrop-blur-md shadow-sm ml-6">G 3, Akashdeep Building, Dongersi Road,<br />Malabar Hill, Mumbai - 400006<br />Mon–Sat: 9 AM–1 PM | 4 PM–7 PM<br />Tel: 022-35780947</span>
          </div>
          <div className="flex gap-10 items-center">
            {['Practo', 'Justdial', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === "Contact" ? "#contact" : "#"}
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
    </div>
  );
}
