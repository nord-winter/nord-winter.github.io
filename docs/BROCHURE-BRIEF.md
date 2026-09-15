# PDF Brochure: what to gather, how to build it

## What it's for

A downloadable one-pager or short deck you can attach in an email or hand over after a call. Not a replacement for the site, a leave-behind. Same audience as the site: client evaluating you for a project, or an employer evaluating you for a role.

## Format decision (pick one before starting)

- **One-pager** (recommended default): single PDF page, front-loaded with the strongest proof, scannable in 30 seconds. Best for cold outreach and quick attachments.
- **Short deck** (4 to 6 pages): cover, problem/value prop, services with pricing, one or two case studies, contact. Better if you're sending it after a call, when someone's already invested and will actually read past page one.

Don't build both at once. Start with the one-pager, expand to a deck later only if you find yourself wanting more room.

## How to build it (reuse what already exists)

Cleanest path: a print-styled HTML page in this repo (`src/pages/brochure.astro` or similar), using the same design tokens and components already in `global.css` and `config.ts`, with a `@media print` stylesheet. Export to PDF via the browser's print dialog. This keeps the brochure visually identical to the site instead of drifting into a separate design tool, and it pulls content straight from `config.ts` instead of being retyped and going stale.

Alternative: a separate design tool (Figma, Canva). More visual control, but it's a second source of truth you have to update by hand every time the site content changes. Only worth it if you want a materially different look from the site.

## Content checklist (what you need to gather or decide)

1. **Final prices.** The site currently shows `On_Request` for all 4 services. A PDF is a static artifact people save and reread, it needs real numbers, not a placeholder that reads fine on a live page but looks unfinished in a document.
2. **Which services make the cut.** All 4, or the top 2 to 3 that best match who you're sending this to. A one-pager probably can't fit all 4 with their full deliverables lists.
3. **1 to 2 case studies, picked deliberately.** Showcase and Avoid_AI have real repos, Cyberdeck and Decky now have real write-ups. Pick whichever best matches the audience (client-facing = Showcase or a services case, more personal = Cyberdeck/Decky).
4. **Visuals.** Either reuse the Rig_Spec screenshots and existing site graphics, or decide if the brochure wants different imagery. If you want project screenshots or diagrams for the case studies chosen in step 3, those need to exist first.
5. **Photo or no photo.** The site stays anonymous behind the NORD_WINTER monogram. Decide once whether the brochure keeps that or uses a real photo, print pieces sometimes read as more trustworthy with a face attached. Your call, not a default.
6. **Testimonials or references, if any exist.** Optional, but a real client quote is the single highest-trust element you can put on a one-pager. If none exist yet, skip it, don't fabricate one.
7. **Logistics block.** Same content as the site's `Working_With_Me` strip (engagement type, availability, hours, authorization, language), those fields still say `On_Request` too, fill them in once for both the site and the brochure.
8. **A single CTA.** Email, or a booking link if you set one up. Don't put 4 different contact channels on a one-pager, that's the same mistake the site had before the WHO_ARE_U cleanup.

## What I need from you before I can build it

Once the checklist above has real answers (especially prices, chosen services, and the photo decision), give me:
- Which format (one-pager vs deck)
- The filled-in checklist
- Any images not already in `public/`

I'll build the print-styled page from that, reusing the site's existing components and tokens instead of starting a new design from scratch.
