import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Lucen HQ Wiki",
  description: "Lucen HQ organizational standards and documentation",
  base: "/wiki/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Welcome", link: "/index" },
        ],
      },
      {
        text: "Standards",
        items: [
          { text: "Programming Languages", link: "/programming-languages" },
          { text: "Databases", link: "/databases" },
          { text: "GitOps Standards", link: "/gitops-standards" },
          { text: "Identity Provider", link: "/identity-provider" },
        ],
      },
      {
        text: "Kubernetes",
        items: [
          { text: "CNI Standard", link: "/k8s/cni" },
          { text: "Storage", link: "/k8s/storage" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lucen-hq/wiki" },
    ],
  },
});
