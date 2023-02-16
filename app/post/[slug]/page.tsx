import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug } from "api";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import Image from "next/image";
import { typography } from "theme";
import { cx } from "alias";

export default async function Page({ params }: PostProps) {
  const detail = await fetchPostBySlug(params.slug);
  const { post, prev, next } = detail;

  return (
    <>
      <HeadMeta {...post} />
      <div className="my-4" />
      <Image
        src={"/banner.webp"}
        alt={post.data.title}
        width="1900"
        height="200"
      />
      <div className="mt-3" />
      <h1 className={typography.blog.title}>{post.data.title}</h1>
      <div className="mt-1" />
      <div className={cx("flex flex-row flex-wrap ", typography.blog.meta)}>
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
      <div className="mt-8" />
    </>
  );
}
