import { cx } from "alias";
import dayjs from "dayjs";
import { typography } from "lib/typography";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PostWithPrevNext, PostFileInterface } from "types";
import { getAsset } from "utils";
import rehypeRaw from "rehype-raw";

import PostPrevNext from "./prev-next";
import Button from "components/button";

interface PostArticleContentProps {
  detail: PostWithPrevNext;
  postFile: PostFileInterface;
}

export default function PostArticleContent({
  detail,
  postFile,
}: PostArticleContentProps) {
  const bannerImage = getAsset(detail.post.getPostFile().data.bannerImage);
  const published = dayjs(postFile.data.datePublished).format("MMM D, YYYY");

  const pills: string[] = [
    postFile.data.category,
    `Published ${published}`,
    `${Math.ceil(postFile.readTime.minutes)} mins read`,
  ];

  if (postFile.data.dateModified) {
    const modified = dayjs(postFile.data.dateModified).format("MMM D, YYYY");
    pills.push(`Modified ${modified}`);
  }
  return (
    <div
      id="post"
      className={cx("md:col-span-5", "flex flex-1 flex-col min-h-full")}
    >
      <div className="relative h-52 md:h-72">
        <Image
          fill
          src={bannerImage}
          alt={postFile.data.title}
          className="object-cover relative"
        />
      </div>
      <div className="h-6" />
      <h1 className={cx("font-medium", typography.heading)}>
        {postFile.data.title}
      </h1>
      <div className="h-2" />
      <p className={cx(typography.body, "text-zinc-400")}>
        {postFile.data.description}
      </p>
      <div className="h-2" />
      <div className="flex flex-row flex-wrap space-x-3">
        {pills.map((pill) => {
          return (
            <Button
              key={pill}
              size="small"
              className={cx(typography.tiny, "font-medium text-zinc-300 mb-3")}
            >
              {pill}
            </Button>
          );
        })}
      </div>
      <div className="h-4" />
      <article id="article">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {postFile.content}
        </ReactMarkdown>
      </article>
      <div className="flex flex-1" />
      <div className="h-12" />
      <PostPrevNext detail={detail} />
    </div>
  );
}
