'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import HeroImage from './HeroImage';

// --- DATA ---
const slides = [
  { src: '/img1.webp', alt: 'Institutional Web3' },
  { src: '/img3.jpeg', alt: 'Data Visualization' },
  { src: '/img2.jpg', alt: 'Decentralized Network' }
];

const stats = [
  { label: 'Finality', value: 400, suffix: 'ms', active: true },
  { label: 'Active Nodes', value: 12400, suffix: '+', active: false },
  { label: 'Total Value', value: 4.2, prefix: '$', suffix: 'B+', active: false }
];

const partners = ['CORE_SYS', 'N_NODES', 'QUANT_LAYER', 'HEX_DATA', 'STRUC_X'];

// --- COUNTUP COMPONENT ---
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

// --- MAIN COMPONENT ---
export default function HeroSection() {
  const [slideCount, setSlideCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setSlideCount((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] overflow-hidden font-[var(--font-inter)]">

      {/* BACKGROUND */}
      

      <div className="relative z-10 mx-auto max-w-[90rem] min-h-screen grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 px-6 pt-28 pb-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h1 className="font-[var(--font-space-grotesk)] text-5xl md:text-7xl font-extrabold uppercase leading-[0.85] tracking-tight text-black">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] via-red-600 to-rose-500 animate-gradient-x py-1">
              The Web3
            </span> <br />
            <span className="text-4xl md:text-5xl text-black/80">
              Settlement Layer.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-black/60 font-medium border-l-2 border-[#FF2D2D]/30 pl-4 bg-gradient-to-r from-[#FF2D2D]/5 to-transparent py-2 text-left">
            A performance-first blockchain stack engineered for institutional trust and global finality. Ship with deterministic speed and resilient security.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#" className="px-8 py-3 bg-black text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-[#EA3446] transition-all shadow-lg shadow-black/10">
              Launch App
            </Link>

            <Link href="#" className="px-8 py-3 border border-black/10 bg-white/50 backdrop-blur-sm text-black text-[11px] font-bold uppercase tracking-widest rounded-full hover:border-[#FF2D2D] transition-all">
              Documentation
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group p-4 bg-white/60 border border-black/5 rounded-2xl backdrop-blur-md hover:border-[#FF2D2D]/40 transition-all text-left"
              >
                <p className="text-[10px] uppercase tracking-widest text-black/40 flex items-center gap-2">
                  {stat.active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF2D2D] animate-ping" />
                  )}
                  {stat.label}
                </p>

                <p className="text-2xl font-bold mt-1 text-black font-[var(--font-space-grotesk)] group-hover:text-[#FF2D2D] transition-colors">
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

        {/* RIGHT SIDE (NOW COMPONENT) */}
        <HeroImage slides={slides} slideCount={slideCount} />

      </div>

      {/* PARTNERS */}
      <div className="absolute bottom-0 w-full py-8 border-t border-black/5 bg-white/50 backdrop-blur-sm z-10">
        <div className="flex overflow-hidden">
          <div className="flex gap-20 animate-marquee whitespace-nowrap px-10">
            {[...partners, ...partners].map((tag, i) => (
              <span
                key={i}
                className="text-sm font-bold tracking-[0.3em] text-black/20 uppercase hover:text-[#FF2D2D] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-shimmer 4s linear infinite;
        }

        @keyframes gradient-shimmer {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}