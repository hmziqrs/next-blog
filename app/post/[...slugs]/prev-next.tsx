import Link from "next/link";
import { PostWithPrevNext } from "types";

interface PostPrevNext {
  detail: PostWithPrevNext;
}

export default function PostPrevNext({ detail }: PostPrevNext) {
  const prev = detail.prev;
  const next = detail.next;

  if (!(prev || next)) {
    return <div />;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row">
        {prev ? (
          <Link
            href={prev.getSlug()}
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
              {prev.getPostFile().data.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={next.getSlug()}
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
              {next.getPostFile().data.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
// return (
//             {(prev || next) && (
//       <>

//     )}
// );
