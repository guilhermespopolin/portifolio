import cx from "classnames";

export type ExploreLinkProps = React.HTMLProps<HTMLAnchorElement>;

export const ExploreLink = ({ className, ...others }: ExploreLinkProps) => (
  <a
    className={cx(
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "bg-white ",
      "text-primary-500",
      "rounded-full",
      "aspect-square",
      "px-10",
      "text-3xl",
      "uppercase",
      "after:content–['']",
      "after:absolute",
      "after:z-[-1]",
      "after:bg-gray-400",
      "after:w-full",
      "after:h-full",
      "after:rounded-full",
      "after:opacity-0",
      "after:transition",
      "after:duration-300",
      "hover:after:scale-150",
      "hover:after:opacity-100",
      "focus:after:scale-150",
      "focus:after:opacity-100",
      className
    )}
    {...others}
  />
);
