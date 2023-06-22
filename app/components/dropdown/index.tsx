import { cx } from "alias";
import { startCase } from "lodash";
import React, { useState } from "react";

interface DropdownProps {
  title: string;
  items: string[];
  selected?: string;
  onSelect: (item: string) => void;
}

export default function Dropdown({
  title,
  items,
  selected,
  onSelect,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={cx(
            "inline-flex flex-row justify-between items-center w-full",
            "px-4 py-2 cursor-pointer rounded-md shadow shadow-white/0",
            "hover:bg-zinc-700 transition-all duration-300  hover:shadow-lg hover:shadow-white/5",
            open ? "bg-zinc-700" : "bg-zinc-800"
          )}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setOpen(!open)}
        >
          <span className="text-sm">
            {title}: {selected}
          </span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={cx(
          "origin-top-right absolute right-0 mt-2 w-56 rounded-md z-20",
          "shadow-lg bg-white ring-1 ring-black ring-opacity-5",
          open ? "block" : "hidden"
        )}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {items.map((item) => (
            <div
              key={item}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-700 hover:text-white cursor-pointer transition-all duration-300"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onSelect(item);
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
