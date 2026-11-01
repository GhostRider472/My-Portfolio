import { motion } from 'framer-motion';
import { GraduationCap, Code2, Server, Brain } from 'lucide-react';
import { sectionContainer, sectionItem, viewportOnce } from '../lib/animations';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: 'B.E. Computer Engineering',
    detail: 'VGEC Ahmedabad · CGPA 8.13',
  },
  {
    icon: Code2,
    title: 'MERN Stack',
    detail: 'React, Node.js, Express, MongoDB',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    detail: 'REST APIs, JWT, MySQL, Laravel',
  },
  {
    icon: Brain,
    title: 'AI & Python',
    detail: 'AI agents, multi-agent systems',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-max"
      >
        {/* Section header */}
        <motion.div variants={sectionItem} className="mb-12">
          <span className="eyebrow mb-3">About</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text)' }}>
            A developer who turns ideas into <span className="gradient-text">working software</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Narrative */}
          <motion.div variants={sectionItem} className="lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                I'm a Computer Engineering graduate from Vishwakarma Government
                Engineering College (VGEC), Ahmedabad, with a CGPA of 8.13. My
                foundation is in the MERN stack — building full-stack web
                applications with React, Node.js, Express.js, and MongoDB.
              </p>
              <p>
                During my internships I worked hands-on with Node.js, Express.js,
                MySQL, JavaScript, and Linux — developing and integrating 15+ REST
                API endpoints for production systems. I'm currently gaining
                professional experience with Laravel and Angular, expanding my
                range across different frameworks and architectures.
              </p>
              <p>
                I also have exposure to Python fundamentals and AI agent
                development through a short-term AI internship, where I explored
                multi-agent systems. I'm interested in full-stack development,
                backend engineering, and building scalable software applications
                that solve real problems cleanly and efficiently.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={sectionItem} className="lg:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="card p-5"
                >
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    {title}
                  </h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
