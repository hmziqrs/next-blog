import { Env, PostsArgs, PostsArgsIndexes } from "types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSafePageNo(max: number, page?: any) {
  if (Array.isArray(page)) return 1;
  const parsed = parseInt(page || "1", 10);
  const safe = Math.min(Math.max(1, parsed), max);
  return isNaN(safe) ? 1 : safe;
}

export function getEnv(): Env {
  return {
    PER_PAGE: parseInt(process.env.NEXT_PUBLIC_PER_PAGE || "10", 10),
    BLAZE_BUCKET_URL: process.env.BLAZE_BUCKET_URL || "",
    DOMAIN: process.env.DOMAIN || "http://localhost:3000",
  };
}

export function getBlazeAsset(asset: string): string {
  return `${getEnv().BLAZE_BUCKET_URL}${asset}`;
}

export function getAsset(asset: string): string {
  return getBlazeAsset(asset);
}

export function getSafeArgs(newArgs: Partial<PostsArgs>): PostsArgs {
  return {
    category: "all",
    sort: "latest",
    page: 1,
    ...newArgs,
  };
}

export function getArgsArray(args: PostsArgs): string[] {
  const indexes: PostsArgsIndexes = {
    category: 0,
    sort: 1,
    page: 2,
  };
  const params = new Array(Object.keys(indexes).length).fill("");
  for (const [key, value] of Object.entries(args)) {
    const index = indexes[key as keyof PostsArgs];
    if (index === undefined) continue;
    params[index] = value as string;
  }

  return params;
}

export function getPostsPath(newArgs: Partial<PostsArgs>): string {
  const args: PostsArgs = getSafeArgs(newArgs);
  const params = getArgsArray(args);

  const path = `/posts/${params.join("/")}`;
  return path;
}
