import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { LinkedinIcon } from '../ui/BrandIcons';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-6">Contact</div>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Let's build something <span className="text-gradient-accent">great together</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
            Open to frontend engineering roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-light rounded-2xl p-6 gradient-border">
              <h3 className="text-xl font-medium mb-5">
                Get in touch
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <Mail size={16} />, label: 'Email', value: 'vishalpandit787@gmail.com', href: 'mailto:vishalpandit787@gmail.com' },
                  { icon: <LinkedinIcon size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/vishal-pandit999', href: 'https://linkedin.com/in/vishal-pandit999' },
                  { icon: <MapPin size={16} />, label: 'Location', value: 'Kolkata, West Bengal, India', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[var(--text-primary)] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors animated-underline text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[var(--text-secondary)] text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-light rounded-2xl p-6 gradient-border">
              <div className="flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full bg-[#2563EB]/10 w-fit">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-[#2563EB]">Available for opportunities</span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Currently open to full-time frontend engineering roles and exciting freelance projects. Response time typically within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <form onSubmit={handleSubmit} className="glass-light rounded-2xl p-8 gradient-border space-y-5 h-full flex flex-col">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-[var(--text-muted)] mb-1.5 font-mono">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="input-field"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-[var(--text-muted)] mb-1.5 font-mono">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="input-field"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="contact-message" className="block text-xs text-[var(--text-muted)] mb-1.5 font-mono">Message</label>
                <textarea
                  id="contact-message"
                  className="input-field resize-none flex-1 min-h-32"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
              >
                {status === 'sent' ? (
                  <>
                    <CheckCircle size={16} className="text-green-300" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} className="text-red-300" />
                    Something went wrong — try again
                  </>
                ) : status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
