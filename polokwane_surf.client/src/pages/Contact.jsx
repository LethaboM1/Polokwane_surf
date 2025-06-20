import React, { useState } from 'react';
import '../App.css';
import { FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    //const handleSubmit = async (e) => {
    //    e.preventDefault();
    //    setLoading(true);

    //    const formData = { name, phoneNumber, email, subject, message };

    //    try {
    //        const response = await fetch('https://localhost:7059/api/contact/submit', {
    //            method: 'POST',
    //            headers: { 'Content-Type': 'application/json' },
    //            body: JSON.stringify(formData),
    //        });

    //        const text = await response.text();
    //        const result = (() => {
    //            try {
    //                return JSON.parse(text);
    //            } catch {
    //                return { message: text };
    //            }
    //        })();

    //        if (response.ok) {
    //            toast.success("Your message was sent!");
    //            setName('');
    //            setPhoneNumber('');
    //            setEmail('');
    //            setSubject('');
    //            setMessage('');
    //        } else {
    //            toast.error("? Failed to send: " + result.message);
    //        }
    //    } catch (error) {
    //        console.error("Error submitting form:", error);
    //        toast.error("?? An error occurred while sending your message.");
    //    } finally {
    //        setLoading(false);
    //    }
    //};

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = { name, phoneNumber, email, subject, message };

        try {
            // Save to DB via .NET API
            const dbResponse = await fetch('https://localhost:7059/api/contact/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!dbResponse.ok) throw new Error("Failed to save message to database.");

            // Send email via EmailJS
            await emailjs.send(
                'service_1ikwxjx',
                'template_pl5mjv4', 
                formData,
                'RR4ItprwwQRo67VD-'
            );

            toast.success("Message sent successfully!");
            setName('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="contact" className="contact-section">

            <div className="container">
                <div className="row gy-3">
                    <div className="section-heading d-flex align-items-center gap-3">
                        <h4>CONTACT</h4>
                        <div className="line"></div>
                    </div>

                    <div className="contact-grid">
                        {/* Left: Contact Info */}
                        <div className="contact-info">
                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <strong>Head Office Address:</strong><br />
                                    9 Yster Street, Ladine, Polokwane, 0699<br />
                                    <strong>Tel:</strong> 015 293 1221
                                </div>
                            </div>

                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <strong>Postal Address:</strong><br />
                                    P.O. Box 288, Ladanna, Polokwane, 0704
                                </div>
                            </div>

                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <strong>Site Address:</strong><br />
                                    Plot 22, Palmietfontein,<br />
                                    Beyond South Gate Garage,<br />
                                    Polokwane, 0700<br />
                                    <strong>Cell:</strong> 082 885 0259
                                </div>
                            </div>

                            <div className="info-item">
                                <FaFax className="info-icon" />
                                <div>
                                    <strong>Fax:</strong><br />
                                    +27 (086) 480 5115
                                </div>
                            </div>

                            <div className="info-item">
                                <FaEnvelope className="info-icon" />
                                <div>
                                    <strong>Email:</strong><br />
                                    Quotes1@polokwanesurfacing.co.za
                                </div>
                            </div>

                            {/* One map only - Head Office */}
                            <div className="info-item">
                                <div className="map-container">
                                    <iframe
                                        title="Head Office Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.526400645719!2d29.4553723!3d-23.888529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6cf16a5675a4d%3A0x3e8b87fef2f396e0!2s9%20Yster%20St%2C%20Ladine%2C%20Polokwane%2C%200699!5e0!3m2!1sen!2sza!4v1718129790000!5m2!1sen!2sza"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Full Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                name="mobileNumber"
                                placeholder="Enter Mobile Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit" className="contact-button" disabled={loading}>
                                {loading ? <span className="spinner"></span> : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Toast Container for notifications */}
            <ToastContainer />
        </section>
    );
};

export default Contact;
