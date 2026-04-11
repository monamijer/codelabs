// views/services.js

// Each service card: number, title, description
const services = [
  {
    title: 'Web Development',
    desc:  'Fast, accessible websites and web apps built with modern vanilla JS or Angular — no unnecessary bloat.',
  },
  {
    title: 'E-Commerce',
    desc:  'Online stores wired up with payment gateways, product catalogs, and smooth checkout flows.',
  },
  {
    title: 'API Integration',
    desc:  'REST and GraphQL APIs designed, built, or integrated into your existing product using Node.js & Express.',
  },
  {
    title: 'Maintenance',
    desc:  'Ongoing support, performance audits, security patches, and feature additions for live projects.',
  },
];

export function servicesView() {
  const cards = services
    .map(
      (s, i) => /* html */ `
        <div class="service-card reveal">
          <p class="service-number">0${i + 1}</p>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      `
    )
    .join('');

  return /* html */ `
    <div class="page-section">
      <span class="section-label">What I do</span>
      <h1 class="section-title">Services</h1>
      <div class="services-grid">${cards}</div>
    </div>
  `;
}
