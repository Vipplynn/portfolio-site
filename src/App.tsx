import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeaturedProjects from "./components/FeaturedProjects";
import Experience from "./components/Experience";
import SkillsDie from "./components/SkillsDie";

function App() {
  return (
    <div className="font-sans text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsDie />
        <FeaturedProjects />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
