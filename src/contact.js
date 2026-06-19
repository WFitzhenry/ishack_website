import "./style.css";
import { backup, loadContent } from "./content.js";

const currentYear = new Date().getFullYear();

function renderContact(c) {
  const cc = c.contact;
  document.querySelector("#app").innerHTML = `
  <header class="site-header" id="top">
    <nav class="site-nav" aria-label="Main navigation">
      <a class="logo-link" href="/" aria-label="iShack home">
        <img src="/logos/ishack_logo.png" alt="iShack" class="logo" />
      </a>

      <div class="menu-right">
        <a class="menu-link" href="/">Projects</a>
        <a class="menu-link" href="/contact.html" aria-current="page">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="project-list" aria-label="Contact details">
      <article class="project-card" id="contact-card">
        <h2 class="project-title">${cc.title}</h2>
        <p class="contact-intro">${cc.intro}</p>

        <div class="contact-logo-row" aria-label="Partner logos">
          <img src="/logos/ishack_logo.png" alt="iShack logo" class="contact-logo" />
          <img src="/logos/isolar_logo.png" alt="iSolar logo" class="contact-logo" />
          <img src="/logos/siil_black_border.png" alt="SIIL logo" class="contact-logo" />
        </div>

        <p class="contact-org">${cc.org_name}</p>

        <div class="contact-methods" aria-label="Contact options">
          <a class="contact-method" href="${cc.contact_1_href}">
            <span class="contact-method-label">${cc.contact_1_label}</span>
            <span class="contact-method-value">${cc.contact_1_value}</span>
          </a>
          <a class="contact-method" href="${cc.contact_2_href}">
            <span class="contact-method-label">${cc.contact_2_label}</span>
            <span class="contact-method-value">${cc.contact_2_value}</span>
          </a>
        </div>
      </article>
    </section>
  </main>

  <footer class="site-footer" aria-label="Site footer">
    <a class="footer-link" href="#top" aria-label="Back to top">
      <img src="/logos/ishack_logo.png" alt="iShack" class="footer-logo" />
      <span>iShack Project ${currentYear}</span>
    </a>
  </footer>
`;
}

// Render immediately with backup content — zero loading delay.
renderContact(backup);

// Fetch live content from Google Sheets and re-render if successful.
loadContent()
  .then((live) => renderContact(live))
  .catch(() => {
    // Backup content is already rendered — nothing to do.
  });
