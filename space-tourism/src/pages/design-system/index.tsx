import { useState } from "react";

import type { NextPage } from "next";

import Head from "next/head";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { NumberedTitle } from "@/components/NumberedTitle";
import { ExploreLink } from "@/components/ExploreLink";
import { Navigation } from "@/components/Navigation";
import { Tabs, Tab } from "@/components/Tabs";
import { Hue } from "./Hue";

const DesignSystemPage: NextPage = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Space Tourism - Design System</title>
      </Head>
      <Container className="flex flex-col gap-8 md:gap-10 py-4 md:py-8">
        <Heading className="text-center" level={1}>
          Design System
        </Heading>
        <section id="colors" className="flex flex-col gap-4 md:gap-6">
          <NumberedTitle index="00">Colors</NumberedTitle>
          <div className="flex gap-2 md:gap-4">
            <Hue className="basis-full" color="#0b0d17" />
            <Hue className="basis-full" color="#d0d6f9" />
            <Hue className="basis-full" color="#ffffff" />
          </div>
        </section>

        <section id="typography" className="flex flex-col gap-4 md:gap-6">
          <NumberedTitle index="01">Typography</NumberedTitle>
          <div className="flex flex-wrap md:flex-nowrap gap-6">
            {/* Headings */}
            <div className="flex flex-col gap-4 md:basis-full">
              <div>
                <p className="text-accent-500">
                  Heading 1 - Bellefair Regular - 150px
                </p>
                <Heading level={1}>Earth</Heading>
              </div>
              <div>
                <p className="text-accent-500">
                  Heading 2 - Bellefair Regular - 100px
                </p>
                <Heading level={2}>Venus</Heading>
              </div>
              <div>
                <p className="text-accent-500">
                  Heading 3 - Bellefair Regular - 56px
                </p>
                <Heading level={3}>Jupiter &amp; Saturn</Heading>
              </div>
              <div>
                <p className="text-accent-500">
                  Heading 4 - Bellefair Regular - 32px
                </p>
                <Heading level={4}>Uranus, Neptune, &amp; Pluto</Heading>
              </div>
              <div>
                <p className="text-accent-500">
                  Heading 5 - Barlow Condensed - 28px - 4.75 Character Space
                </p>
                <Heading level={5}>So, you want to travel to space</Heading>
              </div>
            </div>
            {/* Subheadings & Body text */}
            <div className="flex flex-col gap-4 md:basis-full">
              <div>
                <p className="text-accent-500">
                  Subheading 1 - Bellefair Regular - 28px
                </p>
                <Heading level={"sub1"}>384,400 km</Heading>
              </div>
              <div>
                <p className="text-accent-500">
                  Subheading 2 - Barlow Condensed Regular - 14px - 2.35
                  Character Space
                </p>
                <Heading level={"sub2"}>Avg. Distance</Heading>
              </div>
              <div>
                <p className="text-accent-500">
                  Nav Text - Barlow Condensed Regular - 16px - 2.7 Character
                  Space
                </p>
                <Heading level={"nav"}>Europa</Heading>
              </div>
              <div>
                <p className="text-accent-500">Body Text</p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in ornare ipsum, id dapibus magna. Nulla facilisi. Integer
                  nisl elit, euismod quis erat sed, convallis condimentum arcu.
                  Aenean sit amet suscipit augue, eu finibus ex. Nulla ut mattis
                  tortor. Aliquam a fringilla ex, non posuere diam. Pellentesque
                  a metus in tortor ultrices ullamcorper vel sed purus. Maecenas
                  ultrices erat non rhoncus vehicula. Duis faucibus vel massa et
                  fringilla. Phasellus ut lacinia felis. Mauris id justo nec
                  ante ultricies venenatis. In hac habitasse platea dictumst.
                  Suspendisse eget turpis ante. Duis maximus tempor scelerisque.
                  Curabitur dolor ex, volutpat id nulla quis, bibendum aliquet
                  dui. Praesent orci nibh, placerat at iaculis ut, facilisis eu
                  diam. Quisque aliquet consequat est, vulputate malesuada
                  tortor mattis pharetra. Morbi dui eros, lacinia non nisl vel,
                  gravida auctor purus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="controls" className="flex flex-col gap-4 md:gap-6">
          <NumberedTitle index="03">Interactive Elements</NumberedTitle>
          <div>
            <Navigation
              links={[
                { label: "Active", href: "#" },
                { label: "Hovered", href: "#" },
                { label: "Idle", href: "#" },
              ]}
            />
            <p className="py-4 text-accent-500 text-center">Navigation Bar</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div>
              <ExploreLink href="#">Explore</ExploreLink>
              <p className="py-4 text-center text-accent-500">
                Landing Page Main Button
              </p>
            </div>
            <div>
              <Tabs
                value={selectedTabIndex}
                onChange={(index) => setSelectedTabIndex(index)}
              >
                <Tab label="Moon" />
                <Tab label="Mars" />
                <Tab label="Europa" />
              </Tabs>
              <p className="py-4 text-center text-accent-500">Tabs</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default DesignSystemPage;
