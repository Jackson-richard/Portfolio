import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-decoration dec-1">✦</div>
            <div className="hero-decoration dec-2">●</div>

            <div className="container">
                <div className="hero-grid">

                    {/* LEFT SIDE: Typography and Info */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="hero-mobile-layout-order">
                            <div className="hero-eyebrow">
                                FULL-STACK DEVELOPER
                            </div>

                            <h1 className="hero-title">
                                JACKSON
                                <br />
                                <span className="title-accent-lavender">RICHARD</span> <span className="title-accent-coral">J</span>
                            </h1>

                            <p className="hero-subtitle">
                                I build scalable, user-friendly web applications, actively exploring Cloud architecture, DevOps methodologies, and backend systems.
                            </p>

                            <div className="hero-cta-group">
                                <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-primary cta-btn">
                                    VIEW MY WORK
                                </Link>
                                <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-secondary cta-btn">
                                    GET IN TOUCH
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Dedicated Photo Presenter */}
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="photo-editorial-panel">
                            <div className="photo-bg-shape"></div>

                            <img
                                src="https://github.com/Jackson-richard.png"
                                alt="Jackson Richard J"
                                className="hero-photo"
                            />

                            <div className="float-code">
                                <FaCode />
                            </div>

                            <div className="float-status">
                                BUILDING SYSTEMS
                            </div>
                        </div>

                        {/* Mobile specific metadata placed here for proper stacking */}
                        <div className="hero-secondary-info mobile-metadata">
                            <div className="hero-info-item">
                                <span className="hero-info-icon icon-edu">🎓</span> B.Tech IT
                            </div>
                            <div className="hero-info-item">
                                <span className="hero-info-icon icon-loc">📍</span> Chennai, India
                            </div>
                            <div className="hero-info-item">
                                <span className="hero-info-icon icon-job">💼</span> Open to Work
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="scroll-indicator-container">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>SCROLL</span>
            </div>
        </section>
    );
};

export default Hero;
