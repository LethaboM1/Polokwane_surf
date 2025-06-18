import React, { useState } from 'react';
 //main roads
import img2 from '../assets/image/9.jpg';
import img5 from '../assets/image/8.jpg';

import img6 from '../assets/image/11.jpg'; //machines
import img9 from '../assets/image/14.jpg';
import img10 from '../assets/image/15.jpg';
import img13 from '../assets/image/18.jpg';
import img14 from '../assets/image/19.jpg';
import img15 from '../assets/image/5.jpg';

import video1 from '../assets/video/move1.mp4'; //working
import video2 from '../assets/video/move.mp4';
import video3 from '../assets/video/move2.mp4';
import video4 from '../assets/video/move3.mp4';
import video5 from '../assets/video/airstrip.mp4';

import '../App.css';

// Internal categories and professional display labels
const categoryLabels = {
    'road-infrastructure': 'Road Infrastructure',
    'residential-access': 'Residential Access Roads',
    'surface-finishing': 'Asphalt & Surface Finishes',
};

// Gallery items with correct categories
const galleryData = [
    //{ id: 1, category: 'road-infrastructure', title: 'Main Road Upgrade', image: img1 },
    { id: 1, category: 'road-infrastructure', title: 'Arterial Roads', image: img2 },
    { id: 2, category: 'road-infrastructure', title: 'Arterial Roads', image: img14 },
    { id: 3, category: 'road-infrastructure', title: 'Arterial Roads', image: img13 },
    { id: 4, category: 'road-infrastructure', title: 'Arterial Roads', image: img15 },

    { id: 5, category: 'residential-access', title: 'Pavement Surfacing', image: img5 },
    { id: 6, category: 'residential-access', title: 'Seal Works', image: img9 },
    { id: 7, category: 'residential-access', title: 'CAPE Seal', image: img10 },
    { id: 8, category: 'residential-access', title: 'Milling and Recycling ', image: img6 },

    { id: 9, category: 'surface-finishing', title: 'Asphalt Surfacing', image: video1 },
    { id: 10, category: 'surface-finishing', title: 'Fog Spray', image: video2 },
    { id: 11, category: 'surface-finishing', title: 'Bitumen Application', image: video3 },
    { id: 12, category: 'surface-finishing', title: 'Seal and Asphalt Surfacing', image: video4 },
    { id: 13, category: 'surface-finishing', title: 'AirStrip', image: video5 },
];

// Generate filters based on categories (All + mapped display names)
const filters = ['All', ...Object.values(categoryLabels)];

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // Filter logic
    const filteredData =
        activeFilter === 'All'
            ? galleryData
            : galleryData.filter(
                (item) => categoryLabels[item.category] === activeFilter
            );

    return (
        <section id="gallery" className="gallery-section">
    
            <div className="container">
                <div className="row gy-3">
                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>GALLERY</h4>
                        <div className="line"></div>
                    </div>

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
                                    <p>{categoryLabels[item.category]}</p>
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
