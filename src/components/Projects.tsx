import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import ProjectDetail, { ProjectType } from './ProjectDetail';

// Accounting & POS Software
import AcDashboard from '../assets/projects/AC_software_dashboared.png';
import AcItems from '../assets/projects/AC_software_item.png';
import AcParties from '../assets/projects/AC_software_parties.png';
import AcReports from '../assets/projects/AC_software_reports section.png';
import AcSettings from '../assets/projects/AC_software_SettingsANDbilltemplates.png';

// PVC Pipe Automation & Tracking (YOLOv8)
import PvcPipeImage from '../assets/projects/pvc_pipe_tracking.png';
import PvcErpDashboard from '../assets/projects/ERP dashboared.png';

// VADS & Additional Showcase Assets
import VadsImage from '../assets/projects/vadspng.png';
import BuyerHome from '../assets/projects/Home screen Buyer.png';
import TestDriveDetail from '../assets/projects/Test Drive detail Screen Buyer.png';
import TestDriveCalendar from '../assets/projects/Test Drive Screen By Calender Dates Buyer.png';
import VehicleListed from '../assets/projects/Vehicle Listed Screen  Seller.png';
import CarRequest from '../assets/projects/Car Request Seller.png';
import ChatScreen from '../assets/projects/Chat screen.png';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ai' | 'mobile'>('all');

  const projects: (ProjectType & { type: 'mobile' | 'fullstack' | 'ai'; featured?: boolean })[] = [
    {
      id: 'accounting-pos-software',
      title: 'Accounting & POS Software',
      category: 'Financial ERP & POS',
      clientDelivery: 'Delivered to 10+ Shop Clients',
      tagline: 'POS, Dual Returns, Customer & Vendor Ledgers, Banking, GST & Multi-Format Print',
      type: 'fullstack',
      featured: true,
      description:
        'A battle-tested enterprise Accounting and POS software suite successfully delivered to 10+ commercial shops. Features high-speed POS checkout, purchases & dual returns, customer/vendor ledgers, quotation-to-invoice pipeline, expense tracking, bank & cheque clearing, in-depth GST & inventory reports, mobile sync notifications, and custom thermal/A4/A5 receipt printing.',
      image: AcDashboard,
      overview:
        'A full-featured enterprise Accounting and Point of Sale (POS) system engineered for high-volume retail, wholesale, and multi-branch commercial operations. Successfully delivered and deployed across 10+ commercial shops and wholesale businesses. The platform integrates fast POS billing, purchases and bidirectional returns (both sales returns and purchase returns), comprehensive party ledgers for both customers and vendors, quotation generation with instant 1-click conversion to sales invoices, and expense categorization. It manages bank accounts and cheque clearing workflows, generates granular analytical reports (real-time inventory stock valuation, sales revenue, and itemized GST tax breakdowns), supports mobile sync notifications and staff audit logs, enables bulk items import and parties export, and provides flexible settings for thermal (80mm/58mm), A4, and A5 print layouts, custom GST tax percentages, business branding, and multi-level role-based security.',
      technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'Chart.js', 'JWT Auth', 'WebSockets', 'REST APIs'],
      challenges:
        'Key engineering hurdles included: 1) Structuring strict double-entry transactional accounting guarantees across simultaneous sales, purchases, and dual return entries without balance discrepancies; 2) Designing a fast-responsive POS billing engine with instant quotation-to-sales conversion; 3) Handling dynamic receipt printing formats (A4, A5, and ESC/POS thermal printers); 4) Real-time GST calculation and financial statement generation; 5) Building tamper-evident employee audit logs and mobile sync notification dispatchers.',
      liveDemoUrl: 'https://github.com/Muhammad-ali234',
      repositoryUrl: 'https://github.com/Muhammad-ali234/Accounting-and-POS-Software.git',
      screenType: 'desktop',
      previews: [
        { label: 'Executive Financial & POS Dashboard', image: AcDashboard },
        { label: 'Parties, Customer & Vendor Ledgers', image: AcParties },
        { label: 'Items, Stock & Inventory Control', image: AcItems },
        { label: 'Sales, Inventory & GST Tax Reports', image: AcReports },
        { label: 'Settings, Print Templates (A4, A5, Thermal) & Security', image: AcSettings },
      ],
    },
    {
      id: 'pvc-pipe-tracking-ai',
      title: 'PipeVision AI — Factory ERP & Pipe Automation',
      category: 'Industrial ERP & Computer Vision',
      clientDelivery: 'Delivered to A-One PVC Company',
      tagline: 'Complete Factory ERP (HR, Attendance, Sales, Purchases, Expenses) + YOLOv8 Pipe Tracking',
      type: 'ai',
      featured: true,
      description:
        'A comprehensive industrial enterprise management and automation platform delivered to A-One PVC Company. Combines a full factory ERP suite (HR & staff attendance, sales, purchases, operational expenses, inventory) with an intelligent YOLOv8 computer vision pipeline for automated conveyor pipe counting and real-time plant telemetry.',
      image: PvcPipeImage,
      overview:
        'Delivered to industrial client A-One PVC Company, this dual-engine platform combines full factory enterprise resource planning with real-time computer vision automation. On the business operations side, it provides full-lifecycle HR & biometric staff attendance tracking, employee shift logs, sales order dispatching, supplier purchases, raw materials management, and operational expense ledgers. On the manufacturing line, the AI engine processes high-speed conveyor camera feeds using custom-trained YOLOv8 and OpenCV, executing sub-millisecond bounding box detection, counting extruded pipes without duplicate errors, detecting velocity/spacing anomalies, and streaming live production telemetry to executive control dashboards via WebSockets.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'React.js', 'Node.js', 'FastAPI', 'MySQL', 'WebSockets', 'Tailwind CSS'],
      challenges:
        'Key engineering hurdles included: 1) Seamlessly unifying real-time computer vision video processing (60+ FPS inference latency, >98.5% detection accuracy amidst factory conveyor motion blur) with relational database transactional integrity; 2) Architecting multi-role factory ERP modules covering staff attendance schedules, shift payroll, supplier purchase orders, and expense tracking; 3) Broadcasting sub-second plant floor throughput telemetry and batch metrics to administrative dashboards via WebSockets.',
      liveDemoUrl: 'https://github.com/Muhammad-ali234',
      repositoryUrl: 'https://github.com/Muhammad-ali234/PVC-Pipe-Automated-Counting-YOLO.git',
      screenType: 'desktop',
      previews: [
        { label: 'A-One PVC Factory ERP & YOLOv8 Pipe Automation Command Center', image: PvcPipeImage },
        { label: 'Factory ERP Executive Dashboard — HR, Sales, Purchases & Expenses', image: PvcErpDashboard },
      ],
    },
    {
      id: 'vads-platform',
      title: 'VADS — Vehicle At Doorstep',
      category: 'Automotive Platform',
      clientDelivery: 'Delivered to 1 Automotive Client',
      tagline: 'Multi-role automotive service, doorstep test drive & inspection ecosystem',
      type: 'mobile',
      featured: true,
      description:
        'A comprehensive 4-role automotive service platform successfully delivered to an automotive client, connecting sellers, buyers, drivers, and employees with real-time chat, doorstep test drive scheduling, and automated vehicle inspection workflows.',
      image: VadsImage,
      overview:
        'VADS (Vehicle At Doorstep) is an end-to-end full-stack automotive platform developed and delivered for a commercial automotive client. It enables sellers to list vehicles with automated verification, buyers to book test drives directly at their home doorstep, employees to manage requests and inspections, and drivers to handle pickup logistics. Features a Node.js REST API with MySQL, Socket.io for instantaneous multi-party chat, JWT token security, and a responsive Flutter front-end using Provider state management.',
      technologies: ['Flutter', 'Node.js', 'MySQL', 'Socket.io', 'Provider', 'Express', 'Firebase Auth'],
      challenges:
        'Key challenges included structuring a scalable 4-tier role-based access architecture, synchronizing calendar bookings for doorstep test drives, and architecting live messaging with Socket.io. Implemented dedicated role middleware on Express, transactional MySQL queries, and clean Provider architecture in Flutter.',
      liveDemoUrl: 'https://github.com/Muhammad-ali234',
      repositoryUrl: 'https://github.com/Muhammad-ali234/VADS-Vehicle-Auction-and-Dealership-System-.git',
      screenType: 'mobile',
      previews: [
        { label: 'Buyer Side — Home Screen', image: BuyerHome },
        { label: 'Buyer Side — Test Drive Details', image: TestDriveDetail },
        { label: 'Buyer Side — Calendar Scheduler', image: TestDriveCalendar },
        { label: 'Seller Side — Vehicle Listed', image: VehicleListed },
        { label: 'Seller Side — Car Request', image: CarRequest },
        { label: 'Live Chat Screen', image: ChatScreen },
      ],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Deliveries</span>
            </div>
            <h2 className="section-title text-slate-900 dark:text-white">
              Selected <span className="gradient-text-primary">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-base">
              Production-grade applications and intelligent systems delivered to industrial and commercial clients, built with React.js, Flutter, and scalable backends.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300/60 dark:border-white/10 self-start md:self-auto gap-1">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Works ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'fullstack'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Full-Stack &amp; ERP
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'ai'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI &amp; Vision
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'mobile'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Flutter Mobile
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card-hover rounded-3xl overflow-hidden flex flex-col group border border-slate-200/80 dark:border-white/10"
            >
              {/* Preview Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950/80 p-4 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Badges overlay */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    {project.clientDelivery && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 self-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{project.clientDelivery}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.tagline}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-medium text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Source code for ${project.title}`}
                          className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      )}
    </section>
  );
};

export default Projects;