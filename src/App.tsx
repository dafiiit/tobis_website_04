import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import ProgramAndNews from './components/ProgramAndNews';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Impressum from './components/Impressum';

function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <ProgramAndNews />
      <AboutMe />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </Router>
  );
}