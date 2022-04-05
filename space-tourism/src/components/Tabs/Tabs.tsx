import type { ReactNode } from "react";
import cx from "classnames";

export type TabProps = { isActive?: boolean };

export const Tab = ({ isActive = false }: TabProps) => (
  <div
    role="button"
    tabIndex={0}
    className={cx(
      "aspect-square",
      "p-2",
      "rounded-full",
      "bg-primary-400",
      "transition-colors",
      "duration-300",
      "hover:cursor-pointer",
      {
        "bg-primary-200": isActive,
        "hover:bg-primary-200 focus:bg-primary-200": !isActive,
      }
    )}
  />
);

export type TabsProps = { className?: string; children: ReactNode };

export const Tabs = ({ className, children }: TabsProps) => {
  return (
    <div
      className={cx("flex", "gap-2", "items-center", "max-w-fit", className)}
    >
      {children}
    </div>
  );
};
