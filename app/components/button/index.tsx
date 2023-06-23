// Tailwind button

import { cx } from "alias";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isSelected?: boolean;
}

export default function Button({
  children,
  className,
  isSelected = false,
  ...props
}: ButtonProps) {
  return (
    <div
      {...props}
      className={cx(
        "flex flex-row items-center justify-center px-4 py-2 cursor-pointer rounded-md shadow shadow-white/0",
        "hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-white/5",
        isSelected ? "bg-zinc-700" : "bg-zinc-800",
        className
      )}
    >
      {children}
    </div>
  );
}
