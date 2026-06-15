import { motion } from 'framer-motion';
import { MapPin, Briefcase, Coffee, Zap } from 'lucide-react';

const highlights = [
  { icon: <Briefcase size={16} />, text: 'Custom Software Engineering Analyst @ Accenture' },
  { icon: <MapPin size={16} />, text: 'Kolkata, West Bengal, India' },
  { icon: <Coffee size={16} />, text: '3.5+ Years Frontend Development Experience' },
  { icon: <Zap size={16} />, text: 'Specialized in React, TypeScript & Scalable UI' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-tag mb-6"
            >
              About Me
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Clash Display' }}
            >
              Engineering interfaces
              <br />
              that <span className="text-gradient">feel effortless</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed"
            >
              <p>
                I'm a frontend engineer at <span className="text-white font-semibold">Accenture</span>, where I architect and build scalable React and Next.js applications for enterprise clients. With 3.5+ years of focused frontend experience, I specialize in creating UI systems that are both technically robust and delightful to use.
              </p>
              <p>
                My approach centers on <span className="text-white font-semibold">component-driven architecture</span>, performance optimization, and building reusable design systems that teams can move fast with. I care deeply about the intersection of clean code and excellent user experience.
              </p>
              <p>
                When I'm not shipping features, I'm exploring emerging frontend patterns, contributing to design systems, and staying ahead of the React and TypeScript ecosystem.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-light rounded-xl p-4 flex items-center gap-4 gradient-border card-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-[var(--text-secondary)] font-medium">{item.text}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              {[
                { label: 'Years Experience', value: '3.5+' },
                { label: 'Projects Shipped', value: '10+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Efficiency Gain', value: '35%' },
              ].map((stat) => (
                <div key={stat.label} className="glass-light rounded-xl p-5 text-center gradient-border">
                  <div className="text-3xl font-bold text-gradient mb-1" style={{ fontFamily: 'Clash Display' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
