import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../lib/BrandIcons';

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-bg-alt)',
      }}
    >
      <div className="container-max px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Khush Patel. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/KhushPatel1811', icon: GithubIcon, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/khush-patel-173774364/', icon: LinkedinIcon, label: 'LinkedIn' },
              { href: 'mailto:khush5237@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-bg-card)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Back to top
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
            >
              <ArrowUp size={16} />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
