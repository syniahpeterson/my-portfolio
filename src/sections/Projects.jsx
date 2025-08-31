import React from "react";
import "../styles/Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// React, styles, images, and UI libraries
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
  { name: "Front End Libraries", color: "#5e60ce", link: "#" },
  { name: "Data Visualization", color: "#4361ee", link: "#" },
  { name: "Freelance Projects", color: "#4cc9f0" },
];

// Data for projects; each card has title, description, and links
const projects = [
  {
    title: "Survey Form",
    desc: "A responsive web form built with HTML, CSS, and JavaScript that collects user feedback and validates inputs effectively.",
    cert: "Responsive Web Design",
    github:
      "https://github.com/syniahpeterson/HTML-CSS/tree/master/Survey-Form",
    demo: "https://syniahpeterson.github.io/HTML-CSS/Survey-Form/",
    img: "/images/survey-form.png",
  },
  {
    title: "Tribute Page",
    desc: "A responsive tribute webpage built with HTML and CSS, showcasing Aretha Franklin's life, achievements, and legacy.",
    cert: "Responsive Web Design",
    github:
      "https://github.com/syniahpeterson/HTML-CSS/tree/master/Tribute-Page",
    demo: "https://syniahpeterson.github.io/HTML-CSS/Tribute-Page/",
    img: "/images/tribute-page.png",
  },
  {
    title: "Landing Page",
    desc: "A responsive landing page built with HTML and CSS, designed to highlight key features, capture attention, and engage users.",
    cert: "Responsive Web Design",
    github:
      "https://github.com/syniahpeterson/HTML-CSS/tree/master/Product-Landing-Page",
    demo: "https://syniahpeterson.github.io/HTML-CSS/Product-Landing-Page/",
    img: "/images/landing-page.png",
  },
  {
    title: "Technical Page",
    desc: "A responsive technical documentation page built with HTML and CSS, presenting organized information, code examples, and clear instructions.",
    cert: "Responsive Web Design",
    github:
      "https://github.com/syniahpeterson/HTML-CSS/tree/master/Technical-Documentation-Page",
    demo: "https://syniahpeterson.github.io/HTML-CSS/Technical-Documentation-Page/",
    img: "/images/technical-page.png",
  },
  {
    title: "Portfolio",
    desc: "A responsive portfolio webpage built with HTML and CSS, showcasing projects, skills, and personal achievements in a clean layout.",
    cert: "Responsive Web Design",
    github:
      "https://github.com/syniahpeterson/HTML-CSS/tree/master/Personal-Portfolio",
    demo: "https://syniahpeterson.github.io/HTML-CSS/Personal-Portfolio/",
    img: "/images/portfolio.png",
  },
  {
    title: "Palindrome Checker",
    desc: "A JavaScript program that verifies whether a given string is a palindrome, ignoring punctuation, spacing, and capitalization.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Palindrome-Checker",
    demo: "https://syniahpeterson.github.io/JavaScript/Palindrome-Checker/",
    img: "/images/palindrome-checker.png",
  },
  {
    title: "Roman Numeral Converter",
    desc: "Converts numbers into Roman numerals using JavaScript, demonstrating logic, loops, and conditionals for accurate numeral representation.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Roman-Numeral-Converter",
    demo: "https://syniahpeterson.github.io/JavaScript/Roman-Numeral-Converter/",
    img: "/images/roman-numeral-converter.png",
  },
  {
    title: "Telephone Number Validator",
    desc: "Validates US telephone numbers using JavaScript and regular expressions, ensuring proper format and handling edge cases.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Telephone-Number-Validator",
    demo: "https://syniahpeterson.github.io/JavaScript/Telephone-Number-Validator/",
    img: "/images/telephone-number-validator.png",
  },
  {
    title: "Cash Register",
    desc: "Simulates a cash register in JavaScript that calculates change, handles insufficient funds, and updates transaction status dynamically.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Cash-Register",
    demo: "https://syniahpeterson.github.io/JavaScript/Cash-Register/",
    img: "/images/cash-register.png",
  },
  {
    title: "Pokémon Search App",
    desc: "A responsive JavaScript app that lets users search and explore Pokémon creatures, displaying details dynamically with interactive UI elements.",
    cert: "JavaScript Algorithms",
    github:
      "https://github.com/syniahpeterson/JavaScript/tree/main/Pokemon-Search-App",
    demo: "https://syniahpeterson.github.io/JavaScript/Pokemon-Search-App/",
    img: "/images/pokemon-search-app.png",
  },
  {
    title: "Random Quote Machine",
    desc: "A React app that displays random quotes with the option to generate new ones and share directly to social media.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/Random-Quote-Machine",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/Random-Quote-Machine/",
    img: "/images/random-quote-machine.png",
  },
  {
    title: "Markdown Previewer",
    desc: "A React-based previewer that converts GitHub-flavored Markdown into formatted HTML in real time as the user types.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/Markdown-Previewer",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/Markdown-Previewer/",
    img: "/images/markdown-previewer.png",
  },
  {
    title: "Drum Machine",
    desc: "An interactive React app that plays different drum sounds via clickable pads or keyboard keys, with volume and power controls.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/Drum-Machine",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/Drum-Machine/",
    img: "/images/drum-machine.png",
  },
  {
    title: "JavaScript Calculator",
    desc: "A React calculator app that performs basic arithmetic operations with proper order of operations and an intuitive, responsive interface.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/JavaScript-Calculator",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/JavaScript-Calculator/",
    img: "/images/javascript-calculator.png",
  },
  {
    title: "25 + 5 Clock",
    desc: "A React Pomodoro-style clock with customizable 25-minute sessions and 5-minute breaks, complete with start, pause, and reset controls.",
    cert: "Front End Libraries",
    github:
      "https://github.com/syniahpeterson/Frontend-Development-Libraries/tree/main/Projects/25%2B5-Clock",
    demo: "https://syniahpeterson.github.io/Frontend-Development-Libraries/Projects/25+5-Clock/",
    img: "/images/25+5-clock.png",
  },
  {
    title: "Bar Chart",
    desc: "An interactive D3.js bar chart visualizing U.S. GDP data, featuring tooltips, hover effects, and dynamic scaling for responsive presentation.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/bar-chart.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/bar-chart.html",
    img: "/images/bar-chart.png",
  },
  {
    title: "Scatterplot Graph",
    desc: "A D3.js scatterplot charting professional cycling times against doping allegations, with labeled axes, tooltips, and interactive data point highlights.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/scatterplot-graph.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/scatterplot-graph.html",
    img: "/images/scatterplot-graph.png",
  },
  {
    title: "Heat Map",
    desc: "A D3.js heat map showing global temperature variations across years and months, with a color scale legend and interactive tooltips.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/heat-map.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/heat-map.html",
    img: "/images/heat-map.png",
  },
  {
    title: "Choropleth Map",
    desc: "A D3.js choropleth map of U.S. counties, displaying educational attainment levels through color shading and tooltips for detailed insights.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/choropleth-map.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/choropleth-map.html",
    img: "/images/choropleth-map.png",
  },
  {
    title: "Treemap Diagram",
    desc: "A D3.js treemap diagram visualizing movie sales data by category, with hover tooltips and proportional rectangles representing hierarchical relationships.",
    cert: "Data Visualization",
    github:
      "https://github.com/syniahpeterson/Data-Visualization/blob/main/Projects/treemap-diagram.html",
    demo: "https://syniahpeterson.github.io/Data-Visualization/Projects/treemap-diagram.html",
    img: "/images/treemap-diagram.png",
  },
  {
    title: "Second Run Logistics Site",
    desc: "Coming Soon!",
    cert: "Freelance Projects",
    github: "#",
    demo: "https://www.secondrunlogistics.com/",
    img: "/images/second-run-logistics.png",
  },
];

const Projects = () => {
  return (
    <section className="projects-section second-bg" id="projects">
      <h2 className="projects-title">Projects</h2>

      {/* Certifications Legend */}
      <div className="projects-legend">
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
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

      {/* Scrollable Projects Row */}
      <div className="projects-row bg-color">
        {projects.map((proj, idx) => {
          const certColor =
            certifications.find((c) => c.name === proj.cert)?.color || "#fff";
          return (
            <div className="project-card second-bg" key={idx}>
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
    </section>
  );
};

// Export Projects section
export default Projects;
