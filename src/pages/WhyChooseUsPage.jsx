import PageHeader from '../components/PageHeader.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTASection from '../components/CTASection.jsx'

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="One Place. Complete Care. Real Support."
        intro="Choosing where to get help is a big decision. Here's what makes care at Reclamation Center different — and why so many South Florida families trust us."
        crumbs={[{ label: 'Why Choose Us' }]}
      />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
      <CTASection />
    </>
  )
}
