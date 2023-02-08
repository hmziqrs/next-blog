import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug } from "api";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";

export default async function Page({ params }: PostProps) {
  const post = await fetchPostBySlug(params.slug);

  return (
    <>
      <HeadMeta {...post} />
      <div>
        <h1 className="text-3xl font-semibold">{post.data.title}</h1>
        <div className="mt-4" />
        <div className="flex flex-row flex-wrap text-zinc-400 lines text-lg">
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
      </div>
    </>
  );
}
