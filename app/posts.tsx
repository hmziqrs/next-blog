import { cx } from "alias";
import { fetchPosts } from "api";
import Container from "components/container";
import { sortBy } from "lodash";
import { Post } from "types";
import PostTags from "./post-tags";

export async function RootPosts() {
  const latest = await fetchPosts();

  const posts = new Array(4).fill(latest[0]).slice(0, 4);

  return (
    <>
      <div className="my-10 bg-black/60 py-12">
        <Container>
          <h2 className="text-2xl">Latest logs:</h2>
          <div className="h-4" />
          <div className="flex flex-row space-x-4">
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

  const tags = sortBy(file.data.tags, (tag) => tag.length).slice(0, 4);

  return (
    <div
      className={cx(
        "bg-zinc-900 rounded-lg shadow-lg relative overflow-clip p-4"
      )}
    >
      <h2 className="text-base">{file.data.title}</h2>
      <p className="text-gray-500 text-sm">{file.data.description}</p>
      <div className="h-10" />
      <PostTags tags={tags} />
    </div>
  );
}
