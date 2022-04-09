import type { NextPage } from "next";

import Head from "next/head";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

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
      <Container className="py-4 md:py-8">
        <Heading className="text-center" level={1}>
          Space Tourism
        </Heading>
      </Container>
    </>
  );
};

export default Home;
