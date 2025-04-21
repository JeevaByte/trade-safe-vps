
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';
import ServerComparison from '@/components/home/ServerComparison';

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Server comparison section */}
        <ServerComparison />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Contact Us
          </h1>
          {/* Use the full Contact component with real interactive map */}
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
