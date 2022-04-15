import type { NextPage } from "next";

import Head from "next/head";
import { DesignSystem } from "@/components/DesignSystem";

const DesignSystemPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism - Design System</title>
      </Head>
      <DesignSystem />
    </>
  );
};

export default DesignSystemPage;
