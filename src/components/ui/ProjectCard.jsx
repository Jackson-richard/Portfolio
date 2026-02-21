import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="project-image-container">
                <div className="project-image-placeholder glass-panel">
                    <div className="project-badge">Featured</div>
                    <span className="project-image-icon">{project.icon}</span>
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title gradient-text">{project.title}</h3>
                <div className="project-description glass-panel">
                    <p>{project.description}</p>
                </div>

                <ul className="project-tech-list">
                    {project.tech.map((tech, idx) => (
                        <li key={idx} className="project-tech-item">{tech}</li>
                    ))}
                </ul>

                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                        <FaGithub size={22} />
                    </a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                            <FaExternalLinkAlt size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
