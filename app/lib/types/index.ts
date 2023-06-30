import { ReadTimeResults } from "reading-time";
import { getEnv } from "utils";

export interface PostsArgs {
  page: number;
  category: string;
  sort: SortType;
}

export interface PostsArgsIndexes {
  page: number;
  category: number;
  sort: number;
}

export type PostsArgsKeys = keyof PostsArgs;

export const PostsSorts = ["latest", "oldest", "most-viewed"] as const;

export type SortType = (typeof PostsSorts)[number];

export interface PostInterface {
  name: string;
  translations: string[];
  files: {
    [lang: string]: PostFile;
  };
}

export class Post implements PostInterface {
  name: string;
  translations: string[];
  files: {
    [lang: string]: PostFile;
  };

  constructor(post: PostInterface) {
    this.name = post.name;
    this.translations = post.translations;
    this.files = post.files;
  }

  public getSlug(lang?: string): string {
    if (!lang) return `post/${this.name}`;
    return this.getPostFile(lang).getSlug();
  }

  public getSlugUrl(lang?: string): string {
    const domain = getEnv().DOMAIN;
    const slug = this.getSlug(lang);
    const url = `${domain}/${slug}`;
    return url;
  }

  getFiles(): PostFileInterface[] {
    return Object.values(this.files);
  }

  public getPostFile(lang?: string): PostFile {
    const langKey = lang;
    const defaultLangKey = "en";
    const fallbackLangKey = this.translations[0];
    if (langKey && this.files[langKey]) return this.files[langKey];
    return this.files[defaultLangKey] || this.files[fallbackLangKey];
  }
}

export class PostFile implements PostFileInterface {
  filePath: string;
  content: string;
  locale: string;
  readTime: ReadTimeResults;
  data: PostFileDataInterface;

  constructor(postFile: PostFileInterface) {
    this.filePath = postFile.filePath;
    this.content = postFile.content;
    this.readTime = postFile.readTime;
    this.data = postFile.data;
    this.locale = postFile.locale;
  }

  public getSlug(): string {
    const raw = this.filePath.replace(".md", "").split("/");
    const slug = raw[raw.length - 2];
    const url = `post/${slug}/${this.locale}`;
    return url;
  }

  public getSlugUrl(): string {
    const domain = getEnv().DOMAIN;
    const slug = this.getSlug();
    const url = `${domain}/${slug}`;
    return url;
  }
}

export interface PostFileInterface {
  filePath: string;
  locale: string;
  content: string;
  readTime: ReadTimeResults;
  data: PostFileDataInterface;
}

export interface PostFileDataInterface {
  title: string;
  description: string;
  author: string;
  category: string;
  image: string;
  bannerImage: string;
  bannerImageAlt: string;
  datePublished: string;
  dateModified: string;
  tags: string[];
  keywords: string[];
}

export interface PostWithPrevNext {
  prev: Post | null;
  next: Post | null;
  post: Post;
}

export interface PostAuthor {
  name: string;
  username: string;
  twitterUsername: string;
  twitterUserId: string;
}

export interface Env {
  DOMAIN: string;
  PER_PAGE: number;
  BLAZE_BUCKET_URL: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
}
