"use client";

import { useRouter } from "next/navigation";
import { categories } from "lib/categories";
import { PostsArgs, PostsArgsIndexes, PostsSorts } from "./types";
import Dropdown from "components/dropdown";
import { cx } from "alias";
import { buildParamsFromIndexes } from "./utils";

interface PostsFiltersProps {
  args: PostsArgs;
  indexes: PostsArgsIndexes;
}

export default function PostsFilters({ args, indexes }: PostsFiltersProps) {
  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];
  const router = useRouter();

  function navigate(newParams: string[]) {
    router.push(`/posts/${newParams.join("/")}`);
  }

  function onSortSelect(sort: string) {
    const newArgs = { ...args, sort };
    const params = buildParamsFromIndexes(newArgs, indexes);
    navigate(params);
  }

  function onCategorySelect(category: string) {
    const newArgs = { ...args, category };
    const params = buildParamsFromIndexes(newArgs, indexes);
    navigate(params);
  }

  return (
    <div className="flex flex-row justify-between items-end">
      <div className="flex flex-row space-x-2">
        {categoriesToRender.map((category) => {
          const isSelected = category.key === args.category.toLowerCase();
          return (
            <div
              key={category.key}
              onClick={() => onCategorySelect(category.key)}
              className={cx(
                "px-4 py-2  cursor-pointer rounded-md shadow shadow-white/0",
                "hover:bg-zinc-700 transition-all duration-300  hover:shadow-lg hover:shadow-white/5",
                isSelected ? "bg-zinc-700" : "bg-zinc-800"
              )}
            >
              <p className="text-sm">{category.label}</p>
            </div>
          );
        })}
      </div>
      <Dropdown
        title="Sort"
        items={PostsSorts}
        selected={args.sort}
        onSelect={onSortSelect}
      />
    </div>
  );
}
