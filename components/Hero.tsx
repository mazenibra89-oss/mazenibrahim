import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Fullstack Web Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleTyping = () => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-teal-500/10 dark:bg-teal-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-[10%] w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-semibold tracking-wide border border-teal-100 dark:border-teal-800">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Mazen Ibra</span>
          </h1>
          
          <p className="text-2xl font-medium text-slate-600 dark:text-slate-400 h-8">
            {displayText}<span className="animate-pulse">|</span>
          </p>
          
          <p className="max-w-lg text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            Crafting beautiful, functional, and high-performance web experiences with modern technologies. Turning complex problems into simple design solutions.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold shadow-lg shadow-teal-500/25 transition-all hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="https://wa.me/6281234555854" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 text-teal-600 dark:text-teal-400 font-bold hover:underline rounded-xl text-center bg-transparent"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Mobile Profile Image */}
        <div className="flex md:hidden justify-center items-center mb-8">
          <div className="relative rounded-2xl border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden aspect-[4/5] w-40">
            <img 
              src="/images/profile.JPG" 
              alt="Developer Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Profile Image */}
        <div className="hidden md:flex justify-center items-center relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-[2rem] blur-2xl group-hover:scale-110 transition-transform duration-500" />
          <div className="relative rounded-[2rem] border-8 border-white dark:border-slate-800 shadow-2xl overflow-hidden aspect-[4/5] w-[350px]">
            <img 
              src="/images/profile.JPG" 
              alt="Developer Profile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
