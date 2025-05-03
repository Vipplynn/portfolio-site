import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeaturedProjects from "./components/FeaturedProjects";


function App() {
  return (
    <div className="font-sans text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
