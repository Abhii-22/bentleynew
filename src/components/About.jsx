import React, { useState, useEffect, useRef } from 'react';
import { FaBullseye, FaEye, FaCheck, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const sectionRef = useRef(null);
  const fullText =
    'Empowering engineers, students, and professionals with world-class training in Bentley infrastructure design and analysis software.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.animation = 'none';
      }
    }, 50);

    return () => {
      elementsToAnimate.forEach(el => observer.unobserve(el));
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-wrapper">

        {/* Header */}
        <div className="about-header">
          <h2 className="about-heading">
            About <span>Bentley Training Center</span>
          </h2>
          <div className="heading-line"></div>
          <p className="about-intro-animated">
            {text}
            <span className="cursor"></span>
          </p>
        </div>

        {/* New Layout Section */}
        <div className="about-grid animate-on-scroll">
          {/* Left Side - Image + Stats */}
          <div className="about-left">
            <div className="about-image">
              <img src="/images/about.jpg" alt="Bentley Training" />
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Engineers Trained</p>
              </div>
              <div className="stat-card">
                <h3>30+</h3>
                <p>Bentley Tools Covered</p>
              </div>
              <div className="stat-card">
                <h3>95%</h3>
                <p>Placement Record</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text + Highlights */}
          <div className="about-right">
            <div className="about-text-section">
              <p>
                Welcome to <strong>Bentley Authorized Training Center</strong> — your destination for mastering industry-leading infrastructure design and analysis tools like <b>STAAD Pro, OpenRoads, SewerGEMS, WaterGEMS, and MicroStation</b>.
              </p>
              <p>
                We empower engineers, students, and professionals to enhance their design and analysis capabilities through structured learning, real-world projects, and professional mentorship. Our mission is to build a new generation of skilled infrastructure engineers ready for global opportunities.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <h3>🔧 Industry-Focused Training</h3>
                <p>
                  Learn directly from certified professionals with years of real-world Bentley software experience.
                </p>
              </div>

              <div className="highlight-card">
                <h3>🏗️ Practical Learning</h3>
                <p>
                  Hands-on projects help you gain confidence in structural, civil, and water infrastructure design.
                </p>
              </div>

              <div className="highlight-card">
                <h3>🎓 Career-Oriented Approach</h3>
                <p>
                  Our job assistance program ensures you are ready for global engineering opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mission-vision-section animate-on-scroll">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div className="mission-card">
              <div className="mission-icon">
                <div className="icon-wrapper">
                  <FaBullseye />
                </div>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower engineers and professionals with comprehensive Bentley software training, 
                bridging the gap between academic knowledge and industry requirements. We strive to 
                create skilled professionals who can tackle real-world infrastructure challenges with 
                confidence and expertise.
              </p>
              <div className="mission-points">
                <div className="point-item">
                  <span className="check-icon">
                    <FaCheck />
                  </span>
                  <span>Industry-relevant curriculum</span>
                </div>
                <div className="point-item">
                  <span className="check-icon">
                    <FaCheck />
                  </span>
                  <span>Hands-on practical training</span>
                </div>
                <div className="point-item">
                  <span className="check-icon">
                    <FaCheck />
                  </span>
                  <span>Career development support</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="vision-card">
              <div className="vision-icon">
                <div className="icon-wrapper">
                  <FaEye />
                </div>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the leading Bentley training center globally, recognized for excellence in 
                infrastructure education and for producing world-class engineers who shape the future 
                of sustainable infrastructure development worldwide.
              </p>
              <div className="vision-points">
                <div className="point-item">
                  <span className="star-icon">
                    <FaStar />
                  </span>
                  <span>Global leadership in training</span>
                </div>
                <div className="point-item">
                  <span className="star-icon">
                    <FaStar />
                  </span>
                  <span>Innovation in education</span>
                </div>
                <div className="point-item">
                  <span className="star-icon">
                    <FaStar />
                  </span>
                  <span>Sustainable infrastructure focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
