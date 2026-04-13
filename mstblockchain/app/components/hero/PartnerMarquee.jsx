'use client';

import { motion } from 'framer-motion';

const partners = [
  "/Wagmi tribe.png",
  "/W3S (1).png",
  "/Wagmi tribe.png",
  "/Wizz.png",
  "/Xender Lab (1).png",
  "/Orbit logo.png",
  "/Dehta labs.png",
  "/fireblocks-logo.png",
  "/hero-visual-1.svg",
];

export default function PartnerMarquee() {
  return (
    <section className="">
      
      <div className="relative w-full overflow-hidden">
        
        <motion.div
          className="flex w-max gap-6 sm:gap-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: 'linear',
          }}
        >
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[90px] sm:min-w-[120px]"
            >
              <img
  src={logo}
  alt="partner"
  className="
    h-6 sm:h-10 
    object-contain 
    opacity-80 hover:opacity-100
    scale-95 hover:scale-105
    transition duration-300
  "
/>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}