import { motion } from 'framer-motion';
import { Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--border)] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold" style={{ fontFamily: 'Clash Display' }}>
                vishal<span className="text-gradient">pandit</span>
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
              Frontend Engineer crafting scalable, high-performance web experiences with React and TypeScript.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-[var(--text-muted)] hover:text-white transition-colors animated-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <GithubIcon size={16} />, href: 'https://github.com/vishal-0912', label: 'GitHub' },
                { icon: <LinkedinIcon size={16} />, href: 'https://linkedin.com/in/vishal-pandit999', label: 'LinkedIn' },
                { icon: <Mail size={16} />, href: 'mailto:vishalpandit787@gmail.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-blue-500/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Vishal Pandit. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-mono text-xs">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> using React + TypeScript + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
