import React, { useState } from 'react';
import brief from '../assets/briefcase.png';
import truck from '../assets/truck.png';
import industry from '../assets/industry.png';
import affli from '../assets/affli.png';
import '../App.css';

const services = [
    {
        icon: brief,
        title: 'NATURE OF BUSINESS',
        content: (
            <div className="text-start">
                <p>Our products and services include the manufacturing, supply and application of:</p>
                <ul className="mt-2">
                    <li>Various grades of hot mix asphalt including UTFC</li>
                    <li>ETB (Emulsion Treated Base)</li>
                    <li>Modified bituminous bases</li>
                    <li>Bitumen prime coats</li>
                    <li>Bitumen emulsions</li>
                </ul>
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
                    Our company owns an extensive fleet of plant and equipment including asphalt mixing plants,
                    pavers, shuttle buggys, rollers, chip spreaders, and more.
                </p>
            </div>
        ),
        fullContent: (
            <div className="text-start">
                <p>
                    To provide a one-stop service, our Company owns an extensive fleet of plant and equipment.
                    This includes asphalt mixing plants, pavers, shuttle buggys, rollers, chip spreaders,
                    bitumen distributors, milling machines, recyclers, and mechanical brooms.
                </p>
                <p className="mt-2">
                    Our static asphalt plants are situated in:
                </p>
                <ul>
                    <li>Polokwane (Limpopo Province)</li>
                    <li>Hazyview (Mpumalanga Province)</li>
                    <li>2 mobile asphalt plants for remote sites</li>
                </ul>
                <p className="mt-2">
                    By following a strict plant replacement program, we keep our fleet modern.
                    Maintaining our equipment to a high standard, along with skilled and experienced drivers
                    and operators, ensures quality workmanship and productivity.
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
                <ul className="mt-2">
                    <li>COLTO and SACTCC Standard Specifications for Road and Bridge Works</li>
                    <li>SANS (South African Standards)</li>
                    <li>OSHACT 18001</li>
                    <li>ISO 9001</li>
                    <li>VARIOUS SABETA</li>
                </ul>
            </div>
        ),
    },
    {
        icon: affli,
        title: 'AFFILIATIONS',
        content: (
            <div className="text-start">
                <p>We are proudly affiliated with:</p>
                <ul className="mt-2">
                    <li>BSI Quality Management System ISO 9001</li>
                    <li>CETA</li>
                    <li>MERSETA</li>
                    <li>SA ROAD FEDERATION</li>
                    <li>SABITA</li>
                    <li>Society of Asphalt Technology (SAT)</li>
                    <li>Care Ways</li>
                </ul>
            </div>
        ),
    },
];

const Services = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="services" className="services section">
            <div className="section-heading d-flex align-items-center gap-3">
                <h4>SERVICES</h4>
                <div className="line"></div>
            </div>

            <div className="container">
                <div className="row gy-4">
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
                                            {expanded ? service.fullContent : service.shortContent}
                                            <button
                                                className="btn btn-link text-success p-0 mt-2"
                                                onClick={() => setExpanded(!expanded)}
                                            >
                                                {expanded ? 'Read Less' : 'Read More'}
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
