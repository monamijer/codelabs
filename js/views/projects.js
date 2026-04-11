// views/projects.js
// Add or remove projects by editing the `projects` array only.

const projects = [
  {
    title:  'Portfolio Website',
    desc:   'Vanilla JS SPA with hash-based routing and component architecture.',
    tags:   ['HTML', 'CSS', 'JS'],
    url:    'https://monamijer.github.io/portfolio',
  },
  {
    title:  'E-Commerce App',
    desc:   'Full-stack store with cart, auth, and Stripe payment integration.',
    tags:   ['Angular', 'Node.js', 'MongoDB'],
    url:    '#',
  },
  {
    title:  'REST API Backend',
    desc:   'Scalable REST API with JWT authentication and rate limiting.',
    tags:   ['Express', 'PostgreSQL'],
    url:    '#',
  },
];

export function projectsView() {
  const items = projects
    .map(
      (p, i) => /* html */ `
        <a
          class="project-item reveal"
          href="${p.url}"
          target="_blank"
          rel="noopener"
          aria-label="${p.title} — ${p.desc}"
        >
          <span class="project-index">${String(i + 1).padStart(2, '0')}</span>
          <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </a>
      `
    )
    .join('');

  return /* html */ `
    <div class="page-section">
      <span class="section-label">Selected work</span>
      <h1 class="section-title">Projects</h1>
      <div class="projects-list">${items}</div>
    </div>
  `;
}
