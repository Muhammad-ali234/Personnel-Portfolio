import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles, Send } from 'lucide-react';
import profileImage from '../assets/profile_enhanced.png';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'experience', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-[#070b12]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-lg shadow-black/5'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-400 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse" />
            </div>

            <div>
              <span className="font-heading font-bold text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                Muhammad Ali
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Flutter &amp; Full-Stack</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-200/50 dark:bg-slate-900/60 backdrop-blur-md border border-slate-300/50 dark:border-white/10">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-emerald-600 dark:bg-emerald-500 shadow-md shadow-emerald-500/25 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Actions & Theme toggle */}
          <div className="flex items-center gap-3">
            {/* Availability Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-500 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 text-emerald-600 -rotate-12 transition-transform duration-500 hover:rotate-0" />
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl space-y-1 animate-in fade-in slide-in-from-top duration-200">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-500/20'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <Sparkles className="w-4 h-4" />}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10">
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Contact Muhammad Ali</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;