import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ScholarshipPrep from './components/ScholarshipPrep.jsx'
import LearningJourney from './components/LearningJourney.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ScholarshipPrep />
      <LearningJourney />
      <Contact />
      <Footer />
    </div>
  )
}
