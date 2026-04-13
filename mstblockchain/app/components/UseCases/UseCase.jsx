"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useCases = [
  { id: "01", title: "Supply Chain", desc: "Track goods across global networks with immutable records.", size: "tall", icon: "chain" },
  { id: "02", title: "Real Estate", desc: "Fractional ownership of property assets via tokens.", size: "medium", icon: "building" },
  { id: "03", title: "DeFi Liquidity", desc: "Automated market-making and decentralized pools.", size: "small", icon: "droplet" },
  { id: "04", title: "Healthcare", desc: "Patient data privacy with encrypted access.", size: "medium", icon: "shield" },
  { id: "05", title: "Metaverse", desc: "True digital ownership of in-game assets.", size: "tall", icon: "gamepad" },
  { id: "06", title: "Identity", desc: "Self-sovereign verification without intermediaries.", size: "small", icon: "fingerprint" },
  { id: "07", title: "Yield Aggr.", desc: "Optimize returns across protocols automatically.", size: "medium", icon: "layers" },
  { id: "08", title: "Carbon", desc: "Transparent carbon offset trading and verification.", size: "tall", icon: "leaf" },
  { id: "09", title: "Payments", desc: "Instant, low-cost international settlements.", size: "small", icon: "globe" },
  { id: "10", title: "Asset Mgmt", desc: "On-chain portfolio tracking and rebalancing.", size: "medium", icon: "briefcase" },
  { id: "11", title: "Oracles", desc: "Reliable off-chain data feeds for contracts.", size: "small", icon: "signal" },
  { id: "12", title: "Governance", desc: "Decentralized voting and treasury management.", size: "tall", icon: "vote" },
  { id: "13", title: "Privacy", desc: "Zero-knowledge solutions for transactions.", size: "medium", icon: "lock" },
  { id: "14", title: "Escrow", desc: "Trustless, automated escrow via code.", size: "small", icon: "handshake" },
  { id: "15", title: "Insurance", desc: "Parametric insurance with automatic payouts.", size: "medium", icon: "umbrella" },
  { id: "16", title: "NFTs", desc: "Create, trade, and curate digital collectibles.", size: "tall", icon: "diamond" },
  { id: "17", title: "Staking", desc: "Earn rewards by securing PoS networks.", size: "small", icon: "coins" },
  { id: "18", title: "Vesting", desc: "Programmable unlock schedules for investors.", size: "medium", icon: "clock" },
  { id: "19", title: "ZK Proofs", desc: "Scalable, private computation verification.", size: "tall", icon: "eye" },
  { id: "20", title: "Lending", desc: "P2P lending with algorithmic rates.", size: "medium", icon: "percent" },
];

const icons = {
  chain: <path d="M10 6H6a4 4 0 0 0 0 8h4M14 6h4a4 4 0 0 1 0 8h-4M8 12h8" />,
  building: <><path d="M3 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M15 21V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v12" /><path d="M7 7h2M7 11h2M7 15h2" /></>,
  droplet: <path d="M12 2c0 0-7 7.5-7 12a7 7 0 0 0 14 0C19 9.5 12 2 12 2z" />,
  shield: <path d="M12 2l7 4v5c0 5-3.5 9.7-7 11-3.5-1.3-7-6-7-11V6l7-4z" />,
  gamepad: <><path d="M6 11h4M8 9v4" /><circle cx="15" cy="10" r="0.5" fill="currentColor" /><circle cx="17" cy="12" r="0.5" fill="currentColor" /><path d="M2 12a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" /></>,
  fingerprint: <><path d="M12 2a10 10 0 0 1 7 17" /><path d="M12 6a6 6 0 0 1 4.5 10" /><path d="M12 10a2 2 0 0 1 1.5 3.3" /><path d="M5 19a10 10 0 0 1-1-4" /><path d="M7.5 15A6 6 0 0 1 6 12" /></>,
  layers: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /></>,
  leaf: <path d="M17 8C8 10 5.9 16.17 3.82 21.34M17 8A5 5 0 0 0 12 3c-5 0-8 4-8 8" />,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 12h20" /></>,
  signal: <><path d="M5 18v-4" /><path d="M9 18v-8" /><path d="M13 18V6" /><path d="M17 18v-10" /><path d="M21 18v-6" /></>,
  vote: <><path d="M20 6L9 17l-5-5" /><rect x="2" y="2" width="20" height="20" rx="2" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  handshake: <><path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3 0L4 16" /><path d="M20 8l-3-3-5.5 5.5" /><path d="M4 8l3-3 5.5 5.5" /><path d="M13 17l1.5 1.5a2.12 2.12 0 0 0 3 0L20 16" /></>,
  umbrella: <path d="M12 2v20M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12h20z" />,
  diamond: <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />,
  coins: <><circle cx="8" cy="8" r="6" /><path d="M18.09 10.37A6 6 0 1 1 10.34 18" /><path d="M7 6h1v4" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
  percent: <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>,
};

const sizeMap = {
  small: "h-[120px]",
  medium: "h-[180px]",
  tall: "h-[240px]",
};

const Card = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    const slug = item.title.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
    router.push(`/usecase-pages/${slug}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group cursor-pointer overflow-hidden rounded-[2rem] border border-black
        p-7 flex flex-col justify-end transition-all duration-500
        ${sizeMap[item.size]}
        hover:bg-red-600 hover:border-red-600 hover:shadow-2xl hover:shadow-red-500/30
        ${isHovered ? "bg-red-600" : "bg-white/60 backdrop-blur-xl"}
      `}
      style={{
        breakInside: "avoid",
        ...(Number(item.id) >= 1 && Number(item.id) <= 19 && {
                    backgroundImage: isHovered ? 'none' : `url('/usecaselogos/${Number(item.id)}.png')`,
                    backgroundSize: "70px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                      opacity: 0.5,
                    
        })
      }}
    >
      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/0 group-hover:bg-white/10 blur-3xl transition-all duration-700" />

      {/* Small icon */}
      <div className={`absolute top-7 right-7 transition-all duration-500 ${isHovered ? "text-white scale-110 -rotate-12" : "text-zinc-300"}`}>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {icons[item.icon]}
        </svg>
      </div>

      <div className="relative z-10">
        <div className="relative z-10 flex flex-col h-full justify-end">
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-[12px] pt-3 text-red-50"
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>
          <h3 className={`font-black text-base lg:text-lg uppercase transition-colors mt-2 ${isHovered ? "text-white" : "text-zinc-800"}`}>
            {item.title}
          </h3>
        </div>
      </div>  
    </motion.div>
  );
};

const UseCases = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-6xl font-black mb-20">
          Use <span className="text-red-600">case</span>
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-4 xl:columns-5 gap-6 space-y-6">
          {useCases.map((item, i) => (
            <Card key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;