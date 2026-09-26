import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import ProjectCard from './ui/ProjectCard';
import './Projects.css';

const projectsData = [
    {
        title: "Aegis – Secure Digital Voting System",
        description: "A secure digital voting system for college elections using ID-based QR verification. Ensures voter authenticity while preserving ballot privacy, maintaining transparency, and producing verifiable, tamper-resistant results.",
        tech: ["React.js", "Node.js", "Express", "Firebase", "QR Verification", "Cryptography"],
        github: "https://github.com/Jackson-richard/Aegis-SecureVote",
        icon: "🛡️",
        color: "var(--accent-yellow)"
    },
    {
        title: "Email Spam Detector",
        description: "A Basic machine learning-based program that classifies emails as Spam or Not Spam (Ham). The trained model is deployed using a Flask web framework for real-time prediction.",
        tech: ["Python", "Flask", "NLP", "Pandas", "HTML/CSS"],
        github: "https://github.com/Jackson-richard/Email_Spam_Detector",
        icon: "📧",
        color: "var(--accent-blue)"
    }
];

const Projects = () => {
    return (
        <AnimatedSection id="projects" className="projects-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">Real-world applications showcasing my full-stack capabilities.</p>
                </div>

                <div className="projects-container">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Projects;
