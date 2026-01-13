import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you have a question about my work, a project opportunity, or just want to say hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 text-center">
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="bg-blue-50 p-4 rounded-full">
                <Mail size={48} className="text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Me</h3>
                <p className="text-gray-600 mb-6">
                  The best way to reach me is directly via email. I usually respond within 24 hours.
                </p>
                <a 
                  href="mailto:BryanKuang@outlook.com" 
                  className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary hover:text-blue-800 transition-colors border-b-2 border-transparent hover:border-blue-800 pb-1"
                >
                  BryanKuang@outlook.com
                </a>
              </div>

              <div className="w-full pt-8 border-t border-gray-100">
                <Button 
                  onClick={() => window.location.href = 'mailto:BryanKuang@outlook.com'}
                  size="lg" 
                  icon={<Send size={18} />}
                  className="w-full sm:w-auto"
                >
                  Open Email Client
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
