//import React, { useState } from 'react';
//import '../App.css';
//import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFax } from 'react-icons/fa';

//const Contact = () => {
//    const [name, setName] = useState('');
//    const [email, setEmail] = useState('');
//    const [subject, setSubject] = useState('');
//    const [message, setMessage] = useState('');
//    const [phoneNumber, setPhoneNumber] = useState('');

//    const handleSubmit = async (e) => {
//        e.preventDefault();

//        const formData = {
//            name,
//            phoneNumber,
//            email,
//            subject,
//            message
//        };

//        try {
//            const response = await fetch('https://localhost:7059/api/Contact/submit', {
//                method: 'POST',
//                headers: { 'Content-Type': 'application/json' },
//                body: JSON.stringify(formData),
//            });

//            if (!response.ok) {
//                throw new Error(`HTTP error! Status: ${response.status}`);
//            }

//            const data = await response.json();
//            console.log('Success:', data);
//            alert("Your message has been sent successfully!");

//            // Optional: Clear the form
//            setName('');
//            setPhoneNumber('');
//            setEmail('');
//            setSubject('');
//            setMessage('');
//        } catch (error) {
//            console.error('Failed to send contact form:', error.message);
//            alert("Unable to connect to server. Please make sure the backend is running.");
//        }
//    };



//    return (
//        <section id="contact" className="contact-section">
//            <div className="section-heading d-flex align-items-center gap-3">
//                <h4>CONTACT</h4>
//                <div className="line"></div>
//            </div>

//            <div className="container">
//                <div className="contact-grid">
//                    {/* Left: Contact Info + Map */}
//                    <div className="contact-info">
//                        <div className="info-item">
//                            <FaMapMarkerAlt className="info-icon" />
//                            <div>
//                                <strong>Physical Address:</strong><br />
//                                9 Yster Street, Ladine, Polokwane, 0699
//                            </div>
//                        </div>
//                        <div className="info-item">
//                            <FaMapMarkerAlt className="info-icon" />
//                            <div>
//                                <strong>Postal Address:</strong><br />
//                                P.O. Box 288, Ladanna, Polokwane, 0704
//                            </div>
//                        </div>
//                        <div className="info-item">
//                            <FaPhoneAlt className="info-icon" />
//                            <div>
//                                <strong>Telephone:</strong><br />
//                                Tel: +27 (015) 293 1221
//                            </div>
//                        </div>
//                        <div className="info-item">
//                            <FaFax className="info-icon" />
//                            <div>
//                                <strong>Fax:</strong><br />
//                                +27 (086) 480 5115
//                            </div>
//                        </div>
//                        <div className="info-item">
//                            <FaEnvelope className="info-icon" />
//                            <div>
//                                <strong>Email:</strong><br />
//                                admin@polokwanesurfacing.co.za
//                            </div>
//                        </div>
//                        {/*<iframe*/}
//                        {/*    title="Polokwane Map"*/}
//                        {/*    width="100%"*/}
//                        {/*    height="250"*/}
//                        {/*    style={{ border: 0 }}*/}
//                        {/*    loading="lazy"*/}
//                        {/*    allowFullScreen*/}
//                        {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.905446078409!2d29.44869371542826!3d-23.901540984504616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d9d979b0ab47%3A0x7055d0d74dca4f96!2sPolokwane!5e0!3m2!1sen!2sza!4v1717672952220!5m2!1sen!2sza"*/}
//                        {/*/>*/}
//                    </div>

//                    {/* Right: Contact Form */}
//                    <form className="contact-form" onSubmit={handleSubmit}>
//                        <input
//                            type="text"
//                            name="name"
//                            placeholder="Your Name"
//                            required
//                            value={name}
//                            onChange={(e) => setName(e.target.value)}
//                        />
//                        <input
//                            type="text"
//                            name="phoneNumber"
//                            placeholder="Your Phone Number (for SMS)"
//                            value={phoneNumber}
//                            onChange={(e) => setPhoneNumber(e.target.value)}
//                        />
//                        <input
//                            type="email"
//                            name="email"
//                            placeholder="Your Email"
//                            required
//                            value={email}
//                            onChange={(e) => setEmail(e.target.value)}
//                        />
//                        <input
//                            type="text"
//                            name="subject"
//                            placeholder="Subject"
//                            required
//                            value={subject}
//                            onChange={(e) => setSubject(e.target.value)}
//                        />
//                        <textarea
//                            name="message"
//                            rows="5"
//                            placeholder="Your Message"
//                            required
//                            value={message}
//                            onChange={(e) => setMessage(e.target.value)}
//                        />

//                        <button type="submit" className="contact-button">Send Message</button>
//                    </form>
//                </div>
//            </div>
//        </section>
//    );
//};

//export default Contact;



import React, { useState } from 'react';
import '../App.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFax } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        const formData = {
            name,
            phoneNumber,
            email,
            subject,
            message
        };

        console.log('Form submitted:', formData);
        alert("Your message has been sent successfully!");

        // Clear the form
        setName('');
        setPhoneNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-heading d-flex align-items-center gap-3">
                <h4>CONTACT</h4>
                <div className="line"></div>
            </div>

            <div className="container">
                <div className="contact-grid">
                    {/* Left: Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <strong>Physical Address:</strong><br />
                                9 Yster Street, Ladine, Polokwane, 0699
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
                            <FaPhoneAlt className="info-icon" />
                            <div>
                                <strong>Telephone:</strong><br />
                                Tel: +27 (015) 293 1221
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
                                admin@polokwanesurfacing.co.za
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Your Phone Number (for SMS)"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
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
                        <button type="submit" className="contact-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

