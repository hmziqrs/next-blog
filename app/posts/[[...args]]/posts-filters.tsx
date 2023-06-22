import { categories } from "lib/categories";
import { PostsSorts } from "./types";
import Dropdown from "components/dropdown";
import { cx } from "alias";
import { PostsFiltersProps } from "./types";
import { getParamsFromArgsIndexes } from "./utils";

export default function PostsFilters({ args, indexes }: PostsFiltersProps) {
  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];
  const links = PostsSorts.map((sort) => {
    return getParamsFromArgsIndexes("sort", sort, args, indexes);
  });

  return (
    <div className="flex flex-row justify-between items-end">
      <div className="flex flex-row space-x-2">
        {categoriesToRender.map((category) => {
          const isSelected = category.key === args.category.toLowerCase();
          return (
            <div
              key={category.key}
              // onClick={() => onSelect("category", category.key)}
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
        links={links}
        items={PostsSorts}
        selected={args.sort}
      />
    </div>
  );
}
