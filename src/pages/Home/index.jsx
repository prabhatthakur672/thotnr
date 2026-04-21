import Hero             from './sections/Hero'
import ProblemStatement from './sections/ProblemStatement'
import ServicesCards    from './sections/ServicesCards'
import ProcessTimeline  from './sections/ProcessTimeline'
import Insights         from './sections/Insights'
import ServicesList     from './sections/ServicesList'
import Events           from './sections/Events'
import CTASplit         from './sections/CTASplit'
import Newsletter       from './sections/Newsletter'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

// Home — assembles all page sections in order; each section manages its own background and layout
function Home() {
  return (
    <>

      <Navbar/>
      {/* Section 1 — Full-viewport hero with headline and CTAs */}
      <Hero />

      {/* Section 2 — Narrative problem statement (white) */}
      <ProblemStatement />

      {/* Section 3 — Core AI capability cards (dark navy) */}
      <ServicesCards />

      {/* Section 4 — Engagement methodology timeline (white) */}
      <ProcessTimeline />

      {/* Section 5 — Latest articles and insights (white) */}
      <Insights />

      {/* Section 6 — Services overview with expandable grid (dark navy) */}
      <ServicesList />

      {/* Section 7 — Upcoming events and workshops (white) */}
      <Events />

      {/* Section 8 — CTA split with outcomes checklist (dark navy) */}
      <CTASplit />

      {/* Section 9 — Newsletter subscription (white) */}
      <Newsletter />
      <Footer/>
    </>
  )
}

export default Home
