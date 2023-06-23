import { cx } from "alias";
import Container from "components/container";
import SVGInstagram from "components/svg/Instagram";
import SVGFacebook from "components/svg/facebook";
import SVGTiktok from "components/svg/tiktok";
import SVGTwitter from "components/svg/twitter";
import SVGYoutube from "components/svg/youtube";
import Link from "next/link";

const webLinks = [
  { href: "/road-map", label: "Road map" },
  { href: "/site-map", label: "Site map" },
];

const socialLinks = [
  { href: "https://youtube.com", label: "Youtube" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://tiktok.com", label: "Tiktok" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://twitter.com", label: "Twitter" },
];

const SIZE = 32;

export default function Footer() {
  return (
    <div className="bg-zinc-900 py-8">
      <Container className="flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row space-x-2">
          {socialLinks.map((link) => {
            let component: JSX.Element;

            if (link.label === "Youtube")
              component = <SVGYoutube width={SIZE} height={SIZE} />;
            else if (link.label === "Instagram")
              component = <SVGInstagram width={SIZE} height={SIZE} />;
            else if (link.label === "Tiktok")
              component = <SVGTiktok width={SIZE} height={SIZE} />;
            else if (link.label === "Facebook")
              component = <SVGFacebook width={SIZE} height={SIZE} />;
            else component = <SVGTwitter width={SIZE} height={SIZE} />;

            return (
              <Link href={link.href} target="_blank" key={link.href}>
                {component}
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
