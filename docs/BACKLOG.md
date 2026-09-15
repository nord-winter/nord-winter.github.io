# Backlog

Concrete, actionable items first, ordered roughly by leverage (impact vs effort), not by when they were raised. Deferred/red-side items after that. See `SITE-CRITIQUE.md` for the reasoning behind the top section.

## Concrete, high-leverage

1. ~~**Real testimonials.**~~ Done. Two real ones live on `/services` (`What_People_Say`), first names only, employer name stripped from the one that had it. He mentioned more exist on other platforms (Upwork among them), worth revisiting once he has more, but not urgent.
2. **Finish 2-3 real blog posts.** Dispatch_Log has 1 published, 3 draft/planned. A "thought leadership" pillar with one real post reads as empty. Prioritize finishing the drafts already scoped (Terraform modules, GKE autoscaling) before starting new ones.
3. **One real security-flavored post.** The Dual_Protocol hero line ("blue builds it, red tries to break it") currently has nothing red-side backing it except a highlight line and a certifications list. One real writeup (HTB walkthrough angle, CTF postmortem, whatever he's actually done) pays off the hook without opening the full red-persona scope.
4. **Real skill weighting, not a flat chip list.** Derive from real data already in `config.ts`: count how many times each skill appears across `experience[].tech` + `projects[].skills`, use that to size/order/weight the skill chips. Same "depth signal" the earlier Active_Processes percentage bars were trying to give, but computed from real numbers instead of a formula. Do not bring back fabricated percentages.
5. **Pricing decision.** Still `On_Request` everywhere (services, engagement, brochure). Not broken, but an open decision he's been sitting on. Needs him to pick, not a design problem to solve.
6. **Authorization / work status.** Still `On_Request` in the Engagement block, same as pricing, needs a real answer from him (he said himself he's not fully sure).
7. **Real dotfiles repo link.** `nord-winter/cyberdeck`, `decky-mobile-mode`, and `locpi` are confirmed real and linked. The actual dotfiles repo referenced in Rig_Spec is still a placeholder URL.
8. **Contact email on a real domain.** Currently a personal Gmail on a consulting-facing site.

## Medium-term, needs a decision first

- **Booking link (Calendly-style)** instead of / alongside the mailto Open_Channel CTA, removes one more click. Only worth it once pricing (#5) is settled, a booking link with `On_Request` pricing behind it is a slightly odd sequence.
- **Resume-shaped PDF export** for recruiters, same print-page pattern as `/brochure` but content aimed at hiring managers instead of clients. Only worth building if the recruiter/hiring-role angle (option C in SITE-CRITIQUE.md) becomes the priority over consulting.
- **Cross-posting pipeline.** He's building this himself already, a fork of a Telegram bot repo, triggered by a `#post-longread` tag on an article written in Memos. His target list: LinkedIn, Dev.to, Hacker News, Reddit, Twitter/X, Product Hunt, Medium, Hashnode, Crunchbase, Substack, Habr, Telegraph, Telegram group. Worth a technical note here since not all of these fit an "auto-post my article" model the same way, given to him directly, repeated here so it's not lost: Dev.to and Hashnode have genuinely open public APIs for this. Telegraph and Telegram Bot API too. LinkedIn, Reddit, and Twitter/X have APIs but are gated (app review, or paid tiers) and carry real ban risk for automated blanket-posting, especially Reddit's per-subreddit self-promo norms. Medium, Substack, and Habr have uncertain or no public posting API as of this session, needs checking against their current docs. Hacker News, Product Hunt, and Crunchbase don't fit the model at all: HN takes a link submission via its web form only (no submission API) and actively polices self-promo bots, Product Hunt is a one-time product launch listing not a blog, Crunchbase is a company database with no article-publishing concept whatsoever.
- **Per-project sponsorship / reward tiers.** He saw a reference (a birthday fundraiser site styled as a retro desktop OS, itemized goals with a progress bar, "you give me X, I give you Y" reward tiers instead of a flat donate button) and liked the mechanic more than the current single Buy_Me_A_Coffee line. Idea still unformed: could be per-project funding goals (e.g. a specific ask tied to Cyberdeck or Locpi) or something more personal, with or without reward tiers. He explicitly wants to let this sit and rethink before deciding scope. Don't build until he brings it back.

## Deferred, red-side / not ready

Most of what's below belongs to the future dark/red "persona" side (security/CTF-flavored content), deliberately kept out of the main site. Not a priority until said otherwise.

### Intel-Hub (Discord server)

Repo: https://github.com/nord-winter/intel-hub

His Discord server. Automation, fact-checking, cybersec/livehack utilities, announcements pulled from CTF/HTB/THM/Google security events. His idea: use it to pull people together around CTF, build a team, train and grow together. He floated dedicating a block or page on the site to this, not built. Red-side content, same bucket as the dark/red persona toggle, not something that belongs on the current professional/consulting-facing site without that toggle existing first.

### bkkhackerspace

Domain already purchased. Still fully in planning, nothing built, waiting on a colleague to stand up the infrastructure. Nothing to reference from the site until it exists.

### Dark/red persona toggle content

A toggle-switchable content bucket for security/red-team-flavored material beyond what's already surfaced (CTF placements, TryHackMe/Cisco certs, HackTheBox-style entries). Note: the site's red/blue toggle is confirmed to be a color-only switch, not a content switch (decided explicitly), so this would need its own separate mechanism if it ever gets built, not the existing SIDE:BLUE/RED control.

### Anti-AI-crawler / photo protection

If a real photo ever goes on the profile page, revisit invisible-text/scraping protection. Static GitHub Pages site has real limits here (no backend, no hotlink blocking), covered in the earlier discussion, worth a proper look if/when a photo actually gets added.
