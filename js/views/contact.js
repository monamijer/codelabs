// views/contact.js
// Uses formsubmit.co for zero-backend form handling (same as before).
// Shows an inline success message instead of a redirect.

export function contactView() {
  // Attach submit listener after the HTML is injected into the DOM
  requestAnimationFrame(bindForm);

  return /* html */ `
    <div class="page-section">
      <span class="section-label">Get in touch</span>
      <h1 class="section-title">Say hello.</h1>

      <div class="contact-layout">
        <!-- Form -->
        <form
          id="contactForm"
          action="https://formsubmit.co/monamijer2005@gmail.com"
          method="POST"
          novalidate
        >
          <!-- Disable captcha redirect; use AJAX instead -->
          <input type="hidden" name="_captcha"  value="false" />
          <input type="hidden" name="_template" value="box"   />
          <input type="hidden" name="_next"     value="https://monamijer.github.io/portfolio#/contact" />

          <div class="contact-form">
            <div class="form-field">
              <label for="name">Your name</label>
              <input type="text"  id="name"    name="name"    required placeholder="Monami Jerome" />
            </div>
            <div class="form-field">
              <label for="email">Email address</label>
              <input type="email" id="email"   name="email"   required placeholder="hello@example.com" />
            </div>
            <div class="form-field">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project…"></textarea>
            </div>

            <button type="submit" class="btn-primary">Send message →</button>

            <p class="form-success" id="formSuccess" role="status">
              Message sent — I'll get back to you soon!
            </p>
          </div>
        </form>

        <!-- Info -->
        <aside class="contact-info reveal">
          <div class="contact-info-item">
            <strong>Email</strong>
            <a href="mailto:monamijer2005@gmail.com">monamijer2005@gmail.com</a>
          </div>
          <div class="contact-info-item">
            <strong>Location</strong>
            <span>Bujumbura, Burundi</span>
          </div>
          <div class="contact-info-item">
            <strong>Availability</strong>
            <span>Open to freelance &amp; full-time roles</span>
          </div>
          <div class="contact-info-item">
            <strong>Social</strong>
            <div style="display:flex;flex-direction:column;gap:0.3rem;margin-top:0.4rem">
              <a href="https://github.com/monamijer"    target="_blank" rel="noopener">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/monami-j%C3%A9r%C3%B4me-025038275/" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
}

// Submit the form via fetch so the user stays on the page
function bindForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled    = true;

    try {
      const data = new FormData(form);
      await fetch(form.action, { method: 'POST', body: data });
      form.reset();
      success.classList.add('visible');
    } catch {
      btn.textContent = 'Failed — try again';
    } finally {
      btn.disabled    = false;
      btn.textContent = 'Send message →';
    }
  });
}
