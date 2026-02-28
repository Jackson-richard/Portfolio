import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Internships />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
