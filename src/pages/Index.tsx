
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Plans from '@/components/home/Plans';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ColorPalette from '@/components/ui/color-palette';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Color Palette Showcase */}
        <section className="py-8 bg-gradient-to-r from-ocean-100 to-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Hybrid Color Palette</h2>
            <p className="text-center mb-8 max-w-2xl mx-auto">
              Our new design system combines the trustworthy gold theme with a refreshing ocean blue palette,
              creating a perfect balance between premium quality and technological innovation.
            </p>
            <ColorPalette />
          </div>
        </section>
        
        <Hero />
        <Features />
        <About />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
