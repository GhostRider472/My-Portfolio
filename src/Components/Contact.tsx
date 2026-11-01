import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../lib/BrandIcons';
import { sectionContainer, sectionItem, viewportOnce } from '../lib/animations';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khush5237@gmail.com',
    href: 'mailto:khush5237@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/khush-patel-173774364',
    href: 'https://www.linkedin.com/in/khush-patel-173774364/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/KhushPatel1811',
    href: 'https://github.com/KhushPatel1811',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Open mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:khush5237@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-max"
      >
        {/* Header */}
        <motion.div variants={sectionItem} className="mb-12 text-center">
          <span className="eyebrow mb-3 justify-center">Contact</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--color-text)' }}>
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: 'var(--color-text-muted)' }}>
            Have a project in mind or an opportunity to discuss? I'm always open
            to connecting. Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact methods */}
          <motion.div variants={sectionItem} className="lg:col-span-5">
            <div className="space-y-4">
              {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-5"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                      {label}
                    </h3>
                    <p className="truncate text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Resume download */}
              <a
                href="/Khush_Resume.pdf"
                download="Khush_Resume.pdf"
                className="card flex items-center gap-4 p-5"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    Resume
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    Download PDF
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="card flex items-center gap-4 p-5">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                    Location
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={sectionItem} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="card space-y-5 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--color-bg)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--color-bg)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--color-bg)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Opening email client...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
                This form opens your default email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
