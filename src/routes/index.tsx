import { createFileRoute, Link } from '@tanstack/react-router';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { BookOpen, Database, GitBranch, Shield, Code, Network, HardDrive } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Home,
});

const quickLinks = [
  {
    title: 'Programming Languages',
    path: 'programming-languages',
    icon: Code,
    description: 'Backend and frontend development standards',
  },
  {
    title: 'Databases',
    path: 'databases',
    icon: Database,
    description: 'Data storage and database selection',
  },
  {
    title: 'GitOps Standards',
    path: 'gitops-standards',
    icon: GitBranch,
    description: 'CI/CD with Flux, Kustomize, and Flagger',
  },
  {
    title: 'Identity Provider',
    path: 'identity-provider',
    icon: Shield,
    description: 'Authentication and authorization standards',
  },
  {
    title: 'CNI Standard',
    path: 'k8s/cni',
    icon: Network,
    description: 'Kubernetes networking standards',
  },
  {
    title: 'Storage',
    path: 'k8s/storage',
    icon: HardDrive,
    description: 'Kubernetes storage solutions',
  },
];

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-16 px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fd-primary/10 mb-6">
            <BookOpen className="w-8 h-8 text-fd-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
            Lucen HQ Wiki
          </h1>
          <p className="text-lg text-fd-muted-foreground mb-8">
            Organizational standards, best practices, and technical documentation.
            Your central source of truth for development guidelines and infrastructure standards.
          </p>
          <Link
            to="/docs/$"
            params={{
              _splat: '',
            }}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm hover:bg-fd-primary/90 transition-colors"
          >
            Explore Documentation
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Documentation Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to="/docs/$"
                  params={{
                    _splat: link.path,
                  }}
                  className="group p-6 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent hover:border-fd-primary/50 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-fd-primary/10 flex items-center justify-center group-hover:bg-fd-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-fd-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1 group-hover:text-fd-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-fd-muted-foreground line-clamp-2">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
