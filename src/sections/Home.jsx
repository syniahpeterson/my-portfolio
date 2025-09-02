import "../styles/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFreecodecamp } from "react-icons/si";
import useScrollAnimation from "../hooks/useScrollAnimation";
import React, { useEffect } from "react";

// Home.jsx: Landing section with profile, intro, social links, and scroll-triggered animation
const Home = ({ theme }) => {
  const homeRef = useScrollAnimation(0.1);

  // Ensure scroll animation updates on theme change
  useEffect(() => {
    const handleThemeChange = () => {
      if (homeRef.current) {
        const rect = homeRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          homeRef.current.classList.add("active");
        } else {
          homeRef.current.classList.remove("active");
        }
      }
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, [homeRef]);

  return (
    <section ref={homeRef} className={`home-section ${theme}`}>
      <div className="home-container">
        {/* Profile image and glow effect */}
        <div className="home-image-container">
          <div className="image-glow"></div>
          <img
            src="./src/assets/profile-pic.jpg"
            alt="Profile"
            className="home-image"
          />
        </div>

        {/* Intro text, highlights, and social links */}
        <div className="home-text">
          <h1>Hi, I’m Syniah Peterson</h1>
          <p className="subtitle">
            Frontend Web Developer | React & JavaScript Enthusiast
          </p>
          <p className="description">
            I build responsive, interactive web applications that turn ideas
            into polished websites.
          </p>
          <p className="highlights">
            4 FCC Certifications • 2 Freelance Projects • React, HTML, CSS, JS,
            Bootstrap
          </p>

          {/* Social links: GitHub, LinkedIn, freeCodeCamp */}
          <div className="home-socials">
            <a
              href="https://github.com/syniahpeterson"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/syniahpeterson"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.freecodecamp.org/syniahpeterson"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SiFreecodecamp />
            </a>
          </div>

          {/* Resume download and projects navigation buttons */}
          <div className="home-buttons">
            <a
              href="/Syniah Peterson Resume.pdf"
              download
              className="btn btn-main"
            >
              Download Resume
            </a>
            <a href="#projects" className="btn btn-main">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
