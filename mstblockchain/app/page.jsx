import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';
import ProductShowcase from './components/productSection/ProductShowcase';
// import ProductMobileCanvas from './components/productSection/ProductShowcase';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black relative">
      <Navbar/>
      <HeroSection />
      <ProductShowcase/>
    </main>
  );
}Navbar