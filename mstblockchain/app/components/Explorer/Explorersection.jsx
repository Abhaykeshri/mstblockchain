'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MAX_ROWS = 4;

export default function MSTExplorerFull() {
  const [blocks, setBlocks] = useState([]);
  const [txs, setTxs] = useState([]);
  const [tick, setTick] = useState(0); // 👈 forces re-render for time

  const formatTime = (timestamp) => {
    if (!timestamp) return 'Just now';

    const diff = Math.floor((Date.now() - new Date(timestamp)) / 1000);

    if (diff < 5) return 'Just now';
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;

    return `${Math.floor(diff / 3600)}h ago`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blockRes, txRes] = await Promise.all([
          fetch('https://mstscan.com/api/v2/main-page/blocks'),
          fetch('https://mstscan.com/api/v2/main-page/transactions')
        ]);

        const blockData = await blockRes.json();
        const txData = await txRes.json();

        // ✅ BLOCKS
        const formattedBlocks = (blockData?.items || blockData || [])
          .slice(0, MAX_ROWS)
          .map((b) => ({
            uid: b.hash,
            id: b.height,
            value: `${(Number(b?.transaction_fees || 0) / 1e18).toFixed(4)} MST`,
            txCount: b.transactions_count ?? b.transaction_count ?? 0
          }));

        while (formattedBlocks.length < MAX_ROWS) {
          formattedBlocks.push({
            uid: `empty-b-${formattedBlocks.length}`,
            id: '--',
            value: '--',
            txCount: 0
          });
        }

        // ✅ TRANSACTIONS
        const formattedTxs = (txData?.items || txData || [])
          .slice(0, MAX_ROWS)
          .map((t) => {
            const from = t?.from?.hash || '0x000000';
            const to = t?.to?.hash || '0x000000';

            return {
              uid: t.hash,
              address: `${from.slice(0, 6)}...${to.slice(-4)}`,
              value: `${(Number(t.value || 0) / 1e18).toFixed(4)} MST`,
              timestamp: t.timestamp // 👈 store raw timestamp
            };
          });

        while (formattedTxs.length < MAX_ROWS) {
          formattedTxs.push({
            uid: `empty-t-${formattedTxs.length}`,
            address: '--',
            value: '--',
            timestamp: null
          });
        }

        setBlocks(formattedBlocks);
        setTxs(formattedTxs);
      } catch (err) {
        console.error('API error:', err);
      }
    };

    fetchData();

    const apiInterval = setInterval(fetchData, 3000);

    // 🔥 REAL-TIME TIME UPDATE (every 1s)
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(apiInterval);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative bg-white text-gray-900 py-24 px-6 overflow-hidden font-sans">

      {/* BACKGROUND */}
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[0%] -left-[35%] w-[110%] h-[110%] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute w-[6px] h-[6px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            MST <span className="text-transparent bg-clip-text bg-red-500">EXPLORER</span>
          </h2>
          <p className="text-gray-600 max-w-md text-lg">
            Real-time visualization of the MST mainnet ledger and transaction flow.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-2 gap-8">
          <DataCard title="Latest Blocks" items={blocks} type="block" formatTime={formatTime} />
          <DataCard title="Latest Transactions" items={txs} type="tx" formatTime={formatTime} />
        </div>

        {/* BUTTON */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-10 py-4 font-bold bg-black text-white rounded-xl transition-all duration-300 hover:bg-red-500 border border-black/20 hover:border-red-600">
            VIEW ALL ACTIVITY
          </button>
        </div>
      </div>
    </section>
  );
}

function DataCard({ title, items, type, formatTime }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-b from-red-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />

      <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 h-full">

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase">{title}</h3>
          <div className="p-2 bg-gray-100 rounded-lg">
            {type === 'block' ? <BlockIcon /> : <TxIcon />}
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => {
              const isEmpty = item.id === '--' || item.address === '--';

              return (
                <motion.div
                  key={item.uid}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isEmpty ? 0.4 : 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 ${
                    !isEmpty ? 'hover:border-red-500/30 hover:bg-gray-100' : 'pointer-events-none'
                  } transition-colors`}
                >
                  <div className="flex items-center gap-4">

                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${type === 'block' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                      <span className="text-xs font-bold">{type === 'block' ? 'BK' : 'TX'}</span>
                    </div>

                    <div>
                      <p className="font-mono text-sm font-medium">
                        {type === 'block' ? `#${item.id}` : item.address}
                      </p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                        {type === 'block' ? `${item.txCount} Transactions` : 'Confirmed'}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-bold text-red-500">{item.value}</p>
                    <p className="text-[10px] text-gray-500">
                      {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

// ICONS
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