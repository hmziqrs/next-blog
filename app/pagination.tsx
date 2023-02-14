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

  return (
    <>
      <div className="flex items-end justify-end">
        {currentPage > 1 && (
          <NavigationButton
            action={() => navigate(currentPage - 1)}
            label="<"
          />
        )}
        {currentPage > 1 && (
          <NavigationButton action={() => navigate(1)} label="1" />
        )}
        <NavigationButton action={() => navigate(2)} label="2" />
        <NavigationButton
          action={() => navigate(total)}
          label={total.toString()}
        />
        {currentPage < total && (
          <NavigationButton
            action={() => navigate(currentPage + 1)}
            label=">"
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
