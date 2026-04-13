"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/navbar/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TransparencyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900 overflow-hidden">

        {/*  HERO */}
        <section className="pt-44 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transparency You Can Verify — Live on MST Chain
            </h1>
            <p className="text-gray-600 text-lg">
              Every coin, every wallet, every burn — verifiable on-chain in real time.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative h-80 mt-4 md:mt-6 border border-red-500/20 rounded-xl overflow-hidden bg-white"
          >
            <Image
              src="/img2.jpg"
              alt="Transparency hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </section>

        {/*  COIN SUPPLY */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            <h3 className="text-red-500 mb-4">Coin Supply Overview</h3>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold">
                Building Trust Through Transparent Coin Supply
              </h2>

              <p className="text-gray-600">
                The MST Blockchain provides a detailed breakdown of coin distribution across rewards,
                operations, and reserves. All data is verifiable on-chain.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Total Supply after latest burn",
                  value: "8,401,387,459 MSTC",
                },
                {
                  title: "Most Recent Burn",
                  value: "41,996,612,502 MSTC",
                },
                {
                  title: "Burn Address",
                  value: "0x000000000000000000000000000000000000",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  className="p-6 rounded-xl bg-white border border-red-500/20"
                >
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.value}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/*  WALLETS */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-red-500 mb-4">Official Wallets</h3>
            <h2 className="text-4xl md:text-5xl mb-8">
              Every Major Wallet — Public & Trackable
            </h2>

            <div className="p-6 bg-white border border-red-500/20 rounded-xl">
              <h4 className="mb-2 font-semibold">Master Wallet</h4>
              <p className="text-gray-600 break-all">
                0xA93c8f6922159954E26C6C6011d3ED7dd166E25D
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {["Reward Wallet", "Operational Wallet"].map((wallet, i) => (
              <div
                key={i}
                className="p-6 bg-white border border-red-500/20 rounded-xl"
              >
                <h4 className="mb-2 font-semibold">{wallet}</h4>
                <p className="text-gray-600 break-all">
                  0x7a4d434E68E018e3679F64DeA4F0f02E20C6809
                </p>
              </div>
            ))}
          </div>
        </section>

        {/*  NODE TABLE */}
        <section className="py-24 px-6 bg-white">
          <h2 className="text-center text-4xl mb-12 text-gray-900">
            Live Node Status Table
          </h2>

          <div className="overflow-x-auto max-w-7xl mx-auto">
            <table className="w-full border border-red-500/20 bg-white">
              <thead className="bg-red-500/5">
                <tr>
                  <th className="p-4 text-left">Node</th>
                  <th className="p-4 text-left">Address</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Maintained By</th>
                </tr>
              </thead>

              <tbody>
                {[1,2,3,4].map((n) => (
                  <tr key={n} className="border-t border-red-500/10">
                    <td className="p-4">Validator Node {n}</td>
                    <td className="p-4">0x123...abc</td>
                    <td className="p-4 text-green-600">Active</td>
                    <td className="p-4">MST Blockchain</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/*  PRICING */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-white">
          <div>
            <h3 className="text-red-500 mb-4">Transparent Node Pricing</h3>
            <h2 className="text-4xl md:text-5xl mb-6">
              Validator Node Pricing Transparency
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>• Fixed and predictable pricing</li>
              <li>• Auto increment based on usage</li>
              <li>• No manual manipulation</li>
              <li>• Fully auditable</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-red-500/20 bg-white">
              <thead className="bg-red-500/5">
                <tr>
                  <th className="p-3 text-left">Node</th>
                  <th className="p-3 text-left">Start</th>
                  <th className="p-3 text-left">End</th>
                </tr>
              </thead>

              <tbody>
                {[1,2,3,4,5].map((n) => (
                  <tr key={n} className="border-t border-red-500/10">
                    <td className="p-3">Validator Node {n}</td>
                    <td className="p-3">₹1000</td>
                    <td className="p-3">₹2000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/*  BURN */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white">
          <div>
            <h3 className="text-red-500 mb-4">Burn Events</h3>
            <h2 className="text-4xl md:text-5xl mb-6">
              Documented Coin Burns
            </h2>

            <p className="text-gray-600 mb-6">
              MST Chain permanently removes coins via burn events to maintain a healthy economy.
            </p>

            <div className="p-6 border border-red-500/20 rounded-xl bg-white">
              Burn Address: 0x0000000000000000000000000000000000001004
            </div>
          </div>

          <div className="relative h-80 bg-white border border-red-500/20 rounded-xl overflow-hidden">
            <Image
              src="/img3.jpeg"
              alt="Documented coin burns"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/*  AUDIT */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white">
          <div className="relative h-80 bg-white border border-red-500/20 rounded-xl overflow-hidden">
            <Image
              src="/img2.jpg"
              alt="Chain audit by SECURR"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-red-500 mb-4">Compliance & Audits</h3>
            <h2 className="text-4xl md:text-5xl mb-6">
              Chain Audit by SECURR
            </h2>

            <p className="text-gray-600 mb-6">
              MST Chain has undergone independent audits for security and stability.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600">
                Download Report
              </button>
              <button className="px-6 py-3 border border-red-500 rounded-lg">
                View KYC Policy
              </button>
            </div>
          </div>
        </section>

        {/*  CTA */}
        <section className="py-28 text-center bg-white">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Verify Everything Yourself
          </h2>

          <p className="text-gray-600 mb-8">
            Check all data directly on-chain using MST Explorer.
          </p>

          <button className="px-8 py-3 bg-red-500 rounded-lg hover:bg-red-600">
            Open MST Explorer
          </button>
        </section>

      </main>
    </>
  );
}