import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 'vads-platform',
      title: 'VADS - Vehicle At Doorstep',
      category: 'Capstone Project',
      description: 'A multi-role automotive service platform connecting vehicle sellers, buyers, drivers, and employees. Features real-time chat, test drives at user locations, inspection requests, and admin dashboards.',
      image: '/src/assets/projects/vadspng.png',
      overview: 'VADS is a Flutter-based mobile and web platform designed to digitize vehicle trading and services. It enables sellers to list cars, buyers to book test drives at home, employees to manage requests, and drivers to handle pickups. The system features real-time chat, inspection/test drive management, vehicle approval workflows, and role-based dashboards.',
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Socket.io', 'Provider', 'Express', 'Firebase'],
      challenges: 'Key challenges included structuring a scalable role-based system, managing real-time communication, and integrating state management with Flutter. Implemented socket.io for real-time messaging, used Provider for efficient state handling, and built REST APIs to support buyer-seller interactions, test drive booking, vehicle inspections, and admin approvals.',
      liveDemoUrl: 'https://vads-demo.com',
      repositoryUrl: 'https://github.com/yourusername/vads-platform',
      screenType: 'mobile',
      previews: [
        {
          label: 'Buyer Side - Home Screen',
          image: '/src/assets/projects/Home screen Buyer.png'
        },
        {
          label: 'Buyer Side - Test Drive Details',
          image: '/src/assets/projects/Test Drive detail Screen Buyer.png'
        },
        {
          label: 'Buyer Side - Test Drive Calendar',
          image: '/src/assets/projects/Test Drive Screen By Calender Dates Buyer.png'
        },
        {
          label: 'Seller Side - Vehicle Listed',
          image: '/src/assets/projects/Vehicle Listed Screen  Seller.png'
        },
        {
          label: 'Seller Side - Car Request',
          image: '/src/assets/projects/Car Request Seller.png'
        },
        {
          label: 'Chat Interface',
          image: '/src/assets/projects/Chat screen.png'
        }
      ]
    },
    {
      id: 'daily-routine-tracker',
      title: 'Daily Routine Tracker',
      category: 'Flutter Application',
      description: 'A comprehensive Flutter application for tracking daily routines, habits, and tasks. Features habit tracking, task management, analytics dashboard, and progress visualization to help users build better daily routines.',
      image: '/src/assets/projects/Daily Routine tracker home screen.png',
      overview: 'A feature-rich Flutter application designed to help users build and maintain productive daily routines. The app includes habit tracking, task management, progress analytics, and motivational features to support users in achieving their daily goals and building lasting habits.',
      technologies: ['Flutter', 'Dart', 'Provider', 'Hive', 'Charts', 'Local Notifications'],
      challenges: 'Key challenges included designing an intuitive UI for habit tracking, implementing local data persistence, creating engaging analytics visualizations, and managing complex state for routine tracking. Solutions involved using Provider for state management, SQLite for local data storage, and custom chart implementations for progress visualization.',
      liveDemoUrl: 'https://daily-routine-tracker-demo.com',
      repositoryUrl: 'https://github.com/yourusername/daily-routine-tracker',
      screenType: 'desktop',
      previews: [
        {
          label: 'Home Screen',
          image: '/src/assets/projects/Daily Routine tracker home screen.png'
        },
        {
          label: 'Task Screen',
          image: '/src/assets/projects/Daily Routine tracker task screen.png'
        },
        {
          label: 'Habit Screen',
          image: '/src/assets/projects/daily routinen tracker habit screen.png'
        },
        {
          label: 'Project Screen',
          image: '/src/assets/projects/daily routinen tracker project screen.png'
        },
        {
          label: 'Analytics Screen',
          image: '/src/assets/projects/daily routine tracker analytics screen.png'
        }
      ]
    },
    {
      id: 'notes-app',
      title: 'Smart Notes App',
      category: 'Mobile Development',
      description: 'A feature-rich notes application built with Flutter that allows users to create, edit, organize, and search notes with categories. Features include auto-save functionality, image attachments, real-time search, and intuitive UI design.',
      image: '/src/assets/projects/Notes app.png',
      overview: 'A comprehensive mobile notes application developed using Flutter framework that provides users with an intuitive interface for note-taking and organization. The app features automatic saving, category-based organization, powerful search functionality, and a clean, modern design that enhances productivity and user experience.',
      technologies: ['Flutter', 'Dart', 'Provider', 'Shared Preferences', 'Image Picker', 'Material Design'],
      challenges: 'Key challenges included implementing real-time auto-save functionality, creating an efficient search system across note titles and content, managing state with Provider pattern, and designing an intuitive user interface for mobile devices. Solutions involved using Provider for state management, implementing periodic auto-save timers, creating efficient search algorithms, and following Material Design principles for optimal user experience.',
      liveDemoUrl: 'https://notes-app-demo.com',
      repositoryUrl: 'https://github.com/yourusername/notes-app',
      screenType: 'mobile',
      previews: [
        {
          label: 'Home Screen',
          image: '/src/assets/projects/Notes app Home screen .png'
        },
        {
          label: 'Categories Screen',
          image: '/src/assets/projects/notes app categories screen .png'
        },
        {
          label: 'Search Screen',
          image: '/src/assets/projects/Notes app serach screen .png'
        }
      ]
    },
   
  ];

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBackToProjects} darkMode={darkMode} />;
  }

  return (
    <section id="projects" className={`py-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div>
                                  <p className={`text-sm mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{project.category}</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              </div>
              
              <p className={`leading-relaxed text-base mb-6 transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
                
                <button 
                  onClick={() => handleViewProject(project)}
                  className={`flex items-center space-x-2 transition-colors duration-200 ${
                    darkMode ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex justify-end">
                <div className="w-72 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl p-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;