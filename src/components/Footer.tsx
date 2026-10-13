import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import profileImage from '../assets/profile_enhanced.png';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#050811] py-14 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/10">
          {/* Brand Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
              <img src={profileImage} alt="Muhammad Ali" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                Muhammad Ali
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mobile Application &amp; Full-Stack Engineer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Muhammad-ali234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ali-a5367b204"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923184439061"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-emerald-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:muhammadali.chd12@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-rose-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="ml-2 p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Muhammad Ali. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;