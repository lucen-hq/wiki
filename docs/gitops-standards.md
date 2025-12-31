---
title: Organisaion GitOps Standards
description: Standardize continuous integration & deployment using Flux, Kustomize, and Flagger
---

# Organisaion GitOps Standards

(Flux + Kustomize + Flagger)

::: info Goal
Standardize continuous integration & deployment using Flux, Kustomize, and Flagger, with clear separation of concerns.
:::

## Repository Structure

### 1. `[app]` — Application Code

- Source code + Dockerfile + CI pipeline.
- Builds Docker images on `release/tag`.
- (Optional) Preview deployments for dev/staging.
- (Optional) Kustomize base only; no env-specific overlays.

```
[app]/
├── src/
├── Dockerfile
├── .gitlab-ci.yml
├── k8s/base/
```

### 2. `[app]-deployment` — Environment Overlays

- Holds Kustomize overlays: dev, staging, canary, prod.
- Flux applies overlays; (TODO: ImageUpdateController updates image tags automatically for non-prod.)
- Production promotion is manual via PR.
- Flagger defines canary rollouts.

```
[app]-deployment/
├── overlays/dev|staging|canary|prod/
├── flux/kustomization.yaml
├── flux/imagepolicy.yaml
├── flux/imageupdateautomation.yaml
```

### 3. `[app]-infra` — App Infrastructure

- Manages app-specific infra (queues, storage).
- Declarative manifests applied via Flux.

```
[app]-infra/
├── terraform/ or k8s/
```

### 4. `[tool]-addon` — Cluster Enhancements

- Manages shared cluster addons (metrics, logging, RBAC).
- Applied via Flux globally.

### 5. `cluster-config` — Main Cluster Config

- Includes flux-config, main infrastructure, configs and apps.

## Key Principles

::: tip Core Principles
- **GitOps first:** Flux is source of truth; no manual kubectl apply.
- **Build once, deploy everywhere:** Images built in [app], promoted through [app]-deployment.
- **Manual prod promotion:** Only after canary/staging validation.
- **Progressive delivery:** Use Flagger for safe rollouts.
- **Avoid duplication:** Shared resources live in `[tool]-addon` or platform repos.
:::

::: warning TODO
Automate non-prod deployments: Dev/staging/canary updated automatically.
:::
