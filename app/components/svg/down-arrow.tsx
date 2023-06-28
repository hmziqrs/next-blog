import { cx } from "alias";

interface SVGChevronArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
  direction?: "left" | "right" | "top" | "bottom";
}

// Tailwind rotate classes map
const rotationMap = {
  left: "rotate-90",
  right: "-rotate-90",
  top: "rotate-180",
  bottom: "rotate-0",
};

export default function SVGChevronArrow({
  className,
  fill,
  direction = "bottom",
  ...props
}: SVGChevronArrowProps) {
  const rotation = rotationMap[direction];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={fill || "currentColor"}
      className={cx("h-5 w-5", rotation, className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
  //   return (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="h-6 w-6 text-white"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M19 9l-7 7-7-7"
  //       />
  //     </svg>
  //   );
}
