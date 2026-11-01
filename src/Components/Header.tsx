import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: scrolled ? 'var(--color-bg)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-max flex items-center justify-between px-6 py-4 lg:px-2">
        {/* Logo */}
        <a href="#home" className="font-display text-lg font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
          Khush<span style={{ color: 'var(--color-accent)' }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="relative px-3 py-2 text-sm font-medium transition-colors"
              style={{
                color:
                  activeSection === link.id
                    ? 'var(--color-accent)'
                    : 'var(--color-text-secondary)',
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                  style={{ background: 'var(--color-accent)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right side: theme toggle + mobile button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border md:hidden"
            style={{
              borderColor: 'var(--color-border)',
              background: 'var(--color-bg-card)',
            }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <div className="container-max flex flex-col gap-1 px-6 pb-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
                  style={{
                    color:
                      activeSection === link.id
                        ? 'var(--color-accent)'
                        : 'var(--color-text-secondary)',
                    backgroundColor:
                      activeSection === link.id
                        ? 'var(--color-accent-bg)'
                        : 'transparent',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
