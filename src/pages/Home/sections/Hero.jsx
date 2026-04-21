import heroBg from '../../../assets/images/thotnr_ai_hero_bg.png'

// Hero — full-viewport section with holographic SVG background and left-center headline

function Hero() {
  return (
    <section
      className="relative h-screen w-screen overflow-hidden flex items-center bg-amber-500"
      style={{
        backgroundImage:    `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundRepeat:   'no-repeat',
      }}
    >
      {/* Top vignette */}
      <div className="absolute top-0 left-0 right-0 h-[140px] bg-gradient-to-b from-navy/80 to-transparent" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-navy/75 to-transparent" />

      {/* Left-center headline */}
      <div
        className="relative z-10 max-w-[650px]"
        style={{ paddingLeft: 'clamp(24px, 6vw, 100px)' }}
      >
        <h1
          className="font-heading font-bold text-white tracking-tight leading-[1.05]"
          style={{
            fontSize:   'clamp(42px, 6vw, 90px)',
            textShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          Your Thought Partner
        </h1>
      </div>
    </section>
  )
}

export default Hero