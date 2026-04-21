// ── Event data ────────────────────────────────────────────────────────────────

const events = [
  {
    title:    'AI Leadership Summit 2025',
    desc:     'A curated gathering of enterprise AI leaders — sharing what\'s actually working in production environments, governance frameworks, and C-suite AI alignment.',
    date:     'January 15, 2025',
    time:     '9:00 AM – 6:00 PM',
    location: 'New York, NY',
    type:     'In-Person',
  },
  {
    title:    'Enterprise AI Workshop',
    desc:     'Hands-on half-day workshop covering AI readiness assessment, use-case prioritisation, and rapid prototyping frameworks your team can apply immediately.',
    date:     'February 8, 2025',
    time:     '10:00 AM – 2:00 PM',
    location: 'Virtual',
    type:     'Online',
  },
  {
    title:    'AI Implementation Masterclass',
    desc:     'A deep-dive masterclass on moving AI from pilot to production — covering technical architecture, change management, and the governance models that prevent regression.',
    date:     'March 22, 2025',
    time:     '9:00 AM – 5:00 PM',
    location: 'San Francisco, CA',
    type:     'In-Person',
  },
]

// ── Event card ────────────────────────────────────────────────────────────────

// EventCard — minimal bordered card with hover border glow and lift effect via pure CSS
function EventCard({ title, desc, date, time, location, type }) {
  const isVirtual = type === 'Online'

  return (
    <div className="flex flex-col gap-4 rounded-xl p-6 bg-white transition-all duration-200 border border-line shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:border-sky hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">

      {/* Type badge */}
      <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${isVirtual ? 'bg-indigo/[0.08] text-indigo' : 'bg-sky/[0.08] text-sky'}`}>
        {type}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold leading-snug text-navy font-heading">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1 text-muted-dk">{desc}</p>

      {/* Meta info */}
      <div className="flex flex-col gap-1.5 pt-4 mt-auto text-xs border-t border-line text-muted">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{date} &nbsp;·&nbsp; {time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{location}</span>
        </div>
      </div>

      {/* Register CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors duration-150 text-sky hover:text-sky-dk"
      >
        Register Now →
      </a>
    </div>
  )
}

// ── Events section ────────────────────────────────────────────────────────────

// Events — white section with 3-column event cards for upcoming conferences and workshops
function Events() {
  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-sky">
              Upcoming
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-heading tracking-tight">
              Featured Events
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold no-underline transition-colors duration-150 whitespace-nowrap text-sky hover:text-sky-dk"
          >
            View All Events →
          </a>
        </div>

        {/* Event card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <EventCard key={ev.title} {...ev} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
