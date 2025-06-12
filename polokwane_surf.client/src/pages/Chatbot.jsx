import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { FaEnvelope, FaCubes, FaPhone, FaClock, FaPaperPlane } from 'react-icons/fa';


const chatbotOptions = [
    { label: <><FaEnvelope /> Request a Quote</>, key: "quote" },
    { label: <><FaCubes /> Material Info</>, key: "materials" },
    { label: <><FaPhone /> Contact Details</>, key: "contact" },
    { label: <><FaClock /> Operating Hours</>, key: "hours" }
];


const responses = {
    quote: "To request a quote, please email us at:\nQuotes1@polokwanesurfacing.co.za\n?? Or call: 015 293 1221 / 082 885 0259",
    materials: "We offer asphalt, bitumen products, crushed aggregates, and more.\nVisit our gallery or materials page for details.",
    contact: "Email: Quotes1@polokwanesurfacing.co.za\n?? Tel: 015 293 1221\n?? Cell: 082 885 0259",
    hours: "We are open Monday–Friday, 8:00am -17:00pm.\n? Closed on weekends and public holidays.",
};


const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! How can we assist you today? Please choose an option below:' },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(msgs => [...msgs, { from: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            let response = "Sorry, I didn't quite understand that. Please choose an option below.";
            const key = Object.keys(responses).find(k =>
                userMsg.toLowerCase().includes(k)
            );
            if (key) response = responses[key];

            setMessages(msgs => [...msgs, { from: 'bot', text: response }]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleOptionClick = (key) => {
        const selected = chatbotOptions.find(o => o.key === key);
        setMessages(msgs => [...msgs, { from: 'user', text: selected.label }]);
        setIsTyping(true);
        setTimeout(() => {
            setMessages(msgs => [...msgs, { from: 'bot', text: responses[key] }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            <button className={`chat-toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                {isOpen ? <i className="bi bi-x-lg"></i> : <i className="bi bi-bricks"></i>}
            </button>

            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <img src="/images/bot1.jpg" alt="Bot" className="bot-avatar header-avatar" />
                    Polokwane Surfacing
                </div>

                <div className="chat-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`chat-message ${msg.from}`}>
                            {msg.from === 'bot' && (
                                <img src="/images/bot1.jpg" alt="Bot" className="bot-header-avatar" />
                            )}
                            <span className="message-text">{msg.text}</span>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="chat-message bot typing">
                            <img src="/images/bot1.jpg" alt="Bot" className="bot-header-avatar" />
                            <span className="message-text">Typing...</span>
                        </div>
                    )}

                    <div ref={messagesEndRef} />

                    <div className="chat-options">
                        {chatbotOptions.map((option, idx) => (
                            <button key={idx} onClick={() => handleOptionClick(option.key)} className="chat-option-btn">
                                {option.icon} {option.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="chat-input-area">
                    <textarea
                        rows={1}
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="chat-input"
                        style={{ color: 'black' }}
                    />
                    <button onClick={handleSend} className="chat-send-btn">
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
