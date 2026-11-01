import { motion } from 'framer-motion';
import { Mail, FileText, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../lib/BrandIcons';
import { sectionContainer, sectionItem, easeOutExpo } from '../lib/animations';

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding"
      style={{ background: 'var(--gradient-mesh), var(--color-bg)' }}
    >
      <div className="container-max grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* ---- Left: Text content ---- */}
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          {/* Eyebrow */}
          <motion.div variants={sectionItem} className="mb-6">
            <span className="eyebrow">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={sectionItem}
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: 'var(--color-text)' }}
          >
            Khush Patel
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={sectionItem}
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium sm:text-xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span className="gradient-text font-semibold">Full-Stack Developer</span>
            <span className="text-base opacity-40">|</span>
            <span>Computer Engineering Graduate</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={sectionItem}
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-balance"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I build scalable, user-focused web applications with the MERN stack
            and modern backend architecture. From automated scheduling systems
            to business management platforms, I turn complex requirements into
            clean, production-ready software.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={sectionItem}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="/Khush_Resume.pdf" download="Khush_Resume.pdf" className="btn-primary">
              <FileText size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={sectionItem} className="mt-8 flex items-center gap-3">
            {[
              {
                href: 'https://github.com/KhushPatel1811',
                Icon: GithubIcon,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/khush-patel-173774364/',
                Icon: LinkedinIcon,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:khush5237@gmail.com',
                Icon: Mail,
                label: 'Email',
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border transition-all hover:-translate-y-0.5"
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ---- Right: Abstract visual ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <AbstractVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---- Abstract visual: a stylized code/terminal card with floating elements ---- */
function AbstractVisual() {
  return (
    <div className="relative">
      {/* Main card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-2xl border p-6"
        style={{
          background: 'var(--color-bg-card)',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Window dots */}
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="h-3 w-3 rounded-full" style={{ background: '#febc2e' }} />
          <span className="h-3 w-3 rounded-full" style={{ background: '#28c840' }} />
        </div>

        {/* Code lines */}
        <div className="space-y-2.5 font-mono text-sm">
          <CodeLine indent={0} content={<><span style={{ color: 'var(--color-accent)' }}>const</span> <span style={{ color: 'var(--color-text)' }}>developer</span> = {'{'}</>} />
          <CodeLine indent={1} content={<><span style={{ color: 'var(--color-text-muted)' }}>name</span>: <span style={{ color: '#7ee787' }}>'Khush Patel'</span>,</>} />
          <CodeLine indent={1} content={<><span style={{ color: 'var(--color-text-muted)' }}>role</span>: <span style={{ color: '#7ee787' }}>'Full-Stack Developer'</span>,</>} />
          <CodeLine indent={1} content={<><span style={{ color: 'var(--color-text-muted)' }}>stack</span>: [<span style={{ color: '#7ee787' }}>'React'</span>, <span style={{ color: '#7ee787' }}>'Node'</span>, <span style={{ color: '#7ee787' }}>'MongoDB'</span>],</>} />
          <CodeLine indent={1} content={<><span style={{ color: 'var(--color-text-muted)' }}>focus</span>: <span style={{ color: '#7ee787' }}>'scalable web apps'</span>,</>} />
          <CodeLine indent={1} content={<><span style={{ color: 'var(--color-text-muted)' }}>available</span>: <span style={{ color: '#79c0ff' }}>true</span>,</>} />
          <CodeLine indent={0} content={<span style={{ color: 'var(--color-text)' }}>{'}'};</span>} />
        </div>
      </motion.div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 -top-4 rounded-xl border px-4 py-3"
        style={{
          background: 'var(--color-bg-elevated)',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full" style={{ background: '#28c840' }} />
          <span className="font-mono text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            Open to work
          </span>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-5 -left-5 rounded-xl border px-4 py-3"
        style={{
          background: 'var(--color-bg-elevated)',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="font-mono text-xs">
          <span style={{ color: 'var(--color-accent)' }} className="font-semibold">8.13</span>{' '}
          <span style={{ color: 'var(--color-text-muted)' }}>CGPA</span>
        </div>
      </motion.div>
    </div>
  );
}

function CodeLine({ indent, content }: { indent: number; content: React.ReactNode }) {
  return (
    <div style={{ paddingLeft: `${indent * 1.5}rem` }}>
      {content}
    </div>
  );
}
