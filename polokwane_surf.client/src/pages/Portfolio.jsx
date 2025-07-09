import React, { useState } from 'react';
import '../App.css';

import recent1 from '../assets/image/4.jpg';
import recent2 from '../assets/image/5.jpg';
import recent3 from '../assets/image/9.jpg';
import recent4 from '../assets/image/18.jpg';
import recent5 from '../assets/image/19.jpg';

import progress1 from '../assets/image/20.jpg';
import progress2 from '../assets/image/21.jpg';
import progress3 from '../assets/image/22.jpg';
import progress4 from '../assets/image/23.jpg';
import progress5 from '../assets/image/36.png';

import complete1 from '../assets/image/25.jpg';
import complete2 from '../assets/image/26.jpg';
import complete3 from '../assets/image/27.jpg';
import complete4 from '../assets/image/28.jpg';
import complete5 from '../assets/image/30.jpg';


const categories = ['Recent Contracts','Contracts in Progress', 'Completed Contracts'];

const portfolioItems = [
    // ? Recent Contracts
    {
        category: 'Recent Contracts',
        title: 'MOTLOKWA TRANSPORT',
        description: 'NEC3 Engineering and construction short contract (ecsc)...',
        client: 'Modikwa Platinum Mine',
        image: recent1,
    },
    {
        category: 'Recent Contracts',
        title: 'SEF MOD PROJECTS ',
        description: `3 years household-based routine road maintenance...`,
        client: 'Limpopo Provincial Government',
        Dept: 'Public Works, Road and Infrastructure - MS.Moloto M.V',
        image: recent2,
    },
    {
        category: 'Recent Contracts',
        title: 'MOTSEWAKHUMO JV MOCHEKU',
        description: 'Upgrading road from Ga Maja Moshate to Feke.',
        client: 'Polokwane municipality',
        image: recent3,
    },
    {
        category: 'Recent Contracts',
        title: 'RM MASHABA PROJECTS',
        description: 'Preventative maintenance: Pavement milling at Giyani.',
        client: 'Giyani Municipality',
        image: recent4,
    },
    {
        category: 'Recent Contracts',
        title: 'MAPHALA GROUP SERVICES',
        description: 'Rehabilitation of Alldays Internal streets...',
        client: 'Blouberg Municipality',
        image: recent5,
    },

    // ? Contracts in Progress
    {
        category: 'Contracts in Progress',
        title: 'OBEE AND FAMILY HOLDINGS',
        description: 'STEELPOORT: SURFACE REPAIR R574...',
        client: 'Itumeleng Construction',
        image: progress1,
    },
    {
        category: 'Contracts in Progress',
        title: 'CAPOTEX JV KNM CIVILS',
        description: 'Upgrading of Road D4283 from Glencowie...',
        client: 'Roads Agency Limpopo Province',
        image: progress2,
    },
    {
        category: 'Contracts in Progress',
        title: 'MALERATE CONSTRUCTION',
        description: 'Upgrading the arterial road in Magongwa...',
        client: 'Polokwane Municipality',
        image: progress3,
    },
    {
        category: 'Contracts in Progress',
        title: 'RAEISEBE INFRASTRUCTURE DEVELOPERS',
        description: 'Construction of Masisi street paved road.',
        client: 'Musina Local Municipality',
        image: progress4,
    },
    {
        category: 'Contracts in Progress',
        title: 'RM MASHABA PROJECTS',
        description: 'Preventative maintenance at Giyani Section D2.',
        client: 'Giyani Municipality',
        image: progress5,
    },

    // ? Completed Contracts
    {
        category: 'Completed Contracts',
        title: 'BAMBOO ROCK',
        description: 'Upgrade of 2.5km RAL Road D4260 in Malope...',
        client: 'Roads Agency Limpopo Province',
        image: complete1,
    },
    {
        category: 'Completed Contracts',
        title: 'PROCLASS NTSA TRADING JV',
        description: 'Construction of road from Ga-Boelang to Marieskop...',
        client: 'Bushbuckrige Municipality',
        image: complete2,
    },
    {
        category: 'Completed Contracts',
        title: 'CAROFIN PROJECTS',
        description: 'Access road from Maila Mapitsane to Magolego...',
        client: 'Makhuduthamaga Municipality',
        image: complete3,
    },
    {
        category: 'Completed Contracts',
        title: 'NKOMBA AND DIFF JV',
        description: 'Upgrading of rural access road D4422 near Thulamahashe.',
        client: 'Modikwa Platinum Mine',
        image: complete4,
    },
    {
        category: 'Completed Contracts',
        title: 'MOTLOKWA TRANSPORT',
        description: 'SLP road upgrade - Masonje Hill to Mpitikwane road.',
        client: 'Public Works, Road and Transport',
        image: complete5,
    },
];



const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(categories[0]);

    const filteredItems = portfolioItems.filter(item => item.category === activeTab);

    return (
        <section id="portfolio" className="portfolio-section">

            <div className="container">
                <div className="row gy-3">

                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>PORTFOLIO</h4>
                        <div className="line"></div>
                    </div>
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

