import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { LifePath } from "./components/LifePath";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { InteractiveResume } from "./components/InteractiveResume";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutMe />
                <LifePath />
                <Projects />
              </>
            }
          />
          <Route path="/resume" element={<InteractiveResume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}