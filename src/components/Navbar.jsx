import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Internships', to: 'internships' }
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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
            <div className="container">
                <div className="nav-container">
                    <Link to="home" smooth={true} duration={500} className="logo-container cursor-pointer">
                        <div className="logo-badge">{'</>'}</div>
                        <span className="logo-text">Jackson Richard J</span>
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
                        <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-secondary nav-cta">
                            Contact
                        </Link>
                    </nav>

                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
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
                                <li className="mobile-cta">
                                    <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-secondary" onClick={closeMobileMenu}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
