import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="footer-logo gradient-text">JR</h2>
                        <p className="footer-tagline">Building secure & scalable digital experiences.</p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/Jackson-richard" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub Profile">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/jacksonrichard-j/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn Profile">
                            <FaLinkedin size={28} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} JR. All rights reserved.</p>
                    <p className="footer-built-with">
                        Built with React & Framer Motion
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
