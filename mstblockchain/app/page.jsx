import HeroSection from './components/hero/HeroSection';
import WhatIsMST from './components/mst-info/WhatIsMST';
import Navbar from './components/navbar/Navbar';
// <<<<<<< HEAD

// import ProductMobileCanvas from './components/productSection/ProductShowcase';
// =======
import UseCases from './components/UseCases/UseCase';
// >>>>>>> 464d08086313c4017d87e5cb72665f336717e512

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black relative">
      <Navbar/>
      <HeroSection />
{/* <<<<<<< HEAD */}
{/* ======= */}
      <WhatIsMST />
      
      <UseCases/>
{/* >>>>>>> 464d08086313c4017d87e5cb72665f336717e512 */}
    </main>
  );
}