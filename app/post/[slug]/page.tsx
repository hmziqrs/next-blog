import Image from "next/image";
import Link from "next/link";
import { PostProps } from "./types";
import { fetchPostBySlug } from "api";

export default async function Home({ params }: PostProps) {
  const data = await fetchPostBySlug(params.slug);

  return (
    <div className="flex">
      <h1>Hello this is post page</h1>
      <pre className="w-auto  block">{JSON.stringify(data)}</pre>
    </div>
  );
}
