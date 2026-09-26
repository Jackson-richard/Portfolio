import React, { useState, useRef } from 'react';
import './CommunityCard.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CommunityCard = ({ organization, role, description, photos, icon }) => {
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

    return (
        <div className="community-card">
            <div className="community-carousel-container">
                <div className="community-badge">COMMUNITY</div>

                <div
                    className="community-scroll-area"
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    {photos.map((src, idx) => (
                        <div key={idx} className="community-slide">
                            <img
                                src={src}
                                alt={`${organization} photo ${idx + 1}`}
                                className="community-image"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {photos.length > 1 && (
                    <>
                        <button
                            className="community-arrow left"
                            onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
                            disabled={currentIndex === 0}
                            aria-label="Previous photo"
                        >
                            <FaChevronLeft size={14} />
                        </button>
                        <button
                            className="community-arrow right"
                            onClick={() => scrollTo(Math.min(photos.length - 1, currentIndex + 1))}
                            disabled={currentIndex === photos.length - 1}
                            aria-label="Next photo"
                        >
                            <FaChevronRight size={14} />
                        </button>

                        <div className="community-pagination">
                            {photos.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`community-dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => scrollTo(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="community-content">
                <div className="community-role-wrapper">
                    {icon && <span className="community-icon">{icon}</span>}
                    <h3 className="community-role">{role}</h3>
                </div>
                <div className="community-org">{organization}</div>
                <p className="community-desc">{description}</p>
            </div>
        </div>
    );
};

export default CommunityCard;
