import SVGInstagram from "components/svg/Instagram";
import SVGFacebook from "components/svg/facebook";
import SVGTiktok from "components/svg/tiktok";
import SVGTwitter from "components/svg/twitter";
import SVGYoutube from "components/svg/youtube";

interface SocialIconProps {
  name: string;
  size?: number;
}

export default function SocialIcon({ name, size }: SocialIconProps) {
  if (name === "Youtube") {
    return <SVGYoutube width={size} height={size} />;
  }
  if (name === "Instagram") {
    return <SVGInstagram width={size} height={size} />;
  }
  if (name === "Tiktok") {
    return <SVGTiktok width={size} height={size} />;
  }
  if (name === "Facebook") {
    return <SVGFacebook width={size} height={size} />;
  }

  return <SVGTwitter width={size} height={size} />;
}
