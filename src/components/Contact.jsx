import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Check, Twitter  } from 'lucide-react'
import Reveal, { RevealGroup, RevealItem } from './Reveal.jsx'

const LINKS = [
  { icon: Mail, label: 'Email', value: 'amnabinterasheed1911@gmail.com', href: 'mailto:amnabinterasheed1911@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/Amnaakhtar1213', href: 'https://github.com/Amnaakhtar1213' },
  { icon: Linkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/amna-binterasheed-938b57430/', href: 'https://www.linkedin.com/in/amna-binterasheed-938b57430/' },
  { icon: Twitter, label: 'Twitter', value: 'amna4142', href: 'https://twitter.com/amna4142' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    // No backend is wired up yet — this opens the user's email client
    // pre-filled with the message. Swap this for a real form handler
    // (e.g. Formspree, EmailJS) when you're ready to go live.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:amnabinterasheed1911@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section bg-beige-light px-6 md:px-14 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <Reveal className="mb-10">
            <div className="eyebrow mb-4">Get In Touch</div>
            <h2 className="font-display italic text-3xl md:text-4xl mb-3">Contact</h2>
            <p className="text-ink-soft max-w-sm">
              Reviewing my application or just want to connect — here's where to find me.
            </p>
          </Reveal>

          <RevealGroup className="space-y-4">
            {LINKS.map((l) => (
              <RevealItem key={l.label}>
                <motion.a
                  href={l.href}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-4 hover:bg-white transition-colors duration-300"
                >
                  <span className="w-10 h-10 rounded-full bg-coffee text-beige-light flex items-center justify-center shrink-0">
                    <l.icon size={17} />
                  </span>
                  <span>
                    <span className="block font-display text-sm">{l.label}</span>
                    <span className="block font-mono text-[0.72rem] text-ink-faint">{l.value}</span>
                  </span>
                </motion.a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-ink/10 bg-sage-light/40 p-7 space-y-5"
          >
            <div>
              <label className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-faint mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-ink/15 bg-white/80 px-4 py-3 text-sm outline-none focus:border-sage-deep transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-faint mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-ink/15 bg-white/80 px-4 py-3 text-sm outline-none focus:border-sage-deep transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-faint mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-ink/15 bg-white/80 px-4 py-3 text-sm outline-none focus:border-sage-deep transition-colors resize-none"
                placeholder="Say hello..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider bg-coffee text-beige-light py-3.5 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={14} /> Opening your email…
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={14} /> Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <p className="text-[0.7rem] text-ink-faint font-mono leading-relaxed">
              This opens your email client with the message pre-filled — connect a form
              service like Formspree or EmailJS to send directly.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
