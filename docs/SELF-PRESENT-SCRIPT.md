# Self-Presentation Script
**Vladislav Simutin · v1.0 · May 2026**

---

## 1. Elevator Pitch (60 seconds)

> I'm a platform engineer with 5+ years building and operating production systems in fintech and e-commerce.
>
> Most recently I was technical co-founder at a Bangkok-based e-commerce company — I designed the microservice architecture on GCP, automated infrastructure lifecycle with Go and Terraform, and reduced infrastructure costs by 40% through VM automation. The platform reached $10K+ MRR within 6 months of MVP launch.
>
> Before that I was senior backend engineer at Metaratings — a high-load sports analytics platform — where I maintained services handling 80K+ RPS and led refactoring that doubled application throughput.
>
> My background is in information security — I studied at Perm Military University — and I'm actively deepening that with daily practice, building toward security architecture long-term.
>
> Right now I'm looking for a platform or infrastructure engineering role at a product company — Go-heavy, remote, ideally fintech or devtools.

---

## 2. Standard Interview Questions

### "Tell me about yourself"

Use elevator pitch above. Keep it under 90 seconds. End with what you're looking for — gives the interviewer a clear handoff.

---

### "Why are you leaving / why did you leave your last role?"

> At ASCENDER I was technical co-founder — which means I was doing everything: architecture, hiring, operations, vendor management. I realized I was spending less and less time on actual engineering.
>
> I want to go deeper technically — system design, platform reliability, infrastructure at scale. That's the direction I'm building toward, and a focused engineering role is the right next step.

**Do not say:** "not enough money," "bad team," "company had problems." Keep it about your direction, not their failures.

---

### "Why Senior/Platform Engineer after being CTO?"

> CTO in a startup is a broad role — I was accountable for everything from architecture to team growth to stakeholder communication. That taught me a lot, but it also kept me away from the engineering depth I want to build.
>
> I'm not stepping down — I'm changing vector. I want to be the person who designs the systems, not the person who manages the people who build them. Platform engineering is where I want to develop real depth, and I see it as the foundation for where I'm heading longer-term: security architecture.

---

### "Why no bigtech experience?"

> I've built and operated systems at real scale — 80K+ RPS personalized feed, 40% infrastructure cost reduction on GCP, RAG agent in production. These are the same classes of problems bigtech engineers solve, just in different organizational contexts.
>
> I've found that Series B/C companies are where I have the most impact — small enough that architectural decisions matter, large enough that scale is a real constraint. That's the environment I'm looking for.

---

### "Walk me through a system you designed"

**Use: GCP infrastructure automation at ASCENDER**

> We had an LLM inference service running on GPU compute instances on GCP. The problem was that these instances were expensive and only needed during business hours — but we were paying 24/7.
>
> I built an auto-suspend system: Cloud Functions monitored request queues and instance idle time, triggered VM lifecycle events via Go scripts, and Terraform managed the provisioning state. When traffic resumed, the instance would restore automatically within the startup SLA we defined.
>
> Result: 40% reduction in infrastructure costs. The tricky part was managing the cold start latency — we had to tune the threshold between "idle enough to suspend" and "suspend too aggressively and hurt user experience." We ended up with a configurable buffer window and staged rollout.

---

### "Tell me about a time you dealt with high load"

**Use: Metaratings personalized feed**

> At Metaratings we had a personalized feed system across 30+ microservices that was hitting 80K+ RPS at peak. The system was functional but query latency was degrading under load.
>
> I did a systematic audit of the SQL query paths — identified N+1 patterns, redundant joins, and data that was being fetched and discarded. Reduced source code by 30% through targeted refactoring, which eliminated the data transfer overhead that was causing the latency spikes.
>
> Result: 2x throughput improvement without horizontal scaling. The key insight was that we were fetching more data than we needed and paying the cost downstream — fixing the query was cheaper than adding infrastructure.

---

### "What's your experience with Kubernetes?"

> I've used Kubernetes in production — deployment, scaling, monitoring, troubleshooting. I've worked with k9s and Helm for cluster management. My experience is primarily operational rather than ground-up cluster design, which is why I'm currently preparing for CKA to formalize that gap. I understand the architecture deeply — I just haven't had the context to provision clusters from scratch in a production setting.

**Note:** Be honest about the gap. Interviewers respect honesty more than overstatement. Follow up with what you're doing about it.

---

### "How do you approach infrastructure cost optimization?"

> I start with visibility — if you don't have metrics on what's actually being used, you're guessing. At ASCENDER I set up Prometheus monitoring on resource utilization before making any changes.
>
> The biggest win was identifying idle compute — specifically the LLM inference instances that were running 24/7 but only needed during business hours. Built an automated lifecycle system that suspended them on idle and restored on demand.
>
> The general principle I follow: optimize the expensive idle first, then look at right-sizing, then architecture changes. The quick wins are usually in idle resources, not in clever infrastructure redesign.

---

### "Describe your experience with CI/CD"

> I've built and maintained pipelines on both GitLab CI/CD and GitHub Actions. At ASCENDER I designed a versioned build system — containerized services delivered via S3-backed artifact storage with multi-environment support and automated rollback. The goal was reproducible builds and a clear audit trail of what was deployed where.
>
> The most important thing I've learned about CI/CD is that the pipeline is part of the product — if it's flaky or slow, engineers stop trusting it and start working around it. I treat pipeline reliability the same way I treat service reliability.

---

### "What are you looking for in your next role?"

> A platform or infrastructure engineering role where Go is a core part of the stack. I want to work on systems where scale is a real constraint — reliability, observability, cost efficiency at real load.
>
> I'm looking for a remote-first company, ideally in fintech or devtools, at a stage where architectural decisions still matter and one engineer can have real impact on how the system evolves.
>
> Longer term I'm building toward security architecture — so a company with serious security requirements would be a natural fit.

---

## 3. Questions to Ask the Interviewer

These signal engineering maturity and genuine interest — not generic curiosity:

**On technical environment:**
- What does your on-call rotation look like, and how do you handle incident retrospectives?
- How is platform/infra work prioritized against product feature work?
- What does your observability stack look like today — what's working, what's not?

**On architecture:**
- What's the biggest reliability challenge you're dealing with right now?
- How do you handle service-to-service authentication internally?
- What does your deployment process look like — how long from merged PR to production?

**On team and culture:**
- How are architectural decisions made — is there a formal RFC process or more ad hoc?
- What does "senior" mean on your team — what does that person own?

**On growth:**
- What does the engineering career ladder look like above senior?

---

## 4. Salary Negotiation

**Target:** $5,000 – $6,000 gross / month  
**Walk-away:** below $4,500 gross / month  
**Anchoring rule:** never give a number first. If pushed, give a range with the floor at your target.

> "I'm targeting the $5,500 – $6,500 range based on the scope of the role and my experience with production systems at scale. Is that aligned with what you have budgeted for this position?"

If they come back below target:
> "That's below where I need to be. Is there flexibility, or are there other components — equity, bonus — that would bring the total closer to that range?"

---

*v1.0 · May 2026 · rehearse answers out loud before interviews*
