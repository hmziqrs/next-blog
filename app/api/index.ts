import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFile, PostFileInterface, PostWithPrevNext } from "lib/types";
import readingTime from "reading-time";

const POSTS_DIR = "./data-repo/src/content";

export async function fetchPosts(): Promise<Post[]> {
  const dir = fs.readdirSync(POSTS_DIR);
  const dirWithStats = dir
    .filter((name) => {
      const stat = fs.statSync(path.join(POSTS_DIR, name));
      return stat.isDirectory();
    })
    .map((name) => {
      let translations: string[] = [];
      const files: Post["files"] = {};
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

function fetchPostFileByPath(filePath: string): PostFile {
  const file = fs.readFileSync(filePath, "utf-8");
  const mattered = matter(file, { excerpt: true });
  const slug = filePath.replace(".md", "");
  const locale = slug.split("/").pop();
  const readTime = readingTime(mattered.content, {
    wordsPerMinute: 80,
  });

  const raw = {
    locale,
    readTime,
    filePath,
    data: mattered.data,
    content: mattered.content,
  } as PostFileInterface;

  const data = new PostFile(raw);
  return data;
}
