import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import { useLight } from "./context/useLight"


function App() {
  const { lightMode } = useLight()
  const bgLight = "absolute top-0 -z-[-2] antialiased overflow-x-hidden min-h-screen w-screen  bg-neutral-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  const bgDark = "absolute top-0 -z-[-2] text-neutral-50 antialiased overflow-x-hidden min-h-screen w-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  
  return (
    <div className= {lightMode ? bgDark : bgLight}>
      <div className="container mx-auto px-15 lg:px-50 py-10 flex flex-col justify-center">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences /> 
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App