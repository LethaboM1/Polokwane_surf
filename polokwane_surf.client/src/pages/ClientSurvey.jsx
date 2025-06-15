import React, { useState } from 'react';
import Header from '../components/Header';
import CarouselSection from "../components/CarouselSection";
import '../App.css';

const ClientSurvey = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceUsed: '',
        rating: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    //const handleSubmit = (e) => {
    //    e.preventDefault();
    //    console.log('Submitted data:', formData);
    //    alert("Thank you for your feedback!");
    //    setFormData({ name: '', email: '', serviceUsed: '', rating: '', feedback: '' });
    //};
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:7059/api/survey/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Thank you for your feedback!");
                setFormData({ name: '', email: '', serviceUsed: '', rating: '', feedback: '' });
            } else {
                alert("Failed to submit survey. Please try again later.");
            }
        } catch (error) {
            console.error("Survey submission error:", error);
            alert("An error occurred. Please try again.");
        }
    };



    return (
        <>
            <Header />
            <CarouselSection />

            <section className="survey section">
                <div className="container">
                    <div className="section-heading d-flex align-items-center gap-3 mb-4">
                        <h4>CLIENT SURVEY</h4>
                        <div className="line"></div>
                    </div>

                    <form className="survey-form" onSubmit={handleSubmit}>
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Service Used"
                                    name="serviceUsed"
                                    value={formData.serviceUsed}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Rate Us</option>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good</option>
                                    <option value="Average">Average</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Additional Feedback"
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-12 text-end">
                                <button type="submit" className="btn btn-success px-4">Submit Survey</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ClientSurvey;
