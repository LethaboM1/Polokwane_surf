import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import '../App.css';

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const location = useLocation();

    const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
    const closeMobileNav = () => setMobileNavOpen(false);
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                {/* Logo */}
                <Link to="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
                    <img src="/images/logo.png" alt="Logo" />
                    <div>
                        <h1 className="sitename">POLOKWANE SURFACING</h1>
                        <p className="slogan">ASPHALT PRODUCERS AND SURFACING CONTRACTORS</p>
                    </div>
                </Link>


                {/* Navigation */}
                <nav id="navmenu" className={`navmenu ${mobileNavOpen ? 'show' : ''}`}>
                    <ul>
                        <li><Link to="/" className={isActive('/')} onClick={closeMobileNav}>Home</Link></li>
                        <li><Link to="/about" className={isActive('/about')} onClick={closeMobileNav}>About</Link></li>

                        {/* Services Dropdown */}
                        <li className="dropdown">
                            <span>Services</span>
                            <ul className="dropdown-menu">
                                <li><Link to="/portfolio" onClick={closeMobileNav}>Portfolio</Link></li>
                                <li><Link to="/gallery" onClick={closeMobileNav}>Gallery</Link></li>
                                <li><Link to="/testimonial" onClick={closeMobileNav}>Testimonial</Link></li>
                            </ul>
                        </li>

                        {/* Client Survey Dropdown */}
                        <li className="dropdown">
                            <span>Client Survey</span>
                            <ul className="dropdown-menu">
                                <li><Link to="/documents" onClick={closeMobileNav}>Documents</Link></li>
                                {/*<li><Link to="/careers" onClick={closeMobileNav}>Careers</Link></li>*/}
                                <li><Link to="/clientsurvey" onClick={closeMobileNav}>Survey</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/contact" className={isActive('/contact')} onClick={closeMobileNav}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <i className={`mobile-nav-toggle d-xl-none bi ${mobileNavOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
            </div>
        </header>
    );
};

export default Header;

