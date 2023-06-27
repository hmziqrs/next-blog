import Container from "components/container";
import Logo from "components/logo";
import Link from "next/link";
import { getPostsPath } from "utils";

const links = [
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect" },
  { label: "Posts", href: getPostsPath({}) },
];

export default function Header() {
  return (
    <div className="bg-zinc-900">
      <Container>
        <div className="py-6 flex flex-row items-center justify-between">
          <Logo />
          <div className="flex flex-row space-x-4">
            {links.map((link) => {
              return (
                <Link key={link.label} href={link.href} className="">
                  <span className="underline underline-offset-4">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
