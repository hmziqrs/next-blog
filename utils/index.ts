import { Env } from "types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSafePageNo(max: number, page?: any) {
  if (Array.isArray(page)) return 1;
  const parsed = parseInt(page || "1", 10);
  const safe = Math.min(Math.max(1, parsed), max);
  return isNaN(safe) ? 1 : safe;
}

export function getEnv(): Env {
  return {
    PER_PAGE: parseInt(process.env.NEXT_PUBLIC_PER_PAGE || "10", 10),
    BLAZE_BUCKET_URL: process.env.BLAZE_BUCKET_URL || "",
  };
}

export function getBlazeAsset(asset: string): string {
  return `${getEnv().BLAZE_BUCKET_URL}${asset}`;
}

export function getAsset(asset: string): string {
  return getBlazeAsset(asset);
}
