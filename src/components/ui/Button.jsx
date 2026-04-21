function Button({ children, onClick, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded px-4 py-2 font-mono text-sm transition-colors cursor-pointer border'
  const variants = {
    primary:   'bg-sky/10 border-sky/30 text-white hover:bg-sky hover:text-white hover:border-sky',
    secondary: 'bg-transparent border-navy-edge text-muted hover:border-sky/40 hover:text-ink',
    ghost:     'bg-transparent border-transparent text-muted hover:text-ink',
  }

  return (
    <button
      className={`${base} ${variants[variant] ?? ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
