import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_DIR = "./data";

export async function fetchPosts() {
  const dir = fs.readdirSync(BASE_DIR);
  const filesPaths = dir.map((v) => path.join(BASE_DIR, v));
  const files = filesPaths.map((path) => fs.readFileSync(path, "utf-8"));
  const parsed = files.map((v) => matter(v)).map((v) => v);
  console.log(parsed);

  return parsed;
}
