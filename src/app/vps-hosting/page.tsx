
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Plans from '@/components/home/Plans'

export default function VpsHosting() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            VPS Hosting Solutions
          </h1>
          <Plans />
        </div>
      </main>
      <Footer />
    </>
  )
}
