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

		<section class="project-list" aria-label="Projects">

			<article class="project-card" id="free-basic-solar">
				<h2 class="project-title">Free Basic Solar</h2>
				<p class="project-tagline"><em>Capital grant + municipal operations subsidy</em></p>
				<img src="/free_basic_solar.png" alt="Free Basic Solar project" class="project-image-float" />
				<h3 class="project-subheader project-subheader-lead">The demonstration</h3>
						<p>
							From 2013 to 2022, the iShack Project delivered free solar electricity to over 2,000
							households in an informal settlement in Stellenbosch, while the community waited for
							grid-electrification from the municipality. It remains our largest demonstration to date. As
							in all of our projects, the level of energy utility is modest: safe lighting, media access,
							and cell-phone charging. But we know from feedback and observation that even this modest
							intervention significantly improves the quality and safety of home life for our clients.
						</p>

						<h4 class="project-subheader">The financial model</h4>
						<p>
							Two funding streams made it work. The DBSA Green Fund provided a capital grant covering
							system procurement. Stellenbosch Municipality covered ongoing operations through a service
							contract - funded by a critical policy innovation: the municipality amended its indigent
							policy so that households not yet connected to the grid could receive their Free Basic
							Electricity entitlement as a rand-equivalent contribution towards a solar service. The
							municipality then put the service out to tender, which iShack bid for and won.
						</p>
						<p>
							Households paid a once-off joining fee toward installation costs, signed a service
							agreement, and received free use of a Solar Home System - enough low-voltage power for
							indoor and outdoor lighting, cell-phone charging, and small media devices (TV, radio,
							tablet). The service was sustained for nine years until the community finally received
							grid-electrification.
						</p>

						<h4 class="project-subheader">What we built - and why it mattered</h4>
						<p>
							Rather than treating this as a short-term infrastructure rollout, we operated it as a more
							sustainable customer-oriented energy utility: we trained community members as iShack
							Agents who handled marking and sign-ups, installations, and long-term maintenance. We
							also developed a range of customer-management and support-systems and resources to
							maintain a consistent service.
						</p>
						<p>
							That service-oriented approach - the systems, processes, the training, the continuous
							learning culture - has carried forward into every subsequent iShack model.
						</p>

						<h4 class="project-subheader">How can this be replicated and scaled (and should it)?</h4>
						<p>
							South Africa's Integrated National Electrification Programme (INEP) already provides
							capital funding for off-grid electrification. This funding has historically focused on
							rural areas, but more recently INEP have undertaken to include urban communities that
							cannot be cost-effectively grid-connected in the near-term. Where INEP or equivalent
							capital funding is available, it significantly improves financial viability.
						</p>
						<p>
							But capital grants are not the only route; a meaningful monthly contribution drawn from
							the state-funding for Free Basic Services (ie the Equitable Share), combined with
							affordable household co-payments, could be sufficient to roll out and sustain solar energy
							services in dense informal settlements - without an upfront capital grant.
						</p>
						<p>
							There is a practical argument for pursuing this funding-light approach: communities that
							receive capital grants for solar electrification risk being deemed already served and
							subsequently deprioritised for full grid connection. Structuring the model around
							operational subsidies rather than capital grants avoids that trap, keeping households'
							long-term claim to grid electrification intact. See, for example, our latest Basic Solar
							Grant Project.
						</p>
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
