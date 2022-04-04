import type { NextPage } from "next";
import styled from "styled-components";

import Head from "next/head";
import { Container } from "@/components/Container";
import { Hue, HueBox } from "./Hue";

const Pallete = styled.div({
  display: "flex",
  gap: "1rem",

  [HueBox]: {
    flexBasis: "100%",
  },
});

const DesignSystemPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism - Design System</title>
      </Head>
      <Container>
        <h1>Design System</h1>

        <section id="colors">
          <h2>
            <span>00</span> Colors
          </h2>
          <Pallete>
            <Hue hex="#0B0D17" />
            <Hue hex="#D0D6F9" />
            <Hue hex="#FFFFFF" />
          </Pallete>
        </section>
      </Container>
    </>
  );
};

export default DesignSystemPage;
