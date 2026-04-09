"use client";
import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function FormModal({ open, setOpen, formType }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-4xl bg-white rounded-2xl border border-red-500/20 shadow-[0_0_40px_rgba(255,0,0,0.2)] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* HEADER */}
          <div className="bg-black p-6 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Get in Touch About On-Chain Certificate
              </h2>
              <p className="text-sm text-white/80">
                Tell us about your project and we’ll show you how MST can help.
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* BODY */}
          <div className="p-6 rounded-2xl bg-white shadow-[0_0_30px_rgba(255,0,0,0.08)] max-h-[80vh] overflow-y-auto">

            {/* WHAT WE OFFER */}
            <div>
              <h3 className="mb-4 font-semibold text-black">
                What We Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Technical Consultation",
                    desc: "Free 60-minute session with our blockchain architects to map your case to MST protocols",
                    icon: (
                      <svg className="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8zm-9 4v.01" /></svg>
                    )
                  },
                  {
                    title: "Live Product Demo",
                    desc: "See MST verification, smart contracts, and SARAL integration working live for your specific industry.",
                    icon: (
                      <svg className="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M10 14l5-3-5-3v6z" /></svg>
                    )
                  },
                  {
                    title: "Proof of Concept",
                    desc: "as we build a working PoC for your case on MST blockchain - so you can validate before committing",
                    icon: (
                      <svg className="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
                    )
                  },
                  {
                    title: "Integration Support",
                    desc: "Our WASMify and SARAL Protocol team helps integrate MST into your existing systems with zero disruption",
                    icon: (
                      <svg className="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" /><rect x="3" y="4" width="4" height="16" rx="2" /></svg>
                    )
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-black flex flex-col items-start"
                  >
                    <div className="mb-2 self-start">
                      {React.cloneElement(item.icon, { className: "w-8 h-8 text-red-600" })}
                    </div>
                    <p className="text-black text-sm font-semibold">{item.title}</p>
                    {item.desc && (
                      <p className="text-xs text-gray-600 mt-1 font-semibold">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <form
              action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              <h3 className="font-semibold text-black mb-2 pt-3">Your Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">First Name</label>
                  <input name="entry.111" placeholder="First Name" required className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Last Name</label>
                  <input name="entry.112" placeholder="Last Name" required className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Email</label>
                  <input name="entry.113" placeholder="Email" type="email" required className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Phone Number</label>
                  <input name="entry.114" placeholder="Phone Number" className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Organization</label>
                  <input name="entry.115" placeholder="Organization" className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Role</label>
                  <input name="entry.116" placeholder="Role" className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Enquiry Type</label>
                  <select name="entry.xxx" defaultValue={formType} className="bg-white border border-black text-black rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition">
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Book a Demo">Book a Demo</option>
                    <option value="Talk to Expert">Talk to Expert</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-black font-medium">Solution Area</label>
                  <select name="entry.117" className="bg-white border border-black text-black rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition">
                    <option>On-Chain Certificate</option>
                    <option>NFT Ticketing</option>
                    <option>Tokenized Real Estate</option>
                    <option>Healthcare Records</option>
                    <option>Decentralized Voting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-sm text-black font-medium">Project Type</label>
                  <select name="entry.118" className="bg-white border border-black text-black rounded-lg px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition">
                    <option>General Enquiry</option>
                    <option>Book a Demo</option>
                    <option>Talk to Expert</option>
                    <option>Technical Consultation</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-black font-medium">Tell us about your project</label>
                <textarea
                  name="entry.119"
                  placeholder="Tell us about your project..."
                  className="bg-white border border-black text-black placeholder:text-gray-500 rounded-lg px-3 py-2 h-28 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-lg bg-red-600 hover:bg-black transition text-white hover:text-white font-semibold text-base"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}