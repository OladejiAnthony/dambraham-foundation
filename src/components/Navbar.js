import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${navOpen ? "open" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="navbar__header">
        <div className="navbar__logo">
          <Link to="/" className="navbar__image">
            <img src={logo} alt="logo" />
          </Link>
          <div className="navbar__text">
            <h3>
              Dam<span>bra</span>ham
            </h3>
            <h3>
              Foun<span>da</span>tion
            </h3>
          </div>
        </div>
        <button className="navbar__toggle" onClick={toggleNav}>
          {navOpen ? "✖" : "☰"} {/* Toggle between X and hamburger */}
        </button>
      </div>
      <ul className={`navbar__links ${navOpen ? "navbar__links--open" : ""}`}>
        <li>
          <Link to="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeNav}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeNav}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/get-involved" onClick={closeNav}>
            Get Involved
          </Link>
        </li>
        <li>
          <Link to="/donate" onClick={closeNav}>
            Donate
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={closeNav}>
            News & Media
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeNav}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
