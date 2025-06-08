import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import ClientSurvey from './pages/ClientSurvey';
import Careers from './pages/Careers';
import Apply from './pages/Apply';
import Testimonial from './pages/Testimonial';
import Documents from './pages/Documents';
import Contact from './pages/Contact';


function App() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Router>
            <Header />
            <main style={{ paddingTop: '80px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/clientsurvey" element={<ClientSurvey />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
