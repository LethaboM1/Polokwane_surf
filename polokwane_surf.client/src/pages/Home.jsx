import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CarouselSection from "../components/CarouselSection";
import About from './About';
import Features from './Features';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import Services from './Services';
import Gallery from './Gallery';
import Careers from './Documents';
import Documents from './Careers';
//import ClientSurvey from './Survey';
import Contact from './Contact';
import ScrollToTop from '../components/ScrollToTop';


const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <main>
            <CarouselSection />
            <About />
            <Features />
            <Services />
            <Portfolio />
            <Gallery />
            <Testimonial />
            <Contact />
            <ScrollToTop />
        </main>
    );
};

export default Home;
