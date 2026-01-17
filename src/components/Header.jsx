import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBook, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const courses = [
  {
    courseId: 'staad-pro',
    title: 'STAAD Pro',
    description: 'Structural analysis and design software'
  },
  {
    courseId: 'sewergems',
    title: 'OpenFlows SewerGEMS',
    description: 'Sanitary and combined sewer systems'
  },
  {
    courseId: 'microstation',
    title: 'MicroStation',
    description: '2D and 3D design and modeling'
  },
  {
    courseId: 'openroads-designer',
    title: 'OpenRoads Designer',
    description: 'Civil infrastructure design'
  },
  {
    courseId: 'watergems',
    title: 'OpenFlows WaterGEMS',
    description: 'Water distribution modeling'
  }
];

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    closeMobileMenu();
    
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For navigation from other pages, scroll to top after route change
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace(/.*#/, '');

    if (targetId) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    closeMobileMenu();
  };

  const handleCoursesDropdown = (e) => {
    e.preventDefault();
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  const handleCourseClick = (courseId) => {
    setIsCoursesDropdownOpen(false);
    closeMobileMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCoursesDropdownOpen && !event.target.closest('.courses-dropdown')) {
        setIsCoursesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCoursesDropdownOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="main-nav">
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/medini.png" alt="Medini Logo" className="logo-image medini-logo" />
        </Link>
        
        <div className="logo-container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src="/images/Bentley White.png" alt="BentleyEdu Logo" className="logo-image" />
          </Link>
        </div>
      </nav>
      
      <nav className="secondary-nav">
        <ul className={isMobileMenuOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={handleSmoothScroll}>
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </Link>
          </li>
          <li className="courses-dropdown">
            <button 
              className="dropdown-toggle" 
              onClick={handleCoursesDropdown}
              aria-expanded={isCoursesDropdownOpen}
            >
              <FaBook className="nav-icon" />
              <span>Courses</span>
              <FaChevronDown className={`dropdown-arrow ${isCoursesDropdownOpen ? 'open' : ''}`} />
            </button>
            
            <div className={`dropdown-menu ${isCoursesDropdownOpen ? 'open' : ''}`}>
              {courses.map((course) => (
                <Link 
                  key={course.courseId}
                  to={`/course/${course.courseId}`}
                  className="dropdown-item"
                  onClick={() => handleCourseClick(course.courseId)}
                >
                  {course.title}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link to="/#contact" onClick={handleSmoothScroll}>
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
