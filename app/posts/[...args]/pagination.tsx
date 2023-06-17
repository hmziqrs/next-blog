"use client";

import { useRouter } from "next/navigation";
import { getSafePageNo } from "utils";

interface Props {
  currentPage: number;
  total: number;
}

export const dynamic = "force-dynamic";

export default function Pagination({ currentPage, total }: Props) {
  const router = useRouter();

  function navigate(page: number) {
    const pageNo = getSafePageNo(total, page).toString();
    const path = "/" + pageNo;
    router.push(path);
  }

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
      <div className="flex items-end justify-end">
        {currentPage > 1 && (
          <NavigationButton action={() => navigate(1)} label="1" />
        )}
        {pages.map((page) => {
          return (
            <NavigationButton
              key={page.toString()}
              action={() => navigate(page)}
              label={page.toString()}
            />
          );
        })}
        {currentPage < total && (
          <NavigationButton
            action={() => navigate(total)}
            label={total.toString()}
          />
        )}
      </div>
    </>
  );
}

function NavigationButton({
  label,
  action,
}: {
  label: string;
  action: () => void;
}) {
  return (
    <div
      onClick={action}
      className="border-2 w-10 h-10 flex items-center justify-center cursor-pointer mx-2 rounded-lg border-zinc-700 hover:border-zinc-600 transition-all duration-500"
    >
      <p className="text-xs">{label}</p>
    </div>
  );
}
