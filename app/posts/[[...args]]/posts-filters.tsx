"use client";

import { categories } from "lib/categories";
import { PostsArgs, PostsArgsIndexes, PostsProps, PostsSorts } from "./types";
import Dropdown from "components/dropdown";
import { cx } from "alias";
import { useRouter } from "next/navigation";

interface PostsFiltersProps {
  args: PostsArgs;
  indexes: PostsArgsIndexes;
  params: PostsProps["params"];
}

export default function PostsFilters({
  args,
  params,
  indexes,
}: PostsFiltersProps) {
  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];
  const router = useRouter();

  function navigate(newParams: string[]) {
    router.push(`/posts/${newParams.join("/")}`);
  }

  function onSortSelect(sort: string) {
    const newParams = [...params.args];
    newParams[indexes.sort] = sort;
    navigate(newParams);
  }

  function onCategorySelect(category: string) {
    const newParams = [...params.args];
    newParams[indexes.category] = category;
    navigate(newParams);
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
