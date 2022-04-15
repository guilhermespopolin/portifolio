import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

declare module "next" {
  export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

declare module "next/app" {
  export type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
      getLayout?: (page: ReactElement) => ReactNode;
    };
  };
}
