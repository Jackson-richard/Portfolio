import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
           
            <div className="hero-bg-glow"></div>
            <div className="hero-bg-glow hero-bg-glow-2"></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="hero-greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hi, my name is
                    </motion.span>

                    <motion.h1
                        className="hero-name gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Jackson Richard J
                    </motion.h1>

                    <motion.h2
                        className="hero-role"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Aspiring Cloud & Backend Developer | React • Backend • Systems
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        A collection of projects built while learning programming, web development,
                        and modern backend systems. Focused on building secure and strong foundation in Cloud.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="btn btn-primary cursor-pointer"
                        >
                            View My Work
                        </Link>
                    </motion.div>
                </motion.div>

                
                <motion.div
                    className="hero-visual hidden-mobile"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="glass-panel floating-card animate-float">
                        <div className="code-snippet">
                            <span className="code-keyword">const</span> developer = {'{'}
                            <br />&nbsp;&nbsp;name: <span className="code-string">"JR"</span>,
                            <br />&nbsp;&nbsp;focus: <span className="code-string">"Security & Scale"</span>,
                            <br />&nbsp;&nbsp;tools: [<span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"Python"</span>]
                            <br />{'}'};
                        </div>
                    </div>
                    <div className="glass-panel floating-card-small animate-float-delayed">
                        &lt;/&gt;
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
