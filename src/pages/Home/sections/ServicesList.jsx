import { useState } from 'react'
import { cn } from '../../../utils'

// ── Featured service data ─────────────────────────────────────────────────────

const featured = [
  {
    icon:  '🧭',
    title: 'AI Strategy Consulting',
    desc:  'We help leadership teams cut through the hype and build a concrete, prioritised AI roadmap — grounded in your actual data, systems, and organisational capacity.',
  },
  {
    icon:  '⚙️',
    title: 'Custom AI Development',
    desc:  'Purpose-built models and pipelines designed around your unique processes. No off-the-shelf wrappers — every solution is engineered for your production environment.',
  },
  {
    icon:  '🔗',
    title: 'Enterprise AI Integration',
    desc:  'Seamless embedding of AI capabilities into your existing ERP, CRM, and workflow tools — with security, compliance, and change management built in from the start.',
  },
]

// ── All-services grid data ────────────────────────────────────────────────────

const allServices = [
  { icon: '💬', label: 'NLP Solutions' },
  { icon: '👁️', label: 'Computer Vision' },
  { icon: '📈', label: 'Predictive Analytics' },
  { icon: '🤖', label: 'Process Automation' },
  { icon: '🗣️', label: 'Conversational AI' },
  { icon: '🛡️', label: 'AI Governance' },
  { icon: '🗄️', label: 'Data Engineering' },
  { icon: '🚀', label: 'MLOps & Deployment' },
  { icon: '🎓', label: 'AI Training & Enablement' },
  { icon: '🧠', label: 'Decision Intelligence' },
  { icon: '⚠️', label: 'Risk AI' },
  { icon: '🎯', label: 'Customer AI' },
]

// ── Featured service card ─────────────────────────────────────────────────────

// FeaturedServiceCard — gradient-border card using p-px wrapper + group-hover
function FeaturedServiceCard({ icon, title, desc }) {
  return (
    <div className="group p-px rounded-xl transition-all duration-300 bg-navy-edge hover:bg-gradient-to-br hover:from-sky hover:to-indigo hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      <div className="bg-navy-card rounded-xl flex flex-col gap-5 p-7 h-full">

        {/* Icon */}
        <span className="text-3xl">{icon}</span>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white font-heading">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{desc}</p>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-colors duration-150 text-sky hover:text-sky-dk"
        >
          Know More →
        </a>
      </div>
    </div>
  )
}

// ── Small service tile ────────────────────────────────────────────────────────

// ServiceTile — compact icon + label tile used in the "All Services" expandable grid
function ServiceTile({ icon, label }) {
  return (
    <div className="group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-150 cursor-default border border-navy-edge hover:border-sky hover:bg-sky/[0.06]">
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-muted group-hover:text-white transition-colors duration-150">
        {label}
      </span>
    </div>
  )
}

// ── ServicesList section ──────────────────────────────────────────────────────

// ServicesList — dark-navy section with 3 featured cards and a collapsible full-services grid
function ServicesList() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="bg-navy py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-sky">
            What We Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
            Services We Offer
          </h2>
        </div>

        {/* Featured 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((svc) => (
            <FeaturedServiceCard key={svc.title} {...svc} />
          ))}
        </div>

        {/* Expand / collapse toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setExpanded((e) => !e)}
            className={cn(
              'inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer',
              expanded
                ? 'bg-sky/[0.09] border border-sky text-sky'
                : 'bg-transparent border border-navy-edge text-muted'
            )}
          >
            {expanded ? 'Hide Services' : 'Show All Services'}
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-200"
              style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
            >
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Expandable all-services grid */}
        <div
          style={{
            maxHeight:  expanded ? 600 : 0,
            overflow:   'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {allServices.map((svc) => (
              <ServiceTile key={svc.label} {...svc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesList
