import type { ReactNode } from "react";
import cx from "classnames";

import { Navigation } from "@/components/Navigation";

export type CoverLayoutProps = {
  className?: string;
  children: ReactNode;
};

export function CoverLayout({ className, children }: CoverLayoutProps) {
  return (
    <div className={cx("h-screen grid grid-rows-[auto_1fr]", className)}>
      <header>
        <Navigation
          links={[
            { label: "Home", href: "/" },
            { label: "Design System", href: "/design-system" },
          ]}
        />
      </header>
      <main className="overflow-y-auto">{children}</main>
    </div>
  );
}
