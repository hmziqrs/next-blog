interface PostsArgsAndIndexes {
  args: PostsArgs;
  indexes: PostsArgsIndexes;
}

export type PostsFiltersProps = PostsArgsAndIndexes;

export interface PostsProps {
  params: {
    args?: string[];
  };
}

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

export const PostsSorts = ["latest", "oldest", "most-viewed"];

export type SortType = (typeof PostsSorts)[number];
