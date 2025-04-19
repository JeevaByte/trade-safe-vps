
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Plans from '@/components/home/Plans';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
