import { motion } from 'framer-motion'
import { ShoppingBag, LayoutTemplate, Bike } from 'lucide-react'
import Reveal, { RevealGroup, RevealItem } from './Reveal.jsx'

const PROJECTS = [
  {
    icon: ShoppingBag,
    title: 'KUPONG - Coupang-Inspired E-Commerce',
    file: 'kupong.jsx',
    desc: 'A Coupang-inspired e-commerce frontend built with React. It includes product browsing, product details, cart management, saved products, authentication, routing, Context API, and local data management.',
    tags: ['React', 'Tailwind', 'ContextAPI', 'JavaScript'],
    tone: 'from-skyblue-light to-beige-light',
  },
  {
    icon: LayoutTemplate,
    title: 'NEXORA - Job-portal',
    file: 'nexora.jsx',
    desc: 'A React-based job portal where users can browse jobs, search and filter opportunities, save jobs, create an account, and manage job applications with routing and local data management.',
    tags: ['React', 'Tailwind', 'ContextAPI', 'localStorage', 'React Router', ],
    tone: 'from-skyblue-light to-beige-light',
    live: 'https://amnaakhtar1213.github.io/job-portal/',
  },
  {
    icon: ShoppingBag,
    title: 'MUSINSA — Fashion E-Commerce',
    file: 'musinsa.jsx',
    desc: 'A fashion e-commerce frontend inspired by the Korean platform MUSINSA, built to practice responsive layouts, product browsing, categories, and modern e-commerce interfaces.',
    tags: ['React', 'Tailwind', 'JavaScript', 'UI/UX'],
    tone: 'from-blush-light to-beige-light',
    live: 'https://amnaakhtar1213.github.io/Musinza/',
  },
  {
  icon: Bike,
  title: 'MotoShop — Motorcycle Store',
  file: 'motoshop.ts',
  desc: 'A motorcycle shopping interface built with TypeScript, focusing on structured frontend development, responsive UI, product presentation, and interactive features.',
  tags: ['TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  tone: 'from-sage-light to-beige-light',
},
]

export default function Projects() {
  return (
    <section id="projects" className="section bg-beige-light px-6 md:px-14 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">Selected Work</div>
          <h2 className="font-display italic text-3xl md:text-4xl mb-3">Projects</h2>
          <p className="text-ink-soft">
            Practice-driven builds — concept projects I've used to grow my React and
            animation skills.
          </p>
        </Reveal>

       <RevealGroup className="grid md:grid-cols-3 gap-7">
  {PROJECTS.map((p) => (
    <RevealItem key={p.title}>
      <a
        href={p.live}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          className={`rounded-2xl overflow-hidden border border-ink/10 bg-gradient-to-b ${p.tone} h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="p-6 flex-1 flex flex-col">
            <div className="w-11 h-11 rounded-full bg-coffee/90 text-beige-light flex items-center justify-center mb-5">
              <p.icon size={20} />
            </div>

            <p className="font-mono text-[0.68rem] text-ink-faint mb-2">
              {p.file}
            </p>

            <h3 className="font-display text-lg mb-3">
              {p.title}
            </h3>

            <p className="text-sm text-ink-soft leading-relaxed mb-5 flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.65rem] px-2.5 py-1 rounded-full bg-white/70 text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </a>
    </RevealItem>
  ))}
</RevealGroup>

        <Reveal delay={0.15} className="mt-8 text-sm text-ink-faint font-mono">
          — concept &amp; practice projects, updated as new work ships
        </Reveal>
      </div>
    </section>
  )
}
