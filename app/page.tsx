import Image from "next/image";
import { fetchPosts } from "./data";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetchPosts();

  return (
    <div>
      <h1 className="text-red-500">This is blog </h1>
      {data.map((v) => (
        <h1 key={v.data.title}>{v.data.title}</h1>
      ))}
    </div>
  );
}
