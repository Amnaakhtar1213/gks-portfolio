import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.9, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function RevealGroup({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className = '', y = 20 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.9, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
