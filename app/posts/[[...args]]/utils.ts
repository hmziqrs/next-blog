import { Post, PostsArgs, PostsSorts } from "types";
import { categories } from "data/categories";
import { getEnv, getSafeArgs, getSafePageNo } from "utils";

export function paginatePosts(posts: Post[], rawCurrentPage: number) {
  const total = posts.length;
  const { PER_PAGE } = getEnv();
  const max = Math.ceil(total / PER_PAGE);
  const currentPage = getSafePageNo(max, rawCurrentPage);
  const offset = (currentPage - 1) * PER_PAGE;
  const paginated = posts.slice(offset, currentPage * PER_PAGE);

  return { paginated, max, currentPage };
}

export function parseArgs(rawArgs: string[] = []) {
  const args = {} as PostsArgs;

  for (let index = 0; index < rawArgs.length; index++) {
    const rawArg = rawArgs[index].toLowerCase();

    const categoryKeys = ["all", ...categories.map((cat) => cat.key)];
    const categoryCheck = categoryKeys.find(
      (cat) => cat === rawArg.toLowerCase()
    );
    const sortCheck = PostsSorts.find((sort) => sort === rawArg.toLowerCase());

    if (categoryCheck) {
      args.category = categoryCheck;
      continue;
    }

    if (sortCheck) {
      args.sort = sortCheck;
      continue;
    }

    try {
      const page = parseInt(rawArg);
      if (page > 0) {
        args.page = page;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return getSafeArgs(args);
}
