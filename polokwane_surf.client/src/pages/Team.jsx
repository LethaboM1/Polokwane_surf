//import React from 'react';
//import './Team.css'; // optional: place any styles here if needed

//const teamMembers = [
//    { name: 'Walter White', role: 'Chief Executive Officer', img: 'assets/img/team/team-1.jpg' },
//    { name: 'Sarah Jhonson', role: 'Product Manager', img: 'assets/img/team/team-2.jpg' },
//    { name: 'William Anderson', role: 'CTO', img: 'assets/img/team/team-3.jpg' },
//    { name: 'Amanda Jepson', role: 'Accountant', img: 'assets/img/team/team-4.jpg' },
//];

//const Team = () => {
//    return (
//        <section id="team" className="team section">
//            <div className="container section-title" data-aos="fade-up">
//                <h2>Team</h2>
//                <p>Our Hardworking Team</p>
//            </div>
//            <div className="container">
//                <div className="row gy-4">
//                    {teamMembers.map((member, index) => (
//                        <div key={index} className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
//                            <div className="team-member">
//                                <div className="member-img">
//                                    <img src={member.img} className="img-fluid" alt={member.name} />
//                                    <div className="social">
//                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
//                                        <a href="#"><i className="bi bi-facebook"></i></a>
//                                        <a href="#"><i className="bi bi-instagram"></i></a>
//                                        <a href="#"><i className="bi bi-linkedin"></i></a>
//                                    </div>
//                                </div>
//                                <div className="member-info">
//                                    <h4>{member.name}</h4>
//                                    <span>{member.role}</span>
//                                </div>
//                            </div>
//                        </div>
//                    ))}
//                </div>
//            </div>
//        </section>
//    );
//};

//export default Team;


import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const teamMembers = [
    {
        name: 'Walter White',
        role: 'Chief Executive Officer',
        image: '/images/team-1.jpg',
    },
    {
        name: 'Sarah Jhonson',
        role: 'Product Manager',
        image: '/images/team-2.jpg',
    },
    {
        name: 'William Anderson',
        role: 'CTO',
        image: '/images/team-3.jpg',
    },
    {
        name: 'Amanda Jepson',
        role: 'Accountant',
        image: '/images/team-4.jpg',
    },
];

const Team = () => {
    return (
        <section id="team" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-green-700">Team</h2>
                    <p className="text-gray-600">Our Hardworking Team</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team-member bg-white shadow-lg rounded-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative group">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-300 space-x-3">
                                    <a href="#"><FaFacebook className="text-white text-xl" /></a>
                                    <a href="#"><FaInstagram className="text-white text-xl" /></a>
                                    <a href="#"><FaLinkedin className="text-white text-xl" /></a>
                                    <a href="#"><FaXTwitter className="text-white text-xl" /></a>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <h4 className="text-lg font-semibold">{member.name}</h4>
                                <span className="text-sm text-gray-500">{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
