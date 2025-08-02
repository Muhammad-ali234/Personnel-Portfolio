import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
   
   
   
    {
      id: 4,
      title: 'Flutter & Node.js Developer',
      company: 'Freelance / Personal Projects',
      location: 'Peshawar, Pakistan',
      duration: 'Aug 2024 - Present',
      type: 'Freelance',
      description:
        'Developed full-stack applications using Flutter for frontend and Node.js for backend services.',
      achievements: [
        'Built the “Vehicle at The Doorstep” (VADS) app with four user roles',
        'Integrated MySQL backend with JWT authentication and Provider state management',
        'Implemented real-time chat using Socket.io',
        'Designed and developed RESTful APIs for app features',
        'Managed server deployment and database setup on DigitalOcean',
      ],
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Provider', 'Socket.io'],
    },
    {
      id: 5,
      title: 'Flutter Intern',
      company: 'FF-Steel',
      location: 'Peshawar, Pakistan',
      duration: 'Apr 2024 - Jul 2024',
      type: 'Internship',
      description:
        'Worked on Flutter mobile apps with focus on UI development and component architecture.',
      achievements: [
        'Developed multiple screens using widget-based architecture',
        'Utilized Provider for consistent state management across modules',
        'Collaborated with senior developers to implement new features',
        'Participated in daily standups and sprint reviews',
      ],
      technologies: ['Flutter', 'Widgets', 'State Management', 'Provider'],
    },
    {
      id: 6,
      title: 'Flutter Fellow',
      company: 'Bytewise Limited',
      location: 'Remote',
      duration: 'Mar 2023 - Jun 2023',
      type: 'Remote Fellowship',
      description:
        'Joined Bytewise’s Flutter fellowship program to deepen technical skills in cross-platform mobile development.',
      achievements: [
        'Completed structured training in Flutter framework and UI components',
        'Built demo apps following best practices and modular structure',
        'Practiced effective use of Provider and custom widgets',
        'Received mentorship from experienced Flutter engineers',
      ],
      technologies: ['Flutter', 'Provider', 'Widgets', 'UI Architecture'],
    },
  ];

  return (
    <section id="experience" className={`py-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((experience) => (
            <div key={experience.id} className="relative">
              <div className={`absolute left-6 top-0 bottom-0 w-0.5 transition-colors duration-300 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}></div>

              <div className="flex items-start space-x-6">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>

                <div className={`flex-1 rounded-lg p-6 transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>{experience.title}</h3>
                      <div className={`flex items-center space-x-4 text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-2 lg:mt-0">
                      <div className={`flex items-center space-x-1 text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{experience.description}</p>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className={`text-sm flex items-start space-x-2 transition-colors duration-300 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                            darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
