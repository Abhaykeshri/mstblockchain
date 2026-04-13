"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  {
    src: "/assets/logo-bridgekey.svg",
    title: "Bridge Key",
    description:
      "Everything You Need in One Wallet. Bridgekey combines powerful features with elegant simplicity.",
    stats: { users: "85K+", downloads: "120K", reliability: "99.9%" },
    link: "https://bridgekey.io/",
  },
  {
    src: "/assets/logo-buddy.svg",
    title: "MST Buddy",
    description:
      "AI-powered assistant platform acting as a 24/7 smart guide for the MST ecosystem.",
    stats: { queries: "1.2M", accuracy: "98%", active_nodes: "9+" },
    link: "https://buddy.mstblockchain.com/",
  },
  {
    src: "/assets/logo-masterstroke.svg",
    title: "MST Academy",
    description:
      "Educational gateway for blockchain mastery, certification, and Web3 developer tours.",
    stats: { students: "12K+", courses: "45", certifications: "8.5K" },
    link: "/academy",
  },
];

const LogoFlipSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight))
      );

      const totalFlips = logos.length - 1;
      const rawIndex = scrollProgress * totalFlips;

      setActiveIndex(
        Math.min(logos.length - 1, Math.max(0, Math.round(rawIndex)))
      );
      setRotateY(rawIndex * 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = logos[activeIndex];

  // safer split
  const words = current.title.split(" ");
  const firstWord = words[0] || "";
  const secondWord = words.slice(1).join(" ") || "";

  return (
    <div
      ref={containerRef}
      style={{
        height: `${logos.length * 100}vh`,
        background: `
          radial-gradient(circle at top left, rgba(247, 244, 244, 0.25), transparent 40%),
          radial-gradient(circle at top right, rgba(250, 163, 163, 0.25), transparent 40%),
          radial-gradient(circle at bottom left, rgba(252, 185, 185, 0.25), transparent 40%),
          radial-gradient(circle at bottom right, rgba(242, 186, 186, 0.25), transparent 40%),
          white
        `,
      }}
      className="relative text-black"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* LEFT → 3D LOGO */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                className="w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center"
                animate={{ rotateY }}
                transition={{ type: "spring", damping: 20 }}
              >
                <img
                  src={current.src}
                  alt={current.title}
                  className="max-w-[70%] object-contain"
                  style={{
                    transform:
                      Math.floor(rotateY / 180) % 2 === 0
                        ? ""
                        : "scaleX(-1)",
                  }}
                />
              </motion.div>
            </div>

            {/* RIGHT → CONTENT */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* TITLE */}
                  <h1 className="text-5xl font-black uppercase mb-4">
                    <span className="bg-black text-white px-2 mr-2">
                      {firstWord}
                    </span>
                    <span className="text-red-600">{secondWord}</span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="text-xl text-gray-600 mb-8 max-w-md">
                    {current.description}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {Object.entries(current.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="border-l-2 border-red-600 pl-4"
                      >
                        <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                          {key.replace("_", " ")}
                        </p>
                        <p className="text-2xl font-black text-black">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* NAV DOTS */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {logos.map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-red-600 w-8"
                        : "bg-gray-300 w-3"
                    }`}
                  />
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-10 flex justify-center lg:justify-start">
                <a
                  href={current.link}
                  className="px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all duration-300 inline-block shadow-lg shadow-red-600/20 hover:shadow-black/30"
                >
                  Learn More
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoFlipSection;