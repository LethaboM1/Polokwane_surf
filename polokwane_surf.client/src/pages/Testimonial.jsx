import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import test1 from '../assets/image/test1.jpg';
import test2 from '../assets/image/test2.jpg';
import test3 from '../assets/image/2.jpg';
import test4 from '../assets/image/3.jpg';
import test5 from '../assets/image/4.jpg';
import test6 from '../assets/image/4.jpg';
import test7 from '../assets/image/4.jpg';
import test8 from '../assets/image/4.jpg';
import test9 from '../assets/image/4.jpg';
import test10 from '../assets/image/4.jpg';
import '../App.css';

const testimonials = [
    {
        date: 'Jan 10, 2019',
        title: '5th Mamabolo Monate Annual Soccer Tournament',
        feedback:
            'Polokwane Surfacing is proud to have been part of the 5th Mamabolo Monate Annual Soccer Tournament held between 23 and 31 December 2018.',
        image: test1,
        name: 'Polokwane Surfacing',
    },
    {
        date: 'Aug 13, 2018',
        title: 'New Classrooms for Kgakala Secondary School',
        feedback:
            'Funding has been provided for the building of a classroom block for Kgakala Secondary School in Limpopo.',
        image: test2,
        name: 'Polokwane Surfacing',
    },
    {
        name: 'Anonymous',
        title: 'Project Manager',
        feedback: 'Polokwane Surfacing delivered exceptional quality on time and within budget. Their professionalism and attention to detail are unmatched.',
        image: test3,
    },
    {
        name: 'Anonymous',
        title: 'Municipal Engineer',
        feedback: 'We partnered with Polokwane Surfacing on several projects, and they have consistently exceeded our expectations with durable and reliable roadwork.',
        image: test4,
    },
    {
        name: 'Anonymous',
        title: 'Community Representative',
        feedback: 'Our community benefited greatly from their infrastructure upgrades. The team was respectful, efficient, and committed to excellence.',
        image: test5,
    },
    {
        name: 'Site Supervisor',
        title: 'On-Site Testimonial',
        feedback: 'Working with Polokwane Surfacing has been a smooth experience. Their team adheres to safety and quality standards rigorously.',
        image: test6,
    },
    {
        date: 'Nov 25, 2020',
        title: 'Youth Development Programme',
        feedback: 'Polokwane Surfacing sponsored equipment and training workshops to empower unemployed youth in the Capricorn District.',
        image: test7,
        name: 'Polokwane Surfacing',
    },
    {
        name: 'Local Contractor',
        title: 'Small Business Partner',
        feedback: 'Their subcontractor support helped grow my business. They are transparent, fair, and always meet deadlines.',
        image: test8,
    },
    {
        date: 'Sep 15, 2021',
        title: 'Road Safety Awareness Campaign',
        feedback: 'We joined Polokwane Surfacing’s road safety initiative in rural Limpopo, educating school children and motorists alike.',
        image: test9,
        name: 'Polokwane Surfacing',
    },
    {
        name: 'Training Participant',
        title: 'Skills Development Beneficiary',
        feedback: 'Thanks to their training programs, I gained skills that helped me find employment in the construction industry.',
        image: test10,
    }
];


const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials section">
   
            <div className="container">
                <div className="section-heading d-flex align-items-center gap-3">
                    <h4>TESTIMONIALS</h4>
                    <div className="line"></div>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    speed={600}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 30 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1200: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-item">
                                <img src={item.image} alt="testimonial" className="testimonial-img" />
                                <h3>{item.name || 'Polokwane Surfacing'}</h3>
                                <h4>{item.title}</h4>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="bi bi-star-fill"></i>
                                    ))}
                                </div>
                                <p>
                                    <i className="bi bi-quote quote-icon-left"></i>
                                    <span>{item.feedback}</span>
                                    <i className="bi bi-quote quote-icon-right"></i>
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
