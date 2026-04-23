import React, { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import landingPage from "../assets/landing-page.png";
import palindromeChecker from "../assets/palindrome-checker.png";
import romanNumeralConverter from "../assets/roman-numeral-converter.png";
import pokemonSeachApp from "../assets/pokemon-search-app.png";
import randomQuoteMachine from "../assets/random-quote-machine.png";
import markdownPreviewer from "../assets/markdown-previewer.png";
import barChart from "../assets/bar-chart.png";
import scatterplot from "../assets/scatterplot-graph.png";
import srl from "../assets/second-run-logistics.png";
import kweens from "../assets/kweens-trucking.png";
import ww from "../assets/weekend-warriors.png";
import movie from "../assets/movie.png";
import crypto from "../assets/crypto.png";
import nbc from "../assets/nbc.png";

const certifications = [
  {
    name: "Responsive Web Design",
    color: "#9d4edd",
    link: "https://www.freecodecamp.org/certification/syniahpeterson/responsive-web-design",
  },
  {
    name: "JavaScript Algorithms",
    color: "#6a4c93",
    link: "https://www.freecodecamp.org/certification/syniahpeterson/javascript-algorithms-and-data-structures-v8",
  },
  {
    name: "Front End Libraries",
    color: "#5e60ce",
    link: "https://github.com/syniahpeterson/Frontend-Development-Libraries",
  },
  {
    name: "Data Visualization",
    color: "#4361ee",
    link: "https://github.com/syniahpeterson/Data-Visualization",
  },
  { name: "Freelance Projects", color: "#4cc9f0" },
];

// Projects.jsx: Project cards, certifications legend, and scroll-triggered animation
// Projects data: title, description, cert, links, and image for each project
const projects = [
  {
    title: "Second Run Logistics Site",
    desc: "A modern trucking logistics website designed to highlight core services such as LTL, FTL, and expedited shipping.",
    cert: "Freelance Projects",
    github: "https://github.com/syniahpeterson/SecondRunLogistics",
    demo: "https://www.secondrunlogistics.com/",
    img: srl,
  },
  {
    title: "Kweens Trucking Site",
    desc: "A clean, service-focused trucking website built to streamline customer inquiries and showcase freight capabilities.",
    cert: "Freelance Projects",
    github: "https://github.com/syniahpeterson/KweensTruckingLLC",
    demo: "https://www.kweenstrucking.com/",
    img: kweens,
  },
  {
    title: "Weekend Warriors Site",
    desc: "A local service website tailored for lawn care and small construction projects.",
    cert: "Freelance Projects",
    github: "https://github.com/syniahpeterson/WeekendWarriors",
    demo: "https://syniahpeterson.github.io/WeekendWarriors/",
    img: ww,
  },
  {
    title: "Nichole's Beauty Co. Site",
    desc: "A full-featured e-commerce frontend with cart management, filtering, and Stripe checkout integration.",
    cert: "Freelance Projects",
    github: "https://github.com/syniahpeterson/Nichole-Beauty-Co",
    demo: "https://nichole-beauty-co.vercel.app/",
    img: nbc,
  },
  {
    title: "Movie Watchlist App",
    desc: "A movie management application that enables users to search, track, and organize films with watch status, ratings, and persistent local storage.",
    cert: "Front End Libraries",
    github: "https://github.com/syniahpeterson/movie-watchlist-app",
    demo: "https://movie-watchlist-app-opal-one.vercel.app/",
    img: movie,
  },
  {
    title: "Crypto Price Tracker",
    desc: "A real-time cryptocurrency tracking application that retrieves and displays asset data through structured API requests and optimized search performance.",
    cert: "Front End Libraries",
    github: "https://github.com/syniahpeterson/crypto-price-tracker",
    demo: "https://crypto-price-tracker-kappa-rose.vercel.app/",
    img: crypto,
  },
  {
    title: "Landing Page",
    desc: "A responsive landing page built with HTML and CSS, designed to highlight key features, capture attention, and engage users.",
    cert: "Responsive Web Design",
    github:
      "https://github.com/syniahpeterson/HTML-CSS/tree/master/Product-Landing-Page",
    demo: "https://syniahpeterson.github.io/HTML-CSS/Product-Landing-Page/",
    img: landingPage,
  },
  {
    title: "Palindrome Checker",
    desc: "A JavaScript program that verifies whether a given string is a palindrome, ignoring punctuation, spacing, and capitalization.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Palindrome-Checker",
    demo: "https://syniahpeterson.github.io/JavaScript/Palindrome-Checker/",
    img: palindromeChecker,
  },
  {
    title: "Roman Numeral Converter",
    desc: "Converts numbers into Roman numerals using JavaScript, demonstrating logic, loops, and conditionals for accurate numeral representation.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Roman-Numeral-Converter",
    demo: "https://syniahpeterson.github.io/JavaScript/Roman-Numeral-Converter/",
    img: romanNumeralConverter,
  },
  {
    title: "Pokémon Search App",
    desc: "A responsive JavaScript app that lets users search and explore Pokémon creatures, displaying details dynamically with interactive UI elements.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Pokemon-Search-App",
    demo: "https://syniahpeterson.github.io/JavaScript/Pokemon-Search-App/",
    img: pokemonSeachApp,
  },
  {
    title: "Random Quote Machine",
    desc: "A React app that displays random quotes with the option to generate new ones and share directly to social media.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/Random-Quote-Machine",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/Random-Quote-Machine/",
    img: randomQuoteMachine,
  },
  {
    title: "Markdown Previewer",
    desc: "A React-based previewer that converts GitHub-flavored Markdown into formatted HTML in real time as the user types.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/Markdown-Previewer",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/Markdown-Previewer/",
    img: markdownPreviewer,
  },
  {
    title: "Bar Chart",
    desc: "An interactive D3.js bar chart visualizing U.S. GDP data, featuring tooltips, hover effects, and dynamic scaling for responsive presentation.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/bar-chart.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/bar-chart.html",
    img: barChart,
  },
  {
    title: "Scatterplot Graph",
    desc: "A D3.js scatterplot charting professional cycling times against doping allegations, with labeled axes, tooltips, and interactive data point highlights.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/scatterplot-graph.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/scatterplot-graph.html",
    img: scatterplot,
  },
];

const Projects = ({ theme }) => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  // IntersectionObserver for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Ensure scroll animation updates on theme change
  useEffect(() => {
    const handleThemeChange = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setActive(inView);
      }
    };
    window.addEventListener("themechange", handleThemeChange);
    return () => window.removeEventListener("themechange", handleThemeChange);
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`projects-section ${theme} ${active ? "active" : ""}`}
    >
      <h2 className="projects-title">Projects</h2> {/* Section title */}
      {/* Certifications legend for project badges */}
      <div className="projects-legend">
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-legend"
          >
            <span
              className="cert-badge"
              style={{ backgroundColor: cert.color }}
            ></span>
            {cert.name}
          </a>
        ))}
      </div>
      {/* Scrollable row of project cards */}
      <div className="projects-row">
        {projects.map((proj, idx) => {
          const certColor =
            certifications.find((c) => c.name === proj.cert)?.color || "#fff";
          return (
            <div className="project-card" key={idx}>
              <div
                className="project-badge"
                style={{ backgroundColor: certColor }}
              >
                {proj.cert}
              </div>
              <img src={proj.img} alt={proj.title} className="project-img" />
              <h3 className="project-card-title">{proj.title}</h3>
              <p className="project-card-desc">{proj.desc}</p>
              <div className="project-card-links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
                {proj.demo && (
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* See More button */}
      <div className="more-projects">
        <a
          href="https://github.com/syniahpeterson/Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="more-projects-btn"
        >
          See More Projects →
        </a>
      </div>
    </section>
  );
};

export default Projects;
