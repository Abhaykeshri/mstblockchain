"use client";
import React from "react";
import { Send, MessageCircle, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const useCases = [
  "On-Chain Certificate",
  "NFT Ticketing",
  "Tokenized Real Estate",
  "Decentralized Voting",
  "Healthcare Records",
  "Loyalty & Rewards",]
  export default function Footer() {
  return (
    <div className="bg-white pt-24">
      <footer className="relative bg-gradient-to-br from-white via-[#fafafa] to-[#fff5f5] pt-20 pb-10 rounded-t-[60px] md:rounded-t-[100px] border-t border-red-200 overflow-hidden">

        {/* 🔴 Background Glow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-[400px] h-[400px] bg-red-500/20 blur-[120px] top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-red-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
        </div>

        {/* 🛰️ ORBITAL ANIMATIONS (Background Layer) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Orbit 1: Inner Solid Ring */}
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[10%] -left-[20%] w-[100%] h-[120%] border-[0.5px] border-red-500/20 rounded-full hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [-360, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[15%] left-[15%] flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              <span className="text-[9px] font-black tracking-[0.2em] text-red-400/60 uppercase whitespace-nowrap">Use Cases</span>
            </motion.div>
          </motion.div>

          {/* Orbit 2: Middle Dashed Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[20%] -left-[30%] w-[120%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
          >
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/60 backdrop-blur-[2px] rounded-full p-1 border border-black/10"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-500" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-black whitespace-nowrap">9+ Active Nodes</span>
            </motion.div>
          </motion.div>

          {/* Orbit 3: Outer Faint Ring */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[30%] -left-[40%] w-[150%] h-[160%] border-[0.5px] border-black/10 rounded-full hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-[25%] left-[15%] flex items-center gap-2 opacity-40"
            >
              <span className="relative inline-flex rounded-full h-1 w-1 bg-red-400"></span>
              <span className="text-[8px] font-bold tracking-[0.25em] text-red-400 whitespace-nowrap uppercase">POSA Consensus</span>
            </motion.div>
          </motion.div>

          {/* Small floating local elements */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-20 w-24 h-24 border border-red-500/20 rounded-full flex items-center justify-center opacity-40"
          >
            <div className="w-16 h-16 border border-red-500/10 rounded-full" />
            <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            
            {/* BRAND */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/1.png" 
                  alt="MST logo"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <h3 className="text-black font-bold text-lg mb-3">
                MST Protocol
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-[260px]">
                STRUCTURAL PURITY IN DECENTRALIZED ARCHITECTURE. BUILT FOR THE HIGH-PERFORMANCE INTERNET.
              </p>
            </div>


            {/* ECOSYSTEM */}
            <div className="lg:col-span-3">
              <h4 className="text-black font-semibold mb-6">Ecosystem</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="hover:text-red-500 cursor-pointer transition">Build</li>
                <li className="hover:text-red-500 cursor-pointer transition">Validators</li>
                <li className="hover:text-red-500 cursor-pointer transition">Governance</li>
                <li className="hover:text-red-500 cursor-pointer transition">Grants</li>
                <li className="hover:text-red-500 cursor-pointer transition">Events</li>
                <li className="hover:text-red-500 cursor-pointer transition">Openings</li>
              </ul>
            </div>

            {/* USE CASES */}
            <div className="lg:col-span-3">
              <h4 className="text-black font-semibold mb-6">Use Cases</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                {useCases.map((useCase, idx) => (
                  <li key={idx} className="hover:text-red-500 cursor-pointer transition">{useCase}</li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="lg:col-span-3">
              <h4 className="text-black font-semibold mb-6">Resources</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="hover:text-red-500 cursor-pointer transition">Whitepaper</li>
                <li className="hover:text-red-500 cursor-pointer transition">Docs</li>
                <li className="hover:text-red-500 cursor-pointer transition">GitHub</li>
                <li className="hover:text-red-500 cursor-pointer transition">Support</li>
                <li className="hover:text-red-500 cursor-pointer transition">Careers</li>
                <li className="hover:text-red-500 cursor-pointer transition">Sitemap</li>
              </ul>
            </div>

            {/* NEWSLETTER + CONTACT */}
            <div className="lg:col-span-3">
              <h4 className="text-black font-semibold mb-4">Newsletter</h4>

              <div className="relative flex items-center mb-6">
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL"
                  className="w-full bg-white rounded-full py-4 px-6 text-black outline-none placeholder:text-gray-400 border border-red-200 focus:border-red-500 transition shadow-sm"
                />

                <button className="absolute right-1.5 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold text-xs transition-all group shadow-md">
                  SUBMIT
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* CONTACT */}
              <p className="text-gray-600 text-sm mb-4">
                support@mstblockchain.in
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4">
                
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-md">
                  <Send size={18} fill="currentColor" />
                </div>

                <div className="w-10 h-10 rounded-full border border-red-200 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-red-50 transition">
                  <MessageCircle size={18} />
                </div>

                <div className="w-10 h-10 rounded-full border border-red-200 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-red-50 transition">
                  <FaTwitter size={16} />
                </div>

                <div className="w-10 h-10 rounded-full border border-red-200 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-red-50 transition">
                  <FaInstagram size={16} />
                </div>

                <div className="w-10 h-10 rounded-full border border-red-200 flex items-center justify-center text-gray-700 cursor-pointer hover:bg-red-50 transition">
                  <FaLinkedin size={16} />
                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-20 pt-8 border-t border-red-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2024 MST PROTOCOL. ALL RIGHTS RESERVED. STRUCTURAL PURITY IS THE STANDARD.
            </p>

            <div className="flex gap-8 text-xs text-gray-500">
              <span className="hover:text-red-500 cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-red-500 cursor-pointer transition">Terms of Service</span>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}