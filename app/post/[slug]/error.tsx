"use client";

import Image from "next/image";

export default function Error(params: any) {
  console.log(params);

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Image
        src={"/eto-bleh.jpg"}
        alt="ETO BLEH! 404"
        width="1200"
        height="600"
      />

      <h1 className="text-xl4 font-medium">404</h1>
      <p>Page not found</p>
    </div>
  );
}
