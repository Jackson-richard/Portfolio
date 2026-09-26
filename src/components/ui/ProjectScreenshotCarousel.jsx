import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ProjectScreenshotCarousel.css';

const ProjectScreenshotCarousel = ({ screenshots, color, type = 'desktop' }) => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
        setCurrentIndex(index);
    };

    const scrollTo = (index) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: index * scrollRef.current.clientWidth,
            behavior: 'smooth'
        });
    };

    // Keep the internal layout clean, tracking index safely
    return (
        <div className={`carousel-container ${type}-type`} style={{ '--card-color': color }}>
            <div className="project-badge">Featured</div>

            <div
                className="carousel-scroll-area"
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {screenshots.map((src, idx) => (
                    <div key={idx} className={`carousel-slide ${type}`}>
                        {type === 'mobile' ? (
                            <div className="mobile-device-frame">
                                <img
                                    src={src}
                                    alt={`Screenshot ${idx + 1}`}
                                    className="carousel-image"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <img
                                src={src}
                                alt={`Screenshot ${idx + 1}`}
                                className="carousel-image"
                                loading="lazy"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Desktop Navigation Arrows */}
            {screenshots.length > 1 && (
                <>
                    <button
                        className="carousel-arrow left"
                        onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
                        disabled={currentIndex === 0}
                        aria-label="Previous screenshot"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="carousel-arrow right"
                        onClick={() => scrollTo(Math.min(screenshots.length - 1, currentIndex + 1))}
                        disabled={currentIndex === screenshots.length - 1}
                        aria-label="Next screenshot"
                    >
                        <FaChevronRight />
                    </button>

                    {/* Controls overlay */}
                    <div className="carousel-controls">
                        <div className="carousel-pagination">
                            {screenshots.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => scrollTo(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <div className="carousel-counter">
                            {String(currentIndex + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectScreenshotCarousel;
