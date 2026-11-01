import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { sectionContainer, sectionItem, viewportOnce } from '../lib/animations';

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: 'var(--color-bg-alt)' }}>
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={sectionItem} className="mb-12">
          <span className="eyebrow mb-3">Education</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text)' }}>
            Academic <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        {/* Education card */}
        <motion.div
          variants={sectionItem}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="card mx-auto max-w-3xl p-8 sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Icon */}
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
              style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
            >
              <GraduationCap size={28} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold sm:text-2xl" style={{ color: 'var(--color-text)' }}>
                B.E. Computer Engineering
              </h3>
              <p className="mt-1 text-base font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                Vishwakarma Government Engineering College (VGEC), Ahmedabad
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
                  Ahmedabad, Gujarat
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <Award size={16} style={{ color: 'var(--color-accent)' }} />
                  CGPA: <span className="font-mono font-semibold" style={{ color: 'var(--color-accent)' }}>8.13</span> / 10
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                Completed Bachelor of Engineering in Computer Engineering, building
                a strong foundation in data structures, algorithms, database
                management, software engineering, and web development. The
                curriculum combined theoretical knowledge with practical
                project work across multiple technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
