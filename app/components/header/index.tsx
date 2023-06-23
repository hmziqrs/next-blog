import Container from "components/container";
import Logo from "components/logo";
import Link from "next/link";
import { getPostsPath } from "utils";

const links = [
  { label: "About", href: "/about" },
  { label: "Posts", href: getPostsPath({}) },
];

export default function Header() {
  return (
    <Container>
      <div className="py-6 flex flex-row items-center justify-between">
        <Logo />
        <div className="flex flex-row space-x-4">
          {links.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="bg-red-900 py-2 px-5 rounded"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
