import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import LocalSEO from '@/components/LocalSEO'
import SEOContent from '@/components/SEOContent'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import SEOFooter from '@/components/SEOFooter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Gallery />
      <LocalSEO />
      <SEOContent />
      <FAQ />
      <Contact />
      <SEOFooter />
      <Footer />
    </main>
  )
}