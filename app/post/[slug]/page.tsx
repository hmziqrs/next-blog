import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug } from "api";

export default async function Page({ params }: PostProps) {
  const data = await fetchPostBySlug(params.slug);

  return (
    <>
      <HeadMeta {...data} />
      <div className="flex-1 flex-col w-1">
        <h1>Hello this is post page</h1>
        <div className="w-auto  block">
          <pre>{JSON.stringify(data)}</pre>
        </div>
      </div>
    </>
  );
}
