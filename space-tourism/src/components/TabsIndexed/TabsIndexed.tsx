import React, { ReactNode, ComponentProps } from "react";

import * as RadixTabs from "@radix-ui/react-tabs";

export type TabsIndexedProps = Pick<
  ComponentProps<typeof RadixTabs.Root>,
  "value" | "onValueChange" | "defaultValue" | "orientation"
> & {
  length: number;
  children?: ReactNode;
};

export function TabsIndexed({
  length,
  children,
  ...radixTabsProps
}: TabsIndexedProps) {
  if (length < 2) {
    console.warn(
      "There is no reason of using <TabsIndexed /> with less then 2 tabs to toggle between"
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
          radixTabsProps.orientation === "vertical" && "flex-col",
        ].join(" ")}
      >
        {Array.from({ length }).map((_, index) => (
          <RadixTabs.TabsTrigger
            key={index}
            className={[
              "aspect-square",
              "w-12",
              "rounded-full",
              "border",
              "border-primary-400",
              "md:w-16",
              "md:text-2xl",
              "transition-colors",
              "duration-300",
              "hocus:border-white",
              "selected:bg-white selected:border-white selected:text-primary-500",
            ].join(" ")}
            value={index.toString()}
          >
            {index + 1}
          </RadixTabs.TabsTrigger>
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
