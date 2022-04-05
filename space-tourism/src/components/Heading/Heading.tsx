import React from "react";
import cx from "classnames";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | "sub1" | "sub2" | "nav";

const getElement = (level: HeadingLevel) => {
  switch (level) {
    case "nav":
    case "sub1":
    case "sub2":
      return "h6";
    case 5:
      return "h5";
    case 4:
      return "h4";
    case 3:
      return "h3";
    case 2:
      return "h2";
    case 1:
    default:
      return "h1";
  }
};

const getClasses = (level: HeadingLevel) => {
  switch (level) {
    case "nav":
      return "font-sansCond text-lg tracking-widest uppercase";
    case "sub1":
      return "font-serif text-xl uppercase";
    case "sub2":
      return "font-serif text-lg tracking-wider uppercase";
    case 5:
      return "font-sansCond text-2xl tracking-widest uppercase";
    case 4:
      return "font-serif text-3xl md:text-5xl uppercase";
    case 3:
      return "font-serif text-4xl md:text-6xl uppercase";
    case 2:
      return "font-serif text-5xl md:text-7xl uppercase";
    case 1:
      return "font-serif text-6xl md:text-8xl uppercase";
    default:
      return "font-serif text-7xl md:text-9xl uppercase";
  }
};

export type HeadingProps = React.HTMLAttributes<HTMLElement> & {
  level: HeadingLevel;
};

export const Heading = ({ className, level, ...others }: HeadingProps) => {
  return React.createElement(getElement(level), {
    className: cx(getClasses(level), className),
    ...others,
  });
};
