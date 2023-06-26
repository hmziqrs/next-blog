import { cx } from "alias";
import Container from "components/container";
import SocialIcon from "components/socialIcon";
import { mainSocialLinks } from "lib/links";
import Link from "next/link";

const webLinks = [
  { href: "/road-map", label: "Road map" },
  { href: "/site-map", label: "Site map" },
];

export default function Footer() {
  return (
    <div className="bg-zinc-900 py-8">
      <Container className="flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row space-x-2">
          {mainSocialLinks.map((link) => {
            return (
              <Link href={link.url} target="_blank" key={link.url}>
                <SocialIcon name={link.name} size={32} />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row space-x-4">
          {webLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cx(
                "text-sm text-center underline underline-offset-4",
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
