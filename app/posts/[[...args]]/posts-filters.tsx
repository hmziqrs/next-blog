import { categories } from "lib/categories";
import Dropdown from "components/dropdown";
import { PostsFiltersProps } from "./types";
import Link from "next/link";
import Button from "components/button";
import { getPostsPath } from "utils";
import { PostsSorts } from "types";
import { typography } from "lib/typography";

export default function PostsFilters({ args }: PostsFiltersProps) {
  const categoriesToRender = [{ key: "all", label: "All" }, ...categories];
  const sortLinks = PostsSorts.map((sort) => {
    return getPostsPath({ ...args, sort, page: 1 });
  });
  const categoryLinks = categoriesToRender.map((category) => {
    return getPostsPath({ ...args, category: category.key, page: 1 });
  });

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="hidden sm:flex flex-row space-x-2">
        {categoriesToRender.map((category, index) => {
          const isSelected = category.key === args.category.toLowerCase();
          const link = categoryLinks[index];
          return (
            <Link href={link} key={category.key}>
              <Button isSelected={isSelected}>
                <p className={typography.small}>{category.label}</p>
              </Button>
            </Link>
          );
        })}
      </div>
      <Dropdown
        title="Category"
        className="sm:hidden"
        links={categoryLinks}
        selected={args.category}
        items={categoriesToRender.map((category) => category.label)}
      />
      <Dropdown
        title="Sort"
        position="right"
        links={sortLinks}
        className="shrink-0"
        selected={args.sort}
        items={[...PostsSorts]}
      />
    </div>
  );
}
