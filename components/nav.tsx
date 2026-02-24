import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Blogs", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight hover:text-primary transition-colors"
        >
          aswnss
        </Link>
        <div className="flex items-center gap-1">
          <nav className="flex items-center gap-1 mr-1" aria-label="Site navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <Separator />
    </header>
  );
}
