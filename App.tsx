import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Curriculum } from './components/Curriculum';
import { BioBot } from './components/BioBot';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <BioBot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;