import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import './About.css';

const About = () => {
    return (
        <AnimatedSection id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-header">
                    <h2 className="section-title">About Me</h2>
                </div>

                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-content-card">
                            <div className="about-marker">Who am I?</div>
                            <div className="about-decoration">"</div>
                            <p className="about-text">
                                I am a developer focused on building real, practical systems while actively learning full-stack development.
                                I enjoy working across both frontend and backend, with growing interests in backend architecture, cloud infrastructure,
                                and applying machine learning to solve meaningful problems.
                            </p>
                            <p className="about-text">
                                I learn by doing. Through hands-on projects, I explore areas such as authentication workflows, cloud computing, database design,
                                and integrating NLP models into applications. My focus is on writing clean code, understanding secure design principles,
                                and building systems that are maintainable and easy to reason about.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-visual hidden-mobile"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about-feature-box">
                            <h3 className="about-feature-title">Driven by Curiosity</h3>
                            <p className="about-feature-desc">Constantly exploring new technologies and architectural patterns to build better software.</p>
                        </div>
                        <div className="about-feature-box">
                            <h3 className="about-feature-title">Hands-on Learner</h3>
                            <p className="about-feature-desc">Building practical side-projects to master theory through real-world implementation.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;
