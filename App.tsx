
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} selection:bg-teal-200 dark:selection:bg-teal-900`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 flex flex-col">
        
        {/* Scroll Progress Bar */}
        <div 
          className="fixed top-0 left-0 h-1 bg-teal-500 z-[100] transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />

        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow">
          <Hero />
          <Stats />
          <About />
          <Projects />
          <Timeline />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
