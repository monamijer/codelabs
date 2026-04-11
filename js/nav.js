// nav.js — mobile hamburger menu and nav scroll shadow

export function initNav() {
  const toggle   = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const nav      = document.getElementById('nav');

  // Mobile menu open / close
  toggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Subtle shadow when user scrolls down
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 8
      ? '0 1px 24px rgba(0,0,0,0.06)'
      : 'none';
  }, { passive: true });
}
