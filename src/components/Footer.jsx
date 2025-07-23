import React from "react";
import "./about/about_Style.css";
import footerLogo from "../assets/images/about images/15.jpg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src={footerLogo} alt="SquareUp" className="footer-logo" />
          <span className="footer-logo-text">SquareUp</span>
        </div>

        <div className="footer-middle">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="footer-bottom">
            <span className="stay-connected">Stay Connected</span>
          </div>
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="footer-contact-info">
          <ul>
            <li><i className="fas fa-envelope"></i> <a href="mailto:hello@squareup.com">hello@squareup.com</a></li>
            <li><i className="fas fa-phone"></i> <a href="tel:+919813232309">+91 91813 23 2309</a></li>
            <li><i className="fas fa-map-marker-alt"></i> Somewhere in the World</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2023 SquareUp. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
