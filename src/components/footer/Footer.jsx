import React from "react";
import "./footer.css";

const Footer=()=>{
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Max_Dev - Muhammad Nazarov</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="www.facebook.com" className="footer__social-link" target="_blank">
                <i className="bx bxl-facebook"></i>
            </a>

            <a href="wwww.instagram.com" className="footer__social-link" target="_blank">
                <i className="bx bxl-instagram"></i>
            </a>

            <a href="www.twitter.com" className="footer__social-link" target="_blank">
                <i className="bx bxl-twitter"></i>
            </a>
                </div>

                <span className="footer__copy"> All rights reserved</span>
            </div>
        </footer>
    )
}
export default Footer;