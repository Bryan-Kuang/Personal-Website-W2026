import React from 'react';
import { FileDown, Code, Cpu } from 'lucide-react';
import { Button } from '../ui/Button';

export const ResumeDownload: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
      <a href="/resume/Software.pdf" download="Software_Resume.pdf" className="w-full sm:w-64">
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full justify-center"
          icon={<Code className="w-5 h-5" />}
        >
          Software Resume
        </Button>
      </a>
      <a href="/resume/Embedded_System.pdf" download="Embedded_Resume.pdf" className="w-full sm:w-64">
        <Button 
          variant="secondary" 
          size="lg" 
          className="w-full justify-center"
          icon={<Cpu className="w-5 h-5" />}
        >
          Embedded Resume
        </Button>
      </a>
    </div>
  );
};
