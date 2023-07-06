"use client";

import { FacebookShareButton } from "next-share";

import { Post } from "lib/types";

interface PostShareProps {
  // post: Post;
  language?: string;
}

// Facebook, Twitter, LinkedIn, Reddit, Email, Copy Link

export default function PostShare({ language }: PostShareProps) {
  //   const url = post.getSlugUrl("en");

  return (
    <FacebookShareButton
      url={"https://github.com/hackerhgl"}
      quote={"next-share is a social share buttons for your next React apps."}
      hashtag={"#nextshare"}
    >
      <h1>Facebook</h1>
      {/* <FacebookIcon size={32} round /> */}
    </FacebookShareButton>
  );
}
