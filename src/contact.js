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
        <div class="contact-logo-row" aria-label="Partner logos">
          <img src="/logos/ishack_logo.png" alt="iShack logo" class="contact-logo" />
          <img src="/logos/isolar_logo.png" alt="iSolar logo" class="contact-logo" />
          <img src="/logos/siil_logo.png" alt="SIIL logo" class="contact-logo" />
        </div>
        <p>
          The iShack Project, a project of The Sustainability Institute Innovation Lab (Pty) Ltd
        </p>
        <p>
          <strong>Contact:</strong>
          <a class="menu-link" href="mailto:damian@ishackproject.org.za">damian@ishackproject.org.za</a>
        </p>
        <p>
          <strong>iShack Customer Hotline:</strong> +27 71 837 1370
        </p>
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
