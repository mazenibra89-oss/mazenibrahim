
import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm">About Me</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Background</h3>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              I am a passionate Web Developer with a strong focus on building highly interactive and user-centric digital experiences. With a background in both technical engineering and creative design, I bridge the gap between complex backend logic and beautiful frontend interfaces.
            </p>
            <p>
              My philosophy is simple: write clean code, keep the user in mind, and never stop learning. I thrive in collaborative environments and enjoy tackling challenging problems that require innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">Collaboration</div>
                <p className="text-sm text-slate-500">Experienced in Agile and Team environments.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white mb-1">Problem Solving</div>
                <p className="text-sm text-slate-500">Logical thinker with attention to detail.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technical Arsenal</h4>
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className="text-teal-600 dark:text-teal-400">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
