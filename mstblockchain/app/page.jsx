import HeroSection from './components/hero/HeroSection';
import Navbar from './components/navbar/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black relative">
      <Navbar/>
      <HeroSection />
    </main>
  );
}Navbar