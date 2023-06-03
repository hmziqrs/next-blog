import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug, fetchPosts } from "api";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "error";
export const revalidate = false;
const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  const data = await fetchPosts();
  return data.map((post) => {
    return {
      slug: post.name,
    };
  });
}

export default async function Page(props: PostProps) {
  const detail = await fetchPostBySlug(props.params.slug);
  const { post, prev, next } = detail;

  return (
    <>
      <HeadMeta {...post} />
      <Image
        src={"/banner.webp"}
        alt={post.data.title}
        width="1900"
        height="200"
      />
      <div className="mt-3" />
      <h1 className="md:text-2xl text-lg font-medium">{post.data.title}</h1>
      <div className="mt-1" />
      <div className="flex flex-row flex-wrap text-zinc-400 lines text-sm md:text-base">
        <p>{dayjs(post.stat.birthtime).format("MMM D, YYYY")}</p>
        <div className="mx-2" />
        <p>{Math.ceil(post.readTime.minutes)} minutes read</p>
      </div>
      <div className="mt-8" />
      <div className="w-auto  block">
        <article className="prose prose-invert">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
      {(prev || next) && (
        <>
          <div className="h-4" />
          <div className="flex flex-col md:flex-row">
            {prev ? (
              <Link
                href={prev.slug}
                className="text-neutral-300 hover:text-zinc-400 flex flex-row flex-1 items-center stroke-neutral-300 hover:stroke-neutral-400 transition-all"
              >
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 7L9 12L14 17"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="w-1" />
                <p className="flex-1 break-normal line-clamp-1 h-6">
                  {prev.data.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {next ? (
              <Link
                href={next.slug}
                className="text-neutral-300 hover:text-zinc-400 flex flex-row-reverse flex-1 items-center stroke-neutral-300 hover:stroke-neutral-400 transition-all"
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M14 7L9 12L14 17"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="w-1" />
                <p className="flex-1 break-normal line-clamp-1 h-6 text-right">
                  {next.data.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </>
      )}
      <div className="h-6" />
    </>
  );
}
