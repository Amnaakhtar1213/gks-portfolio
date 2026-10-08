import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section bg-beige-light px-6 md:px-14 py-20 md:py-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <Reveal>
          <div className="eyebrow mb-4">Who I Am</div>
          <h2 className="font-display italic text-3xl md:text-4xl leading-tight">
            About Me
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            I'm a frontend developer based in Pakistan, currently deepening my skills in{' '}
            <strong className="text-ink">React</strong>{' ,'}
             <strong className="text-ink">TypeScript</strong> and{' '}
            <strong className="text-ink">Tailwind CSS</strong> after building a strong
            foundation in HTML, CSS and JavaScript. I care about interfaces that feel
            calm, considered, and alive with small motion.
          </p>
          <p>
            Alongside my technical growth, I'm studying{' '}
            <strong className="text-ink">Hangul</strong> and building my everyday Korean,
            and preparing my application for the{' '}
            <strong className="text-ink">Global Korea Scholarship (GKS)</strong> — with
            the long-term goal of becoming a software engineer at Samsung.
          </p>
          <p>
            This site itself is part of that practice: a hand-built, animated portfolio
            that doubles as a professional profile for my scholarship application.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
