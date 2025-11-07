import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
