import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-gray-600"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h3>
            <p className="mb-6">
              I am a passionate developer with a unique dual focus on high-level software development and low-level embedded systems. My journey began with a curiosity about how things work under the hood, leading me to master both the hardware-software interface and modern web technologies.
            </p>
            <p>
              With experience in building scalable web applications using React and Node.js, as well as designing firmware for IoT devices using C and C++, I bring a comprehensive perspective to every project. I thrive in environments that challenge me to integrate complex systems and deliver seamless user experiences.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full" />
                Software Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.software.map((skill) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm border border-blue-100 shadow-sm"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-green-500 rounded-full" />
                Embedded Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.embedded.map((skill) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium text-sm border border-green-100 shadow-sm"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
