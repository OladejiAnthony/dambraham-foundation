import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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
            <div className="navbar__header">
                <div className="navbar__logo">
                    <h2>
                        Dam<span>bra</span>ham
                    </h2>
                    <h2>
                        Foun<span>da</span>tion
                    </h2>
                </div>
                <button className="navbar__toggle" onClick={toggleNav}>
                    {navOpen ? "✖" : "☰"} {/* Toggle between X and hamburger */}
                </button>
            </div>
            <ul className={`navbar__links ${navOpen ? "navbar__links--open" : ""}`}>
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


