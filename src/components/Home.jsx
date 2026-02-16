import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const slides = [
  {
    src: '/images/STAAD.jpg',
    courseId: 'staad-pro',
    text: {
      title: 'STAAD Pro',
      description:
        'Structural analysis and design software for buildings, bridges, and towers. Enables accurate modeling and design as per global codes.'
    }
  },
  {
    src: '/images/save.jpg',
    courseId: 'sewergems',
    text: {
      title: 'OpenFlows SewerGEMS',
      description:
        'Advanced software for the design and analysis of sanitary and combined sewer systems with powerful hydraulic modeling tools.'
    }
  },
  {
    src: '/images/micro.jpg',
    courseId: 'microstation',
    text: {
      title: 'MicroStation',
      description:
        'Powerful CAD software for 2D and 3D design, drafting, and modeling in architecture, engineering, and construction.'
    }
  },
  {
    src: '/images/open.jpg',
    courseId: 'openroads-designer',
    text: {
      title: 'OpenRoads Designer',
      description:
        'Civil infrastructure design software offering 3D modeling, terrain modeling, drainage, and corridor modeling in a unified platform.'
    }
  },
  {
    src: '/images/pipe.jpg',
    courseId: 'watergems',
    text: {
      title: 'OpenFlows WaterGEMS',
      description:
        'Water distribution modeling software that helps engineers design and optimize water systems with advanced hydraulic modeling.'
    }
  }
];

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animation, setAnimation] = useState('fade-in');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fade-out');
      setTimeout(() => {
        setCurrentSlideIndex(prev => (prev + 1) % slides.length);
        setAnimation('fade-in');
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const exploreCourse = () => {
    const currentSlide = slides[currentSlideIndex];
    navigate(`/course/${currentSlide.courseId}`);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div id="home" style={{ position: 'relative' }}>
      <div
        className="home-slider"
        style={{ backgroundImage: `url(${currentSlide.src})` }}
      >
        <div className={`slider-text ${animation}`}>
          <h1>{currentSlide.text.title}</h1>
          <p>{currentSlide.text.description}</p>
          <button className="explore-btn" onClick={exploreCourse}>Explore Course →</button>
        </div>
        {/* Rotating Logos - inside slider so they don't overlap PartnersSection */}
        <div className="rotating-logos-section">
        <div className="rotating-logos-container">
          <div className="logo-carousel">
            <div className="carousel-logo">
              <img src="/images/Bentley White.png" alt="Bentley Systems" />
            </div>
            <div className="carousel-logo">
              <img src="/images/medini.png" alt="Medini" />
            </div>
            <div className="carousel-logo">
              <img src="/images/Credly White.png" alt="medini logo" />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Latest Images Section - Add your images here */}
      <div className="latest-images-section">
        {/* You can add your latest images here */}
      </div>
    </div>
  );
};

export default Home;
