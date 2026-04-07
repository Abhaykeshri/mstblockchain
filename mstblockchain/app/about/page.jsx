"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";

const features = [
  {
    title: "Scalable Infrastructure",
    desc: "High-performance ecosystem that is fast",
  },
  {
    title: "Secure Transactions",
    desc: "Advanced cryptography ensuring safety",
  },
  {
    title: "Developer Friendly",
    desc: "Tools for building dApps easily",
  },
  {
    title: "Decentralized Ecosystem",
    desc: "Supports DeFi, NFTs, smart contracts",
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

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-white via-red-50 to-pink-100 text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex items-center relative ">
        {/* Orbital Background Elements */}
        {/* Orbit 1: Inner Red Ring */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span></span>
            <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
          </motion.div>
        </motion.div>

        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          <div className="absolute w-2 h-2 bg-accent rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />

          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
          </motion.div>
        </motion.div>

        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
        >
          {/* Orbital Text Node */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
          </motion.div>
        </motion.div>

        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
        >
          <div className="w-16 h-16 border border-red-500/20 rounded-full" />
          <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              About <span className="text-red-600">MST Blockchain</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
              Building the future of decentralized technology with speed,
              security, and scalability.
            </p>

            <p className="mt-4 text-gray-500 max-w-lg leading-relaxed">
              MST Blockchain is a next-generation Web3 infrastructure platform
              designed to empower developers, businesses and users worldwide.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-red-300/50 hover:scale-105 hover:bg-red-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-red-400 text-red-500 px-6 py-3 rounded-xl hover:bg-red-50 hover:scale-105 transition-all duration-300">
                Explore Docs
              </button>
            </div>
          </div>

          <div className="h-72 md:h-[400px] bg-gradient-to-r from-red-200 to-pink-200 rounded-3xl shadow-xl shadow-red-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1669060475569-a7e0c78bce30?q=80&w=1032&auto=format&fit=crop"
              alt="blockchain"
              className="w-full h-full object-center rounded-3xl transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20">
        
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10">
            Our <span className="text-red-600">Mission</span> & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {["Mission", "Vision"].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-red-600 mb-2">
                  Our {item}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item === "Mission"
                    ? "To create a decentralized ecosystem that is fast, secure, and accessible for everyone."
                    : "To become a global leader in blockchain innovation, powering the next generation of digital economies."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-12">
            What <span className="text-red-600">We Do</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-bold text-red-600">
                {item.value}
              </h3>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 text-center">
        
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-12">
            Our <span className="text-red-600">Team</span>
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Why Choose <span className="text-red-600">MST</span>
          </h2>

          <ul className="space-y-4 text-gray-600">
            {[
              "Lightning-fast transactions",
              "Low gas fees",
              "Enterprise-grade security",
              "Growing ecosystem",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <span className="text-green-500 text-lg">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-red-500 text-white p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold">
              Join the Future of Blockchain
            </h2>
            <p className="mt-4 text-red-100">
              Be part of the decentralized revolution.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white text-red-500 px-6 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white px-6 py-3 rounded-xl hover:bg-red-400 hover:scale-105 transition-all duration-300">
                Explore Docs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;