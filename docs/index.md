---
layout: home

hero:
  name: "Lucen HQ Wiki"
  text: "Standards, Research & Documentation"
  tagline: Organizational standards and research notes from testing software solutions
  actions:
    - theme: brand
      text: Browse Standards
      link: /programming-languages
    # - theme: alt
    #   text: View Research
    #   link: /identity-provider

features:
  - title: Organizational Standards
    details: Guidelines and best practices we follow at Lucen HQ
  - title: Software Research
    details: Notes from testing different tools and technologies in practice
  - title: Comparisons
    details: Pros and cons of solutions we've tried, like Identity Providers and Kubernetes CNIs
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/tom-ludwig.png',
    name: 'Tom Ludwig',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/tom-ludwig' }
    ]
  }
  // Add more team members as needed
]
</script>

## About This Wiki

This wiki is mainly about sharing our experiences when researching and testing software. When we try out different tools or solutions, we document what we learned here.

A smaller part contains our organizational standards - the guidelines we follow at Lucen HQ for things like programming languages, databases, GitOps, identity providers, and Kubernetes infrastructure.

You'll find our notes on:

- **Identity Providers** 
- **Kubernetes CNIs**
- **Storage on Kubernetes**
- **GitOps**
- **Databases**
- **And more**: As we test new tools, we'll keep adding our findings

Hopefully this helps others make decisions based on actual experience rather than just marketing materials.

## Team

<VPTeamMembers :members="members" />
