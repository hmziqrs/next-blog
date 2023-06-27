import Container from "components/container";
import { categories } from "lib/categories";
import { cx } from "alias";
import { getAsset, getPostsPath } from "utils";
import Link from "next/link";
import { typography } from "lib/typography";

export default function CategoriesSection() {
  return (
    <Container>
      <h1 className={cx("text-center font-medium", typography.heading)}>
        Explore
      </h1>
      <div className="h-8" />
      <div className="flex flex-row space-x-6">
        {categories.map((category) => {
          return (
            <Link
              href={getPostsPath({ category: category.key })}
              key={category.key}
              className={
                "group bg-red-500 flex-1 h-80 relative cursor-pointer rounded-2xl overflow-clip"
              }
            >
              <div
                className={cx(
                  "absolute inset-0 bg-cover bg-center clip",
                  "scale-[200%] translate-x-[50%] translate-y-[50%] transition-all duration-500 ease-in-out",
                  "group-hover:scale-125 group-hover:translate-x-[-10%] group-hover:translate-y-[-10%]"
                )}
                style={{
                  backgroundImage: `url(${getAsset(category.image.thumb)})`,
                }}
              />
              <div
                className={cx(
                  "absolute h-[200%] w-full transition-all duration-500 top-0 left-0",
                  "bg-gradient-to-b from-50% from-black via-transparent to-90% to-black",
                  "translate-y-0 group-hover:translate-y-[-50%]",
                  "opacity-80 group-hover:opacity-40x"
                )}
              />
              <div className="relative h-full flex flex-col items-center py-28 px-4">
                <h2 className={cx("text-center", typography.subheading)}>
                  {category.label}
                </h2>
                <div className="h-2" />
                <p className={cx("text-center", typography.small)}>
                  {category.short}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
