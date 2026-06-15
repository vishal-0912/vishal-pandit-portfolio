import { motion } from 'framer-motion';
import { Layers, Zap, Code2, Palette, Users, Globe, Monitor, TrendingUp } from 'lucide-react';

const strengths = [
  {
    icon: <Layers size={20} />,
    title: 'Scalable Architecture',
    desc: 'I design component systems that scale — clean abstractions, clear ownership, minimal technical debt.',
    color: 'blue',
  },
  {
    icon: <Zap size={20} />,
    title: 'Performance-First',
    desc: 'Bundle optimization, lazy loading, memoization, and Core Web Vitals are non-negotiables in my workflow.',
    color: 'yellow',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Clean, Maintainable Code',
    desc: 'TypeScript-strict, ESLint-compliant, and always readable. Code that future teammates will thank you for.',
    color: 'emerald',
  },
  {
    icon: <Palette size={20} />,
    title: 'UI/UX Sensibility',
    desc: 'Strong eye for detail, spacing, and interactions. I bridge the gap between design and engineering.',
    color: 'violet',
  },
  {
    icon: <Globe size={20} />,
    title: 'Enterprise Experience',
    desc: '3.5+ years shipping production code at Accenture for global enterprise clients under real-world constraints.',
    color: 'cyan',
  },
  {
    icon: <Users size={20} />,
    title: 'Agile Collaboration',
    desc: 'Comfortable across Scrum rituals, async communication, code reviews, and cross-functional team dynamics.',
    color: 'orange',
  },
  {
    icon: <Monitor size={20} />,
    title: 'Cross-Browser Mastery',
    desc: 'Battle-tested knowledge of browser quirks, CSS compatibility, and responsive behavior across all platforms.',
    color: 'pink',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Continuous Improvement',
    desc: 'I measure impact — from bundle size to dev velocity — and iterate with data-driven confidence.',
    color: 'indigo',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-500/8', border: 'border-blue-500/20', text: 'text-blue-400' },
  yellow: { bg: 'bg-yellow-500/8', border: 'border-yellow-500/20', text: 'text-yellow-400' },
  emerald: { bg: 'bg-emerald-500/8', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  violet: { bg: 'bg-violet-500/8', border: 'border-violet-500/20', text: 'text-violet-400' },
  cyan: { bg: 'bg-cyan-500/8', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  orange: { bg: 'bg-orange-500/8', border: 'border-orange-500/20', text: 'text-orange-400' },
  pink: { bg: 'bg-pink-500/8', border: 'border-pink-500/20', text: 'text-pink-400' },
  indigo: { bg: 'bg-indigo-500/8', border: 'border-indigo-500/20', text: 'text-indigo-400' },
};

const stats = [
  { value: '3.5+', label: 'Years Experience' },
  { value: '10+', label: 'Enterprise Features Delivered' },
  { value: '35%', label: 'Development Efficiency Improved' },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-6">Why Hire Me</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Clash Display' }}>
            What you get when you <span className="text-gradient">hire Vishal</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
            Not just a developer. A frontend engineer who thinks about systems, quality, and outcomes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-light rounded-xl p-5 text-center gradient-border"
            >
              <div className="stat-number">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)] mt-2 font-medium leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Strength cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {strengths.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-light rounded-xl p-5 gradient-border card-hover group"
              >
                <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text} mb-4 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-[var(--text-muted)] text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
