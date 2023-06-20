import { ReadTimeResults } from "reading-time";

export interface PostInterface {
  name: string;
  translations: string[];
  files: {
    [lang: string]: PostFileInterface;
  };
}

export class Post implements PostInterface {
  name: string;
  translations: string[];
  files: {
    [lang: string]: PostFileInterface;
  };

  constructor(post: PostInterface) {
    this.name = post.name;
    this.translations = post.translations;
    this.files = post.files;
  }

  public getSlug(lang?: string): string {
    const suffix = lang ? `/${lang}` : "";
    return "post/" + this.name + suffix;
  }

  public getPostFile(lang?: string): PostFileInterface {
    const langKey = lang;
    const defaultLangKey = "en";
    const fallbackLangKey = this.translations[0];
    if (langKey && this.files[langKey]) return this.files[langKey];
    return this.files[defaultLangKey] || this.files[fallbackLangKey];
  }
}

export interface PostFileInterface {
  path: string;
  name: string;
  slug: string;
  content: string;
  readTime: ReadTimeResults;
  data: {
    title: string;
    description: string;
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
  BLAZE_BUCKET_URL: string;
}
