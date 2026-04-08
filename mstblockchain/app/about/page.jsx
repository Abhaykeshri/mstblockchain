"use client";
import React from "react";

import { motion } from "framer-motion";
import { 
  FiShield, FiCpu, FiLayers, FiGlobe, 
  FiArrowRight, FiCheckCircle, FiUsers 
} from "react-icons/fi"; // Assuming react-icons is installed

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "High-performance ecosystem that scales with global demand.",
    icon: <FiCpu className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Secure Transactions",
    desc: "Advanced cryptography ensuring military-grade safety.",
    icon: <FiShield className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Developer Friendly",
    desc: "Comprehensive SDKs for building dApps in minutes.",
    icon: <FiLayers className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Decentralized Ecosystem",
    desc: "A permissionless world for DeFi, NFTs, and more.",
    icon: <FiGlobe className="text-red-500 w-6 h-6" />,
  },
];

const stats = [
  { value: "500K+", label: "Active Wallets" },
  { value: "100K+", label: "Smart Contracts" },
  { value: "300+", label: "dApps Built" },
  { value: "$2B+", label: "Transactions" },
];

const team = [
  { name: "John Doe", role: "Founder & CEO" },
  { name: "Jane Smith", role: "Blockchain Engineer" },
  { name: "Alex Kumar", role: "Product Lead" },
  { name: "Sarah Lee", role: "Marketing Manager" },
  { name: "Lisa Wong", role: "UI/UX Designer" },
];

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const AboutUs = () => {
  return (
    <div className="bg-[#fffaff] text-gray-900 selection:bg-red-100 overflow-x-hidden">
    

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Animated Background Orbits (Keep existing logic, improved opacity) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {/* Orbit 1 */}
            <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] border border-red-200/50 rounded-full"
            />
            {/* Orbit 2 */}
            <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 -right-1/4 w-[70%] h-[70%] border border-pink-200/50 rounded-full border-dashed"
            />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full">
              The Next Frontier
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-500">MST Blockchain</span>
            </h1>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed max-w-xl">
              We aren't just building a network; we're architecting the 
              decentralized operating system of the future.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group bg-red-600 text-white px-8 py-4 rounded-2xl shadow-xl shadow-red-200 hover:bg-red-700 transition-all flex items-center gap-2">
                Get Started <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-gray-200 hover:border-red-400 hover:text-red-600 transition-all bg-white/50 backdrop-blur-md">
                Explore Whitepaper
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-[2.5rem] opacity-20 blur-2xl animate-pulse" />
            <div className="relative h-[450px] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1669060475569-a7e0c78bce30?q=80&w=1032&auto=format&fit=crop"
                alt="blockchain"
                className="w-full h-full object-fit hover:scale-110 transition-transform duration-700 "
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS (Floating Bar) --- */}
      <section className="relative z-20 -mt-12 mb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200/50">
          {stats.map((item, i) => (
            <div key={i} className="text-center md:border-r last:border-0 border-gray-100 px-4">
              <h3 className="text-3xl font-black text-gray-900">{item.value}</h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MISSION & VISION (Split Cards) --- */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {["Mission", "Vision"].map((item, i) => (
              <motion.div
                {...fadeInUp}
                key={i}
                className="group relative p-10 rounded-[2rem] bg-white border border-gray-100 hover:border-red-200 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div key={i} className="absolute top-0 right-0 p-8 opacity-5  group-hover:opacity-10 transition-opacity">
                   <FiGlobe className="w-24 h-24 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-red-500 rounded-full" /> Our {item}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                  {item === "Mission"
                    ? "To create a decentralized ecosystem that is lightning-fast, ultra-secure, and accessible for developers and users globally."
                    : "To become the bedrock of the next generation of digital economies, fostering innovation through absolute decentralization."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT WE DO (Feature Grid) --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Core <span className="text-red-600">Infrastructure</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Enterprise-grade features designed for high-throughput applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="font-extrabold text-xl mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION (Minimalist) --- */}
      <section className="py-24 bg-gradient-to-b from-transparent to-red-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">The <span className="text-red-600">Architects</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} {...fadeInUp} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-3xl mx-auto mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-inner overflow-hidden border-2 border-white">
                    {/* Member image would go here */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                        <FiUsers size={32} />
                    </div>
                </div>
                <h4 className="font-extabold text-gray-900">{member.name}</h4>
                <p className="text-xs font-bold text-red-500 uppercase tracking-tighter">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE (Checklist) --- */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 bg-white border border-gray-100 rounded-[3rem] p-12 shadow-xl shadow-red-100/20">
          <h2 className="text-3xl font-extrabold mb-10 text-center">Why Builders Choose <span className="text-red-600">MST</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Lightning-fast (100k+ TPS)", "Near-zero gas fees",
              "EVM Compatible", "Enterprise-grade security",
              "24/7 Developer Support", "Growing global ecosystem"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-red-50 transition-colors">
                <FiCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Bold) --- */}
      <section className="py-24 px-6">
        <motion.div 
            whileHover={{ scale: 1.01 }}
            className="max-w-7xl mx-auto bg-gray-900 rounded-[3rem] p-16 text-center relative overflow-hidden"
        >
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to build the future?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join 5,000+ developers building on MST Blockchain today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-500 transition-all shadow-xl shadow-red-900/20">
                Launch App
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all backdrop-blur-md">
                Join Discord
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer Placeholder */}
     
    </div>
  );
};

export default AboutUs;