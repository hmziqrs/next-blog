import { PostFile, Post } from "types";

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
  const url = !language ? post.getSlugUrl() : postFile.getSlugUrl();
  const {
    title,
    description,
    datePublished,
    dateModified,
    bannerImage,
    bannerImageAlt,
  } = postFile.data;
  const keywords = postFile.data.keywords.join(", ");

  return (
    <>
      {/* <meta name="last-updated" content="2023-06-28 14:23:28 UTC" /> */}
      <meta name="user-signed-in" content="false" />
      {/* <meta name="head-cached-at" content="1687962208" /> */}

      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="TODO" />
      <meta property="og:image" content="TODO" />
      <meta property="og:image:alt" content="TODO" />
      <meta property="og:locale" content="en_US" />

      <meta property="article:published_time" content="TODO" />
      <meta property="article:modified_time" content="TODO" />
      <meta property="article:author" content="TODO" />
      <meta property="article:section" content="TODO" />
      <meta property="article:tag" content="TODO" />
      <meta property="article:tag" content="TODO" />

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
