'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  FiShield, FiCpu, FiLayers, FiGlobe, 
  FiArrowRight, FiCheckCircle, FiLinkedin, FiTwitter, FiCode 
} from "react-icons/fi";

/** * DATA CONFIGURATION
 */
const stats = [
  { label: "Validators", value: "120+" },
  { label: "TPS", value: "100k+" },
  { label: "Global Nodes", value: "15" },
  { label: "Partners", value: "50+" },
];

const team = [
  { 
    name: "Marcus Thorne", 
    role: "Lead Developer", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&fit=crop",
    linkedin: "#"
  },
  { 
    name: "Sarah Chen", 
    role: "Blockchain Architect", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&fit=crop",
    linkedin: "#"
  },
  { 
    name: "David Varkey", 
    role: "Smart Contract Dev", 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&fit=crop",
    linkedin: "#"
  },
  { 
    name: "Elena Rodriguez", 
    role: "UI/UX Lead", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&fit=crop",
    linkedin: "#"
  },
  { 
    name: "Julian Smith", 
    role: "Community Manager", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&fit=crop",
    linkedin: "#"
  },
];

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "High-performance ecosystem that scales with global demand without compromising speed.",
    icon: <FiCpu className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Secure Transactions",
    desc: "Advanced multi-layered cryptography ensuring military-grade safety for every asset.",
    icon: <FiShield className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Developer Friendly",
    desc: "Comprehensive SDKs and documentation for building complex dApps in record time.",
    icon: <FiLayers className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Decentralized World",
    desc: "A truly permissionless environment for the next wave of DeFi and NFT innovation.",
    icon: <FiGlobe className="text-red-500 w-6 h-6" />,
  },
];

/** * ANIMATION VARIANTS
 */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AboutUs = () => {
  return (
    <div className="bg-[#fffaff] text-gray-900 selection:bg-red-100 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Animated Background Orbits */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] border border-red-200/50 rounded-full"
          />
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
              POWERING THE DECENTRALIZED FUTURE
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-pink-500">MST Blockchain</span>
            </h1>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed max-w-xl">
              Redefining digital systems with speed, trust, and decentralization.
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
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="px-6 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white/90 backdrop-blur-2xl border border-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200/50">
          {stats.map((item, i) => (
            <div key={i} className="text-center lg:border-r last:border-0 border-gray-100 py-2">
              <h3 className="text-4xl font-black text-gray-900">{item.value}</h3>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "Our Mission", 
              text: "To democratize finance by creating a global, permissionless infrastructure that is lightning-fast and cost-effective.",
              icon: <FiCode className="w-10 h-10 text-red-500" />
            },
            { 
              title: "Our Vision", 
              text: "A world where digital ownership is absolute, and technology empowers individuals over centralized entities.",
              icon: <FiGlobe className="w-10 h-10 text-red-500" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-12 rounded-[3rem] bg-white border border-gray-100 hover:border-red-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FEATURES (CORE INFRASTRUCTURE) */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Core <span className="text-red-600">Infrastructure</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Designed for builders who require high-throughput and absolute reliability.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE ARCHITECTS (TEAM) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Meet the <br /><span className="text-red-600">Architects</span></h2>
              <p className="text-gray-500 text-xl font-medium">The world-class team driving MST development.</p>
            </div>
            <button className="px-8 py-3 text-red-600 font-bold border-2 border-red-50 rounded-xl hover:bg-red-50 transition-colors">
              Careers at MST
            </button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="relative mb-6 aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <FiLinkedin className="text-white hover:text-red-400" />
                      <FiTwitter className="text-white hover:text-red-400" />
                    </div>
                  </div>
                </div>
                <h4 className="font-black text-xl text-gray-900">{member.name}</h4>
                <p className="text-sm font-bold text-red-500 uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MST SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 bg-gradient-to-br from-white to-red-50/30 border border-gray-100 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-red-100/20">
          <h2 className="text-4xl font-black mb-12 text-center">Why Builders Choose <span className="text-red-600">MST</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Lightning-fast (100k+ TPS)", "EVM Compatible ecosystem",
              "Near-zero gas fees per tx", "Military-grade encryption",
              "24/7 Developer concierge", "Active global community"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-1 rounded-full">
                   <FiCheckCircle className="text-green-600" />
                </div>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gray-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[150px] opacity-20 -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-10 -ml-32 -mb-32" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Build <br />the Future?</h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of developers and visionaries building on the world's most scalable blockchain protocol.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-red-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-red-500 transition-all shadow-xl shadow-red-900/40 text-lg">
                Join our Telegram 
              </button>
              <button className="bg-white/5 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md text-lg">
                Developer Discord
              </button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutUs;