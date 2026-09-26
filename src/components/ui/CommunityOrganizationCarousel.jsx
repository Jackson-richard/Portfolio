import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CommunityOrganizationCarousel.css';

const CommunityPhotoCarousel = ({ photos, organization }) => {
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
        <div className="community-photo-carousel">
            <div
                className="community-photo-scroll-area"
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {photos.map((src, idx) => (
                    <div key={idx} className="community-photo-slide">
                        <img
                            src={src}
                            alt={`${organization} photo ${idx + 1}`}
                            className="community-photo-image"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {photos.length > 1 && (
                <>
                    <button
                        className="community-photo-arrow left"
                        onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
                        disabled={currentIndex === 0}
                        aria-label="Previous photo"
                    >
                        <FaChevronLeft size={12} />
                    </button>
                    <button
                        className="community-photo-arrow right"
                        onClick={() => scrollTo(Math.min(photos.length - 1, currentIndex + 1))}
                        disabled={currentIndex === photos.length - 1}
                        aria-label="Next photo"
                    >
                        <FaChevronRight size={12} />
                    </button>

                    <div className="community-photo-pagination">
                        {photos.map((_, idx) => (
                            <button
                                key={idx}
                                className={`community-photo-dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => scrollTo(idx)}
                                aria-label={`Go to photo ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const CommunityOrganizationCarousel = ({ items }) => {
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
        <div className="community-org-carousel-wrapper">
            <div className="community-badge-top">COMMUNITY</div>

            <div
                className="community-org-scroll-area"
                ref={scrollRef}
                onScroll={handleScroll}
            >
                {items.map((item, idx) => (
                    <div key={idx} className="community-org-slide">
                        <div className="community-org-card-content">
                            <div className="community-org-left">
                                <CommunityPhotoCarousel photos={item.photos} organization={item.organization} />
                            </div>
                            <div className="community-org-right">
                                <div className="community-org-text">
                                    <h3 className="community-org-role">{item.icon} {item.role}</h3>
                                    <div className="community-org-name">{item.organization}</div>
                                    <p className="community-org-desc">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="community-org-controls">
                <button
                    className="community-org-arrow left"
                    onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    aria-label="Previous organization"
                >
                    <FaChevronLeft size={16} />
                </button>
                <div className="community-org-counter">
                    0{currentIndex + 1} / 0{items.length}
                </div>
                <button
                    className="community-org-arrow right"
                    onClick={() => scrollTo(Math.min(items.length - 1, currentIndex + 1))}
                    disabled={currentIndex === items.length - 1}
                    aria-label="Next organization"
                >
                    <FaChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default CommunityOrganizationCarousel;
