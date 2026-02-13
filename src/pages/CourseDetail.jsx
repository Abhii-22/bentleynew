import React, { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt, FaClock, FaGraduationCap, FaUsers, FaBuilding, FaRocket, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
  const navigate = useNavigate();
  const leftContentRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleContactClick = () => {
    // Navigate to contact page
    navigate('/contact');
    
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleScroll = () => {
    const element = leftContentRef.current;
    if (element) {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;
      
      // Determine scroll direction
      const scrollDirection = scrollTop > lastScrollTop;
      setIsScrollingDown(scrollDirection);
      setLastScrollTop(scrollTop);
      
      setShowScrollTop(scrollTop > 50);
      setShowScrollBottom(scrollTop < scrollHeight - clientHeight - 50);
      
      // Calculate scroll progress
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  const scrollToTop = () => {
    if (leftContentRef.current) {
      leftContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (leftContentRef.current) {
      leftContentRef.current.scrollTo({ top: leftContentRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coursesData = {
    'openroads-designer': {
      title: 'OpenRoads Designer',
      category: 'Engineering Software',
      description: 'Civil infrastructure design software for roadways, offering 3D modeling, terrain modeling, drainage, and corridor modeling in a single platform. This comprehensive solution enables engineers to design, analyze, and document transportation projects with unprecedented efficiency and accuracy.',
      detailedDescription: 'OpenRoads Designer represents the next generation of civil design software, integrating traditional CAD workflows with advanced BIM capabilities. It provides a complete environment for road and highway design, from initial planning through construction documentation, ensuring data continuity throughout the project lifecycle.',
      image: '/images/road.png',
      duration: '1 Months',
      level: 'Advanced',
      audience: '(infrastructure/Highway),<br />Civil Engineers (CIV)',
      curriculum: [
        'User Interface & Project Setup',
        'Terrain Modeling & Survey Data',
        'Horizontal and Vertical Alignment Design',
        'Corridor Modeling and Templates',
        'Cross-Sections and Profile Views',
        'Earthwork Calculations',
        'Annotation and Sheet Production'
      ],
      whatYoullLearn: [
        'Master survey data import techniques and learn to create accurate terrain models using various data sources including GPS, LiDAR, and total station measurements',
        'Develop skills in generating detailed cross-sections and longitudinal profiles for highway design with proper earthwork calculations',
        'Gain expertise in creating horizontal and vertical alignments with comprehensive corridor modeling for complex road designs',
        'Learn integrated drainage design including culvert analysis, stormwater management, and utility coordination within transportation projects'
      ],
      careerBenefits: [
        'Enhanced employability in the infrastructure sector with skills demanded by DOTs, consulting firms, and construction companies',
        'Skills directly applicable to transportation agencies including highway departments, metro rail authorities, and airport authorities',
        'Competitive advantage in the civil engineering market with proficiency in industry-standard Bentley software',
        'Comprehensive preparation for Bentley certification exams and professional engineering licensure requirements'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Basic computer skills',
        'No prior CAD experience required'
      ]
    },
    'watergems': {
      title: 'OpenFlows WaterGEMS',
      category: 'Engineering Software',
      description: 'Water distribution modeling software that helps engineers plan, design, and optimize water systems with advanced hydraulic modeling capabilities. This powerful tool enables comprehensive analysis of water networks, ensuring reliable and efficient water distribution systems.',
      detailedDescription: 'WaterGEMS provides engineers with sophisticated tools for water distribution system analysis and design. It combines hydraulic modeling capabilities with GIS integration, allowing for comprehensive water system management from source to tap, including pressure management, water quality analysis, and system optimization.',
      image: '/images/water.jpg',
      duration: '1 Months',
      level: 'Advanced',
      audience: 'Water Engineers, Civil Engineers (CIV/ENV)',
      curriculum: [
        'Introduction to Hydraulic Modeling',
        'Network Building and Layout',
        'Junctions, Pipes, Pumps, and Tanks',
        'Demand Allocation and Scenarios',
        'Hydraulic Analysis (Steady and EPS)',
        'Fire Flow and Criticality Analysis',
        'Model Calibration and Optimization'
      ],
      whatYoullLearn: [
        'Create comprehensive water network models from scratch including pipe networks, junctions, pumps, tanks, and control valves',
        'Master extended period simulation (EPS) for analyzing system behavior over time with demand patterns and operational scenarios',
        'Develop expertise in scenario comparison to evaluate different design alternatives and operational strategies effectively',
        'Learn demand analysis techniques for residential, commercial, and industrial areas with proper pipe sizing methodologies',
        'Gain skills in fire flow analysis and pump performance evaluation for emergency water supply and system reliability'
      ],
      careerBenefits: [
        'Develop specialized expertise in water system design making you valuable to municipal water utilities and engineering consultants',
        'Acquire skills essential for municipal water departments including system planning, capital improvement projects, and operations',
        'Open consulting opportunities in the water sector with expertise in hydraulic modeling and system optimization',
        'Comprehensive preparation for water industry certifications and professional development in water resources engineering'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Civil engineering background',
        'Understanding of hydraulic principles'
      ]
    },
    'staad-pro': {
      title: 'STAAD Pro',
      category: 'Structural Analysis',
      description: 'Comprehensive structural analysis and design software for buildings, bridges, towers, and other structures with advanced modeling capabilities. This industry-standard tool enables engineers to perform complex structural analyses and optimize designs for safety and efficiency.',
      detailedDescription: 'STAAD Pro is the world\'s most popular structural analysis and design software, offering a complete solution for structural engineering. It supports multiple international design codes and provides advanced analysis capabilities including dynamic analysis, finite element analysis, and optimization algorithms for various structure types.',
      image: '/images/stadpro.jpg',
      duration: '1 Months',
      level: 'Advanced',
      audience: 'Structural Engineers,<br />Civil Engineers (CIV)',
      curriculum: [
        'Introduction to STAAD Pro',
        'Model Creation and Geometry',
        'Load Definition and Analysis',
        'Steel Design and Optimization',
        'Concrete Design',
        'Foundation Design',
        'Advanced Analysis Techniques'
      ],
      whatYoullLearn: [
        'Master structural modeling techniques for creating accurate 3D models of buildings, bridges, towers, and industrial structures',
        'Develop comprehensive skills in steel design including connection design, member optimization, and code compliance checking',
        'Learn advanced load combinations and analysis methods including static, dynamic, wind, seismic, and thermal analysis',
        'Gain expertise in foundation design principles including shallow foundations, deep foundations, and soil-structure interaction'
      ],
      careerBenefits: [
        'Acquire essential skills for structural engineering roles in design firms, construction companies, and government agencies',
        'Comprehensive preparation for structural design positions including senior engineer, project manager, and technical specialist roles',
        'Gain competitive edge in the construction industry with proficiency in industry-standard structural analysis software',
        'Build strong foundation for advanced structural analysis careers including forensic engineering and specialized consulting'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Structural engineering background',
        'Basic understanding of structural analysis'
      ]
    },
    'microstation': {
      title: 'MicroStation for Professionals',
      category: 'CAD Software',
      description: 'Professional CAD software for 2D and 3D design, drafting, and modeling with advanced visualization and documentation capabilities. This powerful platform serves as the foundation for infrastructure design projects across various engineering disciplines.',
      detailedDescription: 'MicroStation is a comprehensive CAD platform that provides precision design and documentation capabilities for infrastructure projects. It offers advanced 3D modeling, visualization, and collaboration tools, making it the preferred choice for large-scale engineering projects requiring high accuracy and interoperability.',
      image: '/images/micro1.png',
      duration: '1 Months',
      level: 'Advanced',
      audience: 'CAD Professionals, Engineers (ALL)',
      curriculum: [
        'MicroStation Interface and Navigation',
        '2D Drafting and Drawing Tools',
        '3D Modeling Fundamentals',
        'Advanced 3D Techniques',
        'Visualization and Rendering',
        'Documentation and Annotation',
        'File Management and Collaboration'
      ],
      whatYoullLearn: [
        'Master professional CAD drafting techniques with precision drawing tools, dimensioning standards, and technical documentation',
        'Develop advanced 3D modeling skills including solid modeling, surface modeling, and parametric design for complex projects',
        'Learn comprehensive technical documentation practices including drawing standards, annotation, and construction document preparation',
        'Gain expertise in project collaboration using reference files, worksharing, and integrated project delivery workflows'
      ],
      careerBenefits: [
        'Acquire essential CAD skills required across all engineering disciplines including civil, mechanical, electrical, and architectural fields',
        'Develop versatility for multiple industries including infrastructure, manufacturing, plant design, and architectural visualization',
        'Build strong foundation for BIM workflows and digital transformation initiatives in modern engineering practices',
        'Gain competitive advantage in design roles with proficiency in industry-leading CAD platform and advanced visualization skills'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Basic computer skills',
        'Understanding of technical drawings'
      ]
    },
    'sewergems': {
      title: 'OpenFlows SewerGEMS',
      category: 'Hydraulic Modeling',
      description: 'Comprehensive sewer system modeling software for planning, design, and analysis of wastewater collection systems. This specialized tool enables engineers to optimize sewer networks for efficiency, reliability, and environmental compliance.',
      detailedDescription: 'SewerGEMS provides advanced hydraulic modeling capabilities specifically designed for wastewater and stormwater systems. It combines sophisticated analysis tools with GIS integration, allowing engineers to design, analyze, and optimize complex sewer networks while ensuring regulatory compliance and system reliability.',
      image: '/images/open gem.jpg',
      duration: '1 Months',
      level: 'Advanced',
      audience: 'Environmental Engineers, Civil Engineers (CIV/ENV)',
      curriculum: [
        'Introduction to Sewer System Modeling',
        'Network Building and Layout',
        'Flow Estimation and Allocation',
        'Hydraulic Analysis and Design',
        'Pump Station Design',
        'System Optimization',
        'Model Calibration and Validation'
      ],
      whatYoullLearn: [
        'Master comprehensive sewer system modeling including gravity flow networks, pressurized systems, and combined sewer overflows',
        'Develop advanced hydraulic analysis techniques for steady-state and extended period simulations of wastewater collection systems',
        'Learn pump station design including wet well sizing, pump selection, force main analysis, and operational control strategies',
        'Gain expertise in system optimization methods for capacity improvements, cost reduction, and performance enhancement'
      ],
      careerBenefits: [
        'Develop specialized expertise in wastewater management making you valuable to environmental agencies and municipal utilities',
        'Acquire skills for environmental consulting firms specializing in water resources, environmental impact assessment, and sustainability',
        'Create opportunities in municipal planning departments for infrastructure planning, capital improvement programs, and system upgrades',
        'Comprehensive preparation for environmental certifications and professional development in water resources and environmental engineering'
      ],
      provider: 'BENTLEY',
      prerequisites: [
        'Environmental engineering background',
        'Understanding of hydraulic principles'
      ]
    }
  };

  const course = coursesData[courseId] || coursesData['watergems'];

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">
        <div className="course-detail-content">
          <div className="course-content-left" ref={leftContentRef} onScroll={handleScroll}>
            <div className="course-header">
              <button onClick={() => navigate(-1)} className="back-link">&larr; Back to Courses</button>
              <span className="course-category">{course.category}</span>
            </div>
            <h1>{course.title}</h1>
            <p className="course-description">{course.description}</p>
            {course.detailedDescription && (
              <p className="course-detailed-description">{course.detailedDescription}</p>
            )}
            
            <div className="info-cards">
              <div className="info-card">
                <FaClock className="info-icon" />
                <span>Duration</span>
                <strong>{course.duration}</strong>
              </div>
              <div className="info-card">
                <FaGraduationCap className="info-icon" />
                <span>Level</span>
                <strong>{course.level}</strong>
              </div>
              <div className="info-card">
                <FaUsers className="info-icon" />
                <span>Audience</span>
                <strong>{course.audience.replace(/<br \/>/g, ', ')}</strong>
              </div>
            </div>
            
            <div className="curriculum">
              <h2>Curriculum</h2>
              <div className="contact-for-details">
                <p>
                  Want to learn more about our comprehensive curriculum? Our expert instructors are here to guide you through every aspect of Bentley training and help you achieve your career goals.
                </p>
                <button onClick={handleContactClick} className="contact-us-btn">
                  <FaPhoneAlt /> CONTACT US FOR DETAILS
                </button>
              </div>
            </div>
            
            <div className="learning-outcomes">
              <h2>What You Will Learn</h2>
              <ul className="outcomes-grid">
                {course.whatYoullLearn.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {course.careerBenefits && (
              <div className="career-benefits">
                <h2>Career Benefits</h2>
                <ul className="benefits-grid">
                  {course.careerBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="prerequisites-section">
              <h4>Prerequisites</h4>
              <ul>
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>
                    <span className="prereq-icon">✓</span>
                    {prereq}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Scroll Progress Bar */}
            <div 
              className="scroll-progress" 
              style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />
            
            {/* Enhanced Scroll Indicators */}
            {showScrollTop && !isScrollingDown && (
              <div 
                className="scroll-indicator top" 
                onClick={scrollToTop}
                data-tooltip="Scroll to top"
              >
                <FaChevronUp />
              </div>
            )}
            {showScrollBottom && !isScrollingDown && (
              <div 
                className="scroll-indicator bottom" 
                onClick={scrollToBottom}
                data-tooltip="Scroll to bottom"
              >
                <FaChevronDown />
              </div>
            )}
          </div>
          
          <div className="course-content-right">
            <div className="course-image-container">
              <img src={course.image} alt={course.title} className="course-image" />
            </div>
            
            <div className="sidebar-widget">
              <div className="sidebar-header">
                <FaBuilding className="provider-icon" />
                <h3>Course Information</h3>
              </div>
              <div className="provider-info">
                <span className="provider-label">Provider</span>
                <span className="provider-name">{course.provider}</span>
              </div>
              <a 
                href="https://register.medinitechnologies.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="enroll-now-btn"
              >
                <FaRocket className="btn-icon" />
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
