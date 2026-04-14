'use client';

import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function AmbassadorPage() {
  return (
    <div className="bg-[#fffaff] text-gray-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">

        {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity }} className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] border border-red-200/40 rounded-full" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 150, repeat: Infinity }} className="absolute top-1/4 -right-1/4 w-[70%] h-[70%] border border-pink-200/40 rounded-full border-dashed" />
        </div> */}

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black">
            Become the Voice of MST in <br />
            <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
              Your World
            </span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeInUp}
            className="mt-8 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            The MST Community brings together developers, entrepreneurs, researchers,
            and everyday users who believe in building a decentralized, real-world ready
            blockchain. Whether you’re here to experiment, launch, or simply learn—
            you’ll find your place here.
          </motion.p>
        </div>
      </section>

      {/* ================= CITY ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible">
            <h2 className="text-4xl font-black mb-6">City Ambassadors</h2>

            <div className="flex gap-3 mb-6">
              <div className="w-1 h-8 bg-red-500"></div>
              <p className="text-xl font-semibold">
                Lead your city into the future of blockchain.
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Host meetups, workshops, and events that introduce MST to local developers, businesses, and enthusiasts.
            </p>

            <p className="text-gray-600 mb-8">
              <span className="text-red-600 font-semibold">You’ll Get:</span> Recognition as a City Ambassador,
              event support, networking with global leaders, and early access to MST updates.
            </p>

            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700">
              Apply as a City Ambassador →
            </button>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 opacity-20 blur-2xl rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CAMPUS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 opacity-20 blur-2xl rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" />
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible">
            <h2 className="text-4xl font-black mb-6">Campus Ambassadors</h2>

            <div className="flex gap-3 mb-6">
              <div className="w-1 h-8 bg-red-500"></div>
              <p className="text-xl font-semibold">
                Bring MST to your university.
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Start a student club, host hackathons, and teach your peers how to build on MST Testnet.
            </p>

            <p className="text-gray-600 mb-8">
              <span className="text-red-600 font-semibold">You’ll Get:</span> Official certificate,
              mentorship opportunities, access to grants, and exclusive learning sessions.
            </p>

            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700">
              Apply as a Campus Ambassador →
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= INDUSTRY ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible">
            <h2 className="text-4xl font-black mb-6">Industry Ambassadors</h2>

            <div className="flex gap-3 mb-6">
              <div className="w-1 h-8 bg-red-500"></div>
              <p className="text-xl font-semibold">
                Bring MST to your industry.
              </p>
            </div>

            <p className="text-gray-600 mb-6">
              Start a student club, host hackathons, and teach your peers how to build on MST Testnet.
            </p>

            <p className="text-gray-600 mb-8">
              <span className="text-red-600 font-semibold">You’ll Get:</span> Official certificate, mentorship opportunities, access to grants, and exclusive learning sessions.
            </p>

            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700">
              Apply as an Industry Ambassador →
            </button>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-500 opacity-20 blur-2xl rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800" />
            </div>
          </motion.div>

        </div>
      </section>

    

    {/* ================= WHY JOIN ================= */}
<section className="pt-10 pb-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-5xl font-black mb-10">
      Why Join
    </h2>

    {/* CARDS */}
    <div className="grid lg:grid-cols-4 gap-8">

      {[
        {
          text: "Be a recognized leader in your community.",
          img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
        },
        {
          text: "Gain access to grants, resources, and mentorship.",
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800"
        },
        {
          text: "Connect with a global network of builders and innovators.",
          img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800"
        },
        {
          text: "Shape the future of real-world blockchain adoption.",
          img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
        }
      ].map((item, i) => (

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="h-[420px] rounded-[2rem] border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition"
        >

          {/* TOP GRADIENT */}
          <div className="h-[60%] flex items-center justify-center text-center px-6 
                          bg-gradient-to-b from-red-600 via-red-700 to-black">

            <p className="text-white font-semibold text-lg leading-relaxed">
              {item.text}
            </p>

          </div>

          {/* IMAGE */}
          <div className="h-[40%]">
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt="why join"
            />
          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

{/* ================= HOW IT WORKS ================= */}
<section className="pt-10 pb-16 bg-[#fffaff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-5xl font-black mb-16">
      How It Works
    </h2>

    {/*CONNECT LINE */}
    <div className="relative">

      <div className="absolute top-8 left-0 w-full h-[3px] bg-gradient-to-r from-red-400 via-red-600 to-pink-500 rounded-full"></div>

      {/* STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

        {[
          "Submit your application through the MST Community Hub.",
          "Select your track: City, Campus, or Industry.",
          "Get onboarded with exclusive training and resources.",
          "Start leading, building, and creating impact."
        ].map((text, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-2xl shadow-md p-6 pt-10 relative text-center hover:shadow-xl transition"
          >

            {/* DOT */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-lg"></div>

            {/* STEP NUMBER */}
            <div className="text-red-600 font-bold text-lg mb-3">
              Step {i + 1}
            </div>

            {/* TEXT */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {text}
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>
</section>
    </div>
  );
}