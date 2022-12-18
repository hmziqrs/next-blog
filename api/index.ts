import fs from "fs";
import path from "path";
import matter from "gray-matter";
import pick from "lodash/pick";

const BASE_DIR = "./data";

export async function fetchPosts() {
  const dir = fs.readdirSync(BASE_DIR).filter((file) => file.endsWith(".md"));
  const filesPaths = dir.map((v) => path.join(BASE_DIR, v));
  const parsed = filesPaths
    .map((path) => fs.readFileSync(path, "utf-8"))
    .map((v) => matter(v))
    .map((v, i) => {
      const stat = fs.statSync(filesPaths[i]);

      const path = filesPaths[i]!;
      const rawSlug = path.slice(path.indexOf("-") + 1, path.length);
      const slug = rawSlug.replace(".md", "");
      return {
        path,
        slug,
        stat,
        ...pick(v, "content", "data"),
      };
    })
    .sort((a, b) => a.stat.birthtimeMs - b.stat.birthtimeMs);
  console.log(parsed);

  return parsed;
}
