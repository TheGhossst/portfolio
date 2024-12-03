import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { LifePath } from "./components/LifePath";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { InteractiveResume } from "./components/InteractiveResume";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
  const location = useLocation(); // Access current route information
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Update isResumeOpen whenever the location changes
  useEffect(() => {
    setIsResumeOpen(location.pathname === "/resume");
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <NavBar isResumeOpen={isResumeOpen} />
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
  );
}

export function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}