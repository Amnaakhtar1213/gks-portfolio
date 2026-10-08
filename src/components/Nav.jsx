import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#scholarship', label: 'Scholarship' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
      className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 transition-colors duration-300 ${
        scrolled ? 'bg-beige-light/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <a href="#home" className="font-display italic font-semibold text-lg">
        amna<span className="text-coffee-light">.dev</span>
      </a>

      <div className="hidden md:flex gap-7">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-[0.72rem] uppercase tracking-wider text-ink-soft hover:text-ink transition-colors relative group"
          >
            {l.label}
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-coffee group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <button
        className="md:hidden font-mono text-xs uppercase tracking-wider border border-ink/20 rounded-full px-4 py-2"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-beige-light shadow-md flex flex-col md:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 font-mono text-xs uppercase tracking-wider border-b border-ink/10"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
