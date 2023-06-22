export interface PostsProps {
  params: {
    args: string[];
  };
}

export interface PostsArgs {
  page: number;
  category: string;
  sort: SortType;
}

export interface PostsArgsIndex {
  page: number;
  category: number;
  sort: number;
}

export const PostsSorts = ["latest", "oldest", "most-viewed"];

export type SortType = (typeof PostsSorts)[number];
