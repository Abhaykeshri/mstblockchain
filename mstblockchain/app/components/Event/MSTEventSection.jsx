'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ===== MOCK DATA =====
const EVENTS = [
  {
    id: 1,
    title: 'MAIN NETWORK LAUNCH',
    date: 'APR 15, 2026',
    time: '10:00 AM UTC',
    description: 'Be part of the historic MST Mainnet launch event and explore new blockchain capabilities live.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'COMMUNITY MEETUP',
    date: 'MAR 10, 2026',
    time: '04:00 PM UTC',
    description: 'Join our validator and developer community for discussions, demos, and networking.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'PARTNERSHIP ANNOUNCEMENT',
    date: 'APR 25, 2026',
    time: '12:00 PM UTC',
    description: 'We are thrilled to announce new ecosystem partnerships driving adoption across multiple chains.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'VALIDATOR TRAINING',
    date: 'JAN 15, 2026',
    time: '03:00 PM UTC',
    description: 'Interactive training session for new validators to join the network efficiently and securely.',
    image: 'https://images.unsplash.com/photo-1604079621895-2081e95ddc31?auto=format&fit=crop&q=80&w=800',
  },
];

export default function MSTEventSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Helper to determine if event is upcoming
  const checkIsUpcoming = (dateStr) => new Date(dateStr) >= new Date();

  return (
    <section className="relative w-full overflow-hidden bg-white text-black py-24 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto relative z-10 mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold  leading-none mb-4">
          ALL <span className="text-red-500">EVENTS</span>
        </h2>
      
      </div>

      {/* Marquee Wrapper */}
      <div 
        className="relative z-10 overflow-hidden py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ 
            // This is the critical fix: pausing the playState 
            // keeps the 'x' value exactly where it is.
            animationPlayState: isPaused ? 'paused' : 'running' 
          }}
        >
          {/* Double the array for seamless loop */}
          {[...EVENTS, ...EVENTS].map((event, idx) => (
            <EventCard 
              key={idx} 
              event={event} 
              isUpcoming={checkIsUpcoming(event.date)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EventCard({ event, isUpcoming }) {
  return (
    <div className={`flex-none w-80 bg-white border border-black/10 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-500 group 
      ${!isUpcoming ? 'opacity-70 grayscale hover:grayscale-0 hover:opacity-100' : 'scale-105 mx-4 ring-1 ring-red-100 shadow-red-100/50'}`}>
      
      <div className="relative h-44 overflow-hidden">
        {/* Status Tag */}
        <div className={`absolute top-3 left-3 z-20 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md
          ${isUpcoming ? 'bg-red-600 text-white animate-pulse' : 'bg-gray-800 text-white'}`}>
          {isUpcoming ? 'Upcoming' : 'Past'}
        </div>
        
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`font-mono text-xs font-bold ${isUpcoming ? 'text-red-600' : 'text-gray-400'}`}>
            {event.date}
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-400 font-mono text-xs">{event.time}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-red-600 transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">
          {event.description}
        </p>

        <button className={`mt-auto w-full py-3 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all
          ${isUpcoming 
            ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-200' 
            : 'bg-gray-100 text-gray-400 hover:bg-black hover:text-white'}`}>
          {isUpcoming ? 'Join Now' : 'View Recap'}
        </button>
      </div>
    </div>
  );
}