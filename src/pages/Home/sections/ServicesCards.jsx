// ── Service icons ─────────────────────────────────────────────────────────────

// ChatBubbleIcon — represents Strategic AI Integration
function ChatBubbleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      <path d="M8 10h.01M12 10h.01M16 10h.01"/>
    </svg>
  )
}

// LayersIcon — represents AI-Powered Decision Making
function LayersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"/>
      <polyline points="22 15.5 12 22 2 15.5"/>
      <polyline points="22 12 12 18.5 2 12"/>
    </svg>
  )
}

// PulseIcon — represents Intelligent Automation
function PulseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

// ── Service card data ─────────────────────────────────────────────────────────

const services = [
  {
    icon:     <ChatBubbleIcon />,
    title:    'Strategic AI Integration',
    tagline:  'From roadmap to running system',
    whatWeDo: 'End-to-end AI strategy, technology selection, risk assessment, and phased deployment planning aligned to your operating model.',
    outcome:  '3× faster AI adoption. 60% reduction in failed pilots. Executive and team alignment from day one.',
  },
  {
    icon:     <LayersIcon />,
    title:    'AI-Powered Decision Making',
    tagline:  'Replace gut-feel with grounded insight',
    whatWeDo: 'Custom predictive models, real-time analytics dashboards, and automated reporting systems that surface the right information at decision time.',
    outcome:  '40% improvement in forecast accuracy. Data-driven culture embedded across business units.',
  },
  {
    icon:     <PulseIcon />,
    title:    'Intelligent Automation',
    tagline:  'Eliminate manual work at scale',
    whatWeDo: 'Process mining, workflow redesign, and AI-enhanced RPA that understands context — not just clicks.',
    outcome:  '70% reduction in manual processing. 99.9% process accuracy. Your team freed to do high-value work.',
  },
]

// ── Service card component ────────────────────────────────────────────────────

// ServiceCard — gradient-border card using p-px wrapper + group-hover for hover effects.
// No useState needed — pure CSS hover via Tailwind group utilities.
function ServiceCard({ icon, title, tagline, whatWeDo, outcome }) {
  return (
    <div className="group p-px rounded-2xl cursor-default transition-all duration-300 bg-navy-edge hover:bg-gradient-to-br hover:from-sky hover:to-indigo hover:-translate-y-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.3),0_0_30px_rgba(14,165,233,0.15)]">
      <div className="bg-navy-card rounded-2xl flex flex-col gap-5 p-7 h-full">

        {/* Icon */}
        <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center transition-all duration-300 bg-navy-edge/50 border border-navy-edge text-muted group-hover:bg-sky/[0.13] group-hover:border-sky/[0.27] group-hover:text-sky">
          {icon}
        </div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold mb-1 text-white font-heading">{title}</h3>
          <p className="text-sm text-muted">{tagline}</p>
        </div>

        {/* What we do */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-sky">What we do</p>
          <p className="text-sm leading-relaxed text-muted">{whatWeDo}</p>
        </div>

        {/* Real outcome */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-indigo">Real outcome</p>
          <p className="text-sm leading-relaxed text-muted">{outcome}</p>
        </div>
      </div>
    </div>
  )
}

// ── ServicesCards section ─────────────────────────────────────────────────────

// ServicesCards — dark-navy 3-column card grid showcasing core AI capabilities
function ServicesCards() {
  return (
    <section className="bg-navy py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-sky">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            Our AI Capabilities
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto text-muted">
            Three interlocking disciplines that take an AI idea from whiteboard to measurable business impact.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards
