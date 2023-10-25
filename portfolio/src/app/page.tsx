import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Samples from '@/components/Samples'

import Services from '@/components/Samples'

export default function Home() {
  return (
  <main>
    <Navbar />
    <Hero />
    <Samples />
    <Projects />
    <Footer />
  </main>
  )
}
