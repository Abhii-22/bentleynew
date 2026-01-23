import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Medini Technologies</h3>
          <p>
           Leading the future of digital infrastructure with innovative engineering solutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/#courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/medinitechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/medinitechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Medini Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
