import { cx } from "alias";
import { fetchPosts } from "api";
import Container from "components/container";
import { sortBy } from "lodash";
import { Post } from "types";
import { getAsset } from "utils";
import Image from "next/image";

export async function RootPosts() {
  const latest = await fetchPosts();

  const posts = new Array(4).fill(latest[0]).slice(0, 4);

  return (
    <>
      <div className="my-10 bg-black/80 py-12">
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
      <div className="my-10 bg-black/80 py-12">
        <Container>
          <h2 className="text-2xl">Most viewed logs:</h2>
          <div className="h-4" />
          <div className="flex flex-row space-x-4">
            {posts.map((post) => {
              return <PostCard key={post.getSlug()} post={post} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  const file = post.getPostFile();

  const tags = sortBy(file.data.tags, (tag) => tag.length);

  return (
    <div
      className={cx(
        "bg-zinc-900 rounded-lg shadow-lg relative overflow-clip cursor-pointer",
        "hover:shadow-lg hover:shadow-white/10 transition-all duration-300 shadow-white/5 shadow"
      )}
    >
      <Image
        src={getAsset(file.data.bannerImage)}
        alt="ETO BLEH! 404"
        width={1200}
        height={600}
      />
      <div className="h-3" />
      <h2 className="text-base line-clamp-2 px-4">{file.data.title}</h2>
      <div className="overflow-scroll py-2 px-4 space-x-2">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="inline bg-zinc-800 text-zinc-100 rounded-full px-2 py-1 text-xs"
            >
              #{tag.toLowerCase()}
            </span>
          );
        })}
      </div>
      <div className="h-2" />
    </div>
  );
}
