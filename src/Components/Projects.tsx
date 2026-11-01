import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, Shield, FileText, Wrench, Building2 } from 'lucide-react';
import { GithubIcon } from '../lib/BrandIcons';
import { sectionContainer, sectionItem, viewportOnce } from '../lib/animations';

interface ProjectFeature {
  icon: typeof Calendar;
  text: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: ProjectFeature[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'autotimetable',
    title: 'AutoTimetable — Smart Academic Timetable Generator',
    description:
      'An intelligent web application that generates conflict-free academic timetables by automating scheduling, resource allocation, and faculty management. Supports institute-based multi-tenancy with role-based access for admins, teachers, and students.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Google OR-Tools', 'JWT'],
    features: [
      { icon: Calendar, text: 'Automated academic timetable generation' },
      { icon: Building2, text: 'Institute-based multi-tenancy' },
      { icon: Users, text: 'Admin, Teacher, and Student roles' },
      { icon: FileText, text: 'School and college scheduling modes' },
      { icon: Calendar, text: 'Timetable management and saved timetables' },
      { icon: FileText, text: 'PDF and print functionality' },
    ],
    liveUrl: 'https://smart-academic-timetable-generator.vercel.app/',
    featured: true,
  },
  {
    id: 'apex-autocare',
    title: 'Apex AutoCare — Auto Repair Management Website',
    description:
      'An automotive business website with appointment functionality and backend API integration. Features a modern automotive-oriented interface for managing repair service bookings and customer interactions.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    features: [
      { icon: Wrench, text: 'Automotive business website' },
      { icon: Calendar, text: 'Appointment functionality' },
      { icon: Shield, text: 'Backend API integration' },
      { icon: Wrench, text: 'Modern automotive-oriented interface' },
    ],
    featured: false,
  },
  {
    id: 'hardware-industry',
    title: 'Hardware Part Manufacturing — Industry Website',
    description:
      'A modern hardware engineering factory website showcasing precision manufacturing services, products, and industry expertise with a clean, professional interface.',
    tech: ['React', 'JavaScript', 'CSS'],
    features: [
      { icon: Building2, text: 'Precision manufacturing services showcase' },
      { icon: Wrench, text: 'Product catalog and industry expertise display' },
    ],
    liveUrl: 'https://hardware-industry.vercel.app/',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={sectionItem} className="mb-12">
          <span className="eyebrow mb-3">Projects</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text)' }}>
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base" style={{ color: 'var(--color-text-muted)' }}>
            A selection of projects showcasing full-stack development, API design,
            and real-world problem solving.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} reverse={idx % 2 === 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <motion.div
      variants={sectionItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="card overflow-hidden"
    >
      <div className={`grid gap-0 lg:grid-cols-12 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
        {/* Visual / preview side */}
        <div className="lg:col-span-5 lg:[direction:ltr]">
          <ProjectVisual project={project} />
        </div>

        {/* Content side */}
        <div className="p-6 sm:p-8 lg:col-span-7 lg:[direction:ltr]">
          {/* Tech badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md px-2.5 py-1 font-mono text-xs font-medium"
                style={{
                  background: 'var(--color-accent-bg)',
                  color: 'var(--color-accent)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl" style={{ color: 'var(--color-text)' }}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
            {project.description}
          </p>

          {/* Features */}
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                  style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                >
                  <f.icon size={14} />
                </span>
                {f.text}
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                <GithubIcon size={16} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative flex h-full min-h-[200px] items-center justify-center overflow-hidden p-8"
      style={{
        background: `linear-gradient(135deg, var(--color-accent-bg), var(--color-bg-alt))`,
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Project icon/monogram */}
      <div className="relative z-10 text-center">
        <div
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: 'var(--color-accent)', color: '#fff' }}
        >
          <span className="font-display text-2xl font-bold">
            {project.id.charAt(0).toUpperCase()}
          </span>
        </div>
        <p className="font-mono text-xs tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
          {project.featured ? '★ Featured Project' : 'Project'}
        </p>
      </div>
    </div>
  );
}
