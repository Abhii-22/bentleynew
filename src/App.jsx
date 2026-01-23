import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import CourseDetail from './pages/CourseDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Courses /><Feedback /></>} />
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
