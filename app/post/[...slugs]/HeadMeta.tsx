import { PostFile } from "types";

export default function HeadMeta(postFile: PostFile) {
  // const slug = postFile.getSlug();
  // console.log("slug", postFile);

  return (
    <>
      {/* <meta name="last-updated" content="2023-06-28 14:23:28 UTC" /> */}
      <meta name="user-signed-in" content="false" />
      {/* <meta name="head-cached-at" content="1687962208" /> */}

      <title>{postFile.data.title}</title>
      <meta name="description" content={postFile.data.title} />
      <meta name="keywords" content="Keyword1, Keyword2" />
      <link rel="canonical" href="https://www.example.com/example-page" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
    </>
  );
}
