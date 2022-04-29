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
    <nav
      className={cx(
        "flex items-center justify-between px-4 md:px-8 font-sansCond bg-primary-700",
        className
      )}
    >
      <div className="flex-shrink-0">
        <img src="/assets/shared/logo.svg" alt="space tourism logo" />
      </div>
      <ul className="inline-flex justify-center gap-8">
        {links.map(({ label, href }, index) => {
          const paddedIndex = index.toString().padStart(2, "0");
          const isActive = activeIndex === index;

          const handleClick = () => setActiveIndex(index);

          return (
            <li
              key={index}
              className={cx(
                "py-6",
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
