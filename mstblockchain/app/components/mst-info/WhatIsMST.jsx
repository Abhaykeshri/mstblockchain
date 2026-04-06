'use client';

import { motion } from 'framer-motion';
import { Blocks, Cpu, Share2 } from 'lucide-react';
import MSTCard from './MSTCard';

const cards = [
  {
    title: 'Protocol',
    description:
      'MST Protocol is a deterministic ledger architecture built for high-assurance execution, transparent state transitions, and institutional-grade settlement reliability.',
    ctaText: 'View Specs',
    href: '#',
    icon: Blocks
  },
  {
    title: 'P1',
    description:
      'P1 is the core execution lane for low-latency transaction ordering, enabling globally distributed participants to coordinate with consistency and speed.',
    ctaText: 'Explore P1',
    href: '#',
    icon: Share2,
    isActive: true
  },
  {
    title: 'P2',
    description:
      'P2 delivers developer infrastructure and modular SDK paths for building secure financial apps, chain-native products, and enterprise automation layers.',
    ctaText: 'Get the SDK',
    href: '#',
    icon: Cpu
  }
];

export default function WhatIsMST() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[-6%] top-[10%] hidden h-[580px] w-[580px] lg:block z-0 opacity-90">
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[0%] -left-[35%] h-[110%] w-[110%] rounded-full border-[0.5px] border-red-300"
        >
          <div className="absolute bottom-[18%] right-[8%] h-[6px] w-[6px] rounded-full bg-red-600 shadow-[0_0_10px_#ff2d2d]" />

          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute left-[10%] top-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"></span></span>
            <span className="whitespace-nowrap text-[9px] font-black tracking-[0.2em] text-red-300">Use Cases</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[60%] -top-[20%] flex h-[140%] w-[140%] items-center justify-center rounded-full border-[0.5px] border-black/10 border-dashed"
        >
          <div className="absolute top-[12%] h-2 w-2 rounded-full bg-accent shadow-[0_0_15px_#ff2d2d]" />

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] flex -translate-y-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/40 p-1 pr-4 backdrop-blur-[2px]"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span></span>
            <span className="whitespace-nowrap text-[10px] font-black tracking-[0.2em] text-red-400">9+ Active Nodes</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[85%] -top-[35%] flex h-[170%] w-[170%] items-center justify-center rounded-full border-[0.5px] border-black/5"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex h-1 w-1 rounded-full bg-black"></span>
            <span className="whitespace-nowrap text-[8px] font-bold tracking-[0.25em] text-red-300">POSA Consensus</span>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-10 -top-5 flex h-24 w-24 items-center justify-center rounded-full border border-red-500 opacity-60"
        >
          <div className="h-16 w-16 rounded-full border border-red-500/20" />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#ff2d2d]" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 py-12 sm:px-5 lg:px-6">
       
        <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-extrabold tracking-[-0.03em] text-black sm:text-5xl md:text-6xl">
          What is MST?
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
          MST Protocol is a decentralized ledger built on the principles of <span className="font-semibold text-accent">mechanical precision</span>, predictable execution, and verifiable trust.
          It is designed as a resilient foundation for modern financial systems, institution-ready applications, and large-scale digital coordination.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.14
              }
            }
          }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <MSTCard
              key={card.title}
              title={card.title}
              description={card.description}
              ctaText={card.ctaText}
              href={card.href}
              icon={card.icon}
              isActive={card.isActive}
            />
          ))}
        </motion.div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-black/15 to-transparent" />
      </div>
    </motion.section>
  );
}
