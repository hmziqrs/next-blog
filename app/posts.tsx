import { fetchPosts } from "api";
import Container from "components/container";
import { Post } from "types";

export async function RootPosts() {
  const latest = await fetchPosts();
  console.log(latest);

  const posts = new Array(4).fill(latest[0]);

  return (
    <>
      <div className="my-10 bg-black/60 py-12">
        <Container>
          <h2 className="text-2xl">Latest logs:</h2>
          <div className="h-4" />
          <div className="flex flex-1 flex-row space-x-6">
            {posts.map((post) => {
              return <PostCard key={post.getSlug()} post={post} />;
            })}
          </div>
        </Container>
      </div>
      <div className="my-10 bg-black/60 py-12">
        <Container>
          <h2 className="text-2xl">Most Viewed logs:</h2>
        </Container>
      </div>
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  const file = post.getPostFile();

  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg ">
      <h2 className="text-base">{file.data.title}</h2>
      <p className="text-gray-500">{file.data.description}</p>
      <div className="h-2" />
      <div className="flex flex-wrap space-x-2 bg-red-700 content">
        {file.data.tags.map((tag) => {
          return (
            <div
              key={tag}
              className="bg-black/25 px-3 py-1 mt-2 text-sm cursor-pointer"
            >
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}
