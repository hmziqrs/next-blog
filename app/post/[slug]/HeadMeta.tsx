import { Post } from "types";

export default function HeadMeta(post: Post) {
  return (
    <>
      <title>{post.data.title}</title>
      <meta name="description" content={post.data.title} />
      <meta name="keywords" content="Keyword1, Keyword2" />
      <link rel="canonical" href="https://www.example.com/example-page" />
      <meta name="robots" content="index, follow" />
    </>
  );
}
