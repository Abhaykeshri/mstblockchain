import MSTBlogSection from './components/Blog/BlogCard';
import EcosystemSection from './components/Ecosystem/EcosystemSection';
import MSTEventSection from './components/Event/MSTEventSection';
import ExplorerSection from './components/Explorer/Explorersection';
import HeroSection from './components/hero/HeroSection';
import WhatIsMST from './components/mst-info/WhatIsMST';
import MSTInstitutional from './components/MSTInstitutional/MSTInstitutional';

// <<<<<<< HEAD
import ProductShowcase from './components/productSection/ProductShowcase';
// import ProductMobileCanvas from './components/productSection/ProductShowcase';
// =======
import UseCases from './components/UseCases/UseCase';
import StructuralPurity from './components/Whitepaper/StructuralPurity';
// >>>>>>> 464d08086313c4017d87e5cb72665f336717e512

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black relative">
      
      <HeroSection />
{/* <<<<<<< HEAD */}
{/* ======= */}
      <WhatIsMST />
      <ProductShowcase/>
      <UseCases/>
      <ExplorerSection/>
      <EcosystemSection/>
      <StructuralPurity/>
      <MSTBlogSection/>
      <MSTEventSection/>
      <MSTInstitutional/>
{/* >>>>>>> 464d08086313c4017d87e5cb72665f336717e512 */}
    </main>
  );
}