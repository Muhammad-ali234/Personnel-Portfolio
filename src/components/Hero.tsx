import React, { useState } from 'react';
import { Download, ArrowRight, Check, Sparkles, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';
import { SiFlutter, SiReact, SiNodedotjs, SiFirebase, SiMysql } from 'react-icons/si';
import profileImage from '../assets/profile_enhanced.png';
import resumeFile from '../assets/resume/Muhammad Ali Resume.pdf';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Muhammad Ali Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Specialization', value: 'React, Flutter & Node' },
    { label: 'Completed Projects', value: '12+' },
    { label: 'Industry Training', value: 'Coursera & Bytewise' },
    { label: 'Degree', value: 'BS Software Eng.' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>Full-Stack Web &amp; Mobile Application Engineer</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Crafting Exceptional <br className="hidden sm:inline" />
              <span className="gradient-text-primary">Web &amp; Mobile Apps</span> &amp;{' '}
              <span className="gradient-text-accent">Intelligent Systems</span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Muhammad Ali</strong>. 
              I engineer modern web applications with <strong className="text-slate-900 dark:text-white font-semibold">React.js</strong> and cross-platform mobile apps with <strong className="text-slate-900 dark:text-white font-semibold">Flutter</strong>, paired with robust backends (Node.js, Python), scalable databases, and computer vision systems. Focused on clean architecture, high performance, and seamless user experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-md shadow-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">Downloaded CV!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-emerald-500" />
                    <span>Download CV</span>
                  </>
                )}
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href="https://github.com/Muhammad-ali234"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/30 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ali-a5367b204"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:muhammadali.chd12@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 text-rose-500 hover:border-rose-500/40 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923184439061"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 text-emerald-500 hover:border-emerald-500/40 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Avatar Presentation with Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square flex items-center justify-center">
              {/* Outer decorative pulsing halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-amber-400 opacity-25 blur-2xl animate-pulse" />

              {/* Main Avatar Container */}
              <div className="relative w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 rounded-3xl p-[3px] bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-400 shadow-2xl shadow-emerald-500/20">
                <div className="w-full h-full rounded-[22px] bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                  <img
                    src={profileImage}
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: Flutter (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-6 p-2 sm:p-2.5 rounded-2xl glass-card border border-white/20 flex items-center gap-2 shadow-xl animate-float">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <SiFlutter className="w-5 h-5" />
                </div>
                <div className="text-left pr-1 hidden sm:block">
                  <p className="text-xs font-bold text-slate-800 dark:text-white leading-none">Flutter</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Mobile Expert</p>
                </div>
              </div>

              {/* Floating Badge 2: React.js (Top Right) */}
              <div className="absolute top-8 -right-3 sm:-right-6 p-2 sm:p-2.5 rounded-2xl glass-card border border-white/20 flex items-center gap-2 shadow-xl animate-float-slow">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-[#00d8ff] dark:text-[#61dafb]">
                  <SiReact className="w-5 h-5" />
                </div>
                <div className="text-left pr-1 hidden sm:block">
                  <p className="text-xs font-bold text-slate-800 dark:text-white leading-none">React.js</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Modern Web</p>
                </div>
              </div>

              {/* Floating Badge 3: Node.js (Bottom Left) */}
              <div className="absolute bottom-6 -left-4 sm:-left-8 p-2 sm:p-2.5 rounded-2xl glass-card border border-white/20 flex items-center gap-2 shadow-xl animate-float-slow">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-[#339933] dark:text-[#68e068]">
                  <SiNodedotjs className="w-5 h-5" />
                </div>
                <div className="text-left pr-1 hidden sm:block">
                  <p className="text-xs font-bold text-slate-800 dark:text-white leading-none">Node.js</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Backend APIs</p>
                </div>
              </div>

              {/* Floating Badge 4: MySQL (Bottom Right) */}
              <div className="absolute -bottom-4 right-4 sm:right-0 p-2 sm:p-2.5 rounded-2xl glass-card border border-white/20 flex items-center gap-2 shadow-xl animate-float">
                <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <SiMysql className="w-5 h-5" />
                </div>
                <div className="text-left pr-1 hidden sm:block">
                  <p className="text-xs font-bold text-slate-800 dark:text-white leading-none">MySQL</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Relational DB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl glass-card border border-slate-200/60 dark:border-white/5">
              <p className="font-heading font-extrabold text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;