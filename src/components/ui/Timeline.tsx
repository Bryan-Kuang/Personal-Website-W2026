import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  isLast?: boolean;
  type?: 'software' | 'embedded' | 'both';
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  subtitle, 
  description, 
  isLast = false,
  type = 'both'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-0"
    >
      {/* Mobile Date */}
      <div className="md:hidden pb-2">
        <span className="text-sm font-semibold text-primary">{date}</span>
      </div>

      <div className="md:grid md:grid-cols-5 md:gap-8">
        {/* Date Column (Desktop) */}
        <div className="hidden md:block col-span-1 text-right pt-1">
          <span className="text-sm font-semibold text-primary">{date}</span>
        </div>

        {/* Timeline Line & Dot */}
        <div className="absolute left-0 md:left-[20%] top-2 h-full w-px bg-gray-200 md:-ml-px">
          <div className={`absolute -left-[5px] top-0 h-3 w-3 rounded-full border-2 border-white ${
            type === 'software' ? 'bg-blue-500' : type === 'embedded' ? 'bg-green-500' : 'bg-purple-500'
          }`} />
        </div>

        {/* Content Column */}
        <div className={`col-span-4 ${!isLast ? 'pb-12' : ''}`}>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <div className="text-lg font-medium text-gray-700">{subtitle}</div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
