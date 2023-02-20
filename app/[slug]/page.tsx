import Image from "next/image";
import { fetchPosts } from "api";
import Link from "next/link";
import dayjs from "dayjs";
import { cx } from "alias";
import Pagination from "./pagination";
import { getEnv, getSafePageNo } from "utils";
import { Post } from "types";

interface Props {
  params: {
    slug: string;
  };
}

export const dynamicParams = true;

// export async function generateStaticParams() {
//   console.log("generateStaticParams");

//   const data = await fetchPosts();

//   const parsed = parsePages(data, "1");
//   const slugs = new Array(parsed.max).fill(0).map((_, index) => {
//     const pageNo = (index + 1).toString();
//     return { slug: pageNo };
//   });

//   console.log(slugs);

//   return slugs;
// }

function parsePages(posts: Post[], rawCurrentPage: Props["params"]["slug"]) {
  const total = posts.length;
  const { PER_PAGE } = getEnv();
  const max = Math.ceil(total / PER_PAGE);
  const currentPage = getSafePageNo(max, rawCurrentPage);
  const offset = (currentPage - 1) * PER_PAGE;
  const paginated = posts.slice(offset, currentPage * PER_PAGE);

  return { paginated, max, currentPage };
}

export default async function Home({ params }: Props) {
  console.log("Home=params");
  console.log(params);

  const data = await fetchPosts();

  const { paginated, max, currentPage } = parsePages(data, params.slug);

  return (
    <>
      {paginated.map((post, i) => {
        const title = post.data.title;
        return (
          <Link
            key={post.path}
            href={post.slug}
            className={cx("block", "my-6", { "mt-0": !i })}
          >
            <Image
              src={"/banner.webp"}
              alt={post.data.title}
              width="1900"
              height="200"
            />
            <div className="my-3" />
            <h1 className="md:text-2xl text-lg font-medium">{title}</h1>
            <div className="my-1" />
            <div className="flex flex-row flex-wrap text-zinc-400 lines text-sm md:text-base">
              <p>{dayjs(post.stat.birthtime).format("MMM D, YYYY")}</p>
              <div className="mx-2" />
              <p>{Math.ceil(post.readTime.minutes)} minutes read</p>
            </div>
          </Link>
        );
      })}
      {max > 1 && (
        <>
          <Pagination currentPage={currentPage} total={max} />
          <div className="h-8" />
        </>
      )}
    </>
  );
}
