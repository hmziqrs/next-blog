import Container from "components/container";
import { categories } from "./lib/categories";
import { cx } from "alias";

export default function RootCategoriesSection() {
  return (
    <Container>
      <h1 className="text-center text-4xl font-medium">Categories</h1>
      <div className="h-8" />
      <div className="flex flex-row space-x-6">
        {categories.map((category) => {
          // style={{ backgroundImage: `url(${category.image.thumb})` }}
          return (
            <div
              key={category.key}
              className={
                "group bg-red-500 flex-1 h-80 relative cursor-pointer rounded-2xl overflow-clip"
              }
            >
              <div
                className={cx(
                  "absolute inset-0 bg-cover bg-center",
                  "scale-[200%] translate-x-[50%] translate-y-[50%] transition-all duration-500 ease-in-out",
                  "group-hover:scale-125 group-hover:translate-x-[-10%] group-hover:translate-y-[-10%]"
                )}
                style={{
                  backgroundImage: `url(${category.image.thumb})`,
                }}
              />
              <div className="absolute inset-0 bg-black opacity-80 transition-all duration-500 group-hover:opacity-20" />
              <div className="relative block">
                <h2>{category.label}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
