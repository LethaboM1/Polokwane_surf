import React from 'react';
import Header from '../components/Header';
import CarouselSection from "../components/CarouselSection";
import careerIcon from '../assets/icons/careers.png';
import '../App.css';

const careers = [
    {
        title: 'Lab Tester',
        location: 'Polokwane, Limpopo',
        type: 'Full-Time',
        description: 'Conduct laboratory tests on materials to ensure compliance with project specifications.',
        applicationForm: '/pdf/posts.pdf',
        applyOnline: false,
    },
    {
        title: 'Truck Driver',
        location: 'Polokwane, Limpopo',
        type: 'Full-Time',
        description: 'Transport materials and equipment safely to and from construction sites.',
        applicationForm: '',
        applyOnline: true,
    },
];

const Careers = () => {
    return (
        <>
            <Header />
            <CarouselSection />

            <section id="careers" className="section careers">
              
                <div className="container">
                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>CAREERS</h4>
                        <div className="line"></div>
                    </div>

                    {careers.length === 0 ? (
                        <div className="alert alert-info text-center p-4 shadow rounded">
                            <h5 className="mb-2 text-success">No Vacancies Available</h5>
                            <p>Thank you for your interest. Please check back later or follow us for updates.</p>
                        </div>
                    ) : (
                        <div className="row gy-4">
                            {careers.map((job, index) => (
                                <div className="col-lg-4 col-md-6 d-flex" key={index}>
                                    <div className="career-card p-4 shadow rounded bg-white h-100 w-100 d-flex flex-column justify-content-between">
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <img src={careerIcon} alt={job.title} style={{ width: '40px', height: '40px' }} />
                                            <h5 className="mb-0 text-success">{job.title}</h5>
                                        </div>
                                        <p className="text-muted mb-2"><strong>Location:</strong> {job.location}</p>
                                        <p className="text-muted mb-2"><strong>Type:</strong> {job.type}</p>
                                        <p className="text-muted flex-grow-1">{job.description}</p>

                                        {job.applyOnline ? (
                                            <a
                                                href="/apply"
                                                className="btn btn-outline-success mt-3"
                                            >
                                                Apply Online
                                            </a>
                                        ) : (
                                            <a
                                                href={job.applicationForm}
                                                className="btn btn-success mt-3"
                                                download
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Download Application
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Careers;
