import { Stats } from "fs"; // title: "This is example one UPDATE"
import { ReadTimeResults } from "reading-time";

export interface Post {
  path: string;
  name: string;
  slug: string;
  content: string;
  stat: Stats;
  readTime: ReadTimeResults;
  data: {
    title: string;
    author: string;
    category: string;
    image: string;
    tags: string[];
  };
}

export interface PostWithPrevNext {
  prev: Post | null;
  next: Post | null;
  post: Post;
}

export interface Env {
  PER_PAGE: number;
}
