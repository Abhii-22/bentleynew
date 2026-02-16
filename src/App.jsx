import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PartnersSection from './components/PartnersSection';
import OurAlumnies from './components/ouralumnies';
import Ourinstitutionalpartners from './components/Ourinstitutionalpartners';
import About from './components/About';

import Feedback from './components/Feedback';
import Contact from './components/Contact';
import CourseDetail from './pages/CourseDetail';
import { ThemeProvider } from './context/ThemeProvider';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><ThemeProvider><PartnersSection /></ThemeProvider><OurAlumnies /><Ourinstitutionalpartners /><Feedback /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
