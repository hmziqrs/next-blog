import { fetchPostBySlug, fetchPosts } from "api";
import Container from "components/container";

import PostArticleContent from "./article-content";
import PostSidebar from "./sidebar";
import HeadMeta from "./HeadMeta";

export const dynamic = "error";
export const revalidate = false;
const dynamicParams = false;
export { dynamicParams };

import "./styles.css";

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

interface PostPageProps {
  params: {
    slugs: string[];
  };
}

export default async function Page(props: PostPageProps) {
  const [slug, language] = props.params.slugs;
  const detail = await fetchPostBySlug(slug);
  const postFile = detail.post.getPostFile(language);

  return (
    <>
      <HeadMeta language={language} postFile={postFile} post={detail.post} />
      <Container className="grid md:grid-cols-7 gap-6">
        <PostArticleContent
          detail={detail}
          postFile={postFile}
          language={language}
        />
        <PostSidebar detail={detail} className="md:col-span-2" />
      </Container>
      <div className="h-12" />
    </>
  );
}
