import CategoriesSection from "components/categories-section";

import Hero from "./hero";
import { FewPostsSection } from "components/few-posts-section";
import { fetchPosts } from "api";

export default async function RootPage() {
  const posts = await fetchPosts();
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <div className="h-10" />
      <FewPostsSection posts={posts} label="Latest logs:" />
      <FewPostsSection posts={posts} label="Most viewed logs:" />
      <div className="h-10" />
    </div>
  );
}
