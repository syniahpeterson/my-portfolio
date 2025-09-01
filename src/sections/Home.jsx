import "../styles/Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFreecodecamp } from "react-icons/si";

// Home: Landing section with profile, highlights, and social links
const Home = ({ theme }) => {
  return (
    <div className={`home-section ${theme}`}>
      <div className="home-container">
        {/* Profile image and animated glow */}
        <div className="home-image-container">
          <div className="image-glow"></div>
          <img
            src="./src/assets/profile-pic.jpg"
            alt="Profile"
            className="home-image"
          />
        </div>

        {/* Main text: name, subtitle, description, highlights */}
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

          {/* Resume download button */}
          <a
            href="/Syniah Peterson Resume.pdf"
            download
            className="resume-btn btn btn-main mt-3"
          >
            Download Resume
          </a>

          {/* Call-to-action button to projects */}
          <a href="#projects" className="btn btn-main mt-3">
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
