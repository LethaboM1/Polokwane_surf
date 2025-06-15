import React, { useState } from 'react';
import recent from '../assets/14.jpg';
import progress from '../assets/4.jpg';
import road from '../assets/9.jpg';
import '../App.css';

const categories = ['Recent Contracts','Contracts in Progress', 'Completed Contracts'];

const portfolioItems = [
    {
        category: 'Recent Contracts',
        title: 'MOTLOKWA TRANSPORT',
        description: 'NEC3 Engineering and construction short contract (ecsc) Rev 02 2023 for - SLP road upgrade- Masonje Hill to Mpitikwane road',
        client: 'Modikwa Platinum Mine',
        image: recent,
    },
    {
        category: 'Recent Contracts',
        title: 'SEF MOD PROJECTS ',
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
        category: 'Recent Contracts',
        title: 'RM MASHABA PROJECTS',
        description: 'Allocation for  preventative maintenance of roads and stormwater: Pavement milling at Giyani Section D2 part A (2KM) ',
        client: 'Giyani Municipality',
        image: recent,
    },
    {
        category: 'Recent Contracts',
        title: 'MAPHALA GROUP SERVICES',
        description: 'Rehabilitation of the Alldays Internal streets and storm water control Phase 1',
        client: 'Blouberg Municipality',
        image: recent,
    },


    {
        category: 'Contracts in Progress',
        title: 'OBEE AND FAMILY HOLDINGS',
        description: 'NRA.002-109-2019/2 STEELPOORT: SURFACE REPAIR R574 FROM KM 22.0 TO KM 29.0',
        client: 'Itumeleng Construction',
        image: progress,
    },
    {
        category: 'Contracts in Progress',
        title: 'CAPOTEX JV KNM CIVILS',
        description: 'Upgrading of Road D4283 from Glencowie to Malaka in the Sekhukhune District of Limpopo ',
        client: 'Roads Agency Limpopo Province',
        image: progress,
    },
    {
        category: 'Contracts in Progress',
        title: 'MALERATE CONSTRUCTION',
        description: 'Allocation of Scope of work for upgrading pf the arterial road in Magongwa village from road D3378 to road D19 ( Ward 42)',
        client: 'Polokwane Municipality',
        image: progress,
    },
    {
        category: 'Contracts in Progress',
        title: 'RAEISEBE INFRASTRUCTURE DEVELOPERS',
        description: 'Construction of the Masisi street paved road phase 1',
        client: 'Musina Local Municipality',
        image: progress,
    },

    {
        category: 'Contracts in Progress',
        title: 'RM MASHABA PROJECTS ',
        description: 'Allocation for  preventative maintenance of roads and stormwater: Pavement milling at Giyani Section D2 part A (2KM)',
        client: 'Giyani Municipality',
        image: progress,
    },

    {
        category: 'Completed Contracts',
        title: 'BAMBOO ROCK',
        description: 'Upgrade of the 2,5km on the RAL Road D4260 in Malope to Phokwane ( Double seals and fog spray and surfacing on the Bridge deck)',
        client: 'Roads Agency Limpopo Province',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'PROCLASS NTSA TRADING JV',
        description: 'Construction of  road from Ga-Boelang Village to Marieskop (Phase 1 )',
        client: 'Bushbuckrige Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'CAROFIN PROJECTS',
        description: 'Construction of access road from maila mapitsane to magolego tribal office phase 1',
        client: 'Makhuduthamaga Municipality',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'NKOMBA AND DIFF JV',
        description: 'Upgrading of rural access road D4422 near Thulamahashe (5,63km) in the Bohlabela Region of the Mpumalanga province.',
        client: 'Modikwa Platinum Mine',
        image: road,
    },
    {
        category: 'Completed Contracts',
        title: 'MOTLOKWA TRANSPORT',
        description: 'NEC3 Engineering and construction short contract (ecsc) Rev 02 2023 for - SLP road upgrade- Masonje Hill to Mpitikwane road',
        client: 'Public works, road and transport',
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

