import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { TimelineItem } from '../ui/Timeline';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              date={item.duration}
              title={item.company}
              subtitle={item.role}
              description={item.description}
              type={item.type}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
