import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Thoughts on software development, Next.js, Bun, React Native, and building startups.",
  openGraph: {
    title: "Blogs | aswnss",
    description:
      "Thoughts on software development, Next.js, Bun, React Native, and building startups.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blogs | aswnss",
    description:
      "Thoughts on software development, Next.js, Bun, React Native, and building startups.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight">Blogs</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Writing about things I learn, build, and think about.
          </p>
        </div>

        {blogs.length === 0 ? (
          <p className="text-sm text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group block py-6 transition-opacity hover:opacity-80"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2 min-w-0">
                      <h2 className="font-medium leading-snug group-hover:text-primary transition-colors">
                        {blog.title}
                      </h2>
                      {blog.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {blog.description}
                        </p>
                      )}
                      {blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {blog.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {blog.date && (
                      <time
                        dateTime={blog.date}
                        className="shrink-0 text-xs text-muted-foreground pt-0.5"
                      >
                        {formatDate(blog.date)}
                      </time>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
