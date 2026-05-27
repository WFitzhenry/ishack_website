import "./style.css";

document.querySelector("#app").innerHTML = `
	<header class="site-header">
		<nav class="site-nav" aria-label="Main navigation">
			<a class="logo-link" href="#top" aria-label="iShack home">
				<img src="/ishack_logo.png" alt="iShack" class="logo" />
			</a>

			<div class="menu-right">
				<details class="projects-menu">
					<summary>Projects</summary>
					<ul class="dropdown-list" aria-label="Project links">
						<li><a href="#free-basic-solar">Free Basic Solar</a></li>
						<li><a href="#subsidised-rent-to-own">Subsidised Rent-To-Own</a></li>
						<li><a href="#un-subsidised-help-to-buy">Un-subsided Help-To-Buy</a></li>
						<li><a href="#basic-solar-grant">Basic Solar Grant</a></li>
					</ul>
				</details>
				<a class="menu-link" href="#contact">Contact</a>
			</div>
		</nav>
	</header>

	<main>
		<section class="landing" id="top" aria-labelledby="landing-title">
			<div class="landing-left">
				<h1 id="landing-title">Solar electricity for households</h1>
				<h2 class="landing-subtitle"><em>...still waiting for the grid</em></h2>
				<p>
					South Africa's post-apartheid dispensation established (in law and policy) a clear commitment:
					indigent households are entitled to free basic services, including energy. Yet for the
					millions of families living in unelectrified informal settlements:
				</p>
				<p class="landing-emphasis">
					<strong>no grid connection = no free basic electricity/energy.</strong>
				</p>
				<p>
					Recognising that a growing number of households continue to wait for a grid connection -
					often for decades - the iShack Project was founded to show how that gap could be closed.
					Working directly with local government and informal settlement communities, we have
					developed and tested a wide range of ideas in pursuit of viable delivery-models that can
					be scaled to provide affordable (and preferably free) basic solar electricity to households
					while they wait for the grid.
				</p>
				<p>
					Below you will find short summaries of the main models that we have trialled - what they
					looked like in practice, what worked, what we learned, and what it would take for local
					government to adopt or support them at scale - apart, of course, from political will!
				</p>
			</div>
			<div class="landing-right">
				<img src="/ishack_lightbulb.png" alt="Illuminated lightbulb" class="landing-image" />
			</div>
		</section>

		<section class="projects-section" aria-labelledby="projects-title">
			<h2 id="projects-title">Projects</h2>

			<article class="project-card" id="free-basic-solar">
				<h3>Free Basic Solar</h3>
			</article>

			<article class="project-card" id="subsidised-rent-to-own">
				<h3>Subsidised Rent-To-Own</h3>
			</article>

			<article class="project-card" id="un-subsidised-help-to-buy">
				<h3>Un-subsided Help-To-Buy</h3>
			</article>

			<article class="project-card" id="basic-solar-grant">
				<h3>Basic Solar Grant</h3>
			</article>
		</section>

		<section class="contact-section" id="contact" aria-labelledby="contact-title">
			<h2 id="contact-title">Contact</h2>
		</section>
	</main>
`;

const projectsMenu = document.querySelector(".projects-menu");

document.addEventListener("click", (event) => {
  if (!projectsMenu?.contains(event.target)) {
    projectsMenu?.removeAttribute("open");
  }
});
