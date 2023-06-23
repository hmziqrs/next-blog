import Link from "next/link";
import { PostsPaginationButtonProps, PostsPaginationProps } from "./types";
import Button from "components/button";
import { getPostsPath } from "utils";

export default function Pagination({
  args,
  currentPage,
  total,
}: PostsPaginationProps) {
  const rawPages = new Array(Math.min(3, total));
  const pages = rawPages
    .fill(0)
    .map((_, index) => {
      const prevAndNext = currentPage + index - 1;
      const onlyPrev = currentPage - 2 + index;
      const def = currentPage + index;
      if (currentPage > 1 && currentPage < total) return prevAndNext;
      if (currentPage === total) return onlyPrev;
      return def;
    }) // create array of previous and next pages
    .filter((value) => {
      const notCurrentPage = value !== currentPage; // remove current page
      const firstAndLast = value !== 1 && value !== total; // remove first and last page
      const minMaxCheck = value > 0 && value < total; // remove pages that are out of range
      const checks = [notCurrentPage, firstAndLast, minMaxCheck];
      const check = checks.every((v) => v);
      return check;
    });

  return (
    <>
      <div className="flex items-end justify-end space-x-2">
        {currentPage > 1 && <NavigationButton page={1} args={args} />}
        {pages.map((page) => {
          return (
            <NavigationButton key={page.toString()} page={page} args={args} />
          );
        })}
        {currentPage < total && <NavigationButton page={total} args={args} />}
      </div>
    </>
  );
}

function NavigationButton({ page, args }: PostsPaginationButtonProps) {
  const link = getPostsPath({ ...args, page });
  return (
    <Link
      href={link}

      // className="border-2 w-10 h-10 flex items-center justify-center cursor-pointer mx-2 rounded-lg border-zinc-700 hover:border-zinc-600 transition-all duration-500"
    >
      <Button className="w-12">
        <span>{page}</span>
      </Button>
    </Link>
  );
}
