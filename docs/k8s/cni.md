---
title: CNI Standard
description: Container Network Interface standards for Kubernetes
---

# CNI Standard

## Calico

::: info Currently Used
Currently used as the primary CNI solution.

- **Overlay:** VXLAN
- **Routing:** BGP, L2 via MetalLB
- For high-performance networking and network policy enforcement
- Preferred for most applications due to its scalability and rich feature set
- Adopted widely in the Kubernetes community
:::

## Cilium

::: tip Future Consideration
Not used currently but has potential for future adoption.

Too new and not as widely adopted as Calico.

**Features:**
- L7 network capabilities
- Service mesh experience without sidecars
- Observability via Hubble
- eBPF only
- Advanced security features
:::
