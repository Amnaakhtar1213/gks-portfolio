// import { motion } from 'framer-motion'
// import { Code2, Palette, Braces, Sparkles, Plug, GitBranch } from 'lucide-react'
// import { RevealGroup, RevealItem } from './Reveal.jsx'
// import Reveal from './Reveal.jsx'

// const SKILLS = [
//   {
//     icon: Code2,
//     name: 'React',
//     desc: 'Building component-driven UIs with hooks and clean state management.',
//     tone: 'bg-skyblue-light',
//   },
//   {
//     icon: Palette,
//     name: 'Tailwind CSS',
//     desc: 'Utility-first styling for fast, consistent, responsive design systems.',
//     tone: 'bg-beige-deep',
//   },
//   {
//     icon: Braces,
//     name: 'JavaScript (ES6+)',
//     desc: 'Comfortable with modern syntax, array methods, and async logic.',
//     tone: 'bg-blush-light',
//   },
//   {
//     icon: Sparkles,
//     name: 'Framer Motion',
//     desc: 'Choreographing scroll reveals, hover states, and page-load sequences.',
//     tone: 'bg-sage-light',
//   },
//   {
//     icon: Plug,
//     name: 'API Integration',
//     desc: 'Fetching, handling, and rendering data from REST APIs cleanly.',
//     tone: 'bg-skyblue-light',
//   },
//   {
//     icon: GitBranch,
//     name: 'Git & GitHub',
//     desc: 'Version control basics — branching, commits, and clean history.',
//     tone: 'bg-beige-deep',
//   },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="section bg-sage-light/50 px-6 md:px-14 py-20 md:py-28">
//       <div className="max-w-6xl mx-auto">
//         <Reveal className="max-w-xl mb-14">
//           <div className="eyebrow mb-4">What I Bring</div>
//           <h2 className="font-display italic text-3xl md:text-4xl mb-3">Skills</h2>
//           <p className="text-ink-soft">
//             The tools I reach for to turn a design idea into a smooth, working interface.
//           </p>
//         </Reveal>

//         <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {SKILLS.map((s) => (
//             <RevealItem key={s.name}>
//               <motion.div
//                 whileHover={{ y: -8, rotate: -0.5 }}
//                 transition={{ type: 'spring', stiffness: 260, damping: 18 }}
//                 className={`rounded-2xl p-6 h-full border border-ink/10 ${s.tone} shadow-sm hover:shadow-lg transition-shadow duration-300`}
//               >
//                 <div className="w-11 h-11 rounded-full bg-coffee text-beige-light flex items-center justify-center mb-4">
//                   <s.icon size={20} />
//                 </div>
//                 <h3 className="font-display text-lg mb-2">{s.name}</h3>
//                 <p className="text-sm text-ink-soft leading-relaxed">{s.desc}</p>
//               </motion.div>
//             </RevealItem>
//           ))}
//         </RevealGroup>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Braces,
  FileCode2,
  Route,
  Boxes,
  ShieldCheck,
  Database,
  Smartphone,
  GitBranch,
  Plug,
  Sparkles,
  Globe,
} from 'lucide-react'

import { RevealGroup, RevealItem } from './Reveal.jsx'
import Reveal from './Reveal.jsx'

const SKILLS = [
  {
     icon: Code2,
    name: 'React',
    desc: 'Building component-driven UIs with hooks and clean state management.',
     tone: 'bg-skyblue-light',
   },
  {
    icon: Braces,
    name: 'JavaScript (ES6+)',
    desc: 'Using modern JavaScript for interactive interfaces, array methods, events, and application logic.',
    tone: 'bg-blush-light',
  },
  {
    icon: FileCode2,
    name: 'TypeScript',
    desc: 'Writing structured and type-safe frontend code while building projects with TypeScript.',
    tone: 'bg-sage-light',
  },
  {
    icon: Palette,
    name: 'Tailwind CSS',
    desc: 'Creating responsive and consistent user interfaces with utility-first CSS.',
    tone: 'bg-beige-deep',
  },
  {
    icon: Boxes,
    name: 'Context API',
    desc: 'Managing shared application state across React components without unnecessary prop passing.',
    tone: 'bg-skyblue-light',
  },
  {
    icon: Route,
    name: 'React Router',
    desc: 'Building multi-page experiences with client-side routing and protected routes.',
    tone: 'bg-blush-light',
  },
  {
    icon: ShieldCheck,
    name: 'Authentication',
    desc: 'Implementing login, signup, protected routes, user sessions, and logout functionality.',
    tone: 'bg-sage-light',
  },
  {
    icon: Database,
    name: 'LocalStorage',
    desc: 'Persisting application data such as users, saved items, carts, and application information.',
    tone: 'bg-beige-deep',
  },
  {
    icon: Smartphone,
    name: 'Responsive UI',
    desc: 'Designing interfaces that adapt smoothly across desktop, tablet, and mobile screen sizes.',
    tone: 'bg-skyblue-light',
  },
  {
    icon: Plug,
    name: 'REST API Integration',
    desc: 'Fetching, handling, and displaying external data in frontend applications.',
    tone: 'bg-blush-light',
  },
  {
    icon: GitBranch,
    name: 'Git & GitHub',
    desc: 'Using version control, repositories, commits, and GitHub to manage and publish projects.',
    tone: 'bg-sage-light',
  },
  {
    icon: Sparkles,
    name: 'Framer Motion',
    desc: 'Adding smooth animations, hover effects, transitions, and scroll-based reveals.',
    tone: 'bg-beige-deep',
  },
  {
    icon: Globe,
    name: 'Web Deployment',
    desc: 'Deploying frontend projects and making completed work available through live web links.',
    tone: 'bg-skyblue-light',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-sage-light/50 px-6 md:px-14 py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto">

        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">What I Bring</div>

          <h2 className="font-display italic text-3xl md:text-4xl mb-3">
            Skills
          </h2>

          <p className="text-ink-soft">
            The technologies and frontend development skills I use to build
            responsive, interactive, and practical web applications.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s) => (
            <RevealItem key={s.name}>
              <motion.div
                whileHover={{ y: -8, rotate: -0.5 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                }}
                className={`rounded-2xl p-6 h-full border border-ink/10 ${s.tone} shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="w-11 h-11 rounded-full bg-coffee text-beige-light flex items-center justify-center mb-4">
                  <s.icon size={20} />
                </div>

                <h3 className="font-display text-lg mb-2">
                  {s.name}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>
    </section>
  )
}