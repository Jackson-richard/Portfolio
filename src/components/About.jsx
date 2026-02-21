import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import './About.css';

const About = () => {
    return (
        <AnimatedSection id="about" className="about-section">
            <div className="section-header">
                <h2 className="section-title gradient-text">About</h2>
            </div>

            <div className="about-container glass-panel">
                <div className="about-content">
                    <motion.p
                        className="about-text"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                    >
                        I am a developer focused on building real, practical systems while actively learning full-stack development. 
                        I enjoy working across both frontend and backend, with growing interests in backend architecture, cloud infrastructure, 
                        and applying machine learning to solve meaningful problems
                    </motion.p>

                    <motion.p
                        className="about-text"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                    >
                        I learn by doing. Through hands-on projects, I explore areas such as authentication workflows,clouding computing, database design, 
                        and integrating NLP models into applications. My focus is on writing clean code, understanding secure design principles,
                         and building systems that are maintainable and easy to reason about
                    </motion.p>
                </div>

                <div className="about-visual hidden-mobile">
                    <div className="about-stat-box">
                        <div className="about-stat-number gradient-text">100%</div>
                        <div className="about-stat-label">Driven by Curiosity & Passion</div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;
