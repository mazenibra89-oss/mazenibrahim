
import React from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-purple-600 font-bold tracking-widest uppercase text-sm">Experience</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Journey</h3>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-teal-500 border-4 border-white dark:border-slate-900 rounded-full -translate-x-1/2 z-10 hidden md:block" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 px-0 md:px-12 flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <div className={`p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl hover:shadow-teal-500/5 transition-all w-full md:max-w-md ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
