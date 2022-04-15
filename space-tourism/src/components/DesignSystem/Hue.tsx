import cx from "classnames";

import { hexToRgb } from "./DesignSystem.helpers";

export type HueProps = React.HTMLAttributes<HTMLDivElement> & {
  color: string;
};

export const Hue = ({ className, color, ...others }: HueProps) => {
  const rgb = hexToRgb(color);

  return (
    <div
      className={cx("flex flex-col gap-2 text-sm md:text-lg", className)}
      {...others}
    >
      <div
        style={{ backgroundColor: color }}
        className={`border border-white pt-12 px-4 pb-4 text-neutral-500 uppercase`}
      >
        <p>{color}</p>
      </div>
      <div>
        <p>
          <span className="text-accent-500 mr-1 mb:mr-2">RGB</span>
          {`${rgb.r}, ${rgb.g}, ${rgb.b}`}
        </p>
      </div>
    </div>
  );
};
