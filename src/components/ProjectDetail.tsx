import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, Eye, ChevronLeft, ChevronRight, Layers, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface ProjectType {
  id: string;
  title: string;
  category: string;
  clientDelivery?: string;
  tagline?: string;
  description: string;
  image: string;
  overview: string;
  technologies: string[];
  challenges: string;
  liveDemoUrl?: string;
  repositoryUrl?: string;
  screenType?: 'mobile' | 'desktop';
  previews: {
    label: string;
    image: string;
  }[];
}

interface ProjectDetailProps {
  project: ProjectType;
  onBack: () => void;
  darkMode: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onBack();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, onBack]);

  const activeImage = project.previews[activePreviewIndex] || project.previews[0];

  const nextPreview = () => {
    setActivePreviewIndex((prev) => (prev + 1) % project.previews.length);
  };

  const prevPreview = () => {
    setActivePreviewIndex((prev) => (prev - 1 + project.previews.length) % project.previews.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Click backdrop to close */}
      <div className="fixed inset-0 -z-10" onClick={onBack} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl my-auto max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-white/10 shadow-2xl shadow-black/50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {project.category}
            </span>
            {project.clientDelivery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{project.clientDelivery}</span>
              </span>
            )}
            <h2 className="text-lg font-heading font-bold text-slate-900 dark:text-white truncate max-w-md">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onBack}
            aria-label="Close Project View"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Carousel & Screen Previews */}
          <div className="rounded-2xl p-4 sm:p-6 bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
            <div className="relative flex flex-col items-center">
              {/* Active Image Display */}
              <div
                className="relative group cursor-pointer max-h-[420px] flex items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-2 shadow-inner"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={activeImage?.image}
                  alt={activeImage?.label || project.title}
                  className="max-h-[380px] w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                    <Eye className="w-4 h-4" />
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Navigation Arrows if multiple previews */}
              {project.previews.length > 1 && (
                <div className="flex items-center justify-between w-full mt-4">
                  <button
                    onClick={prevPreview}
                    aria-label="Previous preview"
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {activeImage?.label} ({activePreviewIndex + 1} of {project.previews.length})
                  </p>

                  <button
                    onClick={nextPreview}
                    aria-label="Next preview"
                    className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Thumbnails row */}
              <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto max-w-full pb-2">
                {project.previews.map((preview, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activePreviewIndex === idx
                        ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={preview.image}
                      alt={preview.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 items-center">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-md transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Preview / Demo</span>
              </a>
            )}
          </div>

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-lg font-heading font-bold text-slate-900 dark:text-white">
              <Layers className="w-5 h-5 text-emerald-500" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-lg font-heading font-bold text-slate-900 dark:text-white">
              <Cpu className="w-5 h-5 text-amber-500" />
              <span>Technologies &amp; Architecture</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-lg font-heading font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Technical Challenges &amp; Solutions</span>
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.challenges}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 flex justify-end">
          <button
            onClick={onBack}
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Full-screen Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Fullscreen View"
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage?.image}
            alt={activeImage?.label}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail; 