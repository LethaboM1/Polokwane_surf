import React, { useState } from 'react';
import Header from '../components/Header';
import CarouselSection from '../components/CarouselSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import '../App.css';

const ClientSurvey = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceUsed: '',
        rating: '',
        feedback: ''
    });

    const [starRating, setStarRating] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStarClick = (value) => {
        setStarRating(value);
        setFormData(prev => ({ ...prev, rating: value.toString() }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (starRating === 0) {
            toast.error('Please select a star rating.');
            return;
        }

        const stars = '??'.repeat(starRating);

        try {
            const response = await fetch('https://localhost:7059/api/ClientSurvey/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // ? Show toast first
                toast.success('Survey submitted successfully!');

                // ? Trigger email, but don't await
                emailjs.send(
                    'service_1ikwxjx',
                    'template_azbebum',
                    {
                        name: formData.name,
                        email: formData.email,
                        serviceUsed: formData.serviceUsed,
                        rating: starRating.toString(),
                        stars,
                        feedback: formData.feedback,
                    },
                    'RR4ItprwwQRo67VD-'
                ).catch((error) => {
                    console.error('EmailJS failed:', error);
                    toast.error('Survey saved but email failed to send.');
                });

                // ? Reset form
                setFormData({ name: '', email: '', serviceUsed: '', rating: '', feedback: '' });
                setStarRating(0);
            } else {
                toast.error('Failed to submit survey. Please try again.');
            }
        } catch (error) {
            console.error('Survey submission error:', error);
            toast.error('An error occurred. Please try again later.');
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
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => handleStarClick(star)}
                                            style={{
                                                fontSize: '24px',
                                                cursor: 'pointer',
                                                color: star <= starRating ? '#f1c40f' : '#ccc',
                                                fontFamily: 'Arial, sans-serif'
                                            }}
                                            dangerouslySetInnerHTML={{ __html: '&#9733;' }} // Unicode star
                                        ></span>
                                    ))}
                                    <span className="ms-2">
                                        {starRating > 0 ? `${starRating} Star${starRating > 1 ? 's' : ''}` : ''}
                                    </span>
                                </div>
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
                <ToastContainer position="top-right" autoClose={3000} />
            </section>
        </>
    );
};

export default ClientSurvey;

