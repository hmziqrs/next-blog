import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug } from "api";

export default async function Page({ params }: PostProps) {
  const data = await fetchPostBySlug(params.slug);

  return (
    <>
      <HeadMeta {...data} />
      <div>
        <h1>Hello this is post page</h1>
        <div className="w-auto  block">
          <pre>{data.content}</pre>
        </div>
      </div>
    </>
  );
}
