import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFile, PostWithPrevNext } from "types";
import readingTime from "reading-time";

const POSTS_DIR = "./post";

export async function fetchPosts(): Promise<Post[]> {
  const dir = fs.readdirSync(POSTS_DIR);
  const dirWithStats = dir
    .map((name) => {
      const stat = fs.statSync(path.join(POSTS_DIR, name));
      let translations: string[] = [];
      const files: {
        [lang: string]: PostFile;
      } = {};
      if (stat.isDirectory()) {
        const fileNames = fs.readdirSync(path.join(POSTS_DIR, name));
        translations = fileNames.map((fileName) => fileName.replace(".md", ""));
        translations.forEach((language) => {
          files[language] = fetchPostFileByPath(
            path.join(POSTS_DIR, name, language + ".md")
          );
        });
      }
      return {
        stat,
        name,
        translations,
        files,
      };
    })
    .filter((v) => v.stat.isDirectory())
    .sort((a, b) => b.stat.birthtimeMs - a.stat.birthtimeMs);
  return dirWithStats;
}

export async function fetchPostBySlug(slug: string): Promise<PostWithPrevNext> {
  const posts = await fetchPosts();

  const index = posts.findIndex(
    (post) => post.name === path.join(POSTS_DIR, slug)
  );
  if (index === -1) throw new TypeError("Post not found");

  const prevIndex = index - 1;
  const nextIndex = index + 1;

  const prev = prevIndex >= 0 ? posts[prevIndex] : null;
  const next = nextIndex < posts.length ? posts[nextIndex] : null;
  const post = posts[index];

  return { prev, next, post };
}

function fetchPostFileByPath(path: string): PostFile {
  const file = fs.readFileSync(path, "utf-8");
  const mattered = matter(file);
  const stat = fs.statSync(path);
  const slug = path.replace(".md", "");
  const name = slug.split("/").pop();
  const readTime = readingTime(mattered.content, {
    wordsPerMinute: 80,
  });
  const data = {
    path,
    name,
    slug,
    stat,
    readTime,
    data: mattered.data,
    content: mattered.content,
  } as PostFile;
  return data;
}
