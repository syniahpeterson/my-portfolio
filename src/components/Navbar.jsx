import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import useScrollSpy from "../hooks/useScrollSpy";

const PortfolioNavbar = ({ theme, setTheme }) => {
  // Section IDs for navigation
  const sections = ["home", "about", "skills", "projects", "certifications", "contact"];
  // Track which section is currently active (for scroll spy)
  const activeSection = useScrollSpy(sections, 80);

  // Track if navbar is scrolled past threshold
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track if mobile menu is expanded
  const [expanded, setExpanded] = useState(false);

  // Scroll to section and close menu on nav link click
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setExpanded(false);
  };

  // Toggle mobile menu open/close
  const handleToggleClick = () => {
    setExpanded((prev) => !prev);
  };

  // Toggle theme and close menu if open
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setExpanded(false);
  };

  // Render navbar
  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        {/* Brand logo/title */}
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>

        {/* Mobile menu toggler */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`custom-toggler ${expanded ? "open" : ""}`}
          onClick={handleToggleClick}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
        </Navbar.Toggle>

        {/* Navigation links and theme toggle */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {sections.map((sec) => (
              <Nav.Link
                key={sec}
                onClick={() => handleNavClick(sec)}
                className={activeSection === sec ? "active" : ""}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Nav.Link>
            ))}

            {/* Theme toggle button */}
            <Button
              variant="outline-light"
              className="ms-3"
              onClick={handleThemeToggle}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              {theme === "dark" ? (
                <FaSun size={20} color="var(--main-color)" />
              ) : (
                <FaMoon size={20} color="var(--main-color)" />
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export main navbar component
export default PortfolioNavbar;
