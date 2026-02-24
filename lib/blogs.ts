import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDir = path.join(process.cwd(), "content/blogs");

export interface BlogMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}

export interface Blog extends BlogMeta {
  content: string;
}

export function getAllBlogs(): BlogMeta[] {
  if (!fs.existsSync(blogsDir)) return [];

  const files = fs.readdirSync(blogsDir);

  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogsDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
      } satisfies BlogMeta;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getBlogBySlug(slug: string): Blog {
  const file = path.join(blogsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    content,
  };
}
