import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug } from "api";

export default async function Page({ params }: PostProps) {
  const data = await fetchPostBySlug(params.slug);

  return (
    <>
      <HeadMeta {...data} />
      <div>
        <article className="prose">{data.content}</article>
      </div>
    </>
  );
}
