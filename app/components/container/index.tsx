import { cx } from "alias";

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) {
  // mx-auto md:max-w-3xl px-4 sm:px-6 lg:px-0
  return (
    <div
      aria-label="WOW"
      className={cx("mx-auto md:max-w-3xl lg:max-w-5xl px-4 ", className)}
      {...props}
    >
      {children}
    </div>
  );
}
