// main.js — entry point
// Initialises router, theme toggle, nav interactions, footer year

import { router } from './router.js';
import { initTheme } from './theme.js';
import { initNav }   from './nav.js';

// Boot everything once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  router.init();

  // Footer: keep the year current automatically
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
