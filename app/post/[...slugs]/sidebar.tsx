import PostCard from "components/post-card";
import { PostWithPrevNext } from "types";
import { categories } from "lib/categories";
import { cx } from "alias";
import { typography } from "lib/typography";

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
      <div className="grid grid-cols-2 gap-6 md:block md:space-y-6">
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
