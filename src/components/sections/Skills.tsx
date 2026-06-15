import { motion } from 'framer-motion';
import { colorClasses, type AccentColor } from '../../lib/colorClasses';

const skillCategories: { title: string; color: AccentColor; skills: { name: string; level: number }[] }[] = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    title: 'Styling',
    color: 'cyan',
    skills: [
      { name: 'Tailwind CSS', level: 93 },
      { name: 'Bootstrap', level: 80 },
      { name: 'CSS Modules', level: 85 },
      { name: 'Responsive Design', level: 94 },
    ],
  },
  {
    title: 'State Management',
    color: 'violet',
    skills: [
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Zustand', level: 82 },
      { name: 'Context API', level: 90 },
      { name: 'React Query', level: 75 },
    ],
  },
  {
    title: 'Tools & Ecosystem',
    color: 'emerald',
    skills: [
      { name: 'Vite', level: 88 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'Node.js', level: 68 },
    ],
  },
  {
    title: 'Cloud & AI',
    color: 'orange',
    skills: [
      { name: 'Azure AI Fundamentals', level: 80 },
      { name: 'Generative AI & LLMs', level: 78 },
      { name: 'AI-Assisted Development', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-6">Skills</div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Tools I <span className="text-gradient-accent">work with</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
            A focused frontend stack refined through 3.5+ years of enterprise development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass-light rounded-2xl p-6 gradient-border"
            >
              <div className={`section-tag mb-5 ${colorClasses[cat.color].border} ${colorClasses[cat.color].bg} ${colorClasses[cat.color].text} border`} style={{ background: 'transparent' }}>
                {cat.title}
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-xs text-[var(--text-muted)] font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: ci * 0.1 + si * 0.08, ease: [0.4, 0, 0.2, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${colorClasses[cat.color].gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Redux', 'Zustand', 'Vite', 'ESLint', 'Prettier', 'Git', 'REST API', 'Figma', 'Agile', 'Azure AI'].map((tech) => (
            <motion.span
              key={tech}
              className="tech-badge"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
