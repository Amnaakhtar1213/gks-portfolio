import { motion } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from './Reveal.jsx'

const LANGUAGES = [
  { name: 'Urdu', note: 'Native', pct: 96 },
  { name: 'English', note: 'Fluent', pct: 82 },
  { name: 'Korean (한국어)', note: 'Beginner · 학습 중', pct: 28 },
]

const HANGUL = [
  { ch: '안녕', roman: 'annyeong', mean: 'hello' },
  { ch: '감사', roman: 'gamsa', mean: 'thanks' },
  { ch: '화이팅', roman: 'hwaiting', mean: 'fighting / go for it' },
  { ch: '공부', roman: 'gongbu', mean: 'to study' },
  { ch: '친구', roman: 'chingu', mean: 'friend' },
  { ch: '꿈', roman: 'kkum', mean: 'dream' },
]

export default function LearningJourney() {
  return (
    <section id="journey" className="section bg-blush-light/50 px-6 md:px-14 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">한국어 공부</div>
          <h2 className="font-display italic text-3xl md:text-4xl mb-3">Learning Journey</h2>
          <p className="text-ink-soft">
            Alongside code, I'm learning to read, write, and speak Korean — one hangul
            character at a time.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-14">
          {/* Language progress */}
          <div className="space-y-7">
            {LANGUAGES.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-display text-lg">{l.name}</span>
                  <span className="font-mono text-[0.7rem] text-ink-faint">{l.note}</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, ease: [0.22, 0.9, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-sage-deep to-coffee-light"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Hangul flashcards */}
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-ink-faint mb-5">
              Hangul Practice — hover a card
            </p>
            <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {HANGUL.map((h) => (
                <RevealItem key={h.ch}>
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative h-28 rounded-xl cursor-default"
                  >
                    <div
                      className="absolute inset-0 rounded-xl bg-beige-light border border-ink/10 flex items-center justify-center [backface-visibility:hidden]"
                    >
                      <span className="font-display text-2xl">{h.ch}</span>
                    </div>
                    <div
                      className="absolute inset-0 rounded-xl bg-sage-deep text-beige-light flex flex-col items-center justify-center gap-1 [backface-visibility:hidden]"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <span className="font-mono text-sm">{h.roman}</span>
                      <span className="text-[0.7rem] text-beige-light/80">{h.mean}</span>
                    </div>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
