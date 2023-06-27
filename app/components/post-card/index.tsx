import { cx } from "alias";
import { sortBy } from "lodash";
import { Post } from "types";
import { getAsset } from "utils";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  const file = post.getPostFile();

  const tags = sortBy(file.data.tags, (tag) => tag.length);

  return (
    <Link
      href={post.getSlug()}
      className={cx(
        "bg-zinc-900 rounded-lg shadow-lg relative overflow-clip cursor-pointer ",
        "hover:shadow-lg hover:shadow-white/10 transition-all duration-300 shadow-white/5 shadow",
        className
      )}
    >
      <Image
        alt={file.data.title}
        style={{ objectFit: "cover" }}
        src={getAsset(file.data.bannerImage)}
        width={1200}
        height={100}
      />
      <div className="h-3" />
      <h2 className="line-clamp-2 px-4">{file.data.title}</h2>
      <div className="overflow-scroll py-2 px-4 space-x-2">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="inline bg-zinc-800 text-zinc-100 rounded-full px-2 py-1 text-xs"
            >
              #{tag.toLowerCase()}
            </span>
          );
        })}
      </div>
      <div className="h-2" />
    </Link>
  );
}
