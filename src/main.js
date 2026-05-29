import "./style.css";

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
						<li><a href="#free-basic-solar">Free Basic Solar</a></li>
						<li><a href="#subsidised-rent-to-own">Subsidised Rent-To-Own</a></li>
						<li><a href="#un-subsidised-help-to-buy">Un-subsided Help-To-Buy</a></li>
						<li><a href="#basic-solar-grant">Basic Solar Grant</a></li>
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
							long-term claim to grid electrification intact. See, for example, our latest
							<a href="#basic-solar-grant" class="inline-project-link">Basic Solar Grant</a> Project.
						</p>
			</article>

			<article class="project-card" id="subsidised-rent-to-own">
				<h2 class="project-title">Subsidised "Rent-to-Own" Solar</h2>
				<p class="project-tagline"><em>Once-off Capital Grant + voluntary household co-payments</em></p>
				<img src="/rent_to_own.png" alt="Subsidised Rent-To-Own Solar project" class="project-image-float project-image-centered" />

				<h3 class="project-subheader project-subheader-lead">The demonstration</h3>
				<p>
					Using a capital grant from the Airports Company of South Africa (ACSA), iShack was
					contracted to deliver Solar Home Systems to 635 households across two informal
					settlements on the boundary of Cape Town International Airport. This was intended as a
					temporary energy service pending formal rehousing within three years.
				</p>

				<h4 class="project-subheader">The financial model</h4>
				<p>
					ACSA's grant covered the initial hardware and installation costs. Households agreed to
					make small voluntary co-payments over two years to cover the remaining running costs -
					and at the end of that period, they would own their systems outright. No municipal
					maintenance subsidy was involved, and so covering the running costs was challenging.
				</p>
				<p>
					Because co-payments were voluntary, the model was very dependent on community buy-in to
					ensure payment compliance. iShack worked closely with community leaders to promote
					uptake, explain the terms, and encourage compliance. This was a significantly deeper
					community engagement process than in our fully subsidised Stellenbosch project. Despite
					the more challenging financials we were determined to run the project (as in all our
					other projects) as a sustainable service to ensure adequate and ongoing maintenance
					capacity. We recruited and trained local iShack Agents to assist with contracting,
					installations, and ongoing customer support.
				</p>

				<h4 class="project-subheader">What happened</h4>
				<p>
					Although the promised formal housing for the two communities was supposed to be made
					available in 2023, this had unfortunately not yet materialised by 2026, and so we have
					continued to provide on-site maintenance support, as best we can, in both communities.
					This experience illustrates the pitfalls of once-off grants for temporary energy-poverty
					relief, when "temporary" ends up becoming indefinite.
				</p>
			</article>

			<article class="project-card" id="un-subsidised-help-to-buy">
				<h2 class="project-title">Unsubsidised Help-to-Buy Solar</h2>
				<p class="project-tagline"><em>Household payments only</em></p>

				<h3 class="project-subheader project-subheader-lead">The demonstration</h3>
				<p>
					In July 2017, at the request of community leaders in an unelectrified settlement in
					Philippi, Cape Town, iShack launched a "Help-to-Buy" pilot in which households could pay
					off the cost of a Solar Home System - with compatible appliances - over two to three
					years, with no grant or municipal subsidy. More than seven years later, the offer has
					expanded to six additional communities across Cape Town and Stellenbosch, serving over
					450 households.
				</p>

				<h4 class="project-subheader">The financial model</h4>
				<p>
					Households pay the full cost of their systems through monthly payments, with pricing
					kept as low as operationally sustainable. As in other iShack projects, the service is
					run as a utility - with "Solar Ambassadors" recruited from the communities to assist
					with various aspects of the operation. Sustaining this utility-model across a widening
					geographic footprint has been demanding.
				</p>
				<p>
					Community buy-in has been central to each new site: we engage community leaders before
					launch, enlisting them to introduce and explain the offer within their communities -
					establishing a shared understanding that the sustainability of the service, and its
					expansion to new households, depends on collective commitment.
				</p>

				<h4 class="project-subheader">What the evidence shows</h4>
				<p>
					Despite sustained efforts to keep prices low and maintain service quality, take-up has
					remained modest across all sites. The conclusion is clear: unsubsidised Solar Home
					Systems are unaffordable for the majority of households in informal settlements. A grant
					or subsidy is not a nice-to-have - it is the difference between a service that can
					universally reach the most energy poor households and one that can't.
				</p>

				<h4 class="project-subheader comparison-title">
					Off-grid solar for unelectrified informal settlements<br />
					Can "the market" solve for access?
				</h4>
				<div class="project-comparison-grid" aria-label="Subsidised and unsubsidised comparison">
					<figure class="comparison-item">
						<img src="/fully_subsidised.png" alt="Fully subsidised off-grid solar comparison" class="comparison-image" />
						<figcaption>Fully Subsidised (Stellenbosch)</figcaption>
					</figure>
					<figure class="comparison-item">
						<img src="/unsubsidised.png" alt="Completely unsubsidised off-grid solar comparison" class="comparison-image" />
						<figcaption>Completely <em>Un</em>-subsidised (Cape Town)</figcaption>
					</figure>
				</div>

				<h4 class="project-subheader">What came next</h4>
				<p>
					In 2018, community leaders from the original Philippi settlement organised a petition -
					with 1,800 signatures - calling on the City of Cape Town to introduce a solar subsidy
					for unelectrified households. It was submitted directly to the Mayor.
				</p>
				<p>
					The City has subsequently committed, in its Cape Town 2050 Energy Strategy, to
					introduce a Free Basic Alternative Energy (FBAE) Grant for unelectrified households -
					drawing on the "free basic services" funding already allocated to municipalities. While
					the implementation plan is being developed, iShack has launched a funded pilot to
					demonstrate how such a grant could work in practice. See:
					<a href="#basic-solar-grant" class="inline-project-link">Basic Solar Grant</a> Project.
				</p>
			</article>

			<article class="project-card" id="basic-solar-grant">
				<h2 class="project-title">Basic Solar Grant</h2>
				<p class="project-tagline"><em>Demand-side household grant + household co-payments</em></p>

				<h3 class="project-subheader project-subheader-lead">The demonstration</h3>
				<p>
					Building on evidence from our
					<a href="#un-subsidised-help-to-buy" class="inline-project-link">Help to Buy pilot</a>
					- which clearly showed that
					unsubsidised Solar Home Systems remain out of reach for most informal settlement
					households - iShack, together with two partners, has launched a new "Basic Solar Grant"
					(BSG) pilot to demonstrate how a modest monthly energy grant can transform
					affordability and take-up.
				</p>
				<p>
					With funding from international development partners, participating households receive a
					grant that reduces the cost, by approximately 70%, of a Solar Home System. The pilot is
					currently active across four communities, with a target of 1,000 households served.
					Early results already show that take-up rates have risen sharply.
				</p>
				<p>
					The pilot is designed to generate robust evidence in direct support of the City of Cape
					Town's Free Basic Alternative Energy (FBAE) Grant for unelectrified households.
				</p>

				<h4 class="project-subheader">The financial model</h4>
				<p>
					Participating households receive a substantial monthly grant toward the cost of their
					Solar Home System, with a small co-payment covering the remainder. This co-payment
					reflects a practical constraint: the funding for this project is not sufficient to provide
					a truly "free basic" service. That gap is itself an important finding; our modelling and
					on-the-ground experience suggest that a sufficiently resourced municipal grant - drawn
					from the Equitable Share - could eliminate monthly co-payments entirely, making the
					basic service universally accessible (in line with South Africa's existing policy
					commitments for energy-poverty relief). In other words, the funding mechanism already
					exists in principle; what is needed is the policy decision to direct it (firstly) towards
					unelectrified households.
				</p>

				<h4 class="project-subheader">Why this model matters</h4>
				<p>
					South Africa's current energy-subsidy framework contains a structural inequity: indigent
					households connected to the grid receive Free Basic Electricity as a matter of course,
					while households in unelectrified informal settlements (who are arguably the most energy
					poor) receive no equivalent relief - often for decades. A Basic Energy Grant corrects
					this imbalance without necessarily requiring new state funding streams. It simply
					redirects a portion of existing subsidy flows to those in the most acute energy poverty.
				</p>
				<p>
					Critically, a household-level grant does more than just close the gap. By placing
					purchasing power with the household rather than defaulting to top-down municipal
					procurement, it has the following additional benefits:
				</p>
				<ul class="project-benefits">
					<li>
						<strong>Market activation:</strong> Stimulates competition among energy service providers,
						driving down costs and improving quality.
					</li>
					<li>
						<strong>Genuine household choice:</strong> Gives households agency - encouraging active
						opt-in rather than passive receipt of a uniform interim service.
					</li>
					<li>
						<strong>Reduces illegal/informal connections:</strong> Households with access to a legal,
						affordable alternative have less reason to rely on hazardous unregulated connections to
						nearby grid infrastructure.
					</li>
					<li>
						<strong>Activates engaged citizenship:</strong> Creates a structured relationship and mutual
						understanding between households and the municipality around eligibility, compliance,
						and co-payments - building the foundations of a social contract.
					</li>
					<li>
						<strong>Supports municipal planning:</strong> Generates trackable, household-level data that
						strengthens municipal planning capacity.
					</li>
					<li>
						<strong>Builds community trust and reciprocity:</strong> Strengthens community goodwill or
						"buy-in" that can safeguard and accelerate future infrastructure investments.
					</li>
					<li>
						<strong>Working with informality, not against it:</strong> Informal settlements are not simply
						problems waiting to be solved. They contain dense social networks, active informal
						economies, and a ready pool of flexible, entrepreneurial labour. A household energy
						grant is especially well-suited to these conditions: it creates immediate local demand
						for services such as solar installations, maintenance, and customer support - functions
						that community members can fill with the appropriate support and training. Rather than
						imposing a standardised external service on a complex social environment, the grant
						model creates space for locally rooted enterprise and employment to emerge organically.
					</li>
				</ul>
				<p>
					Far from being a distraction from full electrification, an energy grant creates the
					social, economic, and institutional conditions that make eventual grid roll-out faster,
					more efficient, more broadly understood as "shared infrastructure".
				</p>

				<h4 class="project-subheader">How this can be replicated and scaled</h4>
				<p>
					Other than a (long over-due) review of the existing FBAE (2005) and FBE (2003)
					Policies, an FBAE-inspired grant requires no new legislation and no new funding lines.
					South Africa's Equitable Share (distributed from national treasury to local government on
					a household count-basis) already allocates funds to municipalities for free basic
					services. Municipalities have considerable discretion in how to spend this money. So what
					is required is a municipal policy decision, backed up by political will to extend that
					entitlement to unelectrified households in the form of a portable, demand-side energy
					grant.
				</p>
				<p>
					Our Basic Solar Grant pilot is designed to provide local government with some of the
					evidence to make that decision with more confidence and urgency.
				</p>
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

const projectsMenu = document.querySelector(".projects-menu");
const projectsSummary = projectsMenu?.querySelector("summary");
const navLinks = document.querySelectorAll(".site-nav a");
let closeMenuTimeout;

projectsSummary?.addEventListener("click", (event) => {
  // Override native details toggle so click/tap behavior is consistent with hover logic.
  event.preventDefault();

  if (closeMenuTimeout) {
    clearTimeout(closeMenuTimeout);
  }

  if (projectsMenu?.hasAttribute("open")) {
    projectsMenu.removeAttribute("open");
  } else {
    projectsMenu?.setAttribute("open", "");
  }
});

projectsMenu?.addEventListener("mouseenter", () => {
  if (closeMenuTimeout) {
    clearTimeout(closeMenuTimeout);
  }
  projectsMenu.setAttribute("open", "");
});

projectsMenu?.addEventListener("mouseleave", () => {
  closeMenuTimeout = setTimeout(() => {
    projectsMenu.removeAttribute("open");
  }, 220);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (closeMenuTimeout) {
      clearTimeout(closeMenuTimeout);
    }
    projectsMenu?.removeAttribute("open");
  });
});

document.addEventListener("click", (event) => {
  if (!projectsMenu?.contains(event.target)) {
    if (closeMenuTimeout) {
      clearTimeout(closeMenuTimeout);
    }
    projectsMenu?.removeAttribute("open");
  }
});
