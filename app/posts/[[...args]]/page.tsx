import { fetchPosts } from "api";
import { PostsProps } from "./types";
import { paginatePosts, parseArgs } from "./utils";
import Container from "components/container";
import PostsFilters from "./posts-filters";
import PostCard from "components/post-card";
import Pagination from "./pagination";
import { categories } from "data/categories";
import { PostsSorts } from "types";
import { getArgsArray } from "utils";

export const dynamic = "error";
export const revalidate = false;
const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  const data = await fetchPosts();
  const categoryKeys = ["all", ...categories.map((category) => category.key)];
  const pages: string[][] = [];

  const fakeData = new Array(100).fill(data[0]);

  categoryKeys.forEach((category) => {
    PostsSorts.forEach((sort) => {
      const args = { category, sort };
      const { max } = paginatePosts(fakeData, 1);
      for (let page = 1; page <= max; page++) {
        const params = getArgsArray({ ...args, page });
        pages.push(params);
      }
    });
  });

  const parsed = pages.map((args) => {
    return {
      args: args.map((v) => v.toString()),
    };
  });

  return parsed;
}

export default async function Home({ params }: PostsProps) {
  const data = await fetchPosts();

  const args = parseArgs(params.args);
  const fakePosts = new Array(100).fill(data[0]);
  const { currentPage, max, paginated } = paginatePosts(fakePosts, args.page);

  return (
    <Container>
      <PostsFilters args={args} />
      <div className="h-8" />
      <div className="grid sm:grid-cols-2 gap-5">
        {paginated.map((post, index) => {
          return <PostCard key={index.toString()} post={post} />;
        })}
      </div>
      <div className="h-8" />
      <Pagination total={max} args={args} currentPage={currentPage} />
      <div className="h-8" />
    </Container>
  );
}
