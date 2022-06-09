import type { NextPageWithLayout } from "next";

import Head from "next/head";
import { CoverLayout } from "@/components/CoverLayout";
import { Container } from "@/components/Container";
import { ExploreLink } from "@/components/ExploreLink";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
      </Head>
      <Container
        className={["h-full", "grid", "items-center", "md:grid-cols-2"].join(
          " "
        )}
      >
        <div>
          <h1
            className={[
              "font-sansCond",
              "uppercase",
              "text-accent-500",
              "text-center",
              "tracking-widest",
              "md:text-xl",
              "md:text-left",
            ].join(" ")}
          >
            So, you want to travel to
            <span
              className={[
                "block",
                "text-white",
                "font-serif",
                "text-7xl",
                "my-5",
                "md:text-9xl",
              ].join(" ")}
            >
              Space
            </span>
          </h1>
          <p className="text-accent-500 text-center md:text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="justify-self-center md:justify-self-end">
          <ExploreLink>Explore</ExploreLink>
        </div>
      </Container>
    </>
  );
};

HomePage.getLayout = (page) => (
  <CoverLayout
    className={[
      "bg-cover",
      "bg-bottom",
      "bg-[url('/assets/home/background-home-mobile.jpg')]",
      "md:bg-[url('/assets/home/background-home-tablet.jpg')]",
      "xl:bg-[url('/assets/home/background-home-desktop.jpg')]",
      "xl:bg-right-bottom",
    ].join(" ")}
  >
    {page}
  </CoverLayout>
);

export default HomePage;
