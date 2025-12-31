---
title: Programming Languages Standard
description: Permitted programming languages for backend and frontend development
---

# Programming Languages Standard

## Backend Development

The following programming languages are permitted for backend development:

::: info Go
**Framework:** Chi

For general backend services

See template repository for more details
:::

::: tip Rust
For high performance backend services where latency is critical
:::

## Frontend Development

The following programming languages are permitted for frontend development:

::: info TypeScript
**Framework:** React  
**Build Tool:** Vite  
**Router:** Tanstack Router  
**State Management:** Tanstack Query

See template repository for more details
:::

::: tip Dart (Flutter)
For mobile and cross-platform development
:::

## Strictly Prohibited

::: danger Not Allowed
- **Python** - Not allowed for servers nor scripts
- **Javascript** - Not allowed for servers, scripts or frontend
- **NodeJS** - There should be no javascript running on the server
:::

## Template Repositories

- [Golang Server Template](https://github.com/tom-ludwig/go-server-template)
  - Template for backend services with openAPI, sqlc, postgres etc.
- [Sidebar Template](https://github.com/tom-ludwig/sidebar-template)
  - A Frontend build with tanstack router and query, also providing presets for openapi client code generation.
