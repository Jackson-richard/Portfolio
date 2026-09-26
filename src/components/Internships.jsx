import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import './Internships.css';

const internshipsData = [
    {
        title: "Microsoft Azure Intern",
        organization: "Microsoft Elevate × AICTE",
        duration: "Dec 2025 – Jan 2026",
        points: [
            "Completed structured cloud internship focused on Azure fundamentals",
            "Worked with cloud service models and deployment concepts",
            "Implemented basic Azure-based cloud solutions"
        ],
        certificateLink: "/certificate/Microsoft Azure Intern.pdf",
        color: "var(--accent-blue)"
    },
    {
        title: "Artificial Intelligence Intern",
        organization: "Uptoskills",
        duration: "Oct 2025 – Jan 2026",
        points: [
            "Worked on frontend development for AI-based web applications using HTML, CSS, JavaScript, and React",
            "Built responsive user interfaces and integrated frontend components with backend logic",
            "Followed version control practices using Git and GitHub while collaborating on project documentation",
            "Gained exposure to AI application workflows through real world implementation"
        ],
        certificateLink: "/certificate/Uptoskills.pdf",
        color: "var(--accent-red)"
    },
    {
        title: "Applied AI Intern",
        organization: "CSRBOX × AICTE × IBM SkillsBuild",
        duration: "Dec 2025 – Jan 2026",
        points: [
            "Explored applied AI design thinking approaches",
            "Built small AI-based implementation projects",
            "Studied industry AI integration use cases"
        ],
        certificateLink: "/certificate/CSRBOX.pdf",
        color: "var(--accent-yellow)"
    }
];

const Internships = () => {
    return (
        <AnimatedSection id="internships" className="internships-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">Professional experience and applied learning.</p>
                </div>

                <div className="timeline-container">
                    {internshipsData.map((internship, index) => (
                        <motion.div
                            key={index}
                            className="timeline-card-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot" style={{ backgroundColor: internship.color }}></div>
                            <div className="timeline-card">
                                <div className="internship-header">
                                    <div>
                                        <h3 className="internship-title">{internship.title}</h3>
                                        <div className="internship-org">{internship.organization}</div>
                                    </div>
                                    <span className="internship-duration">{internship.duration}</span>
                                </div>

                                <ul className="internship-points">
                                    {internship.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {internship.certificateLink && (
                                    <a
                                        href={internship.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-link"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Internships;
