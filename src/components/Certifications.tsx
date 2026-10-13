import React, { useState } from 'react';
import { ExternalLink, Award, Calendar, CheckCircle, Building2, Eye, X } from 'lucide-react';
import flutterCert from '../assets/Flutter Application Development.jpg';
import webDesignCert from '../assets/Web Design.jpg';
import flutterFellowshipCert from '../assets/Flutter Fellowsip.jpg';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Flutter Application Development',
      issuer: 'Coursera',
      date: 'May 2025',
      url: 'https://www.coursera.org/account/accomplishments/specialization/1FHA81638JM6',
      verified: true,
      category: 'Mobile Development',
      image: flutterCert,
      credentialId: '1FHA81638JM6',
    },
    {
      title: 'Web Design Specialization',
      issuer: 'Coursera',
      date: 'February 2023',
      url: 'https://www.coursera.org/account/accomplishments/specialization/SPUPHRKGF85A',
      verified: true,
      category: 'Web Development',
      image: webDesignCert,
      credentialId: 'SPUPHRKGF85A',
    },
    {
      title: 'Flutter Fellowship Graduate',
      issuer: 'Bytewise Limited',
      date: 'June 2023',
      url: 'https://verification.givemycertificate.com/v/b7709b50-3eec-414c-ab17-e75e11977ffc',
      verified: true,
      category: 'Mobile Engineering',
      image: flutterFellowshipCert,
      credentialId: 'b7709b50-3eec',
    },
  ];

  const highlights = [
    {
      title: 'Cross-Platform Mobile Engineer',
      desc: 'Expertise in responsive Flutter UI, Provider state management, offline-first caching, and high-performance native bridges.',
      tags: ['Flutter', 'Dart', 'Provider', 'Hive'],
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      iconColor: 'bg-emerald-600 text-white',
    },
    {
      title: 'Full-Stack Node.js & AI Systems',
      desc: 'Architecting scalable server-side systems, RESTful microservices, WebSocket real-time channels, and computer vision pipelines.',
      tags: ['Node.js', 'Express', 'Python', 'YOLOv8'],
      gradient: 'from-amber-500/20 via-yellow-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      iconColor: 'bg-amber-500 text-slate-950 font-bold',
    },
    {
      title: 'Competitive Fellowship Honors',
      desc: 'Selected for intensive competitive fellowship program with direct industry mentorship, clean architecture drills, and sprint delivery.',
      tags: ['Bytewise', 'Clean Code', 'Mentorship'],
      gradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
      borderColor: 'group-hover:border-teal-500/50',
      iconColor: 'bg-teal-600 text-white',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Recognition</span>
          </div>
          <h2 className="section-title text-slate-900 dark:text-white">
            Certifications &amp; <span className="gradient-text-primary">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Verified qualifications and recognized industry credentials backing my engineering expertise.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card-hover rounded-3xl overflow-hidden flex flex-col border border-slate-200/80 dark:border-white/10 group"
            >
              {/* Image Preview with click to zoom */}
              <div
                className="relative h-56 bg-slate-100 dark:bg-slate-950 p-3 flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => setSelectedCert(cert.image)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 shadow-sm"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </span>
                </div>

                {cert.verified && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-semibold shadow-md">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {cert.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="space-y-1 pt-1 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="font-medium text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group-hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(cert.image)}
                    className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    View Image
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Domain Achievements */}
        <div>
          <h3 className="text-center font-heading font-bold text-2xl text-slate-900 dark:text-white mb-8">
            Specialized Engineering Competencies
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`glass-card-hover rounded-3xl p-7 border border-slate-200/80 dark:border-white/10 relative overflow-hidden group ${item.borderColor}`}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <div className={`w-full h-full rounded-2xl flex items-center justify-center ${item.iconColor}`}>
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Close Preview"
              className="absolute -top-12 right-0 p-2 text-white hover:text-slate-300"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={selectedCert}
              alt="Certificate Full View"
              className="max-h-[85vh] max-w-[92vw] object-contain rounded-2xl shadow-2xl bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;