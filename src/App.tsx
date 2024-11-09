import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import { AboutMe } from "./components/AboutMe"
import { LifePath } from "./components/LifePath"
import { Projects} from "./components/Projects"

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero />
      <AboutMe />
      <LifePath />
      <Projects />
    </div>
  )
}