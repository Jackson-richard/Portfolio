import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', id = '' }) => {
    return (
        <motion.section
            id={id}
            className={`section-padding ${className}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="container">
                {children}
            </div>
        </motion.section>
    );
};

export default AnimatedSection;
