import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import "../scss/Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const toggleHam = () => {
    setIsOpen(!isOpen);

    // Toggle body overflow based on menu state
    if (!isOpen) {
      document.querySelector("section").style.overflow = "hidden";
      document.querySelector("section").style.position = "fixed";
    } else {
      document.querySelector("section").style.overflow = "auto";
      document.querySelector("section").style.position = "static";
    }
  };

  // Scroll to the specified section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile menu after clicking on a link
    setIsOpen(false);
    document.querySelector("section").style.overflow = "auto";
  };

  return (
    <nav>
      <div id="logoContainer">
        <Link to="/">
          <img src={Logo} alt="logo-MTM" />
        </Link>
      </div>
      <ul id="Links">
        {/* Use Link component for navigation */}
        <li>
          <p onClick={() => scrollToSection("about_me")}>About</p>
        </li>
        <li>
          <p onClick={() => scrollToSection("projects-container")}>Projects</p>
        </li>
        <li>
          <p onClick={() => scrollToSection("my_skills")}>Toolbox</p>
        </li>
        <li className="contact">
          <p onClick={() => scrollToSection("contact-container")}>Contact</p>
        </li>
      </ul>
      {/* Mobile menu */}
      <div id="mobileLinks" className={`${isOpen ? "activeMobileMenu" : ""}`}>
        <div className="mobile-top-box">
          {/* <button>
                        Resume
                    </button> */}
        </div>

        <li>
          <p onClick={() => scrollToSection("about_me")}>About</p>
        </li>
        <li>
          <p onClick={() => scrollToSection("projects-container")}>Projects</p>
        </li>
        <li>
          <p onClick={() => scrollToSection("my_skills")}>Toolbox</p>
        </li>
        <li className="contact">
          <p onClick={() => scrollToSection("contact-container")}>Contact</p>
        </li>
        <div className="linksFooter">
          <p>
            Copyright {currentYear} &copy;
            <span>MTM</span>
          </p>
          <p>Personal Portfolio website</p>
        </div>
      </div>
      {/* Hamburger menu icon */}
      <div
        onClick={toggleHam}
        id="HamMenuBox"
        className={`${isOpen ? "clickedHam" : ""}`}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
