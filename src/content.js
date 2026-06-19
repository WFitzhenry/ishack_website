// ─── Configuration ───────────────────────────────────────────────────────────
// Replace with your Google Spreadsheet ID
// (found in the sheet URL: .../spreadsheets/d/SPREADSHEET_ID/edit)
export const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;

if (!SPREADSHEET_ID) {
  console.warn("Missing VITE_GOOGLE_SHEET_ID. Falling back to backup content.");
}

const SHEETS = {
  landing: "Landing",
  project1: "FreeBasicSolar",
  project2: "RentToOwn",
  project3: "HelpToBuy",
  project4: "BasicSolarGrant",
  contact: "Contact",
};

// ─── CSV Parser ───────────────────────────────────────────────────────────────
// Parses a two-column (key, value) CSV exported by Google Sheets into a plain object.
// Handles quoted fields, escaped double-quotes, and newlines within cells.
function parseCSV(text) {
  const map = {};
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      cell = "";
      if (row.length >= 2 && row[0].trim()) map[row[0].trim()] = row[1] ?? "";
      row = [];
    } else {
      cell += ch;
    }
  }
  // Handle final row without trailing newline
  if (cell || row.length) {
    row.push(cell);
    if (row.length >= 2 && row[0].trim()) map[row[0].trim()] = row[1] ?? "";
  }
  return map;
}

// ─── Fetch ────────────────────────────────────────────────────────────────────
async function fetchSheet(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet "${sheetName}" responded ${res.status}`);
  return parseCSV(await res.text());
}

// Fetches all sheets in parallel. Falls back to the corresponding backup section
// for any sheet that fails, so a partial outage degrades gracefully.
export async function loadContent() {
  const results = await Promise.allSettled(
    Object.entries(SHEETS).map(([key, name]) =>
      fetchSheet(name).then((data) => [key, data]),
    ),
  );
  const content = {};
  for (const r of results) {
    if (r.status === "fulfilled") {
      const [key, data] = r.value;
      content[key] = data;
    }
  }
  // Live data takes precedence; backup fills any missing or failed sections
  return { ...backup, ...content };
}

// ─── Backup Content ───────────────────────────────────────────────────────────
// Mirrors the current hardcoded content. Rendered immediately on page load
// to avoid any delay, then replaced by live sheet data when the fetch resolves.
//
// Multi-paragraph values use \n as the paragraph separator — the paras()
// helper in main.js splits on \n and wraps each line in <p>.
// Values may contain basic inline HTML (e.g. <a>, <em>, <strong>).
export const backup = {
  landing: {
    hero_title: "Solar electricity for households",
    hero_subtitle: "...still waiting for the grid",
    hero_body_1: `South Africa's post-apartheid dispensation established (in law and policy) a clear commitment: indigent households are entitled to free basic services, including energy. Yet for the millions of families living in unelectrified informal settlements:`,
    hero_emphasis: "no grid connection = no free basic electricity/energy.",
    hero_body_2: `Recognising that a growing number of households continue to wait for a grid connection - often for decades - the iShack Project was founded to show how that gap could be closed. Working directly with local government and informal settlement communities, we have developed and tested a wide range of ideas in pursuit of viable delivery-models that can be scaled to provide affordable (and preferably free) basic solar electricity to households while they wait for the grid.`,
    hero_body_3: `Below you will find short summaries of the main models that we have trialled - what they looked like in practice, what worked, what we learned, and what it would take for local government to adopt or support them at scale - apart, of course, from political will!`,
  },

  project1: {
    title: "Free Basic Solar",
    tagline: "Capital grant + municipal operations subsidy",
    image_src: "/free_basic_solar.png",
    image_alt: "Free Basic Solar project",
    s1_head: "The demonstration",
    s1_body: `From 2013 to 2022, the iShack Project delivered free solar electricity to over 2,000 households in an informal settlement in Stellenbosch, while the community waited for grid-electrification from the municipality. It remains our largest demonstration to date. As in all of our projects, the level of energy utility is modest: safe lighting, media access, and cell-phone charging. But we know from feedback and observation that even this modest intervention significantly improves the quality and safety of home life for our clients.`,
    s2_head: "The financial model",
    s2_body: `Two funding streams made it work. The DBSA Green Fund provided a capital grant covering system procurement. Stellenbosch Municipality covered ongoing operations through a service contract - funded by a critical policy innovation: the municipality amended its indigent policy so that households not yet connected to the grid could receive their Free Basic Electricity entitlement as a rand-equivalent contribution towards a solar service. The municipality then put the service out to tender, which iShack bid for and won.\nHouseholds paid a once-off joining fee toward installation costs, signed a service agreement, and received free use of a Solar Home System - enough low-voltage power for indoor and outdoor lighting, cell-phone charging, and small media devices (TV, radio, tablet). The service was sustained for nine years until the community finally received grid-electrification.`,
    s3_head: "What we built — and why it mattered",
    s3_body: `Rather than treating this as a short-term infrastructure rollout, we operated it as a more sustainable customer-oriented energy utility: we trained community members as iShack Agents who handled marketing and sign-ups, installations, and long-term maintenance. We also developed a range of customer-management and support-systems and resources to maintain a consistent service.\nThat service-oriented approach - the systems, processes, the training, the continuous learning culture - has carried forward into every subsequent iShack model.`,
    s4_head: "How can this be replicated and scaled (and should it)?",
    s4_body: `South Africa's Integrated National Electrification Programme (INEP) already provides capital funding for off-grid electrification. This funding has historically focused on rural areas, but more recently INEP have undertaken to include urban communities that cannot be cost-effectively grid-connected in the near-term. Where INEP or equivalent capital funding is available, it significantly improves financial viability.\nBut capital grants are not the only route; a meaningful monthly contribution drawn from the state-funding for Free Basic Services (ie the Equitable Share), combined with affordable household co-payments, could be sufficient to roll out and sustain solar energy services in dense informal settlements - without an upfront capital grant.\nThere is a practical argument for pursuing this funding-light approach: communities that receive capital grants for solar electrification risk being deemed already served and subsequently deprioritised for full grid connection. Structuring the model around operational subsidies rather than capital grants avoids that trap, keeping households' long-term claim to grid electrification intact. See, for example, our latest <a href="#basic-solar-grant" class="inline-project-link">Basic Solar Grant</a> Project.`,
  },

  project2: {
    title: `Subsidised "Rent-to-Own" Solar`,
    tagline: "Once-off Capital Grant + voluntary household co-payments",
    image_src: "/rent_to_own.png",
    image_alt: "Subsidised Rent-To-Own Solar project",
    s1_head: "The demonstration",
    s1_body: `Using a capital grant from the Airports Company of South Africa (ACSA), iShack was contracted to deliver Solar Home Systems to 635 households across two informal settlements on the boundary of Cape Town International Airport. This was intended as a temporary energy service pending formal rehousing within three years.`,
    s2_head: "The financial model",
    s2_body: `ACSA's grant covered the initial hardware and installation costs. Households agreed to make small voluntary co-payments over two years to cover the remaining running costs - and at the end of that period, they would own their systems outright. No municipal maintenance subsidy was involved, and so covering the running costs was challenging.\nBecause co-payments were voluntary, the model was very dependent on community buy-in to ensure payment compliance. iShack worked closely with community leaders to promote uptake, explain the terms, and encourage compliance. This was a significantly deeper community engagement process than in our fully subsidised Stellenbosch project. Despite the more challenging financials we were determined to run the project (as in all our other projects) as a sustainable service to ensure adequate and ongoing maintenance capacity. We recruited and trained local iShack Agents to assist with contracting, installations, and ongoing customer support.`,
    s3_head: "What happened",
    s3_body: `Although the promised formal housing for the two communities was supposed to be made available in 2023, this had unfortunately not yet materialised by 2026, and so we have continued to provide on-site maintenance support, as best we can, in both communities. This experience illustrates the pitfalls of once-off grants for temporary energy-poverty relief, when "temporary" ends up becoming indefinite.`,
  },

  project3: {
    title: "Unsubsidised Help-to-Buy Solar",
    tagline: "Household payments only",
    s1_head: "The demonstration",
    s1_body: `In July 2017, at the request of community leaders in an unelectrified settlement in Philippi, Cape Town, iShack launched a "Help-to-Buy" pilot in which households could pay off the cost of a Solar Home System - with compatible appliances - over two to three years, with no grant or municipal subsidy. More than seven years later, the offer has expanded to six additional communities across Cape Town and Stellenbosch, serving over 450 households.`,
    s2_head: "The financial model",
    s2_body: `Households pay the full cost of their systems through monthly payments, with pricing kept as low as operationally sustainable. As in other iShack projects, the service is run as a utility - with "Solar Ambassadors" recruited from the communities to assist with various aspects of the operation. Sustaining this utility-model across a widening geographic footprint has been demanding.\nCommunity buy-in has been central to each new site: we engage community leaders before launch, enlisting them to introduce and explain the offer within their communities - establishing a shared understanding that the sustainability of the service, and its expansion to new households, depends on collective commitment.`,
    s3_head: "What the evidence shows",
    s3_body: `Despite sustained efforts to keep prices low and maintain service quality, take-up has remained modest across all sites. The conclusion is clear: unsubsidised Solar Home Systems are unaffordable for the majority of households in informal settlements. A grant or subsidy is not a nice-to-have - it is the difference between a service that can universally reach the most energy poor households and one that can't.`,
    comparison_head: `Off-grid solar for unelectrified informal settlements - Can "the market" solve for access?`,
    comp_img_1_src: "/fully_subsidised.png",
    comp_img_1_alt: "Fully subsidised off-grid solar comparison",
    comp_img_1_caption: "Fully Subsidised (Stellenbosch)",
    comp_img_2_src: "/unsubsidised.png",
    comp_img_2_alt: "Completely unsubsidised off-grid solar comparison",
    comp_img_2_caption: "Completely <em>Un</em>-subsidised (Cape Town)",
    s4_head: "What came next",
    s4_body: `In 2018, community leaders from the original Philippi settlement organised a petition - with 1,800 signatures - calling on the City of Cape Town to introduce a solar subsidy for unelectrified households. It was submitted directly to the Mayor.\nThe City has subsequently committed, in its Cape Town 2050 Energy Strategy, to introduce a Free Basic Alternative Energy (FBAE) Grant for unelectrified households - drawing on the "free basic services" funding already allocated to municipalities. While the implementation plan is being developed, iShack has launched a funded pilot to demonstrate how such a grant could work in practice. See: <a href="#basic-solar-grant" class="inline-project-link">Basic Solar Grant</a> Project.`,
  },

  project4: {
    title: "Basic Solar Grant",
    tagline: "Demand-side household grant + household co-payments",
    s1_head: "The demonstration",
    s1_body: `Building on evidence from our <a href="#un-subsidised-help-to-buy" class="inline-project-link">Help to Buy pilot</a> - which clearly showed that unsubsidised Solar Home Systems remain out of reach for most informal settlement households - iShack, together with two partners, has launched a new "Basic Solar Grant" (BSG) pilot to demonstrate how a modest monthly energy grant can transform affordability and take-up.\nWith funding from international development partners, participating households receive a grant that reduces the cost, by approximately 70%, of a Solar Home System. The pilot is currently active across four communities, with a target of 1,000 households served. Early results already show that take-up rates have risen sharply.\nThe pilot is designed to generate robust evidence in direct support of the City of Cape Town's Free Basic Alternative Energy (FBAE) Grant for unelectrified households.`,
    s2_head: "The financial model",
    s2_body: `Participating households receive a substantial monthly grant toward the cost of their Solar Home System, with a small co-payment covering the remainder. This co-payment reflects a practical constraint: the funding for this project is not sufficient to provide a truly "free basic" service.\nThat gap is itself an important finding; our modelling and on-the-ground experience suggest that a sufficiently resourced municipal grant - drawn from the Equitable Share - could eliminate monthly co-payments entirely, making the basic service universally accessible (in line with South Africa's existing policy commitments for energy-poverty relief). In other words, the funding mechanism already exists in principle; what is needed is the policy decision to direct it (firstly) towards unelectrified households.`,
    s3_head: "Why this model matters",
    s3_body: `South Africa's current energy-subsidy framework contains a structural inequity: indigent households connected to the grid receive Free Basic Electricity as a matter of course, while households in unelectrified informal settlements (who are arguably the most energy poor) receive no equivalent relief - often for decades. A Basic Energy Grant corrects this imbalance without necessarily requiring new state funding streams. It simply redirects a portion of existing subsidy flows to those in the most acute energy poverty.\nCritically, a household-level grant does more than just close the gap. By placing purchasing power with the household rather than defaulting to top-down municipal procurement, it has the following additional benefits:`,
    benefit_1_label: "Market activation",
    benefit_1_body:
      "Stimulates competition among energy service providers, driving down costs and improving quality.",
    benefit_2_label: "Genuine household choice",
    benefit_2_body:
      "Gives households agency - encouraging active opt-in rather than passive receipt of a uniform interim service.",
    benefit_3_label: "Reduces illegal/informal connections",
    benefit_3_body:
      "Households with access to a legal, affordable alternative have less reason to rely on hazardous unregulated connections to nearby grid infrastructure.",
    benefit_4_label: "Activates engaged citizenship",
    benefit_4_body:
      "Creates a structured relationship and mutual understanding between households and the municipality around eligibility, compliance, and co-payments - building the foundations of a social contract.",
    benefit_5_label: "Supports municipal planning",
    benefit_5_body:
      "Generates trackable, household-level data that strengthens municipal planning capacity.",
    benefit_6_label: "Builds community trust and reciprocity",
    benefit_6_body: `Strengthens community goodwill or "buy-in" that can safeguard and accelerate future infrastructure investments.`,
    benefit_7_label: "Working with informality, not against it",
    benefit_7_body: `Informal settlements are not simply problems waiting to be solved. They contain dense social networks, active informal economies, and a ready pool of flexible, entrepreneurial labour. A household energy grant is especially well-suited to these conditions: it creates immediate local demand for services such as solar installations, maintenance, and customer support - functions that community members can fill with the appropriate support and training. Rather than imposing a standardised external service on a complex social environment, the grant model creates space for locally rooted enterprise and employment to emerge organically.`,
    s3_post:
      'Far from being a distraction from full electrification, an energy grant creates the social, economic, and institutional conditions that make eventual grid roll-out faster, more efficient, more broadly understood as "shared infrastructure".',
    s4_head: "How this can be replicated and scaled",
    s4_body: `Other than a (long over-due) review of the existing FBAE (2005) and FBE (2003) Policies, an FBAE-inspired grant requires no new legislation and no new funding lines. South Africa's Equitable Share (distributed from national treasury to local government on a household count-basis) already allocates funds to municipalities for free basic services. Municipalities have considerable discretion in how to spend this money. So what is required is a municipal policy decision, backed up by political will to extend that entitlement to unelectrified households in the form of a portable, demand-side energy grant.\nOur Basic Solar Grant pilot is designed to provide local government with some of the evidence to make that decision with more confidence and urgency.`,
  },

  contact: {
    title: "Contact",
    intro: "Get in touch with the iShack Project team.",
    org_name:
      "The iShack Project, a project of The Sustainability Institute Innovation Lab (Pty) Ltd",
    contact_1_label: "Contact",
    contact_1_value: "damian@ishackproject.org.za",
    contact_1_href: "mailto:damian@ishackproject.org.za",
    contact_2_label: "iShack Customer Hotline",
    contact_2_value: "+27 71 837 1370",
    contact_2_href: "tel:+27718371370",
  },
};
