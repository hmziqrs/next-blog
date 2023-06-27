import HeadMeta from "./HeadMeta";
import { PostProps } from "./types";
import { fetchPostBySlug, fetchPosts } from "api";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Container from "components/container";
import PostPrevNext from "./prev-next";
import { getAsset } from "utils";
import { categories } from "../../lib/categories";
import PostCard from "components/post-card";
import { cx } from "alias";
import { typography } from "lib/typography";

export const dynamic = "error";
export const revalidate = false;
const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  const data = await fetchPosts();
  const slugs: string[][] = [];
  data.forEach((post) => {
    slugs.push([post.name]);
    for (const translation of post.translations) {
      slugs.push([post.name, translation]);
    }
  });

  return slugs.map((slugs) => {
    return {
      slugs,
    };
  });
}

export default async function Page(props: PostProps) {
  const [slug, language] = props.params.slugs;
  const detail = await fetchPostBySlug(slug);
  const postFile = detail.post.getPostFile(language);
  const bannerImage = getAsset(detail.post.getPostFile().data.bannerImage);

  return (
    <>
      <HeadMeta {...postFile} />
      <Container className="flex flex-row space-x-6 items-stretch">
        <div id="post" className="flex flex-col flex-1 min-h-full">
          <Image
            src={bannerImage}
            alt={postFile.data.title}
            width="1200"
            height="630"
            className="h-[300px] object-cover"
          />
          <div className="mt-3" />
          <h1 className="font-medium">{postFile.data.title}</h1>
          <div className="mt-1" />
          <div
            className={cx(
              "flex flex-row flex-wrap text-zinc-400 lines",
              typography.small
            )}
          >
            {/* <p>{dayjs(postFile.stat.birthtime).format("MMM D, YYYY")}</p> */}
            <div className="mx-2" />
            <p>{Math.ceil(postFile.readTime.minutes)} minutes read</p>
          </div>
          <div className="mt-8" />
          <div className="w-auto  block">
            <article className="prose prose-invert">
              <ReactMarkdown>{postFile.content}</ReactMarkdown>
            </article>
          </div>
          <div className="flex flex-1" />
          <PostPrevNext detail={detail} />
          <div className="h-6" />
        </div>
        <div id="sidebar" className="flex flex-col">
          <h2 className={cx("font-medium", typography.subheading)}>
            Explore more posts
          </h2>
          <div className="my-4 h-[1px] bg-zinc-700" />
          {categories.map((category) => {
            return (
              <div key={category.key} className="mb-4">
                <h2 className="font-medium">{category.label}</h2>
                <div className="mt-2" />
                <PostCard post={detail.post} className="block w-64" />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
