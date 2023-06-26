"use client";

import Button from "components/button";
import SVGCopy from "components/svg/copy";
import SVGShare from "components/svg/share";
import { SocialLink } from "types";

interface ConnectButtonsProps {
  link: SocialLink;
}

export default function ConnectButtons({ link }: ConnectButtonsProps) {
  function copyToClipboard() {
    navigator.clipboard.writeText(link.url);
  }

  const canShare = !!navigator.share;

  function share() {
    if (navigator.share) {
      navigator.share({
        title: `${link.name} | ${link.username}}`,
        // text: "Check out my website!",
        url: link.url,
      });
    }
  }

  return (
    <>
      <Button onClick={copyToClipboard}>
        <SVGCopy />
      </Button>
      {canShare && (
        <Button onClick={share}>
          <SVGShare />
        </Button>
      )}
    </>
  );
}
