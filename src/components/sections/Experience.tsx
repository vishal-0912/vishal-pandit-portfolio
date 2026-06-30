import { motion } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const roles = [
  {
    title: 'Custom Software Engineering Analyst',
    company: 'Accenture',
    location: 'Kolkata, India',
    period: 'Sept 2024 – Present',
    description:
      'Leading frontend architecture decisions for enterprise-scale web applications, driving performance, accessibility, and code quality across the team.',
    responsibilities: [
      'Architected scalable frontend systems, improving development efficiency by 35% through reusable component libraries and standardized patterns.',
      'Built server-side rendered and statically generated pages with Next.js, improving load performance and SEO for client-facing applications.',
      'Led the migration of legacy JavaScript modules to TypeScript, improving type safety and reducing runtime errors.',
      'Integrated 10+ REST APIs using Axios with robust error handling and loading state management.',
      'Implemented WCAG 2.1 accessibility standards across UI components to ensure inclusive user experiences.',
      'Optimized rendering performance using React.memo, useMemo, and useCallback to reduce unnecessary re-renders.',
      'Enforced code quality standards across the team using ESLint and Prettier configurations.',
      'Collaborated with cross-functional Agile teams in sprint planning, daily standups, and retrospectives.',
      'Mentored 2 junior developers on React best practices, code reviews, and debugging techniques.',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Axios', 'WCAG 2.1', 'ESLint', 'Prettier'],
  },
  {
    title: 'Custom Software Engineering Associate',
    company: 'Accenture',
    location: 'Kolkata, India',
    period: 'Oct 2022 – Aug 2024 (1 Year 11 Months)',
    description:
      'Built and maintained dynamic React applications for enterprise clients, focusing on API integration, reusable components, and Agile delivery.',
    responsibilities: [
      'Developed dynamic, responsive React applications for enterprise clients across multiple project tracks.',
      'Integrated REST APIs using Axios and built reusable components, alongside resolving bugs reported by QA and stakeholders.',
      'Participated in Agile/Scrum ceremonies and implemented UI improvements based on design and QA feedback.',
    ],
    tech: ['React.js', 'JavaScript', 'Redux Toolkit', 'Axios', 'REST APIs', 'Agile/Scrum'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent -translate-x-1/2 pointer-events-none hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-6">Experience</div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Where I've <span className="text-gradient-accent">created impact</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto space-y-10">
          {/* Timeline line */}
          <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-px bg-[image:var(--gradient-spectrum)] opacity-20 lg:left-8" />

          {roles.map((role, ri) => (
            <motion.div
              key={role.title + role.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: ri * 0.1 }}
              className="relative pl-10 sm:pl-20 lg:pl-24"
            >
              {/* Dot */}
              <div
                className="absolute left-1 sm:left-4 lg:left-6 top-6 w-5 h-5 rounded-full border-4 border-[var(--bg)] shadow-lg"
                style={{ background: ['#2563EB', '#0891B2', '#7C3AED', '#059669', '#D97706'][ri % 5] }}
              />

              <div className="glass-light rounded-2xl p-8 gradient-border">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                      <Building2 size={22} className="text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[var(--text-primary)] mb-1">
                        {role.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-medium text-lg">{role.company} · {role.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm font-mono shrink-0">
                    <Calendar size={13} />
                    {role.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {role.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {role.responsibilities.map((resp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 group"
                    >
                      <ChevronRight size={14} className="text-[var(--text-muted)] mt-1.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
                        {resp}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech used */}
                <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-wrap gap-2">
                  {role.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
