// views/home.js — landing hero section

export function homeView() {
  return /* html */ `
    <section class="hero">
      <p class="hero-eyebrow">Available for freelance</p>

      <h1 class="hero-title">
        Monami<br><em>Jerome</em>
      </h1>

      <p class="hero-desc">
        Web developer &amp; designer crafting fast, accessible,
        and beautifully simple digital experiences from Bujumbura, Burundi.
      </p>

      <div class="hero-bottom">
        <a href="#/contact" data-link class="btn-primary">
          Let's work together ↗
        </a>
        <nav class="hero-socials" aria-label="Social links">
          <a href="https://github.com/monamijer"    target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/monami-j%C3%A9r%C3%B4me-025038275/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://x.com/JeromeMonami"      target="_blank" rel="noopener">Twitter</a>
        </nav>
      </div>
    </section>
  `;
}
