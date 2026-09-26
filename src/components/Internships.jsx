import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import './Internships.css';

const internshipsData = [
    {
        title: "AI Intern",
        organization: "Infosys Springboard",
        duration: "June 2026 – September 2026",
        points: [
            "Collaborated with a team to design and develop Neo-Learners, a gamified learning application inspired by language-learning platforms.",
            "Contributed to building an interactive learning experience focused on structured lessons, learner engagement, and progressive skill development.",
            "Worked closely with teammates to divide development tasks, integrate individual contributions, and refine the application through iterative development.",
            "Presented the project and demonstrated its functionality to senior officials, explaining the problem, solution, and overall project approach."
        ],
        certificateLink: "",
        color: "var(--accent-lavender)"
    },
    {
        title: "Microsoft Azure Intern",
        organization: "Microsoft Elevate × AICTE",
        duration: "Dec 2025 – Jan 2026",
        points: [
            "Completed hands-on learning activities focused on Microsoft Azure fundamentals, cloud service models, and core cloud concepts.",
            "Worked through Azure-based deployment scenarios to understand how cloud resources are configured and used in application environments.",
            "Applied cloud concepts through practical exercises involving Azure services and basic solution implementation."
        ],
        certificateLink: "/certificate/Microsoft Azure Intern.pdf",
        color: "var(--accent-blue)"
    },
    {
        title: "Artificial Intelligence Intern",
        organization: "Uptoskills",
        duration: "Oct 2025 – Jan 2026",
        points: [
            "Worked on frontend development for AI-based web applications using HTML, CSS, JavaScript, and React.",
            "Built responsive user interfaces and connected frontend components with application logic to create functional web experiences.",
            "Used Git and GitHub for version control and collaborated on project development and documentation.",
            "Applied frontend development concepts while working with real-world AI application use cases."
        ],
        certificateLink: "/certificate/Uptoskills.pdf",
        color: "var(--accent-red)"
    },
    {
        title: "Applied AI Intern",
        organization: "CSRBOX × AICTE × IBM SkillsBuild",
        duration: "Dec 2025 – Jan 2026",
        points: [
            "Applied AI design-thinking approaches to understand real-world problems and translate them into practical solution ideas.",
            "Built small AI-based implementation projects to explore how AI concepts can be applied to real-world scenarios.",
            "Analyzed practical AI integration use cases to understand how intelligent systems can support different application workflows."
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
