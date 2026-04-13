"use client";
import React from "react";
import { Send, MessageCircle, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white pt-24">
      <footer className="relative bg-gradient-to-br from-white via-[#fafafa] to-[#fff5f5] pt-20 pb-10 rounded-t-[60px] md:rounded-t-[100px] border-t border-red-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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