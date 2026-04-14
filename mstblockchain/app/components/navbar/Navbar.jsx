'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Build', href: '#', active: true },
  { label: 'Learn', href: '#', active: false },
  { label: 'Products', href: '#', active: false },
  { label: 'Usecases', href: '/usecases/supply-chain', active: false }
];

const usecases = [
  { id: '01', title: 'Supply Chain Logistics', link: '/usecases/supply-chain' },
  { id: '02', title: 'Real Estate Tokenization', link: '/usecases/real-estate' },
  { id: '03', title: 'DeFi Liquidity', link: '/usecases/defi-liquidity' },
  { id: '04', title: 'Secure Healthcare', link: '/usecases/healthcare' },
  { id: '05', title: 'Metaverse Gaming', link: '/usecases/metaverse' },
  { id: '06', title: 'Digital Identity', link: '/usecases/digital-identity' },
  { id: '07', title: 'Yield Aggregators', link: '/usecases/yield' },
  { id: '08', title: 'Carbon Credits', link: '/usecases/carbon' },
  { id: '09', title: 'Cross-border Pay', link: '/usecases/cross-border' },
  { id: '10', title: 'Asset Management', link: '/usecases/asset-management' },
  { id: '11', title: 'Oracle Networks', link: '/usecases/oracles' },
  { id: '12', title: 'DAO Governance', link: '/usecases/dao' },
  { id: '13', title: 'Privacy Layers', link: '/usecases/privacy' },
  { id: '14', title: 'Escrow Services', link: '/usecases/escrow' },
  { id: '15', title: 'Insurance Claims', link: '/usecases/insurance' },
  { id: '16', title: 'NFT Marketplace', link: '/usecases/nft' },
  { id: '17', title: 'Staking Protocols', link: '/usecases/staking' },
  { id: '18', title: 'Token Vesting', link: '/usecases/vesting' },
  { id: '19', title: 'ZK Proofs', link: '/usecases/zk' },
  { id: '20', title: 'Lending Pools', link: '/usecases/lending' }
];

const buildResources = [
  {
    title: 'DEVELOPER RESOURCES',
    items: [
      { label: 'Testnet', href: '#' },
      { label: 'Faucet', href: '#' },
      { label: 'Developer Docs', href: '#' },
      { label: 'MST Explorer', href: '#' }
    ]
  },
  {
    title: 'SUPPORT & PROGRAMS',
    items: [
      { label: 'Grant Program', href: '/grant' },
      { label: 'Developer Support Forum', href: '#' },
      { label: 'Personalized Dev Support', href: '#' }
    ]
  }
];

const learnResources = [
  {
    title: 'BLOCKCHAIN',
    items: [
      { label: 'Block Validation Process', href: '#' },
      { label: 'DAO & MST Chain', href: '#' },
      { label: 'No Code Fractional Validator', href: '#' },
      { label: 'Solidity : EVM Programming Language', href: '#' },
      { label: 'Transparency', href: '#' }
    ]
  }
];

const learnHighlights = {
  title: 'HIGHLIGHTS',
  label: 'LATEST TWEET',
  placeholder: 'Tweet content coming soon'
};

const productsResources = [
  {
    name: 'BridgeKey',
    description: 'Cross-chain asset bridging',
    href: '#'
  },
  {
    name: 'MST Buddy',
    description: 'Developer assistant toolkit',
    href: '#'
  },
  {
    name: 'ChainPay',
    description: 'Seamless Web3 payments',
    href: '#'
  }
];

export default function Navbar() {
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isBuildOpen, setIsBuildOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  const [mobileBuildOpen, setMobileBuildOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const buildCloseTimerRef = useRef(null);
  const learnCloseTimerRef = useRef(null);
  const productsCloseTimerRef = useRef(null);
  const useCasesCloseTimerRef = useRef(null);

  const closeAllMenus = () => {
    setIsBuildOpen(false);
    setIsLearnOpen(false);
    setIsProductsOpen(false);
    setIsUseCasesOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        closeAllMenus();
        setMobileBuildOpen(false);
        setMobileLearnOpen(false);
        setMobileProductsOpen(false);
        setMobileUseCasesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      if (buildCloseTimerRef.current) clearTimeout(buildCloseTimerRef.current);
      if (learnCloseTimerRef.current) clearTimeout(learnCloseTimerRef.current);
      if (productsCloseTimerRef.current) clearTimeout(productsCloseTimerRef.current);
      if (useCasesCloseTimerRef.current) clearTimeout(useCasesCloseTimerRef.current);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const openBuildMenu = () => {
    if (buildCloseTimerRef.current) clearTimeout(buildCloseTimerRef.current);
    setIsBuildOpen(true);
  };

  const closeBuildMenu = () => {
    if (buildCloseTimerRef.current) clearTimeout(buildCloseTimerRef.current);
    buildCloseTimerRef.current = setTimeout(() => setIsBuildOpen(false), 150);
  };

  const openLearnMenu = () => {
    if (learnCloseTimerRef.current) clearTimeout(learnCloseTimerRef.current);
    setIsLearnOpen(true);
  };

  const closeLearnMenu = () => {
    if (learnCloseTimerRef.current) clearTimeout(learnCloseTimerRef.current);
    learnCloseTimerRef.current = setTimeout(() => setIsLearnOpen(false), 150);
  };

  const openProductsMenu = () => {
    if (productsCloseTimerRef.current) clearTimeout(productsCloseTimerRef.current);
    setIsProductsOpen(true);
  };

  const closeProductsMenu = () => {
    if (productsCloseTimerRef.current) clearTimeout(productsCloseTimerRef.current);
    productsCloseTimerRef.current = setTimeout(() => setIsProductsOpen(false), 150);
  };

  const openUseCasesMenu = () => {
    if (useCasesCloseTimerRef.current) clearTimeout(useCasesCloseTimerRef.current);
    setIsUseCasesOpen(true);
  };

  const closeUseCasesMenu = () => {
    if (useCasesCloseTimerRef.current) clearTimeout(useCasesCloseTimerRef.current);
    useCasesCloseTimerRef.current = setTimeout(() => setIsUseCasesOpen(false), 150);
  };

  const dropdownPanelClass =
    'absolute left-1/2 top-full mt-4 w-[760px] -translate-x-1/2 rounded-2xl border border-black bg-white p-8 text-black shadow-[0_18px_50px_rgba(0,0,0,0.16)]';

  const navLinkClass = (active) =>
    `group relative text-sm font-medium lowercase tracking-tight transition-colors ${active ? 'text-white' : 'text-white/50 hover:text-white'}`;

  const renderBuildDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={openBuildMenu}
      onMouseLeave={closeBuildMenu}
      className={dropdownPanelClass}
    >
      <div className="grid grid-cols-2 gap-10">
        {buildResources.map((group, groupIndex) => (
          <div key={group.title} className={groupIndex === 1 ? 'border-l border-black/10 pl-10' : ''}>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF2D2D]">{group.title}</p>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } } }}
              className="mt-5 space-y-3"
            >
              {group.items.map((item) => (
                <motion.li key={item.label} variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black/5 hover:text-[#FF2D2D]"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                    <ChevronRight size={14} className="text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF2D2D]" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderLearnDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={openLearnMenu}
      onMouseLeave={closeLearnMenu}
      className={dropdownPanelClass}
    >
      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
        <div className="space-y-5 lg:border-r lg:border-black/10 lg:pr-10">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF2D2D]">{learnResources[0].title}</p>
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } } }}
            className="space-y-3"
          >
            {learnResources[0].items.map((item) => (
              <motion.li key={item.label} variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black/5 hover:text-[#FF2D2D]"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                  <ChevronRight size={14} className="text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF2D2D]" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 lg:pl-10"
        >
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF2D2D]">{learnHighlights.title}</p>
          <div className="rounded-none border border-black bg-white p-0 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
            <div className="px-0 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">{learnHighlights.label}</div>
            <div className="flex h-[130px] items-center justify-center border border-black/15 bg-neutral-100 text-sm text-black/60">
              {learnHighlights.placeholder}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderProductsDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={openProductsMenu}
      onMouseLeave={closeProductsMenu}
      className="absolute left-1/2 top-full mt-4 w-[420px] -translate-x-1/2 rounded-2xl border border-black bg-white p-6 text-black shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
    >
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF2D2D]">PRODUCTS</p>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
        className="mt-5 space-y-2"
      >
        {productsResources.map((product, index) => (
          <motion.li
            key={product.name}
            variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
            className={index !== productsResources.length - 1 ? 'border-b border-black/10 pb-2' : ''}
          >
            <Link
              href={product.href}
              className="group block rounded-xl px-3 py-2 transition-all duration-300 hover:bg-black/5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-black transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF2D2D]">
                    {product.name}
                  </div>
                  <div className="mt-1 text-xs text-black/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black/70">
                    {product.description}
                  </div>
                </div>
                <ChevronRight size={14} className="text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#FF2D2D]" />
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  const renderUseCasesDropdown = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={openUseCasesMenu}
      onMouseLeave={closeUseCasesMenu}
      className="absolute left-1/2 top-full mt-4 w-[460px] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-black/10 bg-white px-4 py-3 text-black shadow-[0_18px_48px_rgba(0,0,0,0.14)] backdrop-blur-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF2D2D]">USECASES</p>
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">20 sectors</span>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02, delayChildren: 0.03 } } }}
          className="flex max-h-[400px] flex-col gap-2 overflow-y-auto overflow-x-hidden scroll-smooth pb-2 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {usecases.map((item) => (
            <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <Link
                href={item.link}
                className="group inline-flex w-full items-center gap-2 rounded-full border border-[#eee] bg-white px-4 py-2.5 text-sm font-medium text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#FF2D2D] hover:text-[#FF2D2D] hover:shadow-[0_8px_20px_rgba(255,45,45,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2D2D]/40"
              >
                <span className="font-extrabold tracking-[0.08em] text-[#FF2D2D]">{item.id}</span>
                <span>{item.title}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 mx-auto w-full max-w-[90rem] px-4 sm:px-5 lg:px-6 font-[Poppins]"
    >
      <div
        ref={navbarRef}
        className="relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-[1px] shadow-[0_8px_26px_rgba(0,0,0,0.28)] transition-all duration-300"
      >
        <div className="relative overflow-visible rounded-2xl bg-black/90 backdrop-blur-[12px] group/nav">
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          <nav className="relative z-20 flex h-16 w-full items-center justify-between px-4 lg:px-8">
           <Link href="/" className="-ml-1 flex items-center gap-2 group">
  <motion.div
    whileHover={{ rotate: 10, scale: 1.08 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex items-center justify-center"
  >
    <img
      src="https://ik.imagekit.io/avboeabnm1/images/logo.png"
      alt="MST logo"
      width={70}
      height={70}
      className="h-[40px] w-auto object-contain transition-all duration-300 group-hover:drop-shadow-xl"
    />
  </motion.div>
</Link>

            <ul className="hidden items-center gap-10 lg:flex">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.label === 'Build' ? (
                    <div className="relative" onMouseEnter={openBuildMenu} onMouseLeave={closeBuildMenu}>
                      <button
                        type="button"
                        onClick={() => setIsBuildOpen((prev) => !prev)}
                        className={navLinkClass(true)}
                        aria-expanded={isBuildOpen}
                       
                      >
                        <span>Build</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-[#ff2d2d]" />
                      </button>

                      <AnimatePresence>{isBuildOpen ? renderBuildDropdown() : null}</AnimatePresence>
                    </div>
                  ) : item.label === 'Learn' ? (
                    <div className="relative" onMouseEnter={openLearnMenu} onMouseLeave={closeLearnMenu}>
                      <button
                        type="button"
                        onClick={() => setIsLearnOpen((prev) => !prev)}
                        className={navLinkClass(false)}
                        aria-expanded={isLearnOpen}
                      >
                        <span>Learn</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#ff2d2d] transition-all duration-300 group-hover:w-full" />
                      </button>

                      <AnimatePresence>{isLearnOpen ? renderLearnDropdown() : null}</AnimatePresence>
                    </div>
                  ) : item.label === 'Products' ? (
                    <div className="relative" onMouseEnter={openProductsMenu} onMouseLeave={closeProductsMenu}>
                      <button
                        type="button"
                        onClick={() => setIsProductsOpen((prev) => !prev)}
                        className={navLinkClass(false)}
                        aria-expanded={isProductsOpen}
                      >
                        <span>Products</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#ff2d2d] transition-all duration-300 group-hover:w-full" />
                      </button>

                      <AnimatePresence>{isProductsOpen ? renderProductsDropdown() : null}</AnimatePresence>
                    </div>
                  ) : item.label === 'Usecases' ? (
                    <div className="relative" onMouseEnter={openUseCasesMenu} onMouseLeave={closeUseCasesMenu}>
                      <button
                        type="button"
                        onClick={() => setIsUseCasesOpen((prev) => !prev)}
                        className={navLinkClass(false)}
                        aria-expanded={isUseCasesOpen}
                      >
                        <span>Usecases</span>
                        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#ff2d2d] transition-all duration-300 group-hover:w-full" />
                      </button>

                      <AnimatePresence>{isUseCasesOpen ? renderUseCasesDropdown() : null}</AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} className={navLinkClass(item.active)}>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#ff2d2d] transition-all duration-300 ${
                          item.active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-4">
  
  {/* Explore Button */}
  <div className="hidden lg:block relative group">
    <div className="absolute inset-0 rounded-full bg-[#ff2d2d] opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-50" />
    
    <Link
      href="#"
      className="relative inline-flex items-center space-x-2 rounded-full mb-3
      bg-gradient-to-r from-[#ff2d2d] to-[#ff4d4d] mb-2
      px-6 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-white
      transition-all duration-300 ease-out
      hover:shadow-[0_6px_20px_rgba(255,45,45,0.4)]
      hover:scale-[1.05] active:scale-95"
    >
      <span>explore ecosystem</span>
      <svg
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  </div>

  {/* Get Started Button */}
  <div className="hidden lg:block relative group">
    <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-md transition-opacity duration-300 group-hover:opacity-30" />
    
    <Link
      href="#"
      className="relative inline-flex items-center space-x-2 rounded-full mb-3
      bg-white px-6 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.15em] text-black
      transition-all duration-300 ease-out
      hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)]
      hover:scale-[1.05] active:scale-95"
    >
      <span>get started</span>
      <svg
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  </div>

</div>
            

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => {
                setIsOpen((previous) => !previous);
                setMobileBuildOpen(false);
                setMobileLearnOpen(false);
                setMobileProductsOpen(false);
                setMobileUseCasesOpen(false);
              }}
              className="group relative inline-flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <span className={`h-0.5 w-4 origin-center bg-white transition-all duration-300 ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 ${isOpen ? 'scale-x-0 opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-4 origin-center bg-white transition-all duration-300 ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 text-white shadow-2xl backdrop-blur-[12px] lg:hidden"
          >
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setMobileBuildOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-bold lowercase text-white transition-all"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EA2828] shadow-sm" />
                  Build
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileBuildOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileBuildOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="space-y-4">
                      {buildResources.map((group) => (
                        <div key={group.title} className="space-y-2">
                          <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#EA2828]">{group.title}</p>
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                              >
                                <span>{item.label}</span>
                                <ChevronRight size={12} className="text-white/25" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileLearnOpen((prev) => !prev)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-sm" />
                  Learn
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileLearnOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileLearnOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#EA2828]">BLOCKCHAIN</p>
                        <div className="space-y-1">
                          {learnResources[0].items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
                            >
                              <span>{item.label}</span>
                              <ChevronRight size={12} className="text-white/25" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#EA2828]">HIGHLIGHTS</p>
                        <div className="rounded-none border border-white/15 bg-white/10 p-4">
                          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">LATEST TWEET</div>
                          <div className="flex h-[120px] items-center justify-center border border-white/10 bg-black/20 text-xs text-white/60">
                            Tweet content coming soon
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-sm" />
                  Products
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileProductsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="space-y-2">
                      <p className="px-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#EA2828]">PRODUCTS</p>
                      {productsResources.map((product, index) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-lg px-3 py-2 transition-all hover:bg-white/5 ${index !== productsResources.length - 1 ? 'border-b border-white/10' : ''}`}
                        >
                          <div className="text-xs font-bold text-white transition-all hover:text-[#EA2828]">
                            {product.name}
                          </div>
                          <div className="mt-1 text-[11px] text-white/55">
                            {product.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileUseCasesOpen((prev) => !prev)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase text-white/60 transition-all hover:bg-white/5 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 shadow-sm" />
                  Usecases
                </span>
                <ChevronRight size={16} className={`transition-transform duration-300 ${mobileUseCasesOpen ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileUseCasesOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="grid max-h-[450px] grid-cols-1 gap-2 overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid-cols-2">
                      {usecases.map((item) => (
                        <Link
                          key={item.id}
                          href={item.link}
                          onClick={() => setIsOpen(false)}
                          className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 transition-all hover:border-[#EA2828]/70 hover:bg-white/5"
                        >
                          <div className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#EA2828]">{item.id}</div>
                          <div className="mt-1 text-xs font-semibold text-white/85">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {navItems
                .filter((item) => item.label !== 'Build' && item.label !== 'Learn' && item.label !== 'Products' && item.label !== 'Usecases')
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold lowercase transition-all ${item.active ? 'bg-teal-500/10 text-[#2DD4BF]' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full shadow-sm ${item.active ? 'bg-[#2DD4BF]' : 'bg-white/20'}`} />
                      {item.label}
                    </span>
                    <svg className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
            </div>

            <div className="mt-4 px-2">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black shadow-[0_4px_14px_0_rgba(45,212,191,0.2)] transition-all hover:bg-teal-300 active:scale-95"
              >
                <span>explore ecosystem</span>
              </Link>
            </div>
            <div className="mt-4 px-2">
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black shadow-[0_4px_14px_0_rgba(45,212,191,0.2)] transition-all hover:bg-teal-300 active:scale-95"
              >
                <span>get started</span>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}