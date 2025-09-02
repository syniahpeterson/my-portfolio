import React, { useEffect } from "react";
import "../styles/Certifications.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Certifications.jsx: FCC certifications, cards, and scroll-triggered animation
const Certifications = ({ theme }) => {
  const sectionRef = useScrollAnimation(0.1);

  // Ensure scroll animation updates on theme change
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

  // Certifications data: title, description, and link for each FCC cert
  const certifications = [
    {
      title: "Responsive Web Design",
      description:
        "Covers HTML, CSS, Flexbox, Grid, and accessibility to build responsive websites.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/responsive-web-design",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      description:
        "Covers ES6, algorithms, data structures, OOP, and functional programming in JavaScript.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/javascript-algorithms-and-data-structures-v8",
    },
    {
      title: "Frontend Development Libraries",
      description:
        "Covers React, Redux, Bootstrap, jQuery, and Sass for building modern UIs.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/front-end-development-libraries",
    },
    {
      title: "Data Visualization",
      description:
        "Covers D3.js and JSON APIs to create charts, maps, and interactive data visualizations.",
      link: "https://www.freecodecamp.org/certification/syniahpeterson/data-visualization",
    },
  ];

  return (
    <section
      id="certifications"
      className={`certifications-section ${theme}`}
      ref={sectionRef}
    >
      <h2>Certifications</h2> {/* Section title */}
      <div className="certifications-flex">
        {" "}
        {/* Certification cards grid */}
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <FaFreeCodeCamp className="cert-icon" />
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a
              href={cert.link}
              className="cert-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
