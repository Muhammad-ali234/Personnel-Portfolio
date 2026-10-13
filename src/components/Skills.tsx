import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiPython,
  SiOpencv,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiFigma,
  SiGit,
  SiSocketdotio,
} from 'react-icons/si';

interface SkillsProps {
  darkMode: boolean;
}

interface SkillItem {
  name: string;
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'database' | 'tools';
  categoryLabel: string;
  icon: React.ReactNode;
  level: string;
  color: string;
  description: string;
}

const Skills: React.FC<SkillsProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'backend' | 'ai' | 'database' | 'tools'>('all');

  const skills: SkillItem[] = [
    {
      name: 'React.js',
      category: 'web',
      categoryLabel: 'Frontend Web',
      icon: <SiReact className="w-7 h-7 text-[#00d8ff] dark:text-[#61dafb]" />,
      level: 'Advanced',
      color: 'from-teal-500/20 to-emerald-500/20',
      description: 'Single-page applications, component-driven UI, modern hooks, Redux/Context state, and API integration.',
    },
    {
      name: 'TypeScript',
      category: 'web',
      categoryLabel: 'Language',
      icon: <SiTypescript className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />,
      level: 'Advanced',
      color: 'from-emerald-500/20 to-teal-500/20',
      description: 'Strict type safety, custom interfaces, generic abstractions, and scalable enterprise web architecture.',
    },
    {
      name: 'Tailwind CSS',
      category: 'web',
      categoryLabel: 'Styling',
      icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />,
      level: 'Advanced',
      color: 'from-teal-500/20 to-cyan-500/20',
      description: 'Utility-first modern styling, responsive layouts, glassmorphism designs, and dark/light themes.',
    },
    {
      name: 'Flutter',
      category: 'mobile',
      categoryLabel: 'Mobile',
      icon: <SiFlutter className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />,
      level: 'Expert / Primary',
      color: 'from-emerald-500/20 to-teal-500/20',
      description: 'Cross-platform iOS & Android mobile apps, widget architecture, animation controllers.',
    },
    {
      name: 'Dart',
      category: 'mobile',
      categoryLabel: 'Language',
      icon: <SiDart className="w-7 h-7 text-teal-600 dark:text-teal-400" />,
      level: 'Advanced',
      color: 'from-teal-500/20 to-emerald-500/20',
      description: 'OOP, asynchronous programming, streams, null safety, and clean business logic.',
    },
    {
      name: 'Python',
      category: 'ai',
      categoryLabel: 'Language & AI',
      icon: <SiPython className="w-7 h-7 text-amber-500 dark:text-amber-400" />,
      level: 'Advanced',
      color: 'from-amber-500/20 to-yellow-500/20',
      description: 'Automation, AI data processing, computer vision pipelines, FastAPI and backend microservices.',
    },
    {
      name: 'OpenCV & YOLOv8',
      category: 'ai',
      categoryLabel: 'Computer Vision',
      icon: <SiOpencv className="w-7 h-7 text-emerald-500 dark:text-emerald-400" />,
      level: 'Proficient',
      color: 'from-emerald-500/20 to-teal-500/20',
      description: 'Object detection, real-time video stream analysis, conveyor pipe counting, frame preprocessing.',
    },
    {
      name: 'Node.js',
      category: 'backend',
      categoryLabel: 'Backend',
      icon: <SiNodedotjs className="w-7 h-7 text-[#339933] dark:text-[#4ade80]" />,
      level: 'Advanced',
      color: 'from-emerald-500/20 to-green-500/20',
      description: 'Asynchronous event-driven server runtime, REST APIs, middleware, performance tuning.',
    },
    {
      name: 'Express.js',
      category: 'backend',
      categoryLabel: 'Backend',
      icon: <SiExpress className="w-7 h-7 text-slate-800 dark:text-white" />,
      level: 'Advanced',
      color: 'from-slate-500/20 to-zinc-500/20',
      description: 'RESTful API architecture, JWT authentication, routing, error handling middleware.',
    },
    {
      name: 'Socket.io',
      category: 'backend',
      categoryLabel: 'Real-Time',
      icon: <SiSocketdotio className="w-7 h-7 text-slate-900 dark:text-white" />,
      level: 'Proficient',
      color: 'from-emerald-500/20 to-teal-500/20',
      description: 'Bidirectional real-time web sockets for in-app messaging, live tracking & notifications.',
    },
    {
      name: 'JavaScript',
      category: 'backend',
      categoryLabel: 'Language',
      icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />,
      level: 'Advanced',
      color: 'from-amber-500/20 to-yellow-500/20',
      description: 'Modern ES6+, Promises, async/await, modular code structure, and API integrations.',
    },
    {
      name: 'MySQL',
      category: 'database',
      categoryLabel: 'Database',
      icon: <SiMysql className="w-7 h-7 text-teal-600 dark:text-teal-400" />,
      level: 'Advanced',
      color: 'from-teal-500/20 to-emerald-500/20',
      description: 'Relational database schema modeling, indexing, foreign keys, complex joins, transactions.',
    },
    {
      name: 'Firebase',
      category: 'database',
      categoryLabel: 'Cloud DB',
      icon: <SiFirebase className="w-7 h-7 text-[#FFCA28]" />,
      level: 'Proficient',
      color: 'from-amber-500/20 to-orange-500/20',
      description: 'Authentication, Firestore realtime database, cloud messaging (FCM), security rules.',
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      categoryLabel: 'Database',
      icon: <SiPostgresql className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
      level: 'Proficient',
      color: 'from-emerald-500/20 to-teal-500/20',
      description: 'Relational data modeling, SQL queries, table constraints, structured data storage.',
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      categoryLabel: 'DevOps',
      icon: <SiGit className="w-7 h-7 text-[#F05032]" />,
      level: 'Advanced',
      color: 'from-rose-500/20 to-orange-500/20',
      description: 'Version control, feature branching, merge strategies, pull requests, collaborative CI/CD.',
    },
    {
      name: 'Postman',
      category: 'tools',
      categoryLabel: 'Testing',
      icon: <SiPostman className="w-7 h-7 text-[#FF6C37]" />,
      level: 'Advanced',
      color: 'from-orange-500/20 to-amber-500/20',
      description: 'API endpoint testing, automation collections, environment variables, authentication headers.',
    },
    {
      name: 'Figma',
      category: 'tools',
      categoryLabel: 'Design',
      icon: <SiFigma className="w-7 h-7 text-[#F24E1E]" />,
      level: 'Proficient',
      color: 'from-purple-500/20 to-pink-500/20',
      description: 'Wireframing, UI/UX prototyping, design-to-code translation for Flutter mobile interfaces.',
    },
  ];

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  const categories: { id: 'all' | 'web' | 'mobile' | 'ai' | 'backend' | 'database' | 'tools'; label: string }[] = [
    { id: 'all', label: 'All Technologies' },
    { id: 'web', label: 'Web (React & TS)' },
    { id: 'mobile', label: 'Mobile (Flutter/Dart)' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & Cloud' },
    { id: 'tools', label: 'Tools & Design' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title text-slate-900 dark:text-white">
            Technical <span className="gradient-text-primary">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Proficient in modern tools, frameworks, and architectures for crafting production-ready mobile, backend, and computer vision systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105'
                  : 'bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card-hover rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 group flex flex-col justify-between"
            >
              <div>
                {/* Icon and Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${skill.color} border border-slate-200/60 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {skill.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                    {skill.level}
                  </span>
                </div>

                {/* Title and Category */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {skill.categoryLabel}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;