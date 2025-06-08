import React from 'react';
import '../App.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="section-heading d-flex align-items-center gap-3">
                <h4>ABOUT</h4>
                <div className="line"></div>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {/* Left Column */}
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            The Company was formed in 1995 when a need for a road-surfacing provider was identified in the Limpopo Province.
                            Initially operating within Limpopo, we have now moved beyond these borders, supplying asphalt and bituminous
                            products and specialised surfacing services to the construction industry.
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Founded in 1995 to serve Limpopo and beyond</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Experts in asphalt supply and surfacing solutions</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>CIDB registered with Grades 8CE and 8SB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p>
                            We are a successful Level 1 BBBEE compliant company with 41.5% black ownership. Our commitment extends beyond ownership-
                            we embrace the broader objectives of BBBEE, including management control, enterprise and supplier development, skills
                            development, and socio-economic development.
                        </p>
                        <p>
                            Safety, Health, Environment & Quality (SHEQ) is a top priority for our company's sustainability and for the construction
                            industry as a whole. We are proud to be an ISO certified company, upholding the highest standards in everything we do.
                        </p>
                        {/* Optional read more link */}
                        {/* <a href="#features" className="read-more">
                            <span>Explore Our Values</span> <i className="bi bi-arrow-right"></i>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
