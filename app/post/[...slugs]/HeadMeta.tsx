import { PostFile, Post } from "lib/types";

interface PostHeadMetaProps {
  postFile: PostFile;
  post: Post;
  language?: string;
}

export default function HeadMeta({
  postFile,
  language,
  post,
}: PostHeadMetaProps) {
  return (
    <>
      {/* <meta name="last-updated" content="2023-06-28 14:23:28 UTC" /> */}
      {/* <meta name="head-cached-at" content="1687962208" /> */}

      <meta name="user-signed-in" content="false" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="description" content="description" />
      <meta name="keywords" content="keywords" />
      <meta name="author" content="author" />

      <meta property="og:url" content="url" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="title" />
      <meta property="og:description" content="description" />
      <meta property="og:site_name" content="TODO" />
      <meta property="og:image" content="bannerImage" />
      <meta property="og:image:alt" content="bannerImageAlt" />
      <meta property="og:locale" content="en_US" />

      <meta property="article:published_time" content="TODO" />
      <meta property="article:modified_time" content="TODO" />
      <meta property="article:author" content="TODO" />
      <meta property="article:section" content="TODO" />
      <meta property="article:tag" content="TODO" />
      <meta property="article:tag" content="TODO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ws" />
      <meta name="twitter:site:id" content="@ws" />
      <meta name="twitter:creator" content="@cc" />
      <meta name="twitter:creator:id" content="@cc" />
      <meta name="twitter:title" content="title" />
      <meta name="twitter:description" content="description" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content="url" />
      <meta name="twitter:image:alt" content="alt" />

      <meta name="title" content="title" />
      <meta property="al:web:url" content="url" />
      <meta name="referrer" content="unsafe-url" />

      <title>{postFile.data.title}</title>
      <link rel="canonical" href="url" />
    </>
  );
}
