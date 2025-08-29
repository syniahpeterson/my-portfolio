import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import useScrollSpy from "../hooks/useScrollSpy";

function PortfolioNavbar() {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useScrollSpy(sections, 80);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [expanded, setExpanded] = useState(false);

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

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`custom-toggler ${expanded ? "open" : ""}`}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
        </Navbar.Toggle>
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
            <Button
              variant="outline-light"
              className="ms-3"
              onClick={toggleTheme}
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
}

export default PortfolioNavbar;
