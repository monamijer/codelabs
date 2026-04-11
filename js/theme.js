// theme.js — dark / light mode
// Preference is saved to localStorage so it persists across sessions.

const STORAGE_KEY = 'portfolio-theme';

export function initTheme() {
  const saved    = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme    = saved ?? (prefersDark ? 'dark' : 'light');

  applyTheme(theme);

  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}
