import type { NextPage } from "next";

import Head from "next/head";
import { Container } from "@/components/Container";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta
          name="description"
          content="Frontend mentor Space Tourism challange"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Space Tourism</h1>
      </Container>
    </>
  );
};

export default Home;
