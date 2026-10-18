import Hero from '../components/Hero.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import AboutSection from '../components/AboutSection.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import InsuranceSection from '../components/InsuranceSection.jsx'
import DonateSection from '../components/DonateSection.jsx'
import BlogSection from '../components/BlogSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services limit={12} />
      <WhyChooseUs />
      <AboutSection />
      <HowItWorks />
      <InsuranceSection />
      <DonateSection />
      <BlogSection />
      <CTASection />
    </>
  )
}
