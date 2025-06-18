import React, { useState } from 'react';
import brief from '../assets/icons/briefcase.png';
import truck from '../assets/icons/truck.png';
import industry from '../assets/icons/industry.png';
import affli from '../assets/icons/affli.png';

import '../App.css';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const services = [
        {
            icon: brief,
            title: 'NATURE OF BUSINESS',
            content: (
                <div className="text-start">
                    <p>Our products and services include the manufacturing, supply and application of:</p>
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li><i className="bi bi-check2-circle green-check"></i> Various grades of hot mix asphalt including Ultra-Thin Friction Course (UTFC)</li>
                            <li><i className="bi bi-check2-circle green-check"></i> ETB (Emulsion Treated Base)</li>
                            <li><i className="bi bi-check2-circle green-check"></i> Modified bituminous bases</li>
                            <li><i className="bi bi-check2-circle green-check"></i> Bitumen prime coats</li>
                            <li><i className="bi bi-check2-circle green-check"></i> Bitumen emulsions</li>
                            <li><i className="bi bi-check2-circle green-check"></i> Cold Mix Asphalt</li>
                    </ul>
                    </div>
                </div>
            ),
        },
        {
            icon: truck,
            title: 'PLANT & EQUIPMENT',
            isExpandable: true,
            shortContent: (
                <div className="text-start">
                    <p>
                        To provide a one stop service, our Company owns an extensive fleet of plant and equipment. This includes:
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check2-circle green-check"></i> Asphalt mixing plants</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Pavers</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Shuttle buggys</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Rollers</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Chip spreaders</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check2-circle green-check"></i> Bitumen distributors</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Milling machines</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Recyclers</li>
                                <li><i className="bi bi-check2-circle green-check"></i> Mechanical brooms</li>
                                {/*It carries slurry, a mixture of water and solids (like cement, asphalt, or other materials) used in paving, roadwork, or construction.*/}
                                <li><i className="bi bi-check2-circle green-check"></i> Slurry Truck</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            ),
            fullContent: (
                <div className="text-start">
                    <p>
                        Our static asphalt plants are situated in Polokwane in the Limpopo Province and Hazyview in the Mpumalanga Province,
                        with another two mobile asphalt plants being available for remote sites.
                    </p>
                    <p>
                        By following a strict plant replacement program, we keep our fleet modern. Maintaining our equipment to a high standard,
                        along with skilled and experienced drivers and operators, ensures quality workmanship and productivity.
                    </p>
                </div>
            ),
        },

        {
            icon: industry,
            title: 'INDUSTRY STANDARDS',
            content: (
                <div className="text-start">
                    <p>We operate under:</p>
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li><i className="bi bi-check2-circle green-check"></i>COTO and SACTCC Standard Specifications for Road and Bridge Works</li>
                            <li><i className="bi bi-check2-circle green-check"></i>SANS (SA National Standards)</li>
                            <li><i className="bi bi-check2-circle green-check"></i>OSHACT 18001</li>
                            <li><i className="bi bi-check2-circle green-check"></i>ISO 9001</li>
                            <li><i className="bi bi-check2-circle green-check"></i>VARIOUS SABETA</li>
                    </ul>
                    </div>
                </div>
            ),
        },
        {
            icon: affli,
            title: 'AFFILIATIONS',
            content: (
                <div className="text-start">
                    <p>We are proudly affiliated with:</p>
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li><i className="bi bi-check2-circle green-check"></i>BSI Quality Management System ISO 9001</li>
                            <li><i className="bi bi-check2-circle green-check"></i>CETA</li>
                            <li><i className="bi bi-check2-circle green-check"></i>MERSETA</li>
                            <li><i className="bi bi-check2-circle green-check"></i>SA ROAD FEDERATION</li>
                            <li><i className="bi bi-check2-circle green-check"></i>SABITA</li>
                            <li><i className="bi bi-check2-circle green-check"></i>Society of Asphalt Technology (SAT)</li>
                    </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="row gy-3">
                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>SERVICES</h4>
                        <div className="line"></div>
                    </div>

                    {services.map((service, index) => (
                        <div className="col-lg-6 col-md-12 d-flex" key={index}>
                            <div className="service-card p-4 shadow rounded bg-white h-100 w-100 d-flex flex-column">
                                <div className="d-flex align-items-center mb-3 gap-3">
                                    <img src={service.icon} alt={service.title} style={{ width: '50px', height: '50px' }} />
                                    <h4 className="mb-0 text-success">{service.title}</h4>
                                </div>

                                <div className="text-start flex-grow-1">
                                    {service.isExpandable ? (
                                        <>
                                            {expandedIndex === index ? service.fullContent : service.shortContent}
                                            <button
                                                className="btn btn-link text-success p-0 mt-2"
                                                onClick={() => toggleExpand(index)}
                                            >
                                                {expandedIndex === index ? 'Read Less' : 'Read More'}
                                            </button>
                                        </>
                                    ) : (
                                        service.content
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
