import type { ReactNode } from "react";

import { Navigation } from "@/components/Navigation";

export type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <header>
        <Navigation
          links={[
            { label: "Home", href: "/" },
            { label: "Design System", href: "/design-system" },
          ]}
        />
      </header>
      <main>{children}</main>
    </>
  );
}
