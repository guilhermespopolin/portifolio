import type { ReactNode, ComponentProps } from "react";

import * as RadixTabs from "@radix-ui/react-tabs";

type TabOption = {
  value: string;
  label: string;
  content: ReactNode;
};

export type TabsProps = Pick<
  ComponentProps<typeof RadixTabs.Root>,
  "defaultValue"
> & {
  options: Array<TabOption>;
};

export function Tabs({ options, defaultValue }: TabsProps) {
  return (
    <RadixTabs.Root defaultValue={defaultValue}>
      <RadixTabs.List className="flex items-center gap-2 max-w-fit">
        {options.map(({ value, label }) => (
          <RadixTabs.Trigger
            key={value}
            className={[
              "py-3",
              "px-2",
              "font-sansCond",
              "uppercase",
              "tracking-wide",
              "border-b-4",
              "border-b-transparent",
              "transition-colors",
              "duration-300",
              "hocus:border-b-primary-400",
              "selected:border-b-primary-200",
              "hocus:selected:border-b-primary-200",
            ].join(" ")}
            value={value}
          >
            {label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {options.map(({ value, content }) => (
        <RadixTabs.Content key={value} value={value}>
          {content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
