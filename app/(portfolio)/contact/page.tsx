import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aswin Lal M — personal and work contact details.",
  openGraph: {
    title: "Contact | aswnss",
    description: "Get in touch with Aswin Lal M — personal and work contact details.",
    type: "website",
  },
};

const contacts = [
  {
    label: "Personal email",
    value: "aswnss.m@gmail.com",
    href: "mailto:aswnss.m@gmail.com",
    icon: <Mail className="size-4" />,
  },
  {
    label: "Work email",
    value: "aswin@softservedweb.com",
    href: "mailto:aswin@softservedweb.com",
    icon: <Mail className="size-4" />,
  },
  {
    label: "Twitter / X",
    value: "@aswnss",
    href: "https://twitter.com/aswnss",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@aswnss",
    href: "https://instagram.com/aswnss",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aswnss",
    href: "https://www.linkedin.com/in/aswnss",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Feel free to reach out — I&apos;m always happy to chat.
          </p>
        </div>

        <ul className="flex flex-col divide-y divide-border">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 py-4 hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-3 text-muted-foreground">
                  {c.icon}
                  <span className="text-sm">{c.label}</span>
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {c.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <Separator className="my-10" />

        <div className="text-sm text-muted-foreground">
          <p>
            Working on something cool?{" "}
            <a
              href="https://www.softservedweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Soft Served Web
            </a>{" "}
            is open for projects — AI apps, web services, and rapid prototyping.
          </p>
        </div>
      </main>
    </>
  );
}
