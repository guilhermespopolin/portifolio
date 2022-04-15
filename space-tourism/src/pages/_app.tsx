import type { AppPropsWithLayout } from "next/app";

import Head from "next/head";
import { MainLayout } from "@/components/MainLayout";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width"
          initial-scale="1.0"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />

        <title>Frontend Mentor | Space Tourism Website</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
