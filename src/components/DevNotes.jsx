import React from 'react';
import AnimatedSection from './ui/AnimatedSection';
import './DevNotes.css';

const notesData = [
    {
        id: "01",
        title: "6 Hackathons Later, I'm Still Learning — Just in Different Ways",
        description: "A personal journey through six hackathons — from barely contributing in my first hackathon to learning how to build, present, fail, and improve.",
        date: "SEPTEMBER 2026",
        readTime: "6 MIN READ",
        tags: ["Experience", "Hackathon", "Beginner"],
        url: "https://medium.com/@jacksonrich.c/6-hackathons-later-im-still-learning-just-in-different-ways-714525d85a87"
    }
];

const DevNotes = () => {
    return (
        <AnimatedSection id="devnotes" className="devnotes-section section-padding">
            <div className="container">
                <div className="devnotes-header">
                    <h2 className="section-title">Dev Notes</h2>
                    <p className="section-subtitle">
                        Thoughts, experiments & things I learned while building.
                    </p>
                </div>

                <div className="devnotes-list">
                    {notesData.map((note, idx) => (
                        <div key={idx} className="devnote-row">
                            <div className="devnote-number">{note.id}</div>

                            <div className="devnote-content">
                                <a href={note.url} target="_blank" rel="noopener noreferrer" className="devnote-title-link">
                                    <h3 className="devnote-title">{note.title}</h3>
                                </a>

                                <div className="devnote-tags">
                                    {note.tags.map((tag, i) => (
                                        <span key={i} className="devnote-tag">
                                            {tag.toUpperCase()}{i !== note.tags.length - 1 ? ' · ' : ''}
                                        </span>
                                    ))}
                                </div>

                                <p className="devnote-description">{note.description}</p>

                                <div className="devnote-footer">
                                    <div className="devnote-meta">
                                        {note.date} · {note.readTime}
                                    </div>
                                    <a href={note.url} target="_blank" rel="noopener noreferrer" className="devnote-action">
                                        READ ARTICLE →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default DevNotes;
