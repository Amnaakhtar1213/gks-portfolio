import { motion } from 'framer-motion'

// Soft, hand-placed cloud/blob shapes that drift slowly behind the hero.
// Purely decorative — kept behind content with pointer-events disabled.
export default function CloudBackground() {
  const clouds = [
    { top: '8%', left: '4%', size: 140, tone: 'bg-beige-light/70', dur: 22 },
    { top: '18%', right: '8%', size: 100, tone: 'bg-blush-light/70', dur: 26 },
    { top: '58%', left: '10%', size: 90, tone: 'bg-skyblue-light/70', dur: 20 },
    { top: '70%', right: '14%', size: 130, tone: 'bg-beige-light/60', dur: 24 },
    { top: '38%', left: '46%', size: 60, tone: 'bg-blush-light/50', dur: 18 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-2xl ${c.tone}`}
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            width: c.size,
            height: c.size * 0.6,
          }}
          animate={{ x: [0, 30, 0], y: [0, -14, 0] }}
          transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-beige-light/40" />
    </div>
  )
}
