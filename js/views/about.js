// views/about.js

export function aboutView() {
  return /* html */ `
    <div class="page-section">
      <span class="section-label">About</span>

      <div class="about-grid">
        <div class="about-image-wrap reveal">
          <img
            src="images/jer-profile.jpg"
            alt="Monami Jerome — web developer portrait"
            loading="lazy"
            width="480"
            height="640"
          />
        </div>

        <div class="reveal">
          <h1 class="section-title">Designer &amp;<br>Developer</h1>

          <p class="section-subtitle">
            I build responsive and modern websites with a focus on
            performance, clean code, and user experience.
            Currently pursuing an MSc in Software Engineering.
          </p>

          <div class="about-facts">
            <div class="about-fact">
              <strong>Location</strong>
              <span>Bujumbura, Burundi</span>
            </div>
            <div class="about-fact">
              <strong>Education</strong>
              <span>MSc Software Engineering</span>
            </div>
            <div class="about-fact">
              <strong>Expertise</strong>
              <span>Angular · Node.js · Express</span>
            </div>
            <div class="about-fact">
              <strong>Status</strong>
              <span>Open to opportunities</span>
            </div>
          </div>

          <a href="#/contact" data-link class="btn-primary" style="margin-top:2rem">
            Get in touch ↗
          </a>
        </div>
      </div>
    </div>
  `;
}
