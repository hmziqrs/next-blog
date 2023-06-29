import Button from "components/button";
import Container from "components/container";
import SocialIcon from "components/socialIcon";
import { emailLinks, mainSocialLinks } from "data/links";
import Link from "next/link";
import ConnectButtons from "./buttons";

export default function ConnectPage() {
  return (
    <Container>
      <div className="h-12" />
      <div className="flex flex-col items-center space-y-4 py-4">
        {mainSocialLinks.concat(emailLinks).map((link) => {
          return (
            <div key={link.url} className="flex flex-row space-x-4 ">
              <Link href={link.url} target="_blank">
                <Button size="large" className="min-w-[310px]">
                  <SocialIcon name={link.name} className="h-7" />
                  <div className="w-3" />
                  <p>{link.username}</p>
                </Button>
              </Link>
              <ConnectButtons link={link} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
