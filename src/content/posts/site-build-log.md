---
title: "Site build log: why this dashboard exists and what it's for"
date: 2026-07-09
tag: META
status: PUBLISHED
description: "Why this site looks like a terminal dashboard instead of a normal portfolio, and what each section is actually for."
---

Most portfolio sites are the same page: a hero, a grid of projects, a contact form. Mine ended up looking like a terminal dashboard instead, and that wasn't a styling choice made first, it came out of a structural problem.

## The problem

This site has two different readers. A client evaluating me for a consulting job doesn't care about my education history. A recruiter evaluating me for a role doesn't care about pricing. Cramming both into one generic page meant neither reader got what they came for, and the page read as neither a portfolio nor a resume, just a vague mix of both.

## The split

The homepage is the pitch: what I do, proof it works, how to reach me. The `/profile` page is the resume: experience, education, the full contact list. Someone who lands on the homepage from a cold link gets the pitch first. Someone who clicks through wanting the full history gets it, without it crowding the front page.

## The rule I kept coming back to

Nothing on this site is decorative if it isn't real. Early versions had fake system stats on the hero (CPU load, memory usage, numbers that reset on every page refresh) because they matched the terminal aesthetic. They got cut. A visitor who refreshes the page and watches "live" numbers change randomly stops trusting the real numbers next to them. Everything left standing, the metrics, the case studies, the rig setup, is either pulled from a real source or clearly marked as a placeholder waiting on real data.

That's still the standard I'm building against.
