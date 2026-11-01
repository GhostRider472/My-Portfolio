import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
      style={{
        borderColor: 'var(--color-border)',
        background: 'var(--color-bg-card)',
      }}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-accent" style={{ color: 'var(--color-accent)' }} />
        ) : (
          <Moon size={18} style={{ color: 'var(--color-accent)' }} />
        )}
      </motion.span>
    </button>
  );
}
