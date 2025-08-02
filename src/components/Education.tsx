import React from 'react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className={`py-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        
        <div className="mb-8">
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Bachelor of Software Engineering (2020-2024), City University of Science & Technology, Peshawar
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 transition-colors duration-300 ${
              darkMode ? 'bg-gray-400' : 'bg-gray-500'
            }`}></div>
            <p className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Specialized in Dart, JavaScript, and modern technologies</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 transition-colors duration-300 ${
              darkMode ? 'bg-gray-400' : 'bg-gray-500'
            }`}></div>
            <p className={`transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Studied DBMS, system architecture, SDLC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;