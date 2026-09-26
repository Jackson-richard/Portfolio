import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import './Skills.css';

const skillsData = [
    {
        category: "Frontend",
        skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)"],
        icon: "🎨",
        color: "var(--accent-yellow)"
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs"],
        icon: "⚙️",
        color: "var(--accent-blue)"
    },
    {
        category: "Languages",
        skills: ["Python", "Java", "JavaScript"],
        icon: "💻",
        color: "var(--accent-red)"
    },
    {
        category: "Concepts & Other",
        skills: ["Authentication", "Secure System Design", "System Thinking", "Machine Learning (Basics)"],
        icon: "🧠",
        color: "#10b981"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

const Skills = () => {
    return (
        <AnimatedSection id="skills" className="skills-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical Arsenal</h2>
                    <p className="section-subtitle">Technologies and concepts I utilize to build robust applications.</p>
                </div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            variants={itemVariants}
                            style={{ '--card-color': category.color }}
                        >
                            <div className="skill-card-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3 className="skill-category">{category.category}</h3>
                            </div>

                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="skill-item">
                                        <span className="skill-bullet" style={{ backgroundColor: category.color }}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Skills;
