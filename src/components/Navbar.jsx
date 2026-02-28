import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Internships', to: 'internships' },
    { name: 'About', to: 'about' }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-container">
                <Link to="home" smooth={true} duration={500} className="logo gradient-text cursor-pointer">
                    JR
                </Link>

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    activeClass="active"
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="nav-link cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="nav-socials hidden-mobile">
                    <a href="https://github.com/Jackson-richard" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaGithub size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/jacksonrichard-j/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaLinkedin size={22} />
                    </a>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="mobile-nav-list">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        activeClass="active"
                                        to={link.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        className="mobile-nav-link"
                                        onClick={closeMobileMenu}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="mobile-socials">
                                <a href="https://github.com/Jackson-richard" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaGithub size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/jacksonrichard-j/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedin size={24} />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
