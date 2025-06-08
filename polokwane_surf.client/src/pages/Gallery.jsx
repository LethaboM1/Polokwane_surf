import React, { useState } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/9.jpg';
import img3 from '../assets/11.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/8.jpg';
import video1 from '../assets/move1.mp4';
import video2 from '../assets/move.mp4';
import video3 from '../assets/move2.mp4';
import video4 from '../assets/move3.mp4';

import '../App.css';

const galleryData = [
    { id: 1, category: 'roads', title: 'Main Road Upgrade', image: img1 },
    { id: 2, category: 'driveways', title: 'Luxury Driveway', image: img2 },
    { id: 3, category: 'driveway', title: 'Drive', image: img3 },
    { id: 4, category: 'roads', title: 'Rural Road Surfacing', image: img4 },
    { id: 5, category: 'driveways', title: 'Residential Access Way', image: img5 },
    { id: 6, category: 'driveways', title: 'Access Way', image: img5 },
    { id: 7, category: 'paving', title: 'Paving', image: video1 },
    { id: 8, category: 'paving', title: 'Commercial Paving', image: video2 },
    { id: 9, category: 'paving', title: 'Commercial Paving', image: video3 },
    { id: 10, category: 'paving', title: 'Commercial Paving', image: video4 },
];

const filters = ['All', 'Roads', 'Driveways', 'Paving'];

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredData =
        activeFilter === 'All'
            ? galleryData
            : galleryData.filter((item) => item.category === activeFilter.toLowerCase());

    return (

            <section id="gallery" className="gallery-section">
                <div className="section-heading d-flex align-items-center gap-3">
                    <h4>GALLERY</h4>
                    <div className="line"></div>
                </div>

                <div className="container">
                    <div className="row gy-4">
                        <ul className="gallery-filters">
                            {filters.map((filter) => (
                                <li
                                    key={filter}
                                    className={filter === activeFilter ? 'filter-active' : ''}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter}
                                </li>
                            ))}
                        </ul>

                        <div className="gallery-grid">
                            {filteredData.map((item) => (
                                <div className={`gallery-item ${item.category}`} key={item.id}>
                                    {item.image.endsWith('.mp4') ? (
                                        <video className="gallery-img" controls>
                                            <source src={item.image} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={item.image} alt={item.title} className="gallery-img" />
                                    )}
                                    <div className="gallery-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.category}</p>
                                        <div className="gallery-links">
                                            <a href={item.image} className="preview-link" title={item.title}>
                                                <i className="bi bi-zoom-in"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Gallery;