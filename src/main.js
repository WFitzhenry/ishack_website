import "./style.css";
import { backup, loadContent } from "./content.js";

// ─── Gallery (static — not fetched from sheets) ───────────────────────────────
const galleryImagePaths = [
  "/gallery/16830825_1335260843179057_5815938147259595472_n-e1495618706145.jpg",
  "/gallery/16864557_1335264806511994_4520337763227590307_n.jpg",
  "/gallery/17308956_1359351370770004_3599088534831183593_n-e1504018584385.jpg",
  "/gallery/20161223_133907-e1494520925564.jpg",
  "/gallery/20170315_144748-1024x576.jpg",
  "/gallery/20170629_140327-1024x768.jpg",
  "/gallery/20170629_1443140-830x1107.jpg",
  "/gallery/20727915_1522896714415468_6609829395886799918_n.jpg",
  "/gallery/DSC03550-1024x682.jpg",
  "/gallery/DSC_0242-1024x683.jpg",
  "/gallery/FF-Panel-on-Roof-1024x768.jpg",
  "/gallery/FF-installations1.jpg",
  "/gallery/FF_MC-TV-client.jpg",
  "/gallery/IMG-20170406-WA0001.jpg",
  "/gallery/IMG-20210415-WA0001.jpg",
  "/gallery/IMG-20210415-WA0003.jpg",
  "/gallery/IMG-20210415-WA0004-1024x768.jpg",
  "/gallery/IMG_20170503_120420836_HDR-1.jpg",
  "/gallery/IMG_20170503_123744665_HDR-e1495363193859-1024x706.jpg",
  "/gallery/IMG_20170503_130559838_HDR-e1495363025889-1024x664.jpg",
  "/gallery/IMG_20170510_143250-e1495544891728.jpg",
  "/gallery/IMG_20170517_131535-1-1024x575.jpg",
  "/gallery/IMG_20170818_103313.jpg",
  "/gallery/IMG_20170818_103950.jpg",
  "/gallery/IMG_20170818_114724.jpg",
  "/gallery/IMG_20170818_151145.jpg",
  "/gallery/IMG_20210220_112710_resized_20210422_120920316-1024x768.jpg",
  "/gallery/IMG_20210220_122739_resized_20210412_071741954-1024x768.jpg",
  "/gallery/IMG_3774-e1495544946962.jpg",
  "/gallery/MC-TV-contract-checks1-1024x768.jpg",
  "/gallery/MC-TV-contract-checks2-1024x768.jpg",
  "/gallery/MC-TV-contract-checks6-1024x768.jpg",
  "/gallery/MC-TV-contract-checks7-1024x768.jpg",
  "/gallery/leader-workshop-1-1024x768.jpg",
  "/gallery/longlands1.jpg",
  "/gallery/longlands2-e1554044621520.jpg",
  "/gallery/longlands3-1024x681.jpg",
  "/gallery/longlands5-1024x681.jpg",
  "/gallery/longlands6.jpg",
];

const galleryItemsMarkup = galleryImagePaths
  .map(
    (imagePath, index) =>
      `<img src="${imagePath}" alt="iShack gallery image ${index + 1}" class="gallery-image" loading="lazy" />`,
  )
  .join("");

const currentYear = new Date().getFullYear();

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Splits a value on newlines and wraps each non-empty line in a <p> tag.
// Values may contain inline HTML (e.g. <a>, <em>).
function paras(text = "") {
  return text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => `<p>${line.trim()}</p>`)
    .join("");
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderMain(c) {
  const lc = c.landing;
  const p1 = c.project1;
  const p2 = c.project2;
  const p3 = c.project3;
  const p4 = c.project4;

  // Build the benefits list dynamically from numbered benefit_N_label/body keys
  let benefitItems = "";
  let bi = 1;
  while (p4[`benefit_${bi}_label`]) {
    benefitItems += `<li><strong>${p4[`benefit_${bi}_label`]}:</strong> ${p4[`benefit_${bi}_body`]}</li>`;
    bi++;
  }

  document.querySelector("#app").innerHTML = `
	<header class="site-header">
		<nav class="site-nav" aria-label="Main navigation">
			<a class="logo-link" href="#top" aria-label="iShack home">
				<img src="/logos/ishack_logo.png" alt="iShack" class="logo" />
			</a>

			<div class="menu-right">
				<details class="projects-menu">
					<summary>Projects</summary>
					<ul class="dropdown-list" aria-label="Project links">
						<li><a href="#free-basic-solar">${p1.title}</a></li>
						<li><a href="#subsidised-rent-to-own">${p2.title}</a></li>
						<li><a href="#un-subsidised-help-to-buy">${p3.title}</a></li>
						<li><a href="#basic-solar-grant">${p4.title}</a></li>
						<li><a href="#gallery">Gallery</a></li>
					</ul>
				</details>
				<a class="menu-link" href="/contact.html">Contact</a>
			</div>
		</nav>
	</header>

	<main>
		<section class="landing" id="top" aria-labelledby="landing-title">
			<div class="landing-left">
				<h1 id="landing-title">${lc.hero_title}</h1>
				<h2 class="landing-subtitle"><em>${lc.hero_subtitle}</em></h2>
				<p>${lc.hero_body_1}</p>
				<p class="landing-emphasis"><strong>${lc.hero_emphasis}</strong></p>
				<p>${lc.hero_body_2}</p>
				<p>${lc.hero_body_3}</p>
			</div>
			<div class="landing-right">
				<img src="/Girl_with_light.jpg" alt="Illuminated lightbulb" class="landing-image" />
			</div>
		</section>

		<section class="project-list" aria-label="Projects">

			<article class="project-card" id="free-basic-solar">
				<h2 class="project-title">${p1.title}</h2>
				<p class="project-tagline"><em>${p1.tagline}</em></p>
				${p1.image_src ? `<img src="${p1.image_src}" alt="${p1.image_alt}" class="project-image-float" />` : ""}
				<h3 class="project-subheader project-subheader-lead">${p1.s1_head}</h3>
				${paras(p1.s1_body)}
				<h4 class="project-subheader">${p1.s2_head}</h4>
				${paras(p1.s2_body)}
				<h4 class="project-subheader">${p1.s3_head}</h4>
				${paras(p1.s3_body)}
				<h4 class="project-subheader">${p1.s4_head}</h4>
				${paras(p1.s4_body)}
			</article>

			<article class="project-card" id="subsidised-rent-to-own">
				<h2 class="project-title">${p2.title}</h2>
				<p class="project-tagline"><em>${p2.tagline}</em></p>
				${p2.image_src ? `<img src="${p2.image_src}" alt="${p2.image_alt}" class="project-image-float project-image-centered" />` : ""}
				<h3 class="project-subheader project-subheader-lead">${p2.s1_head}</h3>
				${paras(p2.s1_body)}
				<h4 class="project-subheader">${p2.s2_head}</h4>
				${paras(p2.s2_body)}
				<h4 class="project-subheader">${p2.s3_head}</h4>
				${paras(p2.s3_body)}
			</article>

			<article class="project-card" id="un-subsidised-help-to-buy">
				<h2 class="project-title">${p3.title}</h2>
				<p class="project-tagline"><em>${p3.tagline}</em></p>
				<h3 class="project-subheader project-subheader-lead">${p3.s1_head}</h3>
				${paras(p3.s1_body)}
				<h4 class="project-subheader">${p3.s2_head}</h4>
				${paras(p3.s2_body)}
				<h4 class="project-subheader">${p3.s3_head}</h4>
				${paras(p3.s3_body)}
				<h4 class="project-subheader comparison-title">${p3.comparison_head}</h4>
				<div class="project-comparison-grid" aria-label="Subsidised and unsubsidised comparison">
					<figure class="comparison-item">
						<img src="${p3.comp_img_1_src}" alt="${p3.comp_img_1_alt}" class="comparison-image" />
						<figcaption>${p3.comp_img_1_caption}</figcaption>
					</figure>
					<figure class="comparison-item">
						<img src="${p3.comp_img_2_src}" alt="${p3.comp_img_2_alt}" class="comparison-image" />
						<figcaption>${p3.comp_img_2_caption}</figcaption>
					</figure>
				</div>
				<h4 class="project-subheader">${p3.s4_head}</h4>
				${paras(p3.s4_body)}
			</article>

			<article class="project-card" id="basic-solar-grant">
				<h2 class="project-title">${p4.title}</h2>
				<p class="project-tagline"><em>${p4.tagline}</em></p>
				<h3 class="project-subheader project-subheader-lead">${p4.s1_head}</h3>
				${paras(p4.s1_body)}
				<h4 class="project-subheader">${p4.s2_head}</h4>
				${paras(p4.s2_body)}
				<h4 class="project-subheader">${p4.s3_head}</h4>
				${paras(p4.s3_body)}
				<ul class="project-benefits">
					${benefitItems}
				</ul>
				<p>${p4.s3_post}</p>
				<h4 class="project-subheader">${p4.s4_head}</h4>
				${paras(p4.s4_body)}
			</article>

		</section>

		<section class="gallery-section" id="gallery" aria-labelledby="gallery-title">
			<article class="project-card">
				<h2 class="project-title" id="gallery-title">Gallery</h2>
				<div class="gallery-mosaic" aria-label="Project image gallery">
					${galleryItemsMarkup}
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

// ─── Nav menu listeners ───────────────────────────────────────────────────────
// Re-attached after each render since the DOM elements are replaced.
// The document-level click handler is set once at module load (below).

let _closeMenuTimeout;

function attachMenuListeners() {
  const projectsMenu = document.querySelector(".projects-menu");
  const projectsSummary = projectsMenu?.querySelector("summary");
  const navLinks = document.querySelectorAll(".site-nav a");

  projectsSummary?.addEventListener("click", (event) => {
    // Override native details toggle so click/tap behavior is consistent with hover logic.
    event.preventDefault();
    clearTimeout(_closeMenuTimeout);
    if (projectsMenu.hasAttribute("open")) {
      projectsMenu.removeAttribute("open");
    } else {
      projectsMenu.setAttribute("open", "");
    }
  });

  projectsMenu?.addEventListener("mouseenter", () => {
    clearTimeout(_closeMenuTimeout);
    projectsMenu.setAttribute("open", "");
  });

  projectsMenu?.addEventListener("mouseleave", () => {
    _closeMenuTimeout = setTimeout(
      () => projectsMenu.removeAttribute("open"),
      220,
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      clearTimeout(_closeMenuTimeout);
      projectsMenu?.removeAttribute("open");
    });
  });
}

// Document-level click closes the menu; attached once, queries the menu at call time.
document.addEventListener("click", (event) => {
  const projectsMenu = document.querySelector(".projects-menu");
  if (projectsMenu && !projectsMenu.contains(event.target)) {
    clearTimeout(_closeMenuTimeout);
    projectsMenu.removeAttribute("open");
  }
});

// ─── Boot ─────────────────────────────────────────────────────────────────────

// Render immediately with backup content — zero loading delay.
renderMain(backup);
attachMenuListeners();

// Fetch live content from Google Sheets and re-render if successful.
loadContent()
  .then((live) => {
    renderMain(live);
    attachMenuListeners();
  })
  .catch(() => {
    // Backup content is already rendered — nothing to do.
  });
