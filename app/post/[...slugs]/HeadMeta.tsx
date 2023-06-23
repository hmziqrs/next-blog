import { PostFileInterface } from "types";

export default function HeadMeta(postFile: PostFileInterface) {
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
