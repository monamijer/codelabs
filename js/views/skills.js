// views/skills.js
// Dots out of 5 represent proficiency level (no progress bars).

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML / CSS', level: 5 },
      { name: 'JavaScript', level: 4 },
      { name: 'Angular',    level: 4 },
      { name: 'Bootstrap',  level: 4 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',    level: 4 },
      { name: 'Express',    level: 4 },
      { name: 'REST APIs',  level: 4 },
      { name: 'PostgreSQL', level: 3 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 4 },
      { name: 'Vite',         level: 4 },
      { name: 'Figma',        level: 3 },
      { name: 'Linux / CLI',  level: 3 },
    ],
  },
];

// Render a row of 5 dots for a given level
function dots(level) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="skill-dot${i < level ? ' filled' : ''}"></span>`
  ).join('');
}

export function skillsView() {
  const groups = skillGroups
    .map(
      g => /* html */ `
        <div class="skill-group reveal">
          <h3>${g.category}</h3>
          ${g.skills
            .map(
              s => /* html */ `
                <div class="skill-item">
                  <span>${s.name}</span>
                  <div class="skill-level" aria-label="${s.level} out of 5">
                    ${dots(s.level)}
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      `
    )
    .join('');

  return /* html */ `
    <div class="page-section">
      <span class="section-label">Expertise</span>
      <h1 class="section-title">Skills</h1>
      <div class="skills-grid">${groups}</div>
    </div>
  `;
}
