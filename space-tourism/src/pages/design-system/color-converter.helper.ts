export const hexToRgb = (hex: string) => {
  const sanitize = (str: string) => str.replace("#", "").trim();
  const zeroPadEnd = (str: string) => str.padEnd(6, "0");

  const parsedHex = zeroPadEnd(sanitize(hex));
  const r = parseInt(parsedHex.slice(0, 2), 16).toString();
  const g = parseInt(parsedHex.slice(2, 4), 16).toString();
  const b = parseInt(parsedHex.slice(4, 6), 16).toString();

  return { r, g, b };
};
