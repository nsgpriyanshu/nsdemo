import HeroSection from '@/components/HeroSection'
import Courses from '@/components/Courses'
import WhyChooseUs from '@/components/WhyChooseUs'
import GlobeDemo from '@/components/WorldWide'
import Aitestimonialcards from '@/components/TestimonialCards'
import Instructors from '@/components/Instructors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Courses />
      <WhyChooseUs />
      <GlobeDemo />
      <Aitestimonialcards />
      <Instructors />
      <Footer />
    </main>
  )
}
