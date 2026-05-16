import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  let blog;
  try {
    blog = getBlogBySlug(slug);
  } catch {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: [{ name: "Aswin Lal M", url: "https://www.linkedin.com/in/aswnss" }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: ["Aswin Lal M"],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@aswnss",
      title: blog.title,
      description: blog.description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let blog;
  try {
    blog = getBlogBySlug(slug);
  } catch {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    datePublished: blog.date,
    author: {
      "@type": "Person",
      name: "Aswin Lal M",
      url: "https://www.linkedin.com/in/aswnss",
    },
    keywords: blog.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-12">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="size-3.5" />
          All posts
        </Link>

        <article>
          <header className="mb-8 flex flex-col gap-3">
            <h1 className="text-2xl font-semibold leading-snug tracking-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              {blog.date && (
                <time dateTime={blog.date} className="text-sm text-muted-foreground">
                  {formatDate(blog.date)}
                </time>
              )}
              {blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            {blog.description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {blog.description}
              </p>
            )}
          </header>

          <div className="prose prose-sm dark:prose-invert max-w-none prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:before:content-none prose-code:after:content-none prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted">
            <MDXRemote source={blog.content} />
          </div>
        </article>
      </main>
    </>
  );
}
