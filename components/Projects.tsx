import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All'>('All');

  const filteredProjects = PROJECTS;

  const categories: ('All')[] = ['All'];

  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/20' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center">
            Custom website development with unlimited feature requests, multiple UI design choices, and affordable pricing. Your vision, built exactly the way you want it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.liveUrl} className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  </a>
                </div>
              </div>

              <div className="p-8 space-y-4">
                {/* <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-800">
                      {tag}
                    </span>
                  ))}
                </div> */}
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h4>
                <p className="text-slate-500 dark:text-slate-400">{project.description}</p>
                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.liveUrl} 
                    className="flex-1 text-center py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
