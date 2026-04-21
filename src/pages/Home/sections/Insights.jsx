// ── Insights card data ────────────────────────────────────────────────────────

const articles = [
  {
    category: 'Strategy',
    title:    'Why Most AI Projects Fail Before They Start',
    date:     'April 14, 2025',
    excerpt:  'The failure point for most enterprise AI initiatives isn\'t technical. It\'s the mismatch between what leadership expects and what the data, processes, and teams can actually support.',
  },
  {
    category: 'Technology',
    title:    'The ROI of Intelligent Automation in 2025',
    date:     'March 28, 2025',
    excerpt:  'Beyond cost reduction: how leading enterprises are measuring second and third-order returns from automation — and why the headline numbers are only half the story.',
  },
  {
    category: 'Leadership',
    title:    'Building an AI-Ready Organisation',
    date:     'March 10, 2025',
    excerpt:  'Technical readiness is table stakes. The organisations seeing compounding returns from AI share a different quality: they\'ve built the operating muscle to absorb and direct AI capability.',
  },
]

// ── Arrow icon ────────────────────────────────────────────────────────────────

// ArrowRight — used in "Read More" links
function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Insight card ──────────────────────────────────────────────────────────────

// InsightCard — article preview with hover border glow and lift effect via pure CSS
function InsightCard({ category, title, date, excerpt }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl p-6 bg-white transition-all duration-200 border border-line shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:border-sky hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(14,165,233,0.13)]">

      {/* Category tag */}
      <span className="self-start text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-sky/[0.08] text-sky">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold leading-snug text-navy font-heading">{title}</h3>

      {/* Date */}
      <p className="text-xs text-muted">{date}</p>

      {/* Excerpt */}
      <p className="text-sm leading-relaxed flex-1 text-muted-dk">{excerpt}</p>

      {/* Read more link */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-medium no-underline mt-auto transition-colors duration-150 text-sky hover:text-sky-dk"
      >
        Read More <ArrowRight />
      </a>
    </article>
  )
}

// ── Insights section ──────────────────────────────────────────────────────────

// Insights — white section with 3-column article card grid and section-level CTA link
function Insights() {
  return (
    <section className="bg-white py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-sky">
              Thinking Out Loud
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-heading tracking-tight">
              Latest from Thotnr
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors duration-150 whitespace-nowrap text-sky hover:text-sky-dk"
          >
            View All Insights →
          </a>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <InsightCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights
