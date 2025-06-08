import React, { useState } from 'react';
import visionImg from '../assets/vision.png';
import missionImg from '../assets/mission.png';
import teamImg from '../assets/team.png';
import socialImg from '../assets/social.png';

import con1 from '../assets/con1.jpg';
import con2 from '../assets/con2.jpg';
import con3 from '../assets/con3.jpg';
import con4 from '../assets/con4.jpg';
import '../App.css';

const features = [
    {
        id: 1,
        icon: visionImg,
        title: 'Our Vision',
        content: {
            heading: 'Client-Centric Excellence',
            text: 'To achieve its defined vision, the management of Polokwane Surfacing will place the delivery of prompt service and good quality workmanship at its highest priority, thereby ensuring client satisfaction and continued growth.',
            bullets: [
                'Prompt service delivery',
                'Good quality workmanship',
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
            heading: 'Leadership in Asphalt and Surfacing',
            text: 'To maximise our CAPACITY as leading asphalt suppliers and specialist surfacing services by innovative growth strategies which are sustainable and designed to ensure quality workmanship through effective LEADERSHIP and a commitment to COMPLIANCE, giving us the freedom to remain flexible in our approach.',
            bullets: [
                'Maximise capacity as industry leaders',
                'Sustainable and innovative growth strategies',
                'Leadership and compliance-driven delivery',
                'Flexibility in meeting client needs',
            ],
            image: con2,
        },
    },
    {
        id: 3,
        icon: teamImg,
        title: 'Management Team',
        content: {
            heading: 'Investing in Talent',
            text: 'Talent identification has always been and continues to be a very important aspect of Polokwane Surfacing`s recruitment strategy. Our Management Development Programme was launched with the aim of developing our management in various aspects of construction management. As the Company has expanded, more opportunities have arisen, creating the ideal opportunity for individuals to grow with the group. This is an ongoing process and will continue to be mutually beneficial to the Company and staff.',
            bullets: [
                'Ongoing talent identification and development',
                'Management Development Programme in place',
                'Growth opportunities within the company',
            ],
            image: con3,
        },
    },
    {
        id: 4,
        icon: socialImg,
        title: 'Social Responsibility',
        content: {
            heading: 'Community & Industry Empowerment',
            text: 'Polokwane Surfacing has been proactive in developing entrepreneurs in the Civil Engineering field. Black staff members with particular skills were identified and mentored to become independent contractors. With this mentoring, administrative assistance and financial support, these contractors are currently running successful businesses and offer their services to the industry at large.\n\nWe are committed to the development and upliftment of the communities within the areas of our operations. Annually various projects are undertaken to fulfil our commitment to this cause.\n\nTraining and education is important to us, we thus have successful training and bursary schemes in place for our employees and students studying towards a qualification within the Construction Industry.\n\nIn pursuit of our strategic goal to be the preferred employer, an active Employee Wellness Programme is available to provide support to our employees.',
            bullets: [
                'Mentorship for black-owned contractor development',
                'Annual community development projects',
                'Employee and student training and bursaries',
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
