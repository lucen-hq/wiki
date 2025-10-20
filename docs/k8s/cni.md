# CNI Standard

**Calico**
Currently used as the primary CNI solution.

- Overlay: VXLAN;
- Routing: BGP, L2 via Metallb;

- For high-performance networking and network policy enforcement
- Preferred for most applications due to its scalability and rich feature set
- Adopted widely in the Kubernetes community

**Cilium**
Not used currently but has potential for future adoption.
Too new and not as widely adopted as Calico.

- L7 network capabilities
- service mesh experience without sidecars
- Observability via Hubble
- eBPF only
- Advanced security features
