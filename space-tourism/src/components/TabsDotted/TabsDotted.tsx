import React, { ReactNode, ComponentProps } from "react";

import * as RadixTabs from "@radix-ui/react-tabs";

export type TabsDottedProps = Pick<
  ComponentProps<typeof RadixTabs.Root>,
  "value" | "onValueChange" | "defaultValue"
> & {
  length: number;
  children?: ReactNode;
};

export function TabsDotted({
  length,
  children,
  ...radixTabsProps
}: TabsDottedProps) {
  if (length < 2) {
    console.warn(
      "There is no reason of using <TabsDotted /> with less then 2 tabs to toggle between"
    );

    return null;
  }

  return (
    <RadixTabs.Root {...radixTabsProps}>
      <RadixTabs.TabsList
        className={[
          "inline-flex",
          "gap-4",
          "items-center",
          "justify-center",
        ].join(" ")}
      >
        {Array.from({ length }).map((_, index) => (
          <RadixTabs.TabsTrigger
            key={index}
            className={[
              "aspect-square",
              "w-4",
              "rounded-full",
              "bg-primary-400",
              "md:w-5",
              "transition-colors",
              "duration-300",
              "hocus:bg-primary-200",
              "selected:bg-white",
            ].join(" ")}
            value={index.toString()}
          />
        ))}
      </RadixTabs.TabsList>
      {React.Children.map(children, (child, index) => (
        <RadixTabs.Content key={index} value={index.toString()}>
          {child}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
