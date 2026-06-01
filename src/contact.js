import "./style.css";

const currentYear = new Date().getFullYear();

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
        <h2 class="project-title">Contact</h2>
        <p class="contact-intro">Get in touch with the iShack Project team.</p>

        <div class="contact-logo-row" aria-label="Partner logos">
          <img src="/logos/ishack_logo.png" alt="iShack logo" class="contact-logo" />
          <img src="/logos/isolar_logo.png" alt="iSolar logo" class="contact-logo" />
          <img src="/logos/siil_black_border.png" alt="SIIL logo" class="contact-logo" />
        </div>

        <p class="contact-org">
          The iShack Project, a project of The Sustainability Institute Innovation Lab (Pty) Ltd
        </p>

        <div class="contact-methods" aria-label="Contact options">
          <a class="contact-method" href="mailto:damian@ishackproject.org.za">
            <span class="contact-method-label">Contact</span>
            <span class="contact-method-value">damian@ishackproject.org.za</span>
          </a>
          <a class="contact-method" href="tel:+27718371370">
            <span class="contact-method-label">iShack Customer Hotline</span>
            <span class="contact-method-value">+27 71 837 1370</span>
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
