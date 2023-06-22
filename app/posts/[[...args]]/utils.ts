import { PostsArgs, PostsArgsIndexes, PostsSorts } from "./types";
import { categories } from "lib/categories";

// export function parsePostsPages(
//   posts: Post[],
//   rawCurrentPage: PostsProps["params"]["slug"]
// ) {
//   const total = posts.length;
//   const { PER_PAGE } = getEnv();
//   const max = Math.ceil(total / PER_PAGE);
//   const currentPage = getSafePageNo(max, rawCurrentPage);
//   const offset = (currentPage - 1) * PER_PAGE;
//   const paginated = posts.slice(offset, currentPage * PER_PAGE);

//   return { paginated, max, currentPage };
// }

export function parseArgs(rawArgs: string[] = []) {
  const args = {} as PostsArgs;
  const argsIndex = {} as PostsArgsIndexes;

  for (let index = 0; index < rawArgs.length; index++) {
    const rawArg = rawArgs[index].toLowerCase();
    const categoryKeys = ["all", ...categories.map((cat) => cat.key)];
    const categoryCheck = categoryKeys.find(
      (cat) => cat === rawArg.toLowerCase()
    );
    const sortCheck = PostsSorts.find((sort) => sort === rawArg.toLowerCase());
    if (categoryCheck) {
      argsIndex.category = index;
      args.category = categoryCheck;
      continue;
    }

    if (sortCheck) {
      argsIndex.sort = index;
      args.sort = sortCheck;
      continue;
    }

    try {
      const page = parseInt(rawArg);
      argsIndex.page = index;
      if (page > 0) {
        args.page = page;
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!args.category) {
    args.category = "all";
    if (!argsIndex.category) {
      argsIndex.category = Object.keys(argsIndex).length;
    }
  }
  if (!args.sort) {
    args.sort = "latest";
    if (!argsIndex.sort) {
      argsIndex.sort = Object.keys(argsIndex).length;
    }
  }
  if (!args.page) {
    args.page = 1;
    if (!argsIndex.page) {
      argsIndex.page = Object.keys(argsIndex).length;
    }
  }
  return { args, indexes: argsIndex };
}
