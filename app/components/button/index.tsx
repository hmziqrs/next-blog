// Tailwind button

import { cx } from "alias";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isSelected?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Button({
  children,
  className,
  isSelected = false,
  size = "medium",
  ...props
}: ButtonProps) {
  // py-3 px-8
  const sizes = {
    small: "py-2 px-3",
    medium: "py-2 px-4",
    large: "py-3 px-8",
  };
  const sizeClass = sizes[size];
  return (
    <div
      {...props}
      className={cx(
        "flex flex-row items-center justify-center cursor-pointer rounded-md shadow shadow-white/0",
        "hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-white/5",
        isSelected ? "bg-zinc-700" : "bg-zinc-800",
        sizeClass,
        className
      )}
    >
      {children}
    </div>
  );
}
