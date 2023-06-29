import PostCard from "components/post-card";
import { PostWithPrevNext } from "types";
import { categories } from "data/categories";
import { cx } from "alias";
import { typography } from "data/typography";

interface PostSidebarProps {
  detail: PostWithPrevNext;
  className?: string;
}

export default function PostSidebar({ detail, className }: PostSidebarProps) {
  return (
    <div id="sidebar" className={cx("block", className)}>
      <h2 className={cx("font-medium", typography.subheading)}>
        Explore more posts
      </h2>
      <div className="my-4 h-[1px] bg-zinc-700" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
        {categories.map((category) => {
          return (
            <div key={category.key}>
              <h2 className="font-medium">{category.label}</h2>
              <div className="h-2" />
              <PostCard
                key={category.key}
                post={detail.post}
                className="block"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
