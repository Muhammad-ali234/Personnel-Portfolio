import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, X } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    description: string;
    overview: string;
    technologies: string[];
    challenges: string;
    liveDemoUrl?: string;
    repositoryUrl?: string;
    previews: {
      label: string;
      image: string;
    }[];
    screenType?: 'mobile' | 'desktop';
  };
  onBack: () => void;
  darkMode: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, darkMode }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className={`min-h-screen pt-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className={`flex items-center space-x-2 transition-colors duration-200 mb-8 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>

        {/* Project Title and Category */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>{project.category}</p>
        </div>

        {/* Project Previews */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {project.previews.map((preview, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-3 mb-4 transform transition-transform duration-300 hover:scale-105 shadow-lg">
                <div className="bg-white rounded-xl p-3 flex items-center justify-center shadow-inner cursor-pointer">
                  <img
                    src={preview.image}
                    alt={preview.label}
                    className="max-w-full max-h-80 object-contain rounded-lg"
                    style={{ 
                      aspectRatio: project.screenType === 'mobile' ? '9/16' : '16/9',
                      maxWidth: project.screenType === 'mobile' ? '200px' : '100%'
                    }}
                    onClick={() => handleImageClick(preview.image)}
                  />
                </div>
              </div>
              <p className={`font-medium text-sm group-hover:text-orange-300 transition-colors duration-200 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>{preview.label}</p>
            </div>
          ))}
        </div>

        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <p className={`leading-relaxed text-justify transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {project.overview}
          </p>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges and Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Challenges and Solutions</h2>
          <p className={`leading-relaxed text-justify transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {project.challenges}
          </p>
        </div>

        {/* Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Links</h2>
          <div className="flex flex-wrap gap-4">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img
                src={selectedImage}
                alt="Project Preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail; 