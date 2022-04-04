import styled from "styled-components";

import { hexToRgb } from "./color-converter.helper";

export const HueBox = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const Sample = styled.div<{ color: string }>(({ theme, color }) => ({
  padding: "3rem",
  border: `1px solid hsl(${theme.colors.hsl.white})`,
  backgroundColor: color,
}));

const Format = styled.span(({ theme }) => ({
  marginRight: "0.5rem",
  color: `hsl(${theme.colors.hsl.white} / 0.6)`,
}));

type HueProps = {
  hex: string;
};

export const Hue = ({ hex }: HueProps) => {
  const rgb = hexToRgb(hex);

  return (
    <HueBox>
      <Sample color={hex} />
      <div>
        <p>
          <Format>Hex</Format>
          {hex}
        </p>
        <p>
          <Format>RGB</Format>
          {`${rgb.r}, ${rgb.g}, ${rgb.b}`}
        </p>
      </div>
    </HueBox>
  );
};
