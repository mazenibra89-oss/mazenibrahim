import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm">Contact</h2>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Let's Build Something Together</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new projects, collaborations, or even just a coffee chat.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Phone</div>
                  <a href="https://wa.me/6281234555854" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 dark:text-white hover:text-teal-600">+62 81234555854</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Email</div>
                  <a href="mailto:mazenibra89@gmail.com" className="font-bold text-slate-900 dark:text-white hover:text-blue-600">mazenibra89@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hapus form, hanya tampilkan info kontak */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
