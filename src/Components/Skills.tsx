import { motion } from 'framer-motion';
import { sectionContainer, sectionItem, viewportOnce, progressBar, easeOutExpo } from '../lib/animations';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Next.js', level: 65 },
      { name: 'Angular', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'Laravel', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Authentication', level: 80 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 80 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Programming & Tools',
    skills: [
      { name: 'Python', level: 40 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Data Structures & Algorithms', level: 75 },
    ],
  },
];

function proficiencyLabel(level: number): string {
  if (level >= 85) return 'Advanced';
  if (level >= 75) return 'Proficient';
  if (level >= 60) return 'Intermediate';
  return 'Familiar';
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={sectionItem} className="mb-12 text-center">
          <span className="eyebrow mb-3 justify-center">Skills</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text)' }}>
            Technical <span className="gradient-text">proficiency</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: 'var(--color-text-muted)' }}>
            Self-assessed proficiency levels across the technologies I work with.
            Approximate values reflecting hands-on project experience.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={sectionItem}
              className="card p-6 sm:p-8"
            >
              <h3 className="mb-6 font-display text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {proficiencyLabel(skill.level)}
                      </span>
                    </div>
                    {/* Progress bar track */}
                    <div
                      className="h-2 w-full overflow-hidden rounded-full"
                      style={{ background: 'var(--color-border-subtle)' }}
                    >
                      <motion.div
                        custom={skill.level}
                        variants={progressBar}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-soft))',
                        }}
                        transition={{
                          duration: 1.2,
                          ease: easeOutExpo,
                          delay: 0.1 + skillIdx * 0.05,
                        }}
                      />
                    </div>
                    <div className="mt-1 text-right">
                      <span className="font-mono text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
