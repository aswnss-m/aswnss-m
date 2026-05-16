"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Blogs", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight transition-colors hover:text-primary"
        >
          aswnss
        </Link>
        <div className="flex items-center gap-1">
          <nav className="flex items-center mr-1" aria-label="Site navigation">
            {links.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm transition-colors rounded-md hover:bg-accent ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-foreground"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <Separator />
    </header>
  );
}
