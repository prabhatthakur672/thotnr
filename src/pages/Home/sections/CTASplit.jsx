// ── Outcome checklist data ────────────────────────────────────────────────────

const outcomes = [
  'Cost Reduction',
  'Accelerated Time to Market',
  'Enhanced Customer Experience',
  'AI Readiness Assessment',
  'Risk Mitigation',
  'Competitive Differentiation',
]

// ── Check icon ────────────────────────────────────────────────────────────────

// CheckIcon — filled circle with checkmark for the outcomes list
function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="var(--color-sky)" opacity="0.2"/>
      <path d="M6 10l3 3 5-5" stroke="var(--color-sky)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── CTASplit section ──────────────────────────────────────────────────────────

// CTASplit — dark-navy split-layout section with headline+CTA on left and outcomes checklist on right
function CTASplit() {
  return (
    <section
      className="relative overflow-hidden bg-navy py-24 px-6 lg:px-16"
    >
      {/* Background glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — headline + body + CTA */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-sky">
            Let's Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-heading tracking-tight">
            What can we help you achieve?
          </h2>
          <p className="text-base lg:text-lg leading-relaxed mb-10 text-muted">
            Whether you're at the earliest stages of AI exploration or trying to rescue a stalled
            initiative, we bring the structure, experience, and candour to move things forward.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold no-underline transition-all duration-200 bg-sky text-white hover:bg-sky-dk hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(14,165,233,0.25)]"
          >
            Start a Conversation
          </a>
        </div>

        {/* Right — outcomes checklist */}
        <div className="rounded-2xl p-8 bg-navy-card border border-navy-edge">
          <p className="text-sm font-semibold mb-6 text-muted uppercase tracking-[0.1em]">
            Outcomes you can expect
          </p>
          <ul className="flex flex-col gap-4">
            {outcomes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-base font-medium text-white font-sans">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CTASplit
