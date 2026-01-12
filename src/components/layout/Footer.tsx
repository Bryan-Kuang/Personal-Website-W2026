import React from 'react';
import { SocialLinks } from '../common/SocialLinks';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h2>
            <p className="text-gray-600 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Bryan. All rights reserved. Built with React & Tailwind CSS.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-gray-600 hover:text-primary"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
