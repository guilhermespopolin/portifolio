import cx from "classnames";

export type ExploreLinkProps = React.HTMLProps<HTMLAnchorElement>;

export const ExploreLink = ({ className, ...others }: ExploreLinkProps) => (
  <a
    className={cx(
      "relative",
      "z-0",
      "inline-flex",
      "items-center",
      "justify-center",
      "bg-white ",
      "text-primary-500",
      "rounded-full",
      "aspect-square",
      "px-6",
      "md:px-10",
      "font-serif",
      "text-2xl",
      "md:text-3xl",
      "uppercase",
      "cursor-pointer",
      "after:content–['']",
      "after:absolute",
      "after:z-[-1]",
      "after:bg-white/20",
      "after:w-full",
      "after:h-full",
      "after:rounded-full",
      "after:opacity-0",
      "after:transition",
      "after:duration-300",
      "hocus:after:scale-150",
      "hocus:after:opacity-100",
      className
    )}
    {...others}
  />
);
