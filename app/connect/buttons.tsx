"use client";
import Button from "components/button";
import SVGCopy from "components/svg/copy";
import SVGShare from "components/svg/share";
import { toast } from "react-hot-toast";
import { SocialLink } from "lib/types";

interface ConnectButtonsProps {
  link: SocialLink;
}

export default function ConnectButtons({ link }: ConnectButtonsProps) {
  function copyToClipboard() {
    const url = link.url
      .replace("mailto:", "")
      .replace("tel:", "")
      .replace("sms:", "");

    navigator.clipboard.writeText(url);
    toast.success("Copied to clipboard!");
    // toast.success("Copied to clipboard!");
  }

  let canShare = false;

  if (typeof window !== "undefined") {
    canShare = !!window.navigator.share;
  }

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
