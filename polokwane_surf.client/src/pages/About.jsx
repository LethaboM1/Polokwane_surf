import React from 'react';
import '../App.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="row gy-3">
                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>ABOUT</h4>
                        <div className="line"></div>
                    </div>

                    {/* Left Column - Main Text */}
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                        <p>
                            The Company was formed in 1995 to supply asphalt products and specialist surfacing services to the construction industry.
                            Initially operating in the Limpopo Province, we have now moved beyond these borders.
                        </p>
                        <p>
                            We are a successful Level 1 BBBEE compliant company and proud to be 41.5% black owned.
                            We have completed numerous contracts as main contractors, subcontractors and joint ventures with other contractors.
                        </p>
                    </div>

                    {/* Right Column - Bullet Points */}
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <ul>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Founded in 1995 to serve Limpopo and beyond</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Specialists in asphalt supply and surfacing services</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Level 1 BBBEE compliant, 41.5% black owned</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Experienced in joint ventures and subcontracting</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-circle green-check"></i>{' '}
                                <span>Committed to SHEQ and ISO-certified operations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
