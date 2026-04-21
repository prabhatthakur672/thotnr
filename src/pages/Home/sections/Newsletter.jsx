import { useState } from 'react'

// ── Email icon ────────────────────────────────────────────────────────────────

// MailIcon — envelope icon for the newsletter subscription box
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

// ── Newsletter section ────────────────────────────────────────────────────────

// Newsletter — white section containing a dark subscription box with email input and subscribe CTA.
// focus:border-sky replaces the prior useState(focused) pattern for the input border.
function Newsletter() {
  const [email, setEmail]      = useState('')
  const [submitted, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmit(true)
  }

  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-sky">
            Stay Informed
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-heading tracking-tight">
            Stay Ahead of the AI Curve
          </h2>
        </div>

        {/* Dark subscription box */}
        <div className="max-w-2xl mx-auto rounded-2xl p-8 lg:p-10 bg-navy-lt border border-navy-edge shadow-[0_24px_64px_rgba(1,7,22,0.15)]">

          {/* Box header row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-sky/[0.12] text-sky">
              <MailIcon />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white font-heading">
                The AI Intelligence Brief
              </h3>
              <p className="text-xs text-muted">Weekly · No spam · Unsubscribe anytime</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 text-muted">
            Curated analysis of enterprise AI trends, case studies, and strategic frameworks —
            delivered every Tuesday to 8,000+ AI leaders and practitioners.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 bg-navy border border-navy-edge text-white caret-sky focus:border-sky"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap bg-sky text-white hover:bg-sky-dk cursor-pointer border-none"
              >
                Subscribe Free
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-medium bg-sky/[0.09] border border-sky/40 text-sky">
              ✓ You're in. Check your inbox for a confirmation.
            </div>
          )}

          {/* Trust line */}
          <p className="text-xs mt-4 text-center text-muted">
            Join 8,000+ enterprise leaders from Goldman Sachs, Unilever, and Siemens.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
