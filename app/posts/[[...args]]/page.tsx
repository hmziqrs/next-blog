import { fetchPosts } from "api";
import { PostsProps } from "./types";
import { parseArgs } from "./utils";
import Container from "components/container";
import PostsFilters from "./posts-filters";
import PostCard from "components/post-card";

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

  const fakePosts = new Array(10).fill(data[0]);

  return (
    <Container>
      <PostsFilters args={args} params={params} indexes={indexes} />
      <div className="h-8" />
      <div className="grid grid-cols-2 gap-4">
        {fakePosts.map((post, index) => {
          return <PostCard key={index.toString()} post={post} />;
        })}
      </div>
      <div className="h-8" />
    </Container>
  );
}
