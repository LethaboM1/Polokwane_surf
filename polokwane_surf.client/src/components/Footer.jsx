import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container text-center">
                <div className="social-links d-flex justify-content-center gap-3 mb-3">
                    {/*<a href="#"><i className="bi bi-twitter-x"></i></a>*/}
                    {/*<a href="#"><i className="bi bi-facebook"></i></a>*/}
                    {/*<a href="#"><i className="bi bi-instagram"></i></a>*/}
                    {/*<a href="#"><i className="bi bi-linkedin"></i></a>*/}
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} <strong>Polokwane Surfacing</strong>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

