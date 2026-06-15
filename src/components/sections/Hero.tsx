import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

const floatingBadges = [
  { label: 'React.js', x: '10%', y: '20%', delay: 0 },
  { label: 'TypeScript', x: '78%', y: '18%', delay: 0.5 },
  { label: 'Tailwind', x: '5%', y: '70%', delay: 1 },
  { label: 'Next.js', x: '82%', y: '65%', delay: 1.5 },
  { label: 'Vite', x: '70%', y: '82%', delay: 0.8 },
];

const codeLines = [
  { text: 'const developer = {', color: 'text-blue-400' },
  { text: '  name: "Vishal Pandit",', color: 'text-green-400' },
  { text: '  role: "Frontend Engineer",', color: 'text-cyan-400' },
  { text: '  exp: "3.5+ years",', color: 'text-yellow-400' },
  { text: '  passion: "great UX",', color: 'text-purple-400' },
  { text: '};', color: 'text-blue-400' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg pt-20">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className="hidden lg:flex absolute tech-badge pointer-events-none"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + badge.delay, duration: 0.5 }}
        >
          <div
            className="float-anim"
            style={{ animationDelay: `${badge.delay}s` }}
          >
            <span className="text-blue-400 mr-1.5">◆</span>
            {badge.label}
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border-[var(--border)] text-sm text-[var(--text-secondary)]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight"
          style={{ fontFamily: 'Clash Display' }}
        >
          Vishal{' '}
          <span className="text-gradient">Pandit</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <span
            className="text-lg md:text-xl font-medium text-[var(--text-secondary)]"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Frontend Developer
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building{' '}
          <span className="text-white font-semibold">scalable, high-performance</span>
          {' '}frontend experiences with React, Next.js, TypeScript,
          and{' '}
          <span className="text-white font-semibold">modern UI architecture</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <motion.button
            onClick={scrollToProjects}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ExternalLink size={16} />
            View Projects
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download="Vishal_Pandit_Resume.pdf"
            className="btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>

          <motion.button
            onClick={scrollToContact}
            className="btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Code snippet card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-5 max-w-md mx-auto text-left float-anim shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)]">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-[var(--text-muted)] font-mono">developer.ts</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className={line.color}
              >
                {line.text}
                {i === codeLines.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-blue-400 ml-1 cursor-blink" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {[
            { icon: <GithubIcon size={18} />, href: 'https://github.com/vishal-0912', label: 'GitHub' },
            { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/vishal-pandit999', label: 'LinkedIn' },
            { icon: <Mail size={18} />, href: 'mailto:vishalpandit787@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={social.label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-blue-500/40 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
