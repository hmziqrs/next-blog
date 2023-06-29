import { cx } from "alias";
import Button from "components/button";
import SVGChevronArrow from "components/svg/down-arrow";
import { typography } from "data/typography";
import Link from "next/link";
import { PostWithPrevNext } from "lib/types";

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
    <div className="grid md:grid-cols-2 gap-4">
      {prev ? (
        <Link href={prev.getSlug()} className="block">
          <Button size="small" className={cx(typography.body)}>
            <SVGChevronArrow direction="left" />
            <div className="w-2" />
            <p className="flex-1 break-normal line-clamp-1 h-6 text-left">
              {prev.getPostFile().data.title}
            </p>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link href={next.getSlug()} className="block">
          <Button size="small" className={cx(typography.body)}>
            <p className="flex-1 break-normal line-clamp-1 h-6">
              {next.getPostFile().data.title}
            </p>
            <div className="w-2" />
            <SVGChevronArrow direction="right" />
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
