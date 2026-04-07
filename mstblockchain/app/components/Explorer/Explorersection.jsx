'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MAX_ROWS = 5;

// ===== MOCK DATA HELPERS =====
const makeAddress = () => {
  const chars = 'abcdef0123456789';
  const pick = () => chars[Math.floor(Math.random() * chars.length)];
  return `0x${Array.from({ length: 4 }, pick).join('')}...${Array.from({ length: 4 }, pick).join('')}`;
};

const createTx = () => ({
  uid: Math.random().toString(36).substr(2, 9),
  address: makeAddress(),
  value: `${(Math.random() * 25).toFixed(2)} MST`,
  time: 'Just now'
});

const createBlock = () => ({
  uid: Math.random().toString(36).substr(2, 9),
  id: Math.floor(Math.random() * 900000) + 100000,
  value: `${(Math.random() * 100).toFixed(1)} MST`,
  txCount: Math.floor(Math.random() * 40) + 10
});

export default function MSTExplorerFull() {
  const [blocks, setBlocks] = useState([]);
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    const update = () => {
      setBlocks(prev => [createBlock(), ...prev].slice(0, MAX_ROWS));
      setTxs(prev => [createTx(), ...prev].slice(0, MAX_ROWS));
    };
    update();
    const interval = setInterval(update, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white text-gray-900 py-24 px-6 overflow-hidden font-sans">
      
      {/* 🔴 MOTION ORBIT BACKGROUND */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[10%] left-[10%] flex items-center gap-2"
        >
          <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span></span>
          <span className="text-[9px] font-black tracking-[0.2em] text-red-500 whitespace-nowrap">Use Cases</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[20%] -left-[60%] w-[140%] h-[140%] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-2 h-2 bg-red-500 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-400 to-red-200" />
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
          <span className="text-[10px] font-black tracking-[0.2em] text-red-500 whitespace-nowrap">9+ Active Nodes</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[35%] -left-[85%] w-[170%] h-[170%] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-[20%] left-[10%] flex items-center gap-2 opacity-50"
        >
          <span className="relative inline-flex rounded-full h-1 w-1 bg-red-500"></span>
          <span className="text-[8px] font-bold tracking-[0.25em] text-red-400 whitespace-nowrap">POSA Consensus</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-5 -left-10 w-24 h-24 border border-red-500 rounded-full flex items-center justify-center opacity-60 z-0"
      >
        <div className="w-16 h-16 border border-red-500/20 rounded-full" />
        <div className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            MST <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">EXPLORER</span>
          </h2>
          <p className="text-gray-600 max-w-md text-lg">
            Real-time visualization of the MST mainnet ledger and transaction flow.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-2 gap-8">
          <DataCard title="Latest Blocks" items={blocks} type="block" />
          <DataCard title="Latest Transactions" items={txs} type="tx" />
        </div>

        {/* FOOTER CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-10 py-4 font-bold bg-black text-white rounded-xl transition-all duration-300 hover:bg-red-500 hover:text-white border border-black/20 hover:border-red-600">
            VIEW ALL ACTIVITY
          </button>
        </div>
      </div>
    </section>
  );
}

function DataCard({ title, items, type }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />
      <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 h-full">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase">{title}</h3>
          <div className="p-2 bg-gray-100 rounded-lg">{type === 'block' ? <BlockIcon /> : <TxIcon />}</div>
        </div>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.uid}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-500/30 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${type === 'block' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                    <span className="text-xs font-bold">{type === 'block' ? 'BK' : 'TX'}</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm font-medium">{type === 'block' ? `#${item.id}` : item.address}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">{type === 'block' ? `${item.txCount} Transactions` : 'Confirmed'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-red-500">{item.value}</p>
                  <p className="text-[10px] text-gray-500">Just now</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Icons
const BlockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);
const TxIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);