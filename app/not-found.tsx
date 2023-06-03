"use client";

import Image from "next/image";

export default function Error(params: any) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="relative">
        <Image
          src={"/eto-bleh.jpg"}
          alt="ETO BLEH! 404"
          width="1200"
          height="600"
        />
        <div className="bg-opacity-40 bg-neutral-900 absolute h-full w-full top-0 left-0" />
        <div className="absolute top-1/2 left-1/2">
          <h1 className="text-xl4 font-medium">404</h1>
        </div>
      </div>
      <p>This is Not found</p>
      <p>This is Not found</p>
      <p>This is Not found</p>
      <p>This is Not found</p>
      <div onClick={params.reset}>Reset</div>
    </div>
  );
}
