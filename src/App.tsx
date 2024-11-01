import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import { AboutMe } from "./components/AboutMe"

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero />
      <AboutMe />
    </div>
  )
}