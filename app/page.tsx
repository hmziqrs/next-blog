import Image from "next/image";
import { fetchPosts } from "api";
import Link from "next/link";
import dayjs from "dayjs";
import { cx } from "alias";

export default async function Home() {
  const data = await fetchPosts();

  return (
    <>
      <div className="my-4" />
      {data.map((v, i) => {
        const title = v.data.title;
        return (
          <Link
            key={v.path}
            href={v.slug}
            className={cx("block", { "my-8": i })}
          >
            <Image
              src={"/banner.webp"}
              alt={v.data.title}
              width="1900"
              height="200"
            />
            <div className="my-3" />
            <h1 className="text-2xl font-medium">{title}</h1>
            <div className="my-1" />
            <div className="flex flex-row flex-wrap text-zinc-400 lines">
              {/* <p>
                By <span className="font-semibold">{v.data.author}</span>
              </p> */}
              <p>{dayjs(v.stat.birthtime).format("MMM D, YYYY")}</p>
              <div className="mx-2" />
              <p>{Math.ceil(v.readTime.minutes)} minutes read</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
