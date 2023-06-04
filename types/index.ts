import { Stats } from "fs"; // title: "This is example one UPDATE"
import { ReadTimeResults } from "reading-time";

export interface PostInterface {
  stat: Stats;
  name: string;
  translations: string[];
  files: {
    [lang: string]: PostFileInterface;
  };
}

export class Post implements PostInterface {
  stat: Stats;
  name: string;
  translations: string[];
  files: {
    [lang: string]: PostFileInterface;
  };
  constructor(post: PostInterface) {
    this.stat = post.stat;
    this.name = post.name;
    this.translations = post.translations;
    this.files = post.files;
  }

  getSlug(lang?: string): string {
    const suffix = lang ? `/${lang}` : "";
    return "post/" + this.name + suffix;
  }

  getPostFile(lang?: string): PostFileInterface {
    const langKey = lang || this.translations[0];
    return this.files[langKey] ?? this.files[this.translations[0]];
  }
}

export interface PostFileInterface {
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
