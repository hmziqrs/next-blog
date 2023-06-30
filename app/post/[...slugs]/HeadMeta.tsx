import { PostFile, Post } from "lib/types";

import * as utils from "./utils";

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
  const data = utils.metaDataGenerator(post, postFile, language);
  const metaMap = utils.metaKeysMap();

  return (
    <>
      {/* <meta name="last-updated" content="2023-06-28 14:23:28 UTC" /> */}
      {/* <meta name="head-cached-at" content="1687962208" /> */}

      <meta name="user-signed-in" content="false" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      {metaMap.map((meta) => {
        const content = data[meta.propContentKey];
        // if (!content) return null;

        const object = { [meta.propKeyName]: meta.propKeyValue, content };

        return <meta key={meta.propKeyValue} {...object} />;
      })}
      <title>{postFile.data.title}</title>
      <link rel="canonical" href={data.url} />
    </>
  );
}
