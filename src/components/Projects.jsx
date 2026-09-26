import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import ProjectCard from './ui/ProjectCard';
import './Projects.css';

const projectsData = [
    {
        title: "SAHAY-AI — AI-Powered Distress Monitoring System",
        description: "An AI-powered, consent-based wellbeing monitoring system designed to support victims through continuous check-ins, bilingual AI assistance, distress analysis, and an official monitoring dashboard.",
        tech: ["Kotlin", "Jetpack Compose", "Supabase", "PostgreSQL", "Groq API", "AI/ML", "Tamil + English"],
        github: "https://github.com/Jackson-richard/SAHAY-AI",
        icon: "🧠🫂📱",
        screenshots: [
            "/projects/sahay-ai/screen-1.jpeg",
            "/projects/sahay-ai/screen-2.jpeg",
            "/projects/sahay-ai/screen-3.jpeg",
            "/projects/sahay-ai/screen-4.jpeg"
        ],
        previewType: "mobile",
        color: "var(--accent-lime)"
    },
    {
        title: "Aegis – Secure Digital Voting System",
        description: "A secure digital voting system for college elections using ID-based QR verification. Ensures voter authenticity while preserving ballot privacy, maintaining transparency, and producing verifiable, tamper-resistant results.",
        tech: ["React.js", "Node.js", "Express", "Firebase", "QR Verification", "Cryptography"],
        github: "https://github.com/Jackson-richard/Aegis-SecureVote",
        icon: "🛡️",
        screenshots: [
            "/projects/aegis/screen-1.jpeg",
            "/projects/aegis/screen-2.jpeg",
            "/projects/aegis/screen-3.jpeg"
        ],
        previewType: "desktop",
        color: "var(--accent-yellow)"
    },
    {
        title: "Duone — AI-Powered Literacy Learning Platform",
        description: "A gamified literacy-learning platform designed for neo-learners, combining structured lessons, multilingual content, assessments, and personalized proficiency tracking.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "MUI", "Multilingual Learning", "Assessments", "Proficiency Tracking", "Secure Authentication"],
        github: "https://github.com/Jackson-richard/Duone",
        icon: "🌍📖🎓",
        screenshots: [
            "/projects/duone/screen-1.png",
            "/projects/duone/screen-2.png",
            "/projects/duone/screen-3.png",
            "/projects/duone/screen-4.png"
        ],
        previewType: "desktop",
        color: "var(--accent-cyan)"
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
