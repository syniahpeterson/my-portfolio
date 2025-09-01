import { useState, useEffect } from "react";
import PortfolioNavbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

// Main App component
const App = () => {
  // Theme state (dark/light), persisted in localStorage
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // Update body class and persist theme on change
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Render main layout and all portfolio sections
  return (
    <main className={theme}>
      {/* Navigation bar with theme toggle */}
      <PortfolioNavbar theme={theme} setTheme={setTheme} />

      {/* Home section */}
      <section id="home">
        <Home theme={theme} />
      </section>

      {/* About section */}
      <section id="about">
        <About theme={theme} />
      </section>

      {/* Skills section */}
      <section id="skills">
        <Skills theme={theme} />
      </section>

      {/* Projects section */}
      <section id="projects">
        <Projects theme={theme} />
      </section>

      {/* Certifications section */}
      <section id="certifications">
        <Certifications theme={theme} />
      </section>

      {/* Contact section */}
      <section id="contact">
        <Contact theme={theme} />
      </section>

      {/* Footer section */}
      <section id="footer">
        <Footer theme={theme} />
      </section>
    </main>
  );
};

export default App;
