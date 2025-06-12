import React from 'react';
import Header from '../components/Header';
import CarouselSection from "../components/CarouselSection";
import '../App.css';

const Apply = () => {
    return (
             <>
            <Header />
            <CarouselSection />

        <section id="apply" className="section apply">
          
                <div className="container">
                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>ONLINE APPLICATION</h4>
                        <div className="line"></div>
                    </div>

                <div className="alert alert-warning text-center p-5 shadow rounded">
                    <h5 className="mb-3 text-success">Coming Soon</h5>
                    <p>
                        Our online application form will be available shortly. In the meantime, you may download
                        an application from any open vacancy or contact us for inquiries.
                    </p>
                </div>
            </div>
            </section>
        </>
    );
};

export default Apply;
