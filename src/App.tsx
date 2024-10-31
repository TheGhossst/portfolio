import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Hero />
    </div>
  )
}