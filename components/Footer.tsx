import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Muhammad Mazen Ibrahim
        </div>

        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mazen-ibrahim-974751364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="p-2 text-slate-400 hover:text-teal-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/m.ibraa6" className="p-2 text-slate-400 hover:text-teal-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Mazen Ibra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
