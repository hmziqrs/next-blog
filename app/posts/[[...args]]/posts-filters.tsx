import { categories } from "lib/categories";
import { PostsSorts } from "./types";
import Dropdown from "components/dropdown";
import { PostsFiltersProps } from "./types";
import { getParamsFromArgsIndexes } from "./utils";
import Link from "next/link";
import Button from "components/button";

export default function PostsFilters({ args, indexes }: PostsFiltersProps) {
  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];
  const sortLinks = PostsSorts.map((sort) => {
    return getParamsFromArgsIndexes("sort", sort, args, indexes);
  });
  const categoryLinks = categoriesToRender.map((category) => {
    return getParamsFromArgsIndexes("category", category.key, args, indexes);
  });

  return (
    <div className="flex flex-row justify-between items-end">
      <div className="flex flex-row space-x-2">
        {categoriesToRender.map((category, index) => {
          const isSelected = category.key === args.category.toLowerCase();
          const link = categoryLinks[index];
          return (
            <Link href={link} key={category.key}>
              <Button isSelected={isSelected}>
                <p className="text-sm">{category.label}</p>
              </Button>
            </Link>
          );
        })}
      </div>
      <Dropdown
        title="Sort"
        links={sortLinks}
        items={PostsSorts}
        selected={args.sort}
      />
    </div>
  );
}
