# Site critique and development options

Full pass over the current site, checked against real research on consulting landing pages, developer portfolios, and how solo consultants without existing testimonials actually get their first ones. Sources at the bottom. This is analysis and options, nothing here has been built.

## What the site gets right, confirmed by research

- **Static, fast, no framework bloat.** Astro static output is exactly what the 2026 portfolio guidance points at (Jamstack-style builds for speed). Not a gap, just worth naming so it stays a deliberate choice, not an accident.
- **Home, Projects, Blog, Contact as the core pillars** is the exact shape the research names for dual-audience (recruiter + client) developer portfolios. The site already has this: Hero (home), Projects_X, Dispatch_Log (blog), WHO_ARE_U/Comms (contact). The recent work moving Services out of the homepage and cutting Hero down to one screen is directionally correct: the research is blunt that most of a landing page's job is speed to the point, and every extra scroll before the hook lands is friction.
- **WHO_ARE_U as a 2-field form** (name, need) already matches the biggest single conversion lever in the research: short forms convert far better than long ones. Nothing to fix there.
- **GitHub integration (CoreMetrics, real repo links)** matches what the research says draws both audiences: live proof over claimed proof.

## Where it's weaker than it should be

### 1. Zero real testimonials, and that's fixable now, not later

`Client_Feedback` on `/services` has two slots explicitly marked as placeholders. The instinct to not fake them was right. But the research on this is specific: freelancers don't need paying clients to get a first testimonial, they ask past colleagues and managers for a two-line quote the moment a working relationship ends well. He has 6+ years of real work history (Ascender, BRLab/Metaratings, D-GRUPP) and real former managers who could give a two-line quote about what it was like to work with him. That's not "wait for a paying client," that's an email he can send this week. Sitting on empty slots when the raw material to fill them honestly already exists is the single highest-leverage gap on the whole site.

### 2. The blog is a "thought leadership" pillar with almost no content in it

Research lists Blog as one of four core content pillars for this exact audience. Right now Dispatch_Log has one published post and three drafts/plans. A pillar with 25% real content isn't a pillar, it's a placeholder with a nicer name. This doesn't need ten posts, it needs two or three finished ones to stop reading as an empty room with a sign on the door.

### 3. Skills are currently just a flat list of chips, no depth signal

The research flags skill-progress visuals (bars, clouds, weighted tags) as something both recruiters and clients look for to gauge depth, not just breadth. The site already tried this once this session (Active_Processes, percentage bars) and it got cut correctly, because the numbers were fabricated (`Math.min(97, 65 + (index*11) % 33)`, a formula, not data). The fix isn't to bring back fake bars, it's to derive the same signal from real data already on the site: how many times a skill actually appears across `experience[].tech` and `projects[].skills`. A skill used in four job entries and three projects is visibly more load-bearing than one that shows up once, and that's a true number, not a guess.

### 4. The red/blue duality is a strong hook that the content doesn't fully pay off yet

`Blue builds it, red tries to break it` is a sharp line and the split-hero treatment sells it well. But right now the only red-side content that exists is one aboutHighlight and a certifications list. The hook promises two disciplines in active tension; the site currently shows one discipline and a credentials footnote for the other. This isn't a "build the whole red persona now" problem (that's explicitly still out of scope, see BACKLOG.md), it's that the claim is slightly ahead of the proof. The cheapest real fix: one actual security-flavored blog post (matches gap #2 above) would make the hook's second half real instead of aspirational.

### 5. Pricing is `On_Request` everywhere, which is a legitimate choice but has a cost

Not a research-backed "must fix," this genuinely is a judgment call some consultants make deliberately. But it's worth naming the tradeoff explicitly: `On_Request` filters out anyone who won't send an email to find out a number, which cuts both low-quality tire-kickers and some real prospects who'd rather see a range before reaching out. This has been sitting as an open item because he hasn't decided, not because it's unresolved research, that's fine, just flagging it stays a real decision, not a default.

## Development options, not a flat list, three different directions

These aren't mutually exclusive, but they pull in different directions and probably shouldn't all be chased at once. Worth picking a lead before building more.

**A. Lean into paid work (consulting-first).** Get 2-3 real testimonials this week (see #1). Decide the pricing question instead of leaving it open. Consider a real booking link (Calendly-style) to remove one more click from Open_Channel. This path optimizes for turning existing traffic into paid engagements, not growing traffic.

**B. Lean into authority (content-first).** Finish 2-3 real blog posts, including one security-flavored one to pay off the red/blue hook. Write the real manifesto (still a placeholder quote). Revisit the cross-posting idea from earlier (site to Telegram/Medium/Habr/VC) once there's enough real content to be worth syndicating. This path optimizes for inbound reputation over time, slower payoff, compounding.

**C. Lean into hiring (recruiter-first).** Replace the flat skill chips with the real-data-weighted version from #3. Consider a resume-shaped export next to the brochure PDF (same print-page pattern, different content, this one for recruiters not clients). This path optimizes for landing a role, not client work, matching the `aboutMe` line about being open to Platform/Backend/SRE roles.

Given the site already reads as consulting-first by structure (Services got its own page, WHO_ARE_U is the primary CTA), A is probably the natural default unless he says otherwise, but that's his call, not a default I should assume without asking.

## Sources

- [Creating a Consulting Landing Page That Turns Visitors Into Clients](https://www.melisaliberman.com/blog/consulting-landing-page)
- [12 Landing Page Best Practices of 2026 You Need](https://www.leadfeeder.com/blog/conversion-optimization/landing-pages-convert/)
- [Developer Portfolio Guide 2026: Build a Portfolio That Gets Hired](https://hakia.com/skills/building-portfolio/)
- [7 Developer Portfolio Websites That Got Their Owners Hired (2026)](https://slategit.com/blog/developer-portfolio-examples-that-got-hired)
- [We asked 100 freelancers how they won their FIRST client](https://senja.io/blog/freelancers-get-my-first-client)
- [How to Get Powerful Consulting Testimonials and Case Studies That Win More Clients](https://www.consultingsuccess.com/consulting-testimonials)
