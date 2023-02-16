"use client";

import { useRouter, usePathname } from "next/navigation";
import qs from "query-string";
import { getSafePageNo } from "utils";

interface Props {
  currentPage: number;
  total: number;
}

export const dynamic = "force-dynamic";

export default function Pagination({ currentPage, total }: Props) {
  const router = useRouter();
  const pathName = usePathname();

  function navigate(page: number) {
    const params = { page: getSafePageNo(total, page).toString() };
    const path = pathName! + "?" + qs.stringify(params);
    router.push(path);
  }

  if (total === 1) {
    return <div />;
  }

  const rawPages = new Array(Math.min(3, total));
  const pages = rawPages
    .fill(currentPage)
    .map((v, i) => {
      const prevAndNext = v + i - 1;
      const onlyPrev = v - 2 + i;
      const def = v + i;
      if (currentPage > 1 && currentPage < total) {
        return prevAndNext;
      }
      if (currentPage === total) {
        return onlyPrev;
      }
      return def;
    }) // create array of previous and next pages
    .filter((v) => {
      const cp = v !== currentPage; // remove current page
      const fnl = v !== 1 && v !== total; // remove first and last page
      const gnl = v > 0 && v < total; // remove pages that are out of range
      const check = cp && fnl && gnl;

      return check;
    });

  return (
    <>
      <div className="flex items-end justify-end">
        {currentPage > 1 && (
          <NavigationButton action={() => navigate(1)} label="1" />
        )}
        {pages.map((v) => {
          return (
            <NavigationButton
              key={v.toString()}
              action={() => navigate(v)}
              label={v}
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
