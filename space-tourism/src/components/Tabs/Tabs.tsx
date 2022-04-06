import React, { ReactElement } from "react";
import cx from "classnames";

export type TabProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "children"
> & { label: string };

export function Tab({
  className,
  label,
  "aria-selected": isActive,
  ...others
}: TabProps) {
  return (
    <button
      {...others}
      role="tab"
      className={cx(
        "py-3",
        "px-2",
        "font-sansCond",
        "uppercase",
        "tracking-wide",
        "border-b-4",
        "border-b-transparent",
        "transition-colors",
        "duration-300",
        {
          "border-b-primary-200": Boolean(isActive),
          "hover:border-b-primary-400 focus:border-b-primary-400":
            !Boolean(isActive),
        },
        className
      )}
    >
      {label}
    </button>
  );
}

export type TabsProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children" | "onChange"
> & {
  children: Array<ReactElement<TabProps>>;
  value: number;
  onChange: (index: number) => void;
};

export const Tabs = ({ className, children, value, onChange }: TabsProps) => {
  return (
    <div
      role="tablist"
      className={cx("flex", "gap-2", "items-center", "max-w-fit", className)}
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ...child.props,
          key: child.props.key || child.props.id || index,
          "aria-selected": index === value,
          onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
            child.props.onClick?.(event);
            onChange(index);
          },
        })
      )}
    </div>
  );
};
