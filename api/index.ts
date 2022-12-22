import fs from "fs";
import path from "path";
import matter from "gray-matter";
import pick from "lodash/pick";
import { Post } from "types";

const POSTS_DIR = "./post";

export async function fetchPosts(): Promise<Post[]> {
  const dir = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".md"));
  const filesPaths = dir.map((v) => path.join(POSTS_DIR, v));
  const parsed = filesPaths
    .map((v) => fetchPostByPath(v))
    .sort((a, b) => a.stat.birthtimeMs - b.stat.birthtimeMs);
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
  const data = {
    path,
    slug,
    stat,
    ...pick(v, "content", "data"),
  } as Post;
  return data;
}
