import React from 'react';
import { FileText, ExternalLink, Award, Calendar, CheckCircle, Building, Code, Database } from 'lucide-react';
import flutterCert from '../assets/Flutter Application Development.jpg';
import webDesignCert from '../assets/Web Design.jpg';
import flutterFellowshipCert from '../assets/Flutter Fellowsip.jpg';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'Flutter Application Development',
      issuer: 'Coursera',
      date: 'May 2025',
      url: 'https://www.coursera.org/account/accomplishments/specialization/1FHA81638JM6',
      verified: true,
      category: 'Mobile Development',
      image: flutterCert
    },
    {
      title: 'Web Design Certification',
      issuer: 'Coursera',
      date: 'Febuary 2023',
      url: 'https://www.coursera.org/account/accomplishments/specialization/SPUPHRKGF85A',
      verified: true,
      category: 'Web Development',
      image: webDesignCert
    },
    {
      title: 'Flutter Fellowship',
      issuer: 'Bytewise Limited',
      date: 'Jun 2023',
      url: 'https://verification.givemycertificate.com/v/b7709b50-3eec-414c-ab17-e75e11977ffc',
      verified: true,
      category: 'Mobile Development',
      image: flutterFellowshipCert
    }
  ];

  return (
    <section id="certifications" className={`py-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications & Achievements</h2>
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Professional certifications and achievements that validate my expertise</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Certificate Image */}
              <div className="relative bg-white">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-contain bg-white"
                  loading="lazy"
                  style={{ imageRendering: 'auto' }}
                />
                {cert.verified && (
                  <div className="absolute top-2 right-2 flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
              
              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{cert.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Building className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  
                  <div className={`flex items-center space-x-2 text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <div className="inline-block">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                      darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
                
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Additional Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Flutter Expert Card */}
            <div className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-green-500 hover:shadow-green-500/20' 
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-green-500 hover:shadow-green-500/20'
            }`}>
              {/* Black accent for white theme */}
              {!darkMode && (
                <div className="absolute top-0 left-0 w-12 h-12 bg-black/5 rounded-br-full"></div>
              )}
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-400/10 to-transparent rounded-tr-full"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-xl font-bold mb-4 text-center transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Flutter Expert</h4>
                <p className={`text-center leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Certified Flutter developer with expertise in cross-platform mobile development, state management, and modern app architecture
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-2">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">Dart</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">Provider</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">Firebase</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Node.js Backend Developer Card */}
            <div className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20' 
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-purple-500 hover:shadow-purple-500/20'
            }`}>
              {/* Black accent for white theme */}
              {!darkMode && (
                <div className="absolute top-0 left-0 w-12 h-12 bg-black/5 rounded-br-full"></div>
              )}
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-tr-full"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-xl font-bold mb-4 text-center transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Node.js Backend Developer</h4>
                <p className={`text-center leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Experienced in building scalable backend APIs, RESTful services, and server-side applications with modern Node.js ecosystem
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-2">
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">Express</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">JWT</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fellowship Program Card */}
            <div className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-orange-500 hover:shadow-orange-500/20' 
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-orange-500 hover:shadow-orange-500/20'
            }`}>
              {/* Black accent for white theme */}
              {!darkMode && (
                <div className="absolute top-0 left-0 w-12 h-12 bg-black/5 rounded-br-full"></div>
              )}
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-tr-full"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-xl font-bold mb-4 text-center transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Fellowship Program</h4>
                <p className={`text-center leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Completed intensive Flutter fellowship program demonstrating advanced skills, mentorship, and real-world project experience
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-2">
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">Advanced</span>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">Mentorship</span>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-medium">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;