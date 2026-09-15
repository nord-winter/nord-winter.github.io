---
title: "Terraform modules I reuse on every new infra project"
date: 2026-08-14
tag: TERRAFORM
status: DRAFT
description: "The handful of Terraform modules that end up in almost every GCP project I set up, and why."
---

Draft notes, not published yet.

- VM lifecycle module (auto-suspend on idle, the same pattern behind the 40% cost cut on the cost audit service)
- GKE cluster baseline (network policy, node pools, workload identity wired up by default)
- Observability stack module (Prometheus + Grafana, provisioned the same way every time instead of clicked together by hand)

Full write-up coming once the modules themselves are cleaned up enough to link to directly.
