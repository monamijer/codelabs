// router.js — hash-based SPA router
// Uses window.location.hash (#/about etc.) so the site works
// on any static host (GitHub Pages, Netlify…) with zero config.

import { homeView }     from './views/home.js';
import { aboutView }    from './views/about.js';
import { servicesView } from './views/services.js';
import { projectsView } from './views/projects.js';
import { skillsView }   from './views/skills.js';
import { contactView }  from './views/contact.js';

// Route map: hash → view function
const routes = {
  '#/':         homeView,
  '#/about':    aboutView,
  '#/services': servicesView,
  '#/projects': projectsView,
  '#/skills':   skillsView,
  '#/contact':  contactView,
};

const outlet = document.getElementById('main-content');

// Render the view that matches the current hash
function render() {
  const hash  = window.location.hash || '#/';
  const view  = routes[hash] ?? homeView;

  // Fade out, swap HTML, fade in
  outlet.classList.add('fade-out');

  setTimeout(() => {
    outlet.innerHTML = view();
    outlet.classList.remove('fade-out');
    highlightActiveLink(hash);
    initReveal();      // kick off scroll-reveal for new content
    scrollToTop();
  }, 250);
}

// Add .active class to the matching nav link
function highlightActiveLink(hash) {
  document.querySelectorAll('.nav-links a[data-link]').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });
}

// Intercept clicks on [data-link] anchors (no full reload)
function interceptLinks() {
  document.body.addEventListener('click', e => {
    const anchor = e.target.closest('[data-link]');
    if (!anchor) return;
    e.preventDefault();
    const href = anchor.getAttribute('href');
    if (window.location.hash !== href) {
      window.location.hash = href;
    }
    // Close mobile menu if open
    document.getElementById('navLinks')?.classList.remove('open');
  });
}

// Lightweight IntersectionObserver for .reveal elements
function initReveal() {
  const items = outlet.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );

  items.forEach((el, i) => {
    // Stagger the delay for a cascade effect
    el.style.transitionDelay = `${i * 0.06}s`;
    io.observe(el);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export const router = {
  init() {
    interceptLinks();
    window.addEventListener('hashchange', render);
    render(); // render on first load
  },
};
