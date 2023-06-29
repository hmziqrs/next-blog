"use client";

import { cx } from "alias";
import Button from "components/button";
import SVGChevronArrow from "components/svg/down-arrow";
import { typography } from "data/typography";
import { startCase } from "lodash";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface DropdownProps {
  title: string;
  items: string[];
  selected?: string;
  links?: string[];
  onSelect?: (item: string) => void;
  className?: string;
  position?: "left" | "right";
}

export default function Dropdown({
  title,
  items,
  selected,
  onSelect,
  links,
  className,
  position = "left",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={cx("relative select-none", className)}>
      <div>
        <Button
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setOpen(!open)}
        >
          <span className={typography.small}>
            {title}: {selected}
          </span>
          <SVGChevronArrow />
        </Button>
      </div>
      <div
        className={cx(
          "origin-top-right absolute mt-2 w-56 rounded-md z-20",
          "shadow-lg bg-white ring-1 ring-black ring-opacity-5",
          position === "left" ? "left-0" : "right-0",
          open ? "block" : "hidden"
        )}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {items.map((item, index) => (
            <div
              key={item}
              className={cx(
                "block px-4 py-2 cursor-pointer transition-all duration-300",
                "text-gray-700 hover:bg-zinc-700 hover:text-white",
                typography.small
              )}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                if (onSelect) {
                  onSelect(item);
                  return;
                }
                if (links) {
                  router.push(links[index]);
                }
              }}
            >
              {startCase(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
