import { TaegukIcon } from './Hero.jsx'

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-14 py-8 bg-sage-light font-mono text-[0.7rem] text-ink-faint">
      <span>&copy; 2026 Amna Bin Tarasheed</span>
      <TaegukIcon className="w-4 h-4" />
      <span>Built for the GKS Scholarship</span>
    </footer>
  )
}
