// Certifications.jsx
import React, { useEffect } from "react";
import "../styles/Certifications.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import useScrollAnimation from "../hooks/useScrollAnimation";

const Certifications = ({ theme }) => {
  const sectionRef = useScrollAnimation(0.1);

  useEffect(() => {
    const handleThemeChange = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          sectionRef.current.classList.add("active");
        } else {
          sectionRef.current.classList.remove("active");
        }
      }
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, [sectionRef]);

  const certifications = [
    {
      title: "Responsive Web Design",
      description:
        "Covers HTML, CSS, Flexbox, Grid, and accessibility to build responsive websites.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/responsive-web-design",
      repo: "https://github.com/syniahpeterson/HTML-CSS",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description:
        "Covers ES6, algorithms, data structures, OOP, and functional programming in JavaScript.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/javascript-algorithms-and-data-structures-v8",
      repo: "https://github.com/syniahpeterson/JavaScript",
    },
    {
      title: "Frontend Development Libraries",
      description:
        "Covers React, Redux, Bootstrap, jQuery, and Sass for building modern UIs.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/front-end-development-libraries",
      repo: "https://github.com/syniahpeterson/Frontend-Development-Libraries",
    },
    {
      title: "Data Visualization",
      description:
        "Covers D3.js and JSON APIs to create charts, maps, and interactive data visualizations.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/data-visualization",
      repo: "https://github.com/syniahpeterson/Data-Visualization",
    },
  ];

  return (
    <section
      id="certifications"
      className={`certifications-section ${theme}`}
      ref={sectionRef}
    >
      <h2>Certifications</h2>
      <div className="certifications-flex">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <FaFreeCodeCamp className="cert-icon" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <div className="cert-buttons">
              <a
                href={cert.link}
                className="cert-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certification
              </a>
              <a
                href={cert.repo}
                className="cert-link github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="github-icon" /> Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
