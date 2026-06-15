import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, AlertTriangle } from 'lucide-react';
import { colorClasses, type AccentColor } from '../../lib/colorClasses';

const projects: {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: AccentColor;
  accent: string;
  border: string;
  bg: string;
  features: string[];
  tech: string[];
  mockLines: string[];
}[] = [
  {
    id: 1,
    title: 'AWS Services Downtime Monitoring',
    description:
      'Enterprise-grade real-time monitoring dashboard for AWS service health across regions. Aggregates API data, visualizes incidents, and triggers intelligent alerts for operational teams.',
    icon: <Activity size={24} />,
    color: 'orange',
    accent: 'from-orange-500 to-amber-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/8',
    features: [
      'Real-time AWS status API integration across 30+ services',
      'Interactive dashboard with drill-down region/service views',
      'Configurable alert mechanisms with notification pipelines',
      'Dynamic React components with live data refresh',
    ],
    tech: ['React.js', 'TypeScript', 'Redux', 'REST APIs', 'Tailwind CSS', 'Vite'],
    mockLines: ['status: "degraded"', 'region: "ap-south-1"', 'services: 32', 'alerts: 3'],
  },
  {
    id: 2,
    title: 'Business Acquisition Risk Analysis',
    description:
      'Sophisticated multi-step risk assessment platform for enterprise M&A due diligence. Guides stakeholders through structured workflows and generates actionable risk reports.',
    icon: <BarChart3 size={24} />,
    color: 'violet',
    accent: 'from-violet-500 to-purple-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/8',
    features: [
      'Guided multi-step risk analysis workflows',
      'Dynamic form validation with complex conditional logic',
      'Stakeholder-ready reporting with PDF export',
      'Intelligent recommendation engine based on risk scores',
    ],
    tech: ['React.js', 'TypeScript', 'Zustand', 'Tailwind CSS', 'REST APIs', 'Chart.js'],
    mockLines: ['riskScore: 68', 'category: "Medium"', 'factors: 12', 'recommend: true'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-6">Projects</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Clash Display' }}>
            Featured <span className="text-gradient">work</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
            Enterprise applications built for performance, scalability, and exceptional user experience.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, pi) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: pi * 0.1 }}
              className="glass-light rounded-2xl overflow-hidden gradient-border group"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: content */}
                <div className="lg:col-span-3 p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${project.bg} border ${project.border} flex items-center justify-center ${colorClasses[project.color].text} flex-shrink-0`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        style={{ fontFamily: 'Clash Display' }}
                      >
                        {project.title}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)] font-mono">Enterprise Application</span>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-br ${project.accent}`} />
                        <span className="text-sm text-[var(--text-secondary)]">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Mock UI preview */}
                <div className="lg:col-span-2 p-6 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[var(--border)]">
                  <div className="w-full max-w-sm">
                    {/* Mock browser window */}
                    <div className="rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl">
                      {/* Browser bar */}
                      <div className="bg-[var(--surface)] px-4 py-3 flex items-center gap-2 border-b border-[var(--border)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        <div className="flex-1 mx-3 bg-[var(--bg)] rounded-md px-3 py-1 text-xs text-[var(--text-muted)] font-mono truncate">
                          app.vishal.dev/{project.id === 1 ? 'aws-monitor' : 'risk-analysis'}
                        </div>
                      </div>
                      {/* Mock content */}
                      <div className="bg-[var(--bg)] p-4 min-h-40 space-y-3">
                        {project.id === 1 ? (
                          <>
                            <div className="flex gap-2">
                              {['All', 'Degraded', 'Outage'].map((t, i) => (
                                <div key={t} className={`px-2 py-1 rounded text-xs ${i === 1 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-[var(--surface)] text-[var(--text-muted)]'}`}>{t}</div>
                              ))}
                            </div>
                            {['EC2', 'S3', 'Lambda', 'RDS'].map((svc, i) => (
                              <div key={svc} className="flex items-center justify-between bg-[var(--surface)] rounded-lg px-3 py-2">
                                <span className="text-xs text-[var(--text-secondary)] font-mono">{svc}</span>
                                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-red-400' : i === 2 ? 'bg-yellow-400' : 'bg-green-400'}`} />
                              </div>
                            ))}
                            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-3 py-2 flex items-center gap-2">
                              <AlertTriangle size={12} className="text-orange-400" />
                              <span className="text-xs text-orange-400">3 active alerts</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-xs text-[var(--text-muted)] font-mono mb-2">Risk Assessment</div>
                            {['Financial Risk', 'Legal Risk', 'Market Risk'].map((r, i) => (
                              <div key={r} className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="text-[var(--text-secondary)]">{r}</span>
                                  <span className="text-[var(--text-muted)]">{[68, 42, 55][i]}%</span>
                                </div>
                                <div className="h-1.5 bg-[var(--surface)] rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full bg-gradient-to-r ${project.accent}`}
                                    style={{ width: `${[68, 42, 55][i]}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                            <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg px-3 py-2 mt-3">
                              <span className="text-xs text-violet-400">Overall Risk Score: 68/100</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
