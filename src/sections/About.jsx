import React from "react";
import "../styles/About.css";
import aboutImg from "../assets/about-pic.jpg";

// About: Personal intro, image, and highlights
const About = ({ theme }) => {
  return (
    <section id="about" className={`about-section ${theme}`}>
      <div className="about-container">
        {/* Profile image (left column) */}
        <div className="about-img-container">
          <img src={aboutImg} alt="About me graphic" className="about-img" />
        </div>

        {/* Main content: title, intro paragraphs, highlights */}
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

          {/* Highlight cards: strengths */}
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
