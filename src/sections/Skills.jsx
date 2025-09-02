import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import "../styles/skills.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Skills.jsx: Technology icons, skill cards, and scroll-triggered animation
const Skills = ({ theme }) => {
  const skillsRef = useScrollAnimation(0.1);

  // Ensure scroll animation updates on theme change
  useEffect(() => {
    const handleThemeChange = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          skillsRef.current.classList.add("active");
        } else {
          skillsRef.current.classList.remove("active");
        }
      }
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, [skillsRef]);

  // Skills data: name and icon for each technology
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Redux", icon: <SiRedux color="#764abc" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "GitHub", icon: <FaGithub color="#fff" /> },
  ];

  return (
    <section className={`skills ${theme}`} id="skills" ref={skillsRef}>
      <h2 className="section-title">Skills</h2> {/* Section title */}
      <div className="skills-grid">
        {" "}
        {/* Skill cards grid */}
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
