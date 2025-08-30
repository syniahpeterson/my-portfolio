import "../styles/Home.css";

// Home section component (landing area)
const Home = ({ theme }) => {
  return (
    <div className={`home-section ${theme}`}>
      <div className="home-container">
        {/* Profile image area */}
        <div className="home-image-container">
          <div className="image-glow"></div>
          <img
            src="./src/assets/profile-pic.jpg"
            alt="Profile"
            className="home-image"
          />
        </div>

        {/* Main text content */}
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
            4 FCC Certifications • 2 Freelance Projects • React, HTML, CSS, JS
          </p>
          {/* Call-to-action button */}
          <a href="#projects" className="btn btn-main mt-3">
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};

// Export Home section
export default Home;
