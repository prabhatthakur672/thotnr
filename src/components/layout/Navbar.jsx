import { useState, useEffect, useRef } from 'react'
import { cn } from '../../utils'

// ── Mega-dropdown content ─────────────────────────────────────────────────────

const whatWeOffer = [
  { label: 'AI Strategy & Roadmap',   desc: 'Long-term AI vision aligned to business goals' },
  { label: 'Custom AI Development',   desc: 'Tailored models built for your processes' },
  { label: 'Enterprise Integration',  desc: 'Seamlessly embed AI into existing systems' },
  { label: 'Training & Enablement',   desc: 'Upskill your teams for AI-led workflows' },
]

const aiSolutions = [
  { label: 'Natural Language Processing', desc: 'Text intelligence at enterprise scale' },
  { label: 'Computer Vision',             desc: 'Visual AI for inspection & automation' },
  { label: 'Predictive Analytics',        desc: 'Forecast outcomes before they happen' },
  { label: 'Process Automation',          desc: 'Eliminate manual work with smart bots' },
  { label: 'Conversational AI',           desc: 'Intelligent chatbots & voice agents' },
  { label: 'Recommendation Systems',      desc: 'Personalise at scale across touchpoints' },
]

// ── Logo SVG mark ─────────────────────────────────────────────────────────────

// LogoMark — abstract hexagon icon rendered beside the THOTNR wordmark
function LogoMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="none" stroke="var(--color-sky)" strokeWidth="1.8" />
      <polygon points="14,7 21,11 21,19 14,23 7,19 7,11" fill="var(--color-sky)" opacity="0.15" />
      <circle cx="14" cy="14" r="3.5" fill="var(--color-sky)" />
    </svg>
  )
}

// ── Chevron ───────────────────────────────────────────────────────────────────

// ChevronDown — rotates 180° when the dropdown/accordion it belongs to is open
function ChevronDown({ open }) {
  return (
    <svg
      width="13" height="13" viewBox="0 0 13 13" fill="none"
      className="flex-shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'none' }}
    >
      <path d="M2.5 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Mega-menu panel ───────────────────────────────────────────────────────────

// MegaMenu — grid of labelled links inside a floating dropdown panel
function MegaMenu({ items, cols = 2 }) {
  return (
    <div
      className={cn('grid gap-0.5', cols === 3 ? 'grid-cols-3' : 'grid-cols-2')}
      style={{ minWidth: cols === 3 ? 510 : 360 }}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href="#"
          className="flex flex-col gap-0.5 rounded-lg px-4 py-3 no-underline transition-colors duration-150 hover:bg-sky/[0.06]"
        >
          <span className="text-sm font-medium text-navy">{item.label}</span>
          <span className="text-xs text-muted">{item.desc}</span>
        </a>
      ))}
    </div>
  )
}

// ── Dropdown nav item (desktop) ───────────────────────────────────────────────

// DropdownItem — desktop nav button that reveals a MegaMenu panel on hover
function DropdownItem({ label, items, cols }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 bg-transparent border-none cursor-pointer',
          open ? 'text-sky' : 'text-ink'
        )}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 z-50 mt-1.5 bg-white p-2"
          style={{
            border:       '1px solid var(--color-line)',
            borderTop:    '2px solid var(--color-sky)',
            borderRadius: '0 12px 12px 12px',
            boxShadow:    '0 16px 40px rgba(0,0,0,0.10)',
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-1 text-sky">
            {label}
          </p>
          <MegaMenu items={items} cols={cols} />
        </div>
      )}
    </div>
  )
}

// ── Hamburger icon (mobile) ───────────────────────────────────────────────────

// HamburgerIcon — three bars that animate into an × when the mobile menu is open
function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col justify-center gap-[5px] w-5 h-5 cursor-pointer">
      <span
        className="block h-[2px] rounded-full bg-navy transition-transform duration-[250ms]"
        style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
      />
      <span
        className="block h-[2px] rounded-full bg-navy transition-opacity duration-200"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="block h-[2px] rounded-full bg-navy transition-transform duration-[250ms]"
        style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
      />
    </div>
  )
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

// Navbar — fixed top bar, white/translucent at top, fully opaque on scroll
// Desktop (md+): logo · nav links · CTA button  — controlled by `hidden md:flex`
// Mobile (<md):  logo · hamburger                — controlled by `flex md:hidden`
// The `display` property is NEVER set in the inline style so Tailwind classes win.
function Navbar() {
  const [scrolled,   setScrolled]  = useState(false)
  const [mobileOpen, setMobileOpen]= useState(false)
  const [mobileExp,  setMobileExp] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBase = cn(
    'fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between backdrop-blur-[16px] transition-all duration-300',
    scrolled
      ? 'bg-white/[0.97] border-b border-line shadow-[0_2px_16px_rgba(0,0,0,0.07)]'
      : 'bg-white/[0.82] border-b border-transparent'
  )

  return (
    <>
      {/* ══════════════════════════════ DESKTOP NAV ══════════════════════════
          `hidden md:flex` — invisible below 768 px, flex row at 768 px and up.
          No `display` in navBase so Tailwind's class is never overridden.
      ════════════════════════════════════════════════════════════════════════ */}
      <nav className={cn(navBase, 'hidden md:flex px-4 md:px-8 xl:px-16')}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <LogoMark />
          <span className="text-xl font-bold tracking-tight text-navy font-heading">
            THOTNR
          </span>
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          <DropdownItem label="What We Offer" items={whatWeOffer} cols={2} />
          <DropdownItem label="AI Solutions"  items={aiSolutions} cols={3} />

          {['Industries', 'Insights', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-2 text-sm font-medium rounded-md no-underline transition-colors duration-150 text-ink hover:text-sky"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className="no-underline flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 bg-sky text-white hover:bg-sky-dk hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(14,165,233,0.30)]"
        >
          Get Started
        </a>
      </nav>

      {/* ══════════════════════════════ MOBILE NAV ═══════════════════════════
          `flex md:hidden` — flex row below 768 px, hidden at 768 px and up.
      ════════════════════════════════════════════════════════════════════════ */}
      <nav className={cn(navBase, 'flex md:hidden px-5')}>
        <a href="/" className="flex items-center gap-2 no-underline">
          <LogoMark size={24} />
          <span className="text-lg font-bold text-navy font-heading">
            THOTNR
          </span>
        </a>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="bg-transparent border-none p-1.5 cursor-pointer"
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* ══════════════════════════════ MOBILE DRAWER ════════════════════════
          Slides down from under the mobile navbar when hamburger is tapped.
      ════════════════════════════════════════════════════════════════════════ */}
      <div
        className={cn(
          'md:hidden fixed left-0 right-0 z-40 overflow-y-auto transition-transform duration-300',
          mobileOpen ? 'translate-y-0 pointer-events-auto' : '-translate-y-[110%] pointer-events-none'
        )}
        style={{
          top:                   64,
          bottom:                0,
          background:            '#ffffff',
          borderTop:             '2px solid var(--color-sky)',
          boxShadow:             '0 12px 40px rgba(0,0,0,0.10)',
          transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="flex flex-col gap-1 p-5 pb-12">

          {/* Accordion mega-dropdown items */}
          {[
            { label: 'What We Offer', key: 'offer',     items: whatWeOffer },
            { label: 'AI Solutions',  key: 'solutions', items: aiSolutions },
          ].map(({ label, key, items }) => (
            <div key={key}>
              <button
                className={cn(
                  'w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 border-none cursor-pointer text-ink',
                  mobileExp === key ? 'bg-sky/[0.06]' : 'bg-transparent'
                )}
                onClick={() => setMobileExp(mobileExp === key ? null : key)}
              >
                {label}
                <ChevronDown open={mobileExp === key} />
              </button>

              {/* Accordion body */}
              <div
                style={{
                  maxHeight:  mobileExp === key ? 400 : 0,
                  overflow:   'hidden',
                  transition: 'max-height 0.3s ease',
                }}
              >
                <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5">
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="flex flex-col gap-0.5 px-4 py-2.5 rounded-lg no-underline transition-colors duration-150 hover:bg-sky/[0.06]"
                    >
                      <span className="text-sm font-medium text-navy">{item.label}</span>
                      <span className="text-xs text-muted">{item.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Simple nav links */}
          {['Industries', 'Insights', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-3 rounded-xl text-sm font-medium no-underline transition-colors duration-150 text-ink hover:text-sky"
            >
              {link}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#"
            className="mt-4 px-5 py-3 rounded-xl text-sm font-semibold text-center no-underline bg-sky text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
