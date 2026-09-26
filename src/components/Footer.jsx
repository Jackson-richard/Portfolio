import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <section id="contact" className="footer-section">
            <div className="footer-decoration">{"}"}</div>
            <div className="container">

                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="footer-title">Let's build something.</h2>
                    <p className="footer-subtitle">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
                    </p>
                    <a href="mailto:jacksonrichard.dev@gmail.com" className="footer-cta">
                        Say Hello <FaEnvelope />
                    </a>
                </motion.div>

                <div className="footer-bottom">
                    <div className="footer-brand">
                        Jackson Richard J
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/Jackson-richard" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub Profile">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/jacksonrichard-j/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn Profile">
                            <FaLinkedin size={24} />
                        </a>
                    </div>

                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} JR. Built with React.
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;
