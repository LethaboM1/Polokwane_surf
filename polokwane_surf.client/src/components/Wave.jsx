// src/components/Wave.jsx
import React from 'react';
import '../App.css'; 

const Wave = () => {
    return (
        <div className="wave-container">
            <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="wave-svg"
            >
                <path
                    fill="#2e7d32"
                    fillOpacity="1"
                    d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

export default Wave;
