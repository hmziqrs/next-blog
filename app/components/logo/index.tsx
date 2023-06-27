import { typography } from "lib/typography";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className={typography.heading}>Logo</h1>
    </Link>
  );
}
