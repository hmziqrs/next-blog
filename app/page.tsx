import Image from "next/image";
import styles from "./page.module.css";
import { fetchPosts } from "api";
import Link from "next/link";

export default async function Home() {
  const data = await fetchPosts();

  return (
    <div>
      <h1 className="text-red-500">This is blog </h1>
      {data.map((v) => (
        <Link key={v.path} href={v.slug}>
          <h1>{v.data.title}</h1>
        </Link>
      ))}
    </div>
  );
}
