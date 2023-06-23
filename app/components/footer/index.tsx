import { cx } from "alias";
import Container from "components/container";
import Link from "next/link";

const links = [
  { href: "/connect", label: "Connect" },
  { href: "/road-map", label: "Road map" },
  { href: "/site-map", label: "Site map" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black py-12">
      <Container className="flex flex-row justify-between">
        <div>
          <p className="text-xl">Copyright {year}</p>
        </div>
        <div className="flex flex-row space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cx(
                "underline underline-offset-4",
                "text-white/80 hover:text-white/100 transition-all"
              )}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
