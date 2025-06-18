import React from 'react';
import Header from '../components/Header';
import CarouselSection from "../components/CarouselSection";
import pdfIcon from '../assets/icons/company.png';
import Icon from "../assets/icons/docu.png";
import Icon1 from '../assets/icons/docu.png';
import Icon2 from '../assets/icons/docuu.png';
import '../App.css';

const documents = [
    {
        title: 'Company Profile',
        description: 'Download our full company profile in PDF format.',
        file: '/pdf/companyprofile.pdf',
        icon: pdfIcon,
    },
    {
        title: 'Health & Safety Policy',
        description: 'Our safety standards and procedures.',
        file: '/pdf/BSI.pdf',
        icon: Icon,
    },
    {
        title: 'ISO Certification',
        description: 'Proof of ISO 9001 certification.',
        file: '/pdf/CIDB.pdf',
        icon: Icon1,
    },
    {
        title: 'BBBEE Certificate',
        description: 'Black Economic Empowerment status certificate.',
        file: '/pdf/BBBEE.pdf',
        icon: Icon2,
    },
];

const Documents = () => {
    return (
        <>
            <Header />
            <CarouselSection />
            <section id="documents" className="documents section mt-4">
                <div className="container">
                    <div className="row gy-3">
                        <div className="section-heading d-flex align-items-center gap-3">
                            <h4>DOCUMENTS</h4>
                            <div className="line"></div>
                        </div>

                        {documents.map((doc, index) => (
                            <div className="col-lg-4 col-md-6 d-flex" key={index}>
                                <div className="document-card p-4 shadow rounded bg-white h-100 w-100 d-flex flex-column justify-content-between">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <img src={doc.icon} alt={doc.title} style={{ width: '40px', height: '40px' }} />
                                        <h5 className="mb-0 text-success">{doc.title}</h5>
                                    </div>
                                    <p className="text-muted flex-grow-1">{doc.description}</p>
                                    <a
                                        href={doc.file}
                                        className="btn btn-success mt-3"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Documents;
