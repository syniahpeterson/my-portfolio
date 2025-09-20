import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import useScrollSpy from "../hooks/useScrollSpy";
import "../styles/Navbar.css";

const PortfolioNavbar = ({ theme, setTheme }) => {
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "certifications",
    "contact",
  ];
  const activeSection = useScrollSpy(sections, 80);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [expanded, setExpanded] = useState(false);
  const [closing, setClosing] = useState(false);
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (expanded) {
      setClosing(true);
      setExpanded(false);
      setTimeout(() => {
        setClosing(false);
      }, 700);
    } else {
      setExpanded(false);
      setClosing(false);
    }
  };
  const handleToggleClick = () => {
    if (expanded) {
      setClosing(true);
      setExpanded(false);
      setTimeout(() => {
        setClosing(false);
      }, 700);
    } else {
      setExpanded(true);
      setClosing(false);
    }
  };
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (expanded) {
      setClosing(true);
      setExpanded(false);
      setTimeout(() => {
        setClosing(false);
      }, 700);
    } else {
      setExpanded(false);
      setClosing(false);
    }
  };
  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}${
        closing ? " navbar-closing" : ""
      }`}
    >
      <Container>
        <div className={`navbar-static-row${closing ? " closing" : ""}`}>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Button
            variant="outline-light"
            className="ms-2 theme-toggle-btn"
            onClick={handleThemeToggle}
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            {theme === "dark" ? (
              <FaSun size={20} color="var(--main-color)" />
            ) : (
              <FaMoon size={20} color="var(--main-color)" />
            )}
          </Button>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`custom-toggler${expanded ? " open" : ""}`}
            onClick={handleToggleClick}
          >
            {expanded ? (
              <span className="menu-x">x</span>
            ) : (
              <>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
              </>
            )}
          </Navbar.Toggle>
        </div>
      </Container>
      <div className="navbar-links-row d-none d-lg-flex">
        <Nav className="ms-auto align-items-center">
          {sections.map((sec) => (
            <Nav.Link
              key={sec}
              onClick={() => handleNavClick(sec)}
              className={activeSection === sec ? "active" : ""}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      {(expanded || closing) && (
        <div
          className={`navbar-dropdown-content d-lg-none${
            expanded ? " open" : ""
          }${closing ? " closing" : ""}`}
        >
          <div
            className={`navbar-dropdown-box-absolute${expanded ? " open" : ""}${
              closing ? " closing" : ""
            }`}
          >
            <div
              className={`navbar-dropdown-bg${expanded ? " open" : ""}${
                closing ? " closing" : ""
              }`}
            ></div>
            <Nav
              className="ms-auto align-items-center"
              style={{ position: "relative", zIndex: 1 }}
            >
              {sections.map((sec, idx) => (
                <Nav.Link
                  key={sec}
                  onClick={() => handleNavClick(sec)}
                  className={activeSection === sec ? "active" : ""}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default PortfolioNavbar;
