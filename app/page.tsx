import RootCategoriesSection from "./categories";
import "./globals.css";
import Hero from "./hero";
import { RootPosts } from "./posts";

export default function RootPage() {
  return (
    <div>
      <Hero />
      <RootCategoriesSection />
      <div className="h-10" />
      <RootPosts />
      <div className="h-10" />
    </div>
  );
}
