//import React from 'react';
//import '../App.css'; // Add styles here or use Tailwind if preferred
//import { FaUsers, FaBullseye, FaEye, FaBalanceScale, FaBuilding } from 'react-icons/fa';

//const cards = [
//    { icon: <FaBuilding />, title: 'About Us', back: 'We are a leading construction company.' },
//    { icon: <FaEye />, title: 'Vision', back: 'To be the best surfacing provider in SA.' },
//    { icon: <FaBullseye />, title: 'Mission', back: 'Deliver quality infrastructure solutions.' },
//    { icon: <FaUsers />, title: 'Management Team', back: 'Experienced professionals in every field.' },
//    { icon: <FaBalanceScale />, title: 'Social Responsibility', back: 'We care for our community.' },
//];

//const FlipCards = () => {
//    return (
//        <div className="row">
//            {cards.map((card, i) => (
//                <div className="col-md-4 mb-4" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
//                    <div className="flip-card">
//                        <div className="flip-card-inner">
//                            <div className="flip-card-front text-center p-4 shadow">
//                                <div className="icon mb-3" style={{ fontSize: '2rem', color: 'green' }}>{card.icon}</div>
//                                <h5>{card.title}</h5>
//                            </div>
//                            <div className="flip-card-back text-white p-4" style={{ backgroundColor: '#28a745' }}>
//                                <p>{card.back}</p>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            ))}
//        </div>
//    );
//};

//export default FlipCards;

import React from 'react';
import { FaUsers, FaBullseye, FaEye, FaBalanceScale, FaBuilding } from 'react-icons/fa';

const cards = [
    { icon: <FaBuilding size={30} />, title: 'About Us', back: 'We are a leading construction company.' },
    { icon: <FaEye size={30} />, title: 'Vision', back: 'To be the best surfacing provider in SA.' },
    { icon: <FaBullseye size={30} />, title: 'Mission', back: 'Deliver quality infrastructure solutions.' },
    { icon: <FaUsers size={30} />, title: 'Management Team', back: 'Experienced professionals in every field.' },
    { icon: <FaBalanceScale size={30} />, title: 'Social Responsibility', back: 'We care for our community.' },
];

const FlipCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="flip-card w-72 h-64"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                >
                    <div className="flip-card-inner rounded-2xl shadow-lg bg-white hover:bg-green-50">
                        <div className="flip-card-front flex flex-col items-center justify-center p-4">
                            <div className="text-green-700 mb-2">{card.icon}</div>
                            <h3 className="font-bold text-xl">{card.title}</h3>
                        </div>
                        <div className="flip-card-back flex items-center justify-center p-4 bg-green-700 text-white">
                            <p>{card.back}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FlipCards;
