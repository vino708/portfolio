// Navbar.js (no changes needed to the React component)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import profileImg from '../assets/home2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={profileImg} alt="Profile" className="profile-img" />
                    <span>Vino S</span>
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`} style={{cursor:'pointer'}}>
                    <li>
                        <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;