import { fetchPosts } from "api";
import { PostsProps } from "./types";
import { parseArgs } from "./utils";
import Container from "components/container";
import PostsFilters from "./posts-filters";

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
  console.log(args, indexes);

  const fakePosts = new Array(10).fill(data[0]);

  console.log(fakePosts.length);

  return (
    <Container>
      {/* <h1 className="text-3xl">Posts</h1> */}
      <PostsFilters args={args} params={params} indexes={indexes} />
    </Container>
  );
}
