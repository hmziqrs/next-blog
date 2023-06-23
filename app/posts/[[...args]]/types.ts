import { PostsArgs } from "types";

interface PostsArgsAndIndexes {
  args: PostsArgs;
}

export type PostsFiltersProps = PostsArgsAndIndexes;

export interface PostsPaginationProps extends PostsArgsAndIndexes {
  currentPage: number;
  total: number;
}

export interface PostsPaginationButtonProps extends PostsArgsAndIndexes {
  page: number;
}

export interface PostsProps {
  params: {
    args?: string[];
  };
}
