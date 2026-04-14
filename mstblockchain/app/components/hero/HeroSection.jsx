'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import HeroImage from './HeroImage';
import PartnerMarquee from './PartnerMarquee';

// --- DATA ---
const slides = [
  { src: '/img1.webp', alt: 'Institutional Web3' },
  { src: '/img3.jpeg', alt: 'Data Visualization' },
  { src: '/img2.jpg', alt: 'Decentralized Network' }
];

const headings = [
  "An Ecosystem Where *Innovation* Takes Shape",
  "Designed for *Scale* Built for the *Future*",
  "Turning Blockchain *Potential* into Real *Utility*"
];

const stats = [
  { label: 'Finality', value: 400, suffix: 'ms', active: true },
  { label: 'Active Nodes', value: 12400, suffix: '+', active: false },
  { label: 'Total Value', value: 4.2, prefix: '$', suffix: 'B+', active: false }
];

// 🔥 LOGOS
const partnerImages = [
  '/placeholder.png',
  '/logos/2.png',
  '/logos/3.png',
  '/logos/4.png',
  '/logos/5.png'
];

// --- COUNTUP ---
function CountUp({ value, prefix = '', suffix = '', decimals = 0 }) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    const formatted = latest.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return `${prefix}${formatted}${suffix}`;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      });
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// highlight words
function formatHeading(text) {
  const parts = text.split('*');
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] via-red-600 to-rose-500">
        {part.toUpperCase()}
      </span>
    ) : part.toUpperCase()
  );
}

// --- MAIN ---
export default function HeroSection() {
  const [slideCount, setSlideCount] = useState(0);
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideCount((prev) => prev + 1);
    }, 6000);

    const headingInterval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(headingInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] overflow-hidden font-extrabold">

      <div className="relative z-10 mx-auto max-w-[90rem] min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 px-6 pt-28 pb-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* HEADING */}
          <div className="h-[160px] md:h-[200px] mb-20">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headingIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase"
              >
                {formatHeading(headings[headingIndex])}
              </motion.h1>
            </AnimatePresence>
          </div>

        

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:flex gap-2 sm:gap-4 w-full max-w-md">
  
  <Link
    href="#"
    className="text-center px-4 sm:px-8 py-2.5 sm:py-3 bg-black text-white text-[9px] sm:text-[11px] font-bold uppercase tracking-wide sm:tracking-widest rounded-full hover:bg-[#EA3446] transition-all shadow-md sm:shadow-lg shadow-black/10"
  >
    Get Started
  </Link>

  <Link
    href="#"
    className="text-center px-4 sm:px-8 py-2.5 sm:py-3 border border-black/10 bg-white/50 backdrop-blur-sm text-black text-[9px] sm:text-[11px] font-bold uppercase tracking-wide sm:tracking-widest rounded-full hover:border-[#FF2D2D] transition-all"
  >
    Documentation
  </Link>

</div>

          {/* STATS */}
        <div className="mt-5 sm:mt-5 mb-5 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xl ">
  {stats.map((stat) => (
    <div
      key={stat.label}
      className="group  p-2 sm:p-4 bg-white/60 border border-black/5 rounded-lg sm:rounded-2xl backdrop-blur-md hover:border-[#FF2D2D]/40 transition-all text-left"
    >
      <p className="text-[8px] sm:text-[10px] uppercase tracking-wide text-black/40 flex items-center gap-1">
        {stat.active && (
          <span className="h-1 w-1 rounded-full bg-[#FF2D2D] animate-ping" />
        )}
        {stat.label}
      </p>

      <p className="text-2xl sm:text-4xl font-extrabold mt-1 text-black group-hover:text-[#FF2D2D] transition-colors">
        <CountUp
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          decimals={stat.value % 1 !== 0 ? 1 : 0}
        />
      </p>
    </div>
  ))}
</div>
        </motion.div>

        {/* RIGHT */}
        <div className="flex justify-end w-full pr-5">
          <HeroImage slides={slides} slideCount={slideCount} />
        </div>

      </div>

      {/* 🔥 PERFECT MARQUEE */}
      <div className="absolute bottom-0 w-full py-4 sm z-10 overflow-hidden">

        <PartnerMarquee/>

      </div>

      {/* STYLES */}
      <style jsx global>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 30s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}