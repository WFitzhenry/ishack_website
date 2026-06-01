Google Sheets Structure
Sheet 1 — landing
key value
hero_title Solar electricity for households
hero_subtitle ...still waiting for the grid
hero_emphasis no grid connection = no free basic electricity/energy.
intro_p1 South Africa's post-apartheid dispensation...
intro_p2 Recognising that a growing number...
intro_p3 Below you will find short summaries...
Simple two-column layout: key in column A, value in column B. The editor only ever touches column B.

Sheets 2–5 — one per project (e.g. project_free_basic_solar)
Each project tab follows the same template:

key value
title Free Basic Solar
tagline Capital grant + municipal operations subsidy
section*demonstration The demonstration
p_demonstration From 2013 to 2022...
section_financial_model The financial model
p_financial_model_1 Two funding streams made it work...
p_financial_model_2 Households paid a once-off joining fee...
section_what_we_built What we built - and why it mattered
p_what_we_built Rather than treating this as...
section_replication How can this be replicated...
p_replication_1 South Africa's INEP...
Naming convention: section*_ = subheading text, p\__\_N = paragraph in that section. New paragraphs are new rows. Easy to scan, easy to edit.

Sheet 6 — contact
key value
intro Get in touch with the iShack Project team.
org_name The iShack Project, a project of...
contact_label Contact
contact_email damian@ishackproject.org.za
hotline_label iShack Customer Hotline
hotline_number +27 71 837 1370
How Content Is Fetched
Make the sheet public (read-only):
In Google Sheets → Share → "Anyone with the link" → Viewer. This never exposes write access.

Fetch as JSON via the Sheets API (no API key needed for public sheets):

The URL pattern is:

Or more simply, using the public CSV export endpoint that needs no API key at all:

Two fetch strategies to choose from:

Option A — Build-time (recommended)

A small Node script (e.g. scripts/fetch-content.js) runs before the Vite build
It fetches all tabs, converts rows to a JSON object keyed by key, writes to public/content.json
main.js imports that static JSON — no runtime network calls
Add the script to package.json: "build": "node scripts/fetch-content.js && vite build"
Result: fast, safe, no API exposure in the browser
Option B — Runtime with caching

main.js fetches the sheet on page load
Cache the response in localStorage with a short TTL (e.g. 1 hour)
Show fallback hardcoded text if the fetch fails
Simpler to set up, but adds a small load-time dependency
For your use case, Option A is safer and faster — the editor updates the sheet, you/they re-trigger a build (a one-click button if deployed on Netlify/Vercel), and the new text is live.

Safeguards worth adding
Keep a content.fallback.json committed to the repo — if the fetch fails, the build falls back to last-known-good content
Add a MAX_LENGTH check in the fetch script for critical fields (e.g. titles ≤ 80 chars)
Protect the sheet with a named range so the editor can't accidentally delete the key column
