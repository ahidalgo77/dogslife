import matter from "gray-matter";

export interface BlogPostMeta {
  title: string;
  date: string; // ISO
  author?: string;
  tags?: string[];
  excerpt?: string;
  heroImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  slug: string;
  content: string;
}

const rawModules = import.meta.glob<string>("../posts/*.md", { as: "raw", eager: true });

function slugFromPath(path: string): string {
  const match = path.match(/\/(?:src\/)?posts\/([^/]+)\.md$/);
  return match ? match[1] : path;
}

const posts: BlogPost[] = Object.entries(rawModules).map(([path, raw]) => {
  const { content, data } = matter(raw);
  const meta = data as BlogPostMeta;
  return {
    slug: slugFromPath(path),
    content,
    title: meta.title,
    date: meta.date,
    author: meta.author,
    tags: meta.tags || [],
    excerpt: meta.excerpt || content.slice(0, 160),
    heroImage: meta.heroImage,
  };
});

export function getAllPosts(): BlogPost[] {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}