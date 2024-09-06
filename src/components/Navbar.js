// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
//import logo from "../assets/images/logo.png";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    const toggleNav = () => {
      setNavOpen(!navOpen);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust this value based on when you want the effect to kick in
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className={`navbar ${navOpen ? "open" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__logo">
        {/* <img src={logo} alt="Dambraham Foundation Logo" /> */}
        <h2>
          Dam<span>bra</span>ham
        </h2>
      </div>
      <button className="navbar__toggle" onClick={toggleNav}>
        ☰
      </button>
      <ul className={`navbar__links ${navOpen ? "navbar__links--open" : ""}`}>
        {/* <li><Link to="/" onClick={toggleNav}>Home</Link></li>
        <li><Link to="/about" onClick={toggleNav}>About Us</Link></li>
        <li><Link to="/projects" onClick={toggleNav}>Projects</Link></li>
        <li><Link to="/get-involved" onClick={toggleNav}>Get Involved</Link></li>
        <li><Link to="/impact" onClick={toggleNav}>Impact</Link></li>
        <li><Link to="/donate" onClick={toggleNav}>Donate</Link></li>
        <li><Link to="/news" onClick={toggleNav}>News & Media</Link></li>
        <li><Link to="/contact" onClick={toggleNav}>Contact Us</Link></li> */}

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/get-involved">Get Involved</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
        <li>
          <Link to="/news">News & Media</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
