import { authors } from "data/authors";
import { Post, PostFile } from "lib/types";

interface MetaTag {
  propKeyName: string;
  propKeyValue: string;

  propContentKey: string;
}

export function metaDataGenerator(
  post: Post,
  postFile: PostFile,
  language?: string
): { [key: string]: string } {
  const url = !language ? post.getSlugUrl() : postFile.getSlugUrl();
  const {
    author,
    title,
    description,
    datePublished,
    dateModified,
    bannerImage,
    bannerImageAlt,
    category,
  } = postFile.data;
  const keywords = postFile.data.keywords.join(", ");
  const tags = postFile.data.tags.join(", ");

  const postAuthor = authors.find((a) => a.username === author);

  const metaData = {
    author,
    title,
    description,
    datePublished,
    dateModified,
    bannerImage,
    bannerImageAlt,
    keywords,
    url,
    tags,
    category,
    type: "article",
    siteName: "Next blogs",
    webTwitterUsername: postAuthor?.twitterUsername ?? "TWITTER_AUTHOR_TODO",
    webTwitterId: postAuthor?.twitterUserId ?? "TWITTER_AUTHOR_TODO",
    authorTwitterUsername: "TWITTER_AUTHOR_TODO",
    authorTwitterId: "TWITTER_AUTHOR_ID",
    twitterCard: "summary_large_image",
    locale: language ?? "en",
  };

  return metaData as { [key: string]: string };
}

export function metaKeysMap() {
  const maps: MetaTag[] = [
    {
      propKeyName: "name",
      propKeyValue: "description",
      propContentKey: "description",
    },
    {
      propKeyName: "name",
      propKeyValue: "category",
      propContentKey: "category",
    },
    {
      propKeyName: "name",
      propKeyValue: "keywords",
      propContentKey: "keywords",
    },
    {
      propKeyName: "name",
      propKeyValue: "tags",
      propContentKey: "tags",
    },
    {
      propKeyName: "name",
      propKeyValue: "author",
      propContentKey: "author",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:url",
      propContentKey: "url",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:type",
      propContentKey: "type",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:title",
      propContentKey: "title",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:description",
      propContentKey: "description",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:site_name",
      propContentKey: "siteName",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:image",
      propContentKey: "bannerImage",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:image:alt",
      propContentKey: "bannerImageAlt",
    },
    {
      propKeyName: "property",
      propKeyValue: "og:locale",
      propContentKey: "locale",
    },
    {
      propKeyName: "property",
      propKeyValue: "article:published_time",
      propContentKey: "datePublished",
    },
    {
      propKeyName: "property",
      propKeyValue: "article:modified_time",
      propContentKey: "dateModified",
    },
    {
      propKeyName: "property",
      propKeyValue: "article:author",
      propContentKey: "author",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:site",
      propContentKey: "webTwitterUsername",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:site:id",
      propContentKey: "webTwitterId",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:creator",
      propContentKey: "authorTwitterUsername",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:creator:id",
      propContentKey: "authorTwitterId",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:title",
      propContentKey: "title",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:description",
      propContentKey: "description",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:card",
      propContentKey: "twitterCard",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:image:src",
      propContentKey: "bannerImage",
    },
    {
      propKeyName: "name",
      propKeyValue: "twitter:image:alt",
      propContentKey: "bannerImageAlt",
    },
    {
      propKeyName: "name",
      propKeyValue: "title",
      propContentKey: "title",
    },
    {
      propKeyName: "property",
      propKeyValue: "al:web:url",
      propContentKey: "url",
    },
  ];

  return maps;
}
