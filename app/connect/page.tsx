import Button from "components/button";
import Container from "components/container";
import SocialIcon from "components/socialIcon";
import { mainSocialLinks } from "lib/links";
import Link from "next/link";
import ConnectButtons from "./buttons";

export default function ConnectPage() {
  return (
    <Container>
      <div className="h-12" />
      <h1 className="text-3xl text-center">Connect</h1>
      <div className="flex flex-col items-center space-y-4 py-4">
        {mainSocialLinks.map((link) => {
          return (
            <div key={link.url} className="flex flex-row space-x-4">
              <Link href={link.url} target="_blank">
                <Button className="py-3 px-8">
                  <SocialIcon name={link.name} size={28} />
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
