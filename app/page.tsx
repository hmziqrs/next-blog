import RootCategoriesSection from "./categories";
import "./globals.css";
import Hero from "./hero";

export default function RootPage() {
  return (
    <div>
      <Hero />
      <RootCategoriesSection />
      <div className="h-10" />
    </div>
  );
}
