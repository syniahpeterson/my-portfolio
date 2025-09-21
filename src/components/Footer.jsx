import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiFreecodecamp } from "react-icons/si";
import "../styles/Footer.css";

// Footer.jsx: Portfolio footer with quick links, social icons, scroll animation, and theme support
const Footer = ({ theme }) => {
  const footerRef = useRef(null);

  // Scroll animation: adds "active" class when in viewport and on theme change
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    // Listen for themechange and update active class immediately
    const handleThemeChange = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          footerRef.current.classList.add("active");
        } else {
          footerRef.current.classList.remove("active");
        }
      }
    };
    window.addEventListener("themechange", handleThemeChange);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
      window.removeEventListener("themechange", handleThemeChange);
    };
  }, []);

  // Scroll to top button handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className={`footer-section ${theme}`}>
      <div className="footer-container">
        {/* Quick navigation links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social and email icons */}
        <div className="footer-socials">
          <a
            href="https://github.com/syniahpeterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/syniahpeterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.freecodecamp.org/syniahpeterson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFreecodecamp />
          </a>
          <a href="mailto:syniahpeterson@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Back to Top button */}
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>

        {/* Copyright notice */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Syniah Peterson. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
