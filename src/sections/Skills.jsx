import React from "react";
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

// Skills: Technologies and tools grid
const Skills = () => {
  // List of skills and their icons
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

  // Render skills grid UI
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            {/* Skill icon */}
            <div className="icon">{skill.icon}</div>
            {/* Skill name */}
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
