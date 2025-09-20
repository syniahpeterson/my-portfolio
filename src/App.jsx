// App.jsx: Main portfolio layout, theme management, and section rendering
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
const App = () => {
  // Theme state (dark/light), persisted in localStorage
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // Theme logic: update body class, persist theme, and notify scroll-animated components
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
    localStorage.setItem("theme", theme);
    // Dispatch themechange event so scroll-animated components update immediately
    window.dispatchEvent(new Event("themechange"));
  }, [theme]);

  // Render main layout and all portfolio sections
  return (
    <main className={theme}>
      {/* Navigation bar with theme toggle */}
      <PortfolioNavbar theme={theme} setTheme={setTheme} />

      {/* Render sections directly — each component renders its own <section> */}
      <Home theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Certifications theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </main>
  );
};

export default App;
