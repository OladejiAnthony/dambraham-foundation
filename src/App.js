// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ImpactPage from './pages/ImpactPage';
import DonatePage from './pages/DonatePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import './styles/App.scss';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
