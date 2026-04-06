"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import logoBridgeKey from "@/public/assets/logo-bridgekey.svg";
import logoBuddy from "@/public/assets/logo-buddy.svg";
import logoMasterstroke from "@/public/assets/logo-masterstroke.svg";

const logos = [
  {
    src: "/assets/logo-bridgekey.svg",
    title: "Bridge Key",
    description:
      "Everything You Need in One Wallet Bridgekey combines powerful features with elegant simplicity to give you complete control over your digital assets",
  },
  {
    src: "/assets/logo-buddy.svg",
    title: "MST Buddy",
    description:
      "is an AI-powered assistant platform that helps users learn and explore the MST Blockchain ecosystem. It acts as a 24/7 smart guide, answering questions, simplifying blockchain concepts, and assisting developers, validators, and beginners in understanding Web3 and MST technology more easily.",
  },
  {
    src: "/assets/logo-masterstroke.svg",
    title: "MST Academy",
    description:
      "Masterstroke Academy appears to be a fragmented name used by several distinct entities, including a blockchain technology educational tour, a nursing exam preparation book series, and a salon & beauty academy.",
  },
];

const LogoFlipSection = () => {
  const containerRef = useRef(null); // ✅ removed TS type
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight)),
      );

      const totalFlips = logos.length - 1;
      const rawIndex = scrollProgress * totalFlips;

      const newIndex = Math.min(
        logos.length - 1,
        Math.max(0, Math.round(rawIndex)),
      );

      setActiveIndex(newIndex);
      setRotateY(rawIndex * 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = logos[activeIndex];
  const showFront = Math.floor(rotateY / 180) % 2 === 0;
  const [firstWord, secondWord] = current.title.split(" ");

  return (
    <div
      ref={containerRef}
      style={{ height: `${logos.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">
              Use Cases
            </span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-2 h-2 bg-accent rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">
              9+ Active Nodes
            </span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">
              POSA Consensus
            </span>
          </motion.div>
        </motion.div>

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* LEFT → 3D LOGO */}
            <div className="w-full lg:w-1/2 flex justify-center perspective-container">
              <div
                className="logo-3d-card logo-3d-shadow w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center rounded-2xl bg-card p-8"
                style={{
                  transform: `rotateY(${rotateY}deg)`,
                }}
              >
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: showFront ? "none" : "scaleX(-1)",
                  }}
                />
              </div>
            </div>

            {/* RIGHT → TEXT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left overflow-hidden wrap-normal  ">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-6">
                <span className="bg-black text-white px-3 py-1 mr-2 align-center inline-block transition-all duration-500">
                  {firstWord}
                </span>
                <span className="text-red-600">{secondWord}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-500">
                {current.description}
              </p>

              {/* DOTS */}
              <div className="flex gap-3 mt-10 justify-center lg:justify-start">
                {logos.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "bg-primary scale-125" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoFlipSection;
