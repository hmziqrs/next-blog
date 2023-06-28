import SVGInstagram from "components/svg/Instagram";
import SVGFacebook from "components/svg/facebook";
import SVGMail from "components/svg/mail";
import SVGTiktok from "components/svg/tiktok";
import SVGTwitter from "components/svg/twitter";
import SVGYoutube from "components/svg/youtube";

interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
}

export default function SocialIcon({ name, ...props }: SocialIconProps) {
  if (name === "Youtube") {
    return <SVGYoutube {...props} />;
  }
  if (name === "Instagram") {
    return <SVGInstagram {...props} />;
  }
  if (name === "Tiktok") {
    return <SVGTiktok {...props} />;
  }
  if (name === "Facebook") {
    return <SVGFacebook {...props} />;
  }
  if (name === "Email") {
    return <SVGMail {...props} />;
  }

  return <SVGTwitter {...props} />;
}
