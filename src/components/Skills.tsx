import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  Settings,
  Palette,
  Terminal
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills = [
    { name: 'Flutter', icon: <Smartphone className="w-6 h-6" style={{color: '#02569B'}} />, category: 'Mobile' },
    { name: 'Dart', icon: <Code className="w-6 h-6" style={{color: '#0175C2'}} />, category: 'Language' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6" style={{color: '#F7DF1E'}} />, category: 'Language' },
    { name: 'Node.js', icon: <Server className="w-6 h-6" style={{color: '#339933'}} />, category: 'Backend' },
    { name: 'Express', icon: <Globe className="w-6 h-6" style={{color: '#68A063'}} />, category: 'Framework' },
    { name: 'Firebase', icon: <Database className="w-6 h-6" style={{color: '#FFCA28'}} />, category: 'Database' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" style={{color: '#4479A1'}} />, category: 'Database' },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" style={{color: '#336791'}} />, category: 'Database' },
    { name: 'Postman', icon: <Terminal className="w-6 h-6" style={{color: '#FF6C37'}} />, category: 'Tools' },
    { name: 'Figma', icon: <Palette className="w-6 h-6" style={{color: '#F24E1E'}} />, category: 'Design' },
  ];

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map(({ name, icon, category }) => (
            <div
              key={name}
              className={`group relative border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 hover:border-blue-400 hover:shadow-blue-500/20' 
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-blue-400 hover:shadow-blue-500/20'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-6 pt-4 pb-4">
                <div className={`p-4 rounded-lg transition-colors duration-300 shadow-sm ${
                  darkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-200 group-hover:bg-gray-300'
                }`}>
                  <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {icon}
                </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {name}
                  </h3>
                  <span className={`text-xs uppercase tracking-wide transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {category}
                  </span>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Skills by category */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {['Mobile', 'Backend', 'Database', 'Tools', 'Design'].map((category) => (
              <span
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;