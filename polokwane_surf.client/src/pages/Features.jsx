import React, { useState } from 'react';
import visionImg from '../assets/icons/vision.png';
import missionImg from '../assets/icons/mission.png';
import teamImg from '../assets/icons/team2.png';
import socialImg from '../assets/icons/socials.jpg';

import con1 from '../assets/image/mis.png';
import con2 from '../assets/image/vi.png';
import con3 from '../assets/image/16.jpg';
import con4 from '../assets/image/response.png';
import '../App.css';

const features = [
    {
        id: 1,
        icon: visionImg,
        title: 'Our Vision',
        content: {
            text: `To achieve its defined vision the management of Polokwane Surfacing (Pty) Ltd will place the delivery of prompt service and good quality workmanship as its highest priority, thereby ensuring client satisfaction and continued growth.`,
            bullets: [
                'Delivery of prompt service',
                'Commitment to good quality workmanship',
                'Ensuring client satisfaction and growth',
            ],
            image: con1,
        },
    },
    {
        id: 2,
        icon: missionImg,
        title: 'Mission Statement',
        content: {
            text: `To maximise our CAPACITY as leading asphalt suppliers and specialist surfacing services by innovative growth strategies which are sustainable and designed to ensure quality workmanship through effective LEADERSHIP and a commitment to COMPLIANCE, giving us the freedom to remain flexible in our approach.`,
            bullets: [
                'Maximise capacity as leading asphalt suppliers',
                'Innovative and sustainable growth strategies',
                'Ensure quality workmanship through leadership',
                'Commitment to compliance and flexibility',
            ],
            image: con2,
        },
    },
    {
        id: 3,
        icon: teamImg,
        title: 'Management Team',
        content: {
            text: `Talent identification has always been and continues to be a very important aspect of Polokwane Surfacings' recruitment strategy. Our Management Development Programme was launched with the aim of developing our management in various aspects of construction management. As the Company has expanded, more opportunities have arisen, creating the ideal opportunity for individuals to grow with the group. This is an ongoing process and will continue to be mutually beneficial to the Company and staff.`,
            bullets: [
                'Strategic talent identification and recruitment',
                'Management Development Programme launched',
                'Career growth within the expanding company',
            ],
            image: con3,
        },
    },
    {
        id: 4,
        icon: socialImg,
        title: 'Business Responsibility',
        content: {
            text: `Enterprise Development Training and Education\nSocial Economic Development\nEmployee Wellness Programme`,
            bullets: [
                'Enterprise Development Training and Education',
                'Social Economic Development initiatives',
                'Active Employee Wellness Programme',
            ],
            image: con4,
        },
    },
];

const Features = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderContent = (feature) => (
        <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>{feature.content.heading}</h3>
                <p className="fst-italic">{feature.content.text}</p>
                <ul>
                    {feature.content.bullets.map((bullet, index) => (
                        <li key={index}>
                            <i className="bi bi-check2-all"></i> <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
                <p>
                    Polokwane Surfacing remains committed to sustainable growth through integrity, empowerment, and innovation.
                </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src={feature.content.image} alt={feature.title} className="img-fluid" />
            </div>
        </div>
    );

    return (
        <section id="features" className="features section">
            <div className="container">
                <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
                    {features.map((feature) => (
                        <li className="nav-item col-3" key={feature.id}>
                            <button
                                className={`nav-link w-100 text-center ${activeTab === feature.id ? 'active show' : ''}`}
                                onClick={() => setActiveTab(feature.id)}
                            >
                                <img src={feature.icon} alt={feature.title} className="tab-icon mb-2" />
                                <h4 className="d-none d-lg-block">{feature.title}</h4>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`tab-pane fade ${activeTab === feature.id ? 'active show' : ''}`}
                        >
                            {renderContent(feature)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
