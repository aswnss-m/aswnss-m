import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things I've built — side projects, open source work, and experiments.",
  openGraph: {
    title: "Projects | aswnss",
    description: "Things I've built — side projects, open source work, and experiments.",
    type: "website",
  },
};

const projects = [
  {
    name: "Soft Served Web",
    description:
      "AI-powered app development agency. We build web apps, Shopify stores, and rapid MVPs for clients who need to move fast.",
    tags: ["Next.js", "AI", "Shopify"],
    url: "https://www.softservedweb.com",
    github: null,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Things I&apos;ve built and shipped.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <Card key={project.name} className="bg-card border-border">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-medium leading-snug">{project.name}</h2>
                  <div className="flex items-center gap-2 shrink-0 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub`}
                        className="hover:text-foreground transition-colors"
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className="hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
