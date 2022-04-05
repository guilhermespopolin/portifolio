import { Heading } from "../Heading";

export type NumberedTitleProps = {
  className?: string;
  index: string;
  children: string;
};

export const NumberedTitle = ({
  className,
  index,
  children,
}: NumberedTitleProps) => {
  return (
    <Heading className={className} level={5}>
      <span className="text-accent-500  mr-2 md:mr-4">{index}</span>
      {children}
    </Heading>
  );
};
