import React from "react";
import "./about/about_Style.css";
import footerLogo from "../assets/images/about images/15.jpg";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/process">Process</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="footer-bottom">
            <span className="stay-connected">Stay Connected</span>
          </div>
          <div className="social-media">
            <Link to="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="footer-contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:hello@squareup.com">hello@squareup.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>{" "}
              <a href="tel:+919813232309">+91 91813 23 2309</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Somewhere in the World
            </li>
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
