import React, { useState } from 'react';
import recent from '../assets/14.jpg';
import progress from '../assets/4.jpg';
import road from '../assets/9.jpg';
import '../App.css';

const categories = ['Recent Contracts','Contracts in Progress', 'Completed Contracts'];

const portfolioItems = [
    {
        category: 'Recent Contracts',
        title: 'MOEPENG TRADING',
        description: 'Rehabilitation of the Tambo and mashakeni streets in Nkowankowa',
        client: 'Greater Giyani Municipality',
        image: recent,
    },
    {
        category: 'Recent Contracts',
        title: 'Sef MOD PROJECTS ',
        description: `3 years household based routine road maintenance project at Lephalale local Municipality in Limpopo Province.`,
        client: 'Limpopo Provincial Government', 
        Dept: 'Public Works, Road and Infrastructure - MS.Moloto M.V',
        image: recent,
    },
    {
        category: 'Recent Contracts',
        title: 'MOTSEWAKHUMO JV MOCHEKU',
        description: 'Allocation of Scope of works for upgrading of road from Ga Maja Moshate to Feke ',
        client: 'Polokwane municipality',
        image: recent,
    },
    {
        category: 'Contracts in Progress',
        title: 'MALERATE CONSTRUCTION',
        description: 'Allocation of Scope of work for upgrading pf the arterial road in Magongwa village from road D3378 to road D19 ( Ward 42)',
        client: 'Polokwane municipality',
        image: progress,
    },
    {
        category: 'Completed Contracts',
        title: 'RAEISEBE INFRASTRUCTURE DEVELOPERS ',
        description: 'Construction of the Masisi street paved road phase 1',
        client: 'Musina Local Municipality', 
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'MATLA A RONA CONSTRUCTION',
        description: 'Allocation for  preventative maintenance of roads and stormwater: Pavement milling at Giyani Section D1 part A (2KM)',
        client: 'Greater Giyani Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'MARUNGANE PROJECTS',
        description: 'Allocation for  preventative maintenance of roads and stormwater: Pavement milling at Giyani Section D1 part B (1,9KM)',
        client: 'Greater Giyani Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'RM MASHABA PROJECTS ',
        description: 'Allocation for  preventative maintenance of roads and stormwater: Pavement milling at Giyani Section D2 part A (2KM)',
        client: 'Greater Giyani Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'FUMMY PROJECTS',
        description: 'Allocation for  preventative maintenance of roads and stormwater: Pavement milling at Giyani Section D2  part B (1,6KM)',
        client: 'Greater Giyani Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'MOEPEG TRADING',
        description: 'Allocation for the preventative maintainence of roads and storm water : pavement milling at the Giyani section F phase 2 (2km)',
        client: 'Polokwane Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'MANGATLU TRADING ENTERPRISE',
        description: 'Preventative Maintenance of Road D3770 and D3771 From Rita to Calais in the Mopani District of Limpopo Province for surfacing works.',
        client: 'Roads Agency Limpopo Province',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'MOTLOKWA TRANSPORT',
        description: 'NEC3 Engineering and construction short contract (ecsc) Rev 02 2023 for - SLP road upgrade- Masonje Hill to Mpitikwane road',
        client: 'Modikwa Platinum Mine',
        image: road,
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

