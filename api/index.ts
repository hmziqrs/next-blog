import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "types";
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

export function fetchPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIR, slug) + ".md";
  return fetchPostByPath(filePath);
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
