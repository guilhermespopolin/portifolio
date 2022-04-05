import { useState } from "react";
import cx from "classnames";

import Link from "next/link";

export type NavigationProps = {
  className?: string;
  links: Array<{ label: string; href: string }>;
};

export const Navigation = ({ className, links }: NavigationProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className={cx("font-sansCond", className)}>
      <ul className="flex gap-4">
        {links.map(({ label, href }, index) => {
          const paddedIndex = index.toString().padStart(2, "0");
          const isActive = activeIndex === index;

          const handleClick = () => setActiveIndex(index);

          return (
            <li
              className={cx(
                "py-3",
                "px-4",
                "border-b-4",
                "border-b-transparent",
                "uppercase",
                "tracking-wide",
                "hover:cursor-pointer",
                "transition-colors",
                "duration-300",
                {
                  "border-b-primary-200": isActive,
                  "hover:border-b-primary-400 focus:border-b-primary-400":
                    !isActive,
                }
              )}
            >
              <Link href={href} scroll={false}>
                <a onClick={handleClick}>
                  <span className="font-bold mr-2">{paddedIndex}</span>
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
