import { PostFile } from "types";

export default function HeadMeta(postFile: PostFile) {
  return (
    <>
      <title>{postFile.data.title}</title>
      <meta name="description" content={postFile.data.title} />
      <meta name="keywords" content="Keyword1, Keyword2" />
      <link rel="canonical" href="https://www.example.com/example-page" />
      <meta name="robots" content="index, follow" />
    </>
  );
}
