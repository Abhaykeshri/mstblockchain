"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email Us",
    text: "support@mstblockchain.com",
    href: "mailto:support@mstblockchain.com",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Call Us",
    text: "+91 89832 74544",
    href: "tel:+918983274544",
    color: "bg-green-50 text-green-600",
  },
];

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1500));
      setSuccess("Message sent successfully 🚀");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] text-slate-900 font-sans mt-12 overflow-hidden">
      {/* --- ORBITAL BACKGROUND --- */}
      {/* Orbit 1 */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
          <span className="text-[9px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
        </motion.div>
      </motion.div>

      {/* Orbit 2 */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-2 h-2 bg-accent rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-red-200" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
        </motion.div>
      </motion.div>

      {/* Orbit 3 */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
        >
          <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
          <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
        </motion.div>
      </motion.div>

      {/* Floating element */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      {/* --- HERO --- */}
      <section className="pt-20 pb-12 px-6 text-center relative z-10">
        <span className="px-4 py-1 text-sm font-semibold text-red-600 bg-red-50 rounded-full">
          Support Center
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
          Let’s build the{" "}
          <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
            future
          </span>
        </h1>
        <p className="text-slate-600 mt-4 max-w-xl mx-auto">
          Have a technical query or partnership idea? We’re here to help.
        </p>
      </section>

      {/* --- MAIN --- */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 relative z-10">
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageCircle className="text-red-500" />
            Get in Touch
          </h2>

          {contactInfo.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center p-4 bg-white rounded-xl shadow mb-4 hover:shadow-md"
            >
              <div className={`p-3 rounded-lg mr-4 ${item.color}`}>{item.icon}</div>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="font-medium">{item.text}</p>
              </div>
            </a>
          ))}

          <div className="bg-black text-white p-6 rounded-xl">
            <MapPin className="text-red-400 mb-2" />
            <p className="text-sm text-gray-300">
              Kohinoor World Towers, Unit no. 403, Tower 3, 4th Floor, Old Pune-Mumbai Highway, Opposite Ranka Jewellers, Pimpri, Pune, India, 411018
            </p>
          </div>

          <a
            href="https://support.mstvalidator.com/portal/en/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-red-600 rounded-xl shadow mb-4 mt-4 hover:bg-red-700 transition-colors duration-300"
          >
            <FiCheckCircle className="text-white w-6 h-6 mr-3" />
            <div>
              <p className="text-xs text-white/80">Support Portal</p>
              <p className="font-medium text-white">Create a Ticket</p>
            </div>
          </a>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow relative z-10">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="border p-3 rounded-lg"
            />
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border p-3 rounded-lg md:col-span-2"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="border p-3 rounded-lg md:col-span-2"
            />
            <button
              disabled={loading}
              className="bg-red-600 text-white py-3 rounded-lg md:col-span-2 flex justify-center items-center gap-2 hover:bg-red-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>
            {success && (
              <p className="text-green-600 md:col-span-2 text-center">{success}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}