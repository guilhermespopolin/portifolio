import cx from "classnames";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...others }: ContainerProps) => (
  <div
    className={cx("max-w-5xl mx-auto px-4 md:px-8", className)}
    {...others}
  />
);
