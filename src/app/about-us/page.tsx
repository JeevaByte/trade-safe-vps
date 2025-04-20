
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Precision VPS</h1>
        <p className="text-lg mb-4">
          At Precision VPS, we understand the critical nature of Forex trading. Our mission is to empower 
          traders with the fastest, most reliable, and secure VPS solutions designed specifically for trading needs.
        </p>
      </main>
      <Footer />
    </>
  )
}
