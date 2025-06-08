// src/components/CarouselSection.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/2.jpg';
import slide2 from '../assets/4.jpg';
import slide3 from '../assets/5.jpg';
import slide4 from '../assets/6.jpg';
import slide5 from '../assets/7.jpg';
import '../App.css';

const CarouselSection = () => {
    return (
        <div className="carousel-wrapper">
            {/* Fullscreen Carousel */}
            <Carousel fade interval={4000}>
                {[slide1, slide2, slide3, slide4, slide5].map((slide, idx) => (
                    <Carousel.Item key={idx}>
                        <img className="d-block w-100 carousel-img" src={slide} alt={`Slide ${idx + 1}`} />
                        <Carousel.Caption>
                            <h3>ASPHALT PRODUCERS AND SURFACING CONTRACTORS</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Stacked Animated Waves */}
            <div className="wave-container">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#006400" />
                            <stop offset="100%" stopColor="#00aa55" />
                        </linearGradient>
                        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#004d00" />
                            <stop offset="100%" stopColor="#007744" />
                        </linearGradient>
                    </defs>

                    {/* First Wave */}
                    <path fill="url(#waveGradient1)" opacity="0.6" d="
                        M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z">
                        <animate
                            attributeName="d"
                            dur="8s"
                            repeatCount="indefinite"
                            values="
                                M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;
                                M0,0 C400,50 800,150 1200,100 L1200,0 L0,0 Z;
                                M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;" />
                    </path>

                    {/* Second Wave (slightly different motion) */}
                    <path fill="url(#waveGradient2)" opacity="0.4" d="
                        M0,0 C400,50 800,150 1200,100 L1200,0 L0,0 Z">
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            values="
                                M0,0 C400,50 800,150 1200,100 L1200,0 L0,0 Z;
                                M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;
                                M0,0 C400,50 800,150 1200,100 L1200,0 L0,0 Z;" />
                    </path>
                </svg>
            </div>
        </div>
    );
};

export default CarouselSection;
