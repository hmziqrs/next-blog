import { Stats } from "fs"; // title: "This is example one UPDATE"

export interface Post {
  path: string;
  slug: string;
  content: string;
  stat: Stats;
  data: {
    title: string;
    author: string;
    category: string;
    image: string;
    tags: string[];
  };
}
