import { categories } from "lib/categories";
import Dropdown from "components/dropdown";
import { PostsFiltersProps } from "./types";
import Link from "next/link";
import Button from "components/button";
import { getPostsPath } from "utils";
import { PostsSorts } from "types";

export default function PostsFilters({ args }: PostsFiltersProps) {
  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];
  const sortLinks = PostsSorts.map((sort) => {
    return getPostsPath({ ...args, sort, page: 1 });
  });
  const categoryLinks = categoriesToRender.map((category) => {
    return getPostsPath({ ...args, category: category.key, page: 1 });
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
        selected={args.sort}
        items={[...PostsSorts]}
      />
    </div>
  );
}
