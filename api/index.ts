import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostWithPrevNext } from "types";
import readingTime from "reading-time";

const POSTS_DIR = "./post";

export async function fetchPosts(): Promise<Post[]> {
  const dir = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  const filesPaths = dir.map((v) => path.join(POSTS_DIR, v));
  const parsed = filesPaths
    .map((v) => fetchPostByPath(v))
    .sort((a, b) => b.stat.birthtimeMs - a.stat.birthtimeMs);
  return parsed;
}

export async function fetchPostBySlug(slug: string): Promise<PostWithPrevNext> {
  const posts = await fetchPosts();
  const index = posts.findIndex((v) => v.slug === slug);
  if (index === -1) throw new Error("Post not found");

  // if (index === -1) return null;
  console.log(posts.length, index);

  const prevIndex = index - 1;
  const nextIndex = index + 1;

  const prev = prevIndex >= 0 ? posts[prevIndex] : null;
  const next = nextIndex < posts.length ? posts[nextIndex] : null;
  const post = posts[index];

  return { prev, next, post };
}

function fetchPostByPath(path: string): Post {
  const file = fs.readFileSync(path, "utf-8");
  const v = matter(file);
  const stat = fs.statSync(path);
  const slug = path.replace(".md", "");
  const readTime = readingTime(v.content, {
    wordsPerMinute: 80,
  });
  const data = {
    path,
    slug,
    stat,
    readTime,
    data: v.data,
    content: v.content,
  } as Post;
  return data;
}
