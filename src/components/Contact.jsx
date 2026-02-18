import React from 'react';
import './Contact.css';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a question or need assistance? We’d love to hear from you!
          </p>

          <div className="contact-body">
            {/* Left side - Info */}
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h4>Address</h4>
                  <p>
                    MRCR Layout, MC Layout, Vijayanagar, Bengaluru,
                    Karnataka 560040
                  </p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <FaEnvelope />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>connect@medini.in</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>(+91) 99000 81006</p>
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://www.instagram.com/medinitechnologies/"
                  className="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/medinitechnologies/"
                  className="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.389242819478!2d77.5365649822572!3d12.970908380531256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ddc28f1fc77%3A0x55fded85a4ed8fdf!2sXGCP%2B9J3%2C%20MRCR%20Layout%2C%20Stage%202%2C%20Vijayanagar%2C%20Bengaluru%2C%20Karnataka%20560040!5e1!3m2!1sen!2sin!4v1769143272678!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Medini Technologies Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
