import { Post, PostFile } from "types";

interface MetaTag {
  propKeyName: string;
  propKeyValue: string;

  propContentKey: string;
}

export function metaDataGenerator(
  post: Post,
  postFile: PostFile,
  language: string
) {
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

  const metaData = {
    title,
    description,
    datePublished,
    dateModified,
    bannerImage,
    bannerImageAlt,
    keywords,
    url,
    type: "article",
    locale: language ?? "en",
  };

  return metaData;
}

export function metaKeysMapp() {
  const map = {
    "og:title": "title",
    "og:description": "description",
    "og:image": "bannerImage",
    "og:image:alt": "bannerImageAlt",
    "og:url": "url",
    "og:locale": "locale",
    "article:published_time": "datePublished",
    "article:modified_time": "dateModified",
    "article:tag": "keywords",
  };
}
