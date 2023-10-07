import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Porfolio from '@/components/Porfolio'
import Services from '@/components/Services'

export default function Home() {
  return (
  <main>
    <Navbar />
    <Hero />
    <Services />
    <Porfolio />
    <Footer />
  </main>
  )
}
