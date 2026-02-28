import React, { useEffect, useRef } from 'react';
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
        certificateLink: "/certificate/Microsoft Azure Intern.pdf"
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
        certificateLink: "/certificate/Uptoskills.pdf"
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
        certificateLink: "/certificate/CSRBOX.pdf"
    }
];

const Internships = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.timeline-card-wrapper, .timeline-center-line');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="internships" className="section-padding" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title gradient-text">Internships</h2>
                    <p className="section-subtitle">Professional experience and applied learning in cloud computing and AI.</p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-center-line"></div>

                    {internshipsData.map((internship, index) => (
                        <div
                            key={index}
                            className={`timeline-card-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-card glass-panel">
                                <h3 className="internship-title">{internship.title}</h3>
                                <h4 className="internship-org gradient-text">{internship.organization}</h4>
                                <span className="internship-duration">{internship.duration}</span>

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
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
