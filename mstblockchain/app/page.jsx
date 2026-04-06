import HeroSection from './components/hero/HeroSection';
import WhatIsMST from './components/mst-info/WhatIsMST';
import Navbar from './components/navbar/Navbar';
import UseCases from './components/UseCases/UseCase';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black relative">
      <Navbar/>
      <HeroSection />
      <WhatIsMST />
      <UseCases/>
    </main>
  );
}