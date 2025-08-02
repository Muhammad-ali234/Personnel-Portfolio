import React from 'react';
import profileImage from '../assets/profile.png';
import resumeFile from '../assets/resume/Muhammad Ali Resume.pdf';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`pt-20 pb-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="hero-container">
        <div className="hero-grid">
          {/* Profile Image */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src={profileImage}
                alt="Muhammad Ali"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-2 lg:space-y-3">
            <div>
              <p className={`text-lg lg:text-xl font-medium mb-2 transition-colors duration-300 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>Flutter Developer</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-3 leading-tight">
                Hi, I'm Muhammad Ali
              </h1>
              <p className={`text-base lg:text-lg leading-relaxed mb-3 lg:mb-4 text-justify transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Application developer with expertise in building Flutter mobile applications, Node.js backends, and full-stack solutions. Proficient in both frontend and backend development, including UI design, server-side logic, database integration, and API development. Passionate about writing clean, maintainable, and efficient code following industry best practices.
              </p>
            </div>
            
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = resumeFile;
                link.download = 'Muhammad Ali Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full font-medium transition-colors duration-200 text-base inline-block"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;