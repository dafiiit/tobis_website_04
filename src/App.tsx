import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import ProgramAndNews from './components/ProgramAndNews';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Vision />
      <ProgramAndNews />
      <AboutMe />
      <Contact />
    </div>
  );
}