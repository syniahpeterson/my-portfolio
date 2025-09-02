import React, { useEffect } from "react";
import "../styles/About.css";
import aboutImg from "../assets/about-pic.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

const About = ({ theme }) => {
  // About.jsx: Personal introduction, highlights, and scroll-triggered animation
  const aboutRef = useScrollAnimation(0.1);

  // Force visibility check on theme change
  useEffect(() => {
    // Ensure scroll animation updates on theme change
    const handleThemeChange = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          aboutRef.current.classList.add("active");
        } else {
          aboutRef.current.classList.remove("active");
        }
      }
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, [aboutRef]);

  return (
    <section id="about" ref={aboutRef} className={`about-section ${theme}`}>
      <div className="about-container">
        {/* Image */}
        {/* About image */}
        <div className="about-img-container">
          <img src={aboutImg} alt="About me graphic" className="about-img" />
        </div>

        {/* Content */}
        {/* About text and highlights */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hi, I'm Syniah — a passionate frontend developer with a strong
            foundation in React, JavaScript, and modern web design. I love
            crafting interactive, user-friendly websites and continuously
            learning new technologies to grow as a developer.
          </p>
          <p className="about-text">
            My journey started with freeCodeCamp certifications, freelance
            projects, and a Computer Science degree. I'm excited to bring my
            skills into real-world projects while staying curious and creative.
            🚀
          </p>

          {/* Highlights */}
          <div className="about-highlights">
            <div className="highlight-card">⚡ Fast Learner</div>
            <div className="highlight-card">🎨 Creative Designer</div>
            <div className="highlight-card">💻 Problem Solver</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
