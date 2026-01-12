import React from 'react';
import { motion } from 'framer-motion';
import { ResumeDownload } from '../common/ResumeDownload';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
            Available for opportunities
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Bryan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bridging the gap between <span className="font-semibold text-gray-800">Software Engineering</span> and <span className="font-semibold text-gray-800">Embedded Systems</span>.
          </p>

        <div className="mb-12">
            <ResumeDownload />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
};
