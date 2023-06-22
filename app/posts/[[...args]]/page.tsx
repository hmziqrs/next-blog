import { fetchPosts } from "api";
import { PostsProps } from "./types";
import { paginatePosts, parseArgs } from "./utils";
import Container from "components/container";
import PostsFilters from "./posts-filters";
import PostCard from "components/post-card";
import Pagination from "./pagination";

export const dynamic = "error";
export const revalidate = false;
const dynamicParams = false;
export { dynamicParams };

// export async function generateStaticParams() {
//   const data = await fetchPosts();
//   const { max } = parsePages(data, "1");

//   const pages = new Array(max)
//     .fill(0)
//     .map((_, index) => (index + 1).toString());

//   return pages.map((slug) => ({ slug }));
// }

export default async function Home({ params }: PostsProps) {
  const data = await fetchPosts();
  const { args, indexes } = parseArgs(params.args);

  const fakePosts = new Array(100).fill(data[0]);
  const { currentPage, max, paginated } = paginatePosts(fakePosts, args.page);

  return (
    <Container>
      <PostsFilters args={args} indexes={indexes} />
      <div className="h-8" />
      <div className="grid grid-cols-2 gap-4">
        {paginated.map((post, index) => {
          return <PostCard key={index.toString()} post={post} />;
        })}
      </div>
      <div className="h-8" />
      <Pagination
        total={max}
        args={args}
        indexes={indexes}
        currentPage={currentPage}
      />
      <div className="h-8" />
    </Container>
  );
}
