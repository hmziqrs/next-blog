import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFileInterface, PostWithPrevNext } from "types";
import readingTime from "reading-time";

const POSTS_DIR = "./posts";

export async function fetchPosts(): Promise<Post[]> {
  const dir = fs.readdirSync(POSTS_DIR);
  const dirWithStats = dir
    .filter((name) => {
      const stat = fs.statSync(path.join(POSTS_DIR, name));
      return stat.isDirectory();
    })
    .map((name) => {
      let translations: string[] = [];
      const files: {
        [lang: string]: PostFileInterface;
      } = {};
      const fileNames = fs.readdirSync(path.join(POSTS_DIR, name));
      translations = fileNames.map((fileName) => fileName.replace(".md", ""));
      translations.forEach((language) => {
        files[language] = fetchPostFileByPath(
          path.join(POSTS_DIR, name, language + ".md")
        );
      });
      const post = {
        name,
        translations,
        files,
      };
      return new Post(post);
    });

  return dirWithStats;
}

export async function fetchPostBySlug(slug: string): Promise<PostWithPrevNext> {
  const posts = await fetchPosts();
  const index = posts.findIndex((post) => post.name === slug);
  if (index === -1) throw new TypeError("Post not found");

  const prevIndex = index - 1;
  const nextIndex = index + 1;

  const prev = prevIndex >= 0 ? posts[prevIndex] : null;
  const next = nextIndex < posts.length ? posts[nextIndex] : null;
  const post = posts[index];

  return { prev, next, post };
}

function fetchPostFileByPath(path: string): PostFileInterface {
  const file = fs.readFileSync(path, "utf-8");
  const mattered = matter(file);
  const slug = path.replace(".md", "");
  const name = slug.split("/").pop();
  const readTime = readingTime(mattered.content, {
    wordsPerMinute: 80,
  });
  const data = {
    path,
    name,
    slug,
    readTime,
    data: mattered.data,
    content: mattered.content,
  } as PostFileInterface;
  return data;
}
