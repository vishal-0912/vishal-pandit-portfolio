import { motion } from 'framer-motion';
import { Award, Shield } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    year: '2025',
    description:
      'Validated understanding of AI workloads on Azure — covering machine learning concepts, responsible AI, and Microsoft Azure AI services including Cognitive Services and Azure Machine Learning.',
    tags: ['Azure AI', 'Machine Learning', 'Cognitive Services', 'Responsible AI'],
  },
  {
    title: 'Phase 1.2: Build Products and Launch an AI-Powered Business',
    issuer: 'House Of Edtech',
    year: '2026',
    description:
      'Certified in AI product development, building and launching AI-powered products, and LinkedIn optimization with AI.',
    tags: ['AI Product Development', 'AI-Powered Business', 'LinkedIn Optimization'],
  },
  {
    title: 'Phase 1.1: AI Fundamentals & Ecosystem Mastery',
    issuer: 'House Of Edtech',
    year: '2026',
    description:
      'Certified in Large Language Models (LLMs), Generative AI, AI tools for research, and 10x productivity workflows.',
    tags: ['LLMs', 'Generative AI', 'AI Research Tools', 'Productivity Workflows'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-6">Certifications</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Clash Display' }}>
            Credentials &amp; <span className="text-gradient">expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-light rounded-2xl p-6 gradient-border group relative overflow-hidden flex flex-col"
            >
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none group-hover:bg-blue-500/15 transition-all duration-500" />

              <div className="relative flex flex-col gap-4 flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Shield size={24} className="text-blue-400" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="text-lg font-bold text-white leading-snug"
                      style={{ fontFamily: 'Clash Display' }}
                    >
                      {cert.title}
                    </h3>
                    <div className="text-xs text-[var(--text-muted)] font-mono whitespace-nowrap">{cert.year}</div>
                  </div>
                  <p className="text-blue-400 font-medium mb-3">{cert.issuer}</p>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="tech-badge text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <Award size={12} />
                Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
