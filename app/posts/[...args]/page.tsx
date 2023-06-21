import Image from "next/image";
import { fetchPosts } from "api";
import Link from "next/link";
import dayjs from "dayjs";
import { cx } from "alias";
import Pagination from "./pagination";
import { getEnv, getSafePageNo } from "utils";
import { Post } from "types";
import { PostsProps } from "./types";
import { parseArgs } from "./utils";
import Container from "components/container";
import { categories } from "lib/categories";

export const dynamic = "error";
export const revalidate = false;
const dynamicParams = false;
export { dynamicParams };

// export async function generateStaticParams() {
//   const data = await fetchPosts();
//   const { max } = parsePages(data, "1");

//   const pages = new Array(max)
//     .fill(0)
//     .map((_, index) => (index + 1).toString());

//   return pages.map((slug) => ({ slug }));
// }

export default async function Home({ params }: PostsProps) {
  const data = await fetchPosts();

  const { args, indexes } = parseArgs(params.args);
  console.log(args, indexes);

  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];

  return (
    <Container>
      {/* <h1 className="text-3xl">Posts</h1> */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2>Categories</h2>
          <div className="flex flex-row flex-wrap space-x-2">
            {categoriesToRender.map((category) => {
              return (
                <div
                  key={category.key}
                  className="px-4 py-2 bg-zinc-800 cursor-pointer"
                >
                  <p className="text-sm">{category.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Sort</h2>
          <div></div>
        </div>
      </div>
    </Container>
  );
}
