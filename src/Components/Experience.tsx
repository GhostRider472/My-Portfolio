import { motion } from 'framer-motion';
import { Briefcase, Cpu, Code2, Bot } from 'lucide-react';
import { sectionContainer, sectionItem, viewportOnce } from '../lib/animations';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
  icon: typeof Briefcase;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Saawahi IT Solution',
    role: 'Laravel & Angular Intern',
    period: 'Internship',
    description:
      'Gaining professional experience with Laravel and Angular, working on frontend and backend application development.',
    points: [
      'Frontend and backend application development',
      'Working with Laravel framework and Angular',
    ],
    icon: Cpu,
  },
  {
    company: 'eSparkBiz',
    role: 'Full-Stack Development Intern',
    period: 'Internship',
    description:
      'Hands-on development with Node.js, Express.js, MySQL, JavaScript, and Linux in a production environment.',
    points: [
      'Developed and integrated 15+ REST API endpoints',
      'Worked with Node.js, Express.js, MySQL, and JavaScript',
      'Linux environment deployment and development',
    ],
    icon: Code2,
  },
  {
    company: 'JSP Infotech',
    role: 'Software Development Intern',
    period: 'Internship',
    description:
      'Software development internship focusing on building and maintaining web applications.',
    points: [
      'Gained exposure to professional software development practices',
      'Worked on real-world application development',
    ],
    icon: Briefcase,
  },
  {
    company: 'IBM CSRBOX',
    role: 'AI Intern',
    period: 'Short-term Internship',
    description:
      'Short-term AI internship with exposure to AI agents and multi-agent systems.',
    points: [
      'Exposure to AI agent development',
      'Explored multi-agent systems and Python fundamentals',
    ],
    icon: Bot,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={sectionItem} className="mb-12">
          <span className="eyebrow mb-3">Experience</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text)' }}>
            Professional <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-2 bottom-2 w-px sm:left-1/2 sm:-translate-x-1/2"
            style={{ background: 'var(--color-border)' }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  variants={sectionItem}
                  className="relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    {/* Dot */}
                    <div className="absolute left-6 top-6 -translate-x-1/2 sm:left-1/2 z-10">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border-2"
                        style={{
                          background: 'var(--color-bg-card)',
                          borderColor: 'var(--color-accent)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        <exp.icon size={20} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-full pl-16 sm:w-1/2 sm:pl-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12'}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="card p-6"
                      >
                        <span
                          className="font-mono text-xs font-medium tracking-wider"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          {exp.period}
                        </span>
                        <h3 className="mt-2 font-display text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                          {exp.company}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          {exp.description}
                        </p>
                        <ul className={`mt-4 space-y-2 ${isLeft ? 'sm:ml-auto sm:justify-end' : ''}`}>
                          {exp.points.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm"
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: 'var(--color-accent)' }}
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
