import React, { useState } from 'react';
import progress from '../assets/progress.png';
import road from '../assets/road.png';
import recent from '../assets/recent.png';
import '../App.css';

const categories = ['Contracts in Progress', 'Completed Contracts', 'Recent Contracts'];

const portfolioItems = [
    {
        category: 'Contracts in Progress',
        title: 'MUSEKWA',
        description: 'Sealworks and surfacing',
        client: 'Roads Agency Limpopo',
        image: progress,
    },
    {
        category: 'Completed Contracts',
        title: 'MULEDANE SERVICE ROAD',
        description: 'Prime coat and asphalt surfacing',
        client: 'Thulamela Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'WORCESTER ACCESS ROAD',
        description: 'Prime coat and asphalt surfacing',
        client: 'Roads Agency Limpopo',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'TSHELANG GAPE STREET',
        description: 'Prime coat and asphalt surfacing',
        client: 'Ba-Phalaborwa Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'KROMHOEK',
        description: 'Prime coat and asphalt surfacing',
        client: 'Blouberg Local Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'THABO MBEKI STREET',
        description: 'Cement stabilisation / prime coat and asphalt surfacing',
        client: 'Polokwane Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'SESHEGO',
        description: 'Prime coat and asphalt surfacing',
        client: 'Polokwane Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'AVON',
        description: 'Prime coat and asphalt surfacing',
        client: 'Blouberg Municipality',
        image: road,
    },
    {
        category: 'Recent Contracts',
        title: 'VAALKOP',
        description: 'Mass Earthworks - 1,090,000 m³',
        client: 'Rustenburg Platinum Mines Ltd',
        image: recent,
    },
    {
        category: 'Recent Contracts',
        title: 'GILEAD',
        description: `Road D3556 - Double Seal: 50,000 m², Mass Earthworks: 84,730 m³`,
        client: 'Roads Agency Limpopo',
        image: recent,
    },
    {
        category: 'Recent Contracts',
        title: 'VILLIERS N3',
        description: 'Asphalt overlaying - 114,773 m²',
        client: 'N3 Toll Concession',
        image: recent,
    }
];


const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(categories[0]);

    const filteredItems = portfolioItems.filter(item => item.category === activeTab);

    return (
        <section id="portfolio" className="portfolio-section">

            <div className="section-heading d-flex align-items-center gap-3">
                <h4>PORTFOLIO</h4>
                <div className="line"></div>
            </div>

            <div className="container">
                <div className="row gy-4">
            <div className="portfolio-tabs">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className={`portfolio-tab ${activeTab === cat ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="portfolio-content">
                {filteredItems.map((item, idx) => (
                    <div className="portfolio-card" key={idx}>
                        <img src={item.image} alt={item.title} className="portfolio-img" />
                        <div className="portfolio-info">
                            <h3 className="portfolio-title">{item.title}</h3>
                            <p className="portfolio-description">{item.description}</p>
                            <p className="portfolio-client"><strong>Client:</strong> {item.client}</p>
                            <span className="portfolio-category">{item.category}</span>
                        </div>
                    </div>
                ))}
                    </div>
                </div>
            </div>
                </section>

    );
};

export default Portfolio;

