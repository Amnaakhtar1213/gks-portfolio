import { motion } from 'framer-motion'
import CloudBackground from './CloudBackground.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.9, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center px-6 md:px-14 py-16
                 bg-gradient-to-br from-sage-light via-beige-light to-skyblue-light"
    >
      <CloudBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-6xl mx-auto"
      >
        {/* Illustration blended into the hero, not boxed as a separate card */}
        <motion.div variants={item} className="order-1 md:order-1 flex justify-center">
          <div className="relative w-full max-w-[380px]">
            <motion.img
              src="/illustration.png"
              alt="Illustrated portrait of Amna, in an oversized sweater, holding a warm mug"
              className="w-full h-auto rounded-[2rem] select-none"
              style={{ filter: 'drop-shadow(0 30px 45px rgba(60,70,50,0.28))' }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            />

            {/* soft glow blending illustration into pastel background */}
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-sage/30 blur-3xl" />

            {/* floating chips */}
            <motion.div
              className="absolute -left-6 top-4 bg-beige-light/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md font-mono text-xs flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              whileHover={{ scale: 1.08 }}
            >
              {'</>'} react
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-16 bg-blush-light/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md font-mono text-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              whileHover={{ scale: 1.08 }}
            >
              tailwind
            </motion.div>
            <motion.div
              className="absolute right-2 top-1/3 bg-skyblue-light/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md font-mono text-xs flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              whileHover={{ scale: 1.08 }}
            >
              <TaegukIcon className="w-4 h-4" /> GKS 2026
            </motion.div>
            <motion.div
              className="absolute left-2 -bottom-6 bg-beige-light/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md font-display italic text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
              whileHover={{ scale: 1.08 }}
            >
              화이팅!
            </motion.div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="order-2 md:order-2">
          <motion.div variants={item} className="eyebrow mb-4">
            Portfolio &amp; GKS Scholarship Profile
          </motion.div>
          <motion.h1
            variants={item}
            className="font-display text-4xl md:text-6xl leading-[1.05] mb-5"
          >
            Amna Bint E Rasheed
          </motion.h1>
          <motion.div
            variants={item}
            className="font-mono text-sm md:text-base text-coffee mb-6 flex flex-wrap items-center gap-2"
          >
            <span>Frontend Developer</span>
            <span className="text-ink-faint">→</span>
            <span>Software Engineer</span>
            <span className="text-ink-faint">→</span>
            <span className="text-hanbok-red">Samsung, Korea</span>
          </motion.div>
          <motion.p variants={item} className="text-ink/80 max-w-md mb-8 leading-relaxed">
            I design and build clean, responsive interfaces with React and Tailwind CSS,
            animate them with Framer Motion, and I'm studying Korean while preparing my
            application for the GKS scholarship.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-wider bg-coffee text-beige-light px-6 py-3.5 rounded-full
                         hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Let's Connect
            </a>
            <a
              href="#journey"
              className="font-mono text-xs uppercase tracking-wider border border-ink/25 px-6 py-3.5 rounded-full
                         hover:-translate-y-1 hover:bg-white/50 transition-all duration-300"
            >
              My Korean Journey
            </a>
          </motion.div>
          <motion.div variants={item} className="flex gap-8 border-t border-ink/15 pt-6 max-w-md">
            <div>
              <p className="font-display text-2xl">3</p>
              <p className="font-mono text-[0.7rem] text-ink-faint">freeCodeCamp Certs</p>
            </div>
            <div>
              <p className="font-display text-2xl">한국어</p>
              <p className="font-mono text-[0.7rem] text-ink-faint">Learning Korean</p>
            </div>
            <div>
              <p className="font-display text-2xl">GKS</p>
              <p className="font-mono text-[0.7rem] text-ink-faint">Target 2027</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export function TaegukIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 40 40" className={className}>
      <circle cx="20" cy="20" r="19" fill="none" stroke="#fff" strokeWidth="1" />
      <path
        d="M20 1 A9.5 9.5 0 0 1 20 20 A9.5 9.5 0 0 0 20 39 A19 19 0 0 0 20 1 Z"
        fill="#B4332A"
      />
      <path
        d="M20 1 A9.5 9.5 0 0 0 20 20 A9.5 9.5 0 0 1 20 39 A19 19 0 0 1 20 1 Z"
        fill="#16468C"
      />
    </svg>
  )
}
