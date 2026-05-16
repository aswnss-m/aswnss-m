import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerContainer,
  StaggerCard,
} from "@/components/motion/stagger-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Personal projects — things I build on the side and ship under aswnss.com subdomains.",
  openGraph: {
    title: "Projects | aswnss",
    description:
      "Personal projects — things I build on the side and ship under aswnss.com subdomains.",
    type: "website",
  },
};

const projects = [
  {
    name: "Life Calendar",
    description:
      "A web app that generates a live wallpaper for iOS and Android showing the days left in the year as a progress bar — a small daily reminder that time is finite.",
    tags: ["Next.js", "iOS", "Android", "Wallpaper"],
    url: "https://lifecalendar.aswnss.com",
    github: null,
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <FadeIn className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Side projects I build for fun, mostly hosted on{" "}
            <code className="font-mono text-xs">*.aswnss.com</code> subdomains.
          </p>
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-4">
          {projects.map((project) => (
            <StaggerCard key={project.name}>
              <Card className="bg-card border-border transition-colors hover:border-foreground/20">
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
                          className="transition-colors hover:text-foreground"
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
                          className="transition-colors hover:text-foreground"
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
            </StaggerCard>
          ))}
        </StaggerContainer>
      </main>
    </>
  );
}
