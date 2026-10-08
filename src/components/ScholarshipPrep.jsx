import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from './Reveal.jsx'

const ROADMAP = [
  {
    step: '01',
    title: 'Strengthen Frontend Foundations',
    text: 'Complete freeCodeCamp certifications, deepen React and Tailwind practice.',
  },
  {
    step: '02',
    title: 'Build a Portfolio Worth Showing',
    text: 'Ship 3–5 polished projects, including this animated GKS portfolio site.',
  },
  {
    step: '03',
    title: 'Reach Conversational Hangul',
    text: 'Study Korean daily — reading, writing, and basic conversation practice.',
  },
  {
    step: '04',
    title: 'Prepare GKS Application Materials',
    text: 'Draft and refine my Statement of Purpose, transcripts, and recommendation letters.',
  },
  {
    step: '05',
    title: 'Submit & Prepare for Interview',
    text: 'Apply for the 2026 GKS cycle and prepare for the scholarship interview.',
  },
]

const SOP_HIGHLIGHTS = [
  'A frontend developer\'s path into software engineering, told through real projects.',
  'Why Korea\'s engineering culture and Samsung specifically match my goals.',
  'How learning Hangul reflects my commitment to integrating, not just studying, in Korea.',
  'A concrete study and career roadmap for life during and after the scholarship.',
]

export default function ScholarshipPrep() {
  const trackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.8', 'end 0.4'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="scholarship" className="section bg-skyblue-light/50 px-6 md:px-14 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">Preparing With Intention</div>
          <h2 className="font-display italic text-3xl md:text-4xl mb-3">Scholarship Prep</h2>
          <p className="text-ink-soft">
            My roadmap toward a strong GKS application — study plan, SOP focus, and the
            steps I'm working through right now.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14">
          {/* Roadmap timeline */}
          <div className="relative pl-11" ref={trackRef}>
            <div className="absolute left-[9px] top-1.5 bottom-1.5 w-0.5 bg-ink/10" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[9px] top-1.5 w-0.5 bg-gradient-to-b from-sage-deep to-coffee"
            />

            {ROADMAP.map((r, i) => (
              <Reveal key={r.step} delay={i * 0.05} className="relative pb-11 last:pb-0">
                <span className="absolute -left-11 top-0.5 w-5 h-5 rounded-full bg-beige-light border-2 border-sage flex items-center justify-center" />
                <span className="font-mono text-[0.68rem] uppercase tracking-widest text-ink-faint block mb-1">
                  Step {r.step}
                </span>
                <h3 className="font-display text-lg mb-1.5">{r.title}</h3>
                <p className="text-sm text-ink-soft max-w-md">{r.text}</p>
              </Reveal>
            ))}
          </div>

          {/* SOP highlights */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink/10 bg-beige-light p-7 sticky top-24">
              <h3 className="font-display italic text-xl mb-5">SOP Highlights</h3>
              <ul className="space-y-4">
                {SOP_HIGHLIGHTS.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                    <span className="font-mono text-hanbok-red mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
