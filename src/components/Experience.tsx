import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2, Sparkles } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = () => {
  const experiences = [
    {
      id: 1,
      title: 'Flutter & Node.js Developer',
      company: 'Freelance & Independent Projects',
      location: 'Peshawar, Pakistan',
      duration: 'Aug 2024 — Present',
      type: 'Freelance / Full-Stack',
      description:
        'Architected end-to-end full-stack applications utilizing Flutter for responsive mobile clients and Node.js with Express & MySQL for robust backend infrastructure.',
      achievements: [
        'Built the “Vehicle at The Doorstep” (VADS) capstone system supporting 4 distinct user roles (Buyer, Seller, Employee, Driver).',
        'Implemented real-time bidirectional customer messaging using Socket.io and Provider state management.',
        'Integrated MySQL relational backend with secure JWT authentication and role-based middleware.',
        'Deployed production API services and configured databases on DigitalOcean cloud servers.',
      ],
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Socket.io', 'Provider', 'Express', 'JWT', 'REST APIs'],
    },
    {
      id: 2,
      title: 'Flutter Developer Intern',
      company: 'FF-Steel',
      location: 'Peshawar, Pakistan',
      duration: 'Apr 2024 — Jul 2024',
      type: 'Internship',
      description:
        'Contributed to Flutter mobile applications with deep focus on modular UI development, responsive screen layouts, and component architecture.',
      achievements: [
        'Developed reusable widget systems following Material Design guidelines across multiple feature screens.',
        'Integrated Provider state management to ensure seamless reactive data flow across application views.',
        'Collaborated directly with senior engineers in sprint reviews, code architecture discussions, and daily standups.',
      ],
      technologies: ['Flutter', 'Dart', 'State Management', 'Provider', 'Git', 'Agile / Scrum'],
    },
    {
      id: 3,
      title: 'Flutter Fellowship Graduate',
      company: 'Bytewise Limited',
      location: 'Remote',
      duration: 'Mar 2023 — Jun 2023',
      type: 'Fellowship',
      description:
        'Selected for an intensive 3-month fellowship program focused on advanced cross-platform mobile development, clean code patterns, and professional mentorship.',
      achievements: [
        'Completed rigorous hands-on curriculum covering Flutter core architecture, lifecycle management, and custom widget creation.',
        'Engineered demo applications adhering to clean architecture principles and testable component structure.',
        'Received direct technical mentorship from experienced Flutter industry leaders.',
      ],
      technologies: ['Flutter', 'Dart', 'Provider', 'Widgets', 'UI/UX Architecture'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title text-slate-900 dark:text-white">
            Professional <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            My journey developing mobile products, working with engineering teams, and building scalable full-stack software.
          </p>
        </div>

        {/* Connected Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-amber-500/40" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-12 sm:pl-20 group">
                {/* Milestone Node */}
                <div className="absolute left-1.5 sm:left-5.5 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-500 shadow-md shadow-emerald-500/30 flex items-center justify-center group-hover:scale-125 group-hover:border-amber-400 transition-all duration-300" />

                {/* Experience Card */}
                <div className="glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 space-y-5">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                          <Building2 className="w-4 h-4 text-emerald-500" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 self-start sm:self-auto">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {exp.duration}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Key Highlights &amp; Accomplishments
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-medium text-slate-400 mr-1">Skills:</span>
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
