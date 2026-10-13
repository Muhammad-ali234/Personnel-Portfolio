import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = () => {
  const highlights = [
    'Focused specialization in Dart, Mobile Application Engineering, and Full-Stack Web Technologies.',
    'Rigorous coursework in Database Management Systems (DBMS), Advanced Relational Modeling & Normalization.',
    'Hands-on projects covering Object-Oriented Programming (OOP), Data Structures & Algorithms, and Software Architecture.',
    'Completed Capstone Project (VADS - Vehicle At Doorstep) with commendations for architecture and execution.',
  ];

  const keyCourses = [
    'Mobile Application Development',
    'Database Systems & Design',
    'Data Structures & Algorithms',
    'Software Design & Architecture',
    'Web Engineering',
    'Agile Software Engineering',
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title text-slate-900 dark:text-white">
            Formal <span className="gradient-text-primary">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Foundation in computer science, software engineering principles, and systems architecture.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-hover rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-white/10 relative overflow-hidden">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 flex-shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Bachelor of Software Engineering (BS SE)
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-emerald-600 dark:text-emerald-400">
                    City University of Science &amp; Information Technology
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Peshawar, Pakistan
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      2020 — 2024 (Graduated)
                    </span>
                  </div>
                </div>
              </div>

              <div className="self-start sm:self-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>Degree Completed</span>
                </span>
              </div>
            </div>

            {/* Academic Highlights & Key Modules */}
            <div className="grid md:grid-cols-12 gap-8 pt-6">
              <div className="md:col-span-7 space-y-4">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Specialization &amp; Learning Outcomes
                </h4>
                <ul className="space-y-3">
                  {highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 space-y-4">
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Core Modules Studied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {keyCourses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;