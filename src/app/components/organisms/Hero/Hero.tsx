import { FC } from "react";
import cx from "classnames";

type HeroProps = { title: string; description: string; className?: string };

export const Hero: FC<HeroProps> = ({ title, description, className }) => {
  return (
    <div className={cx("flex flex-col justify-center items-center", className)}>
      <h1 className="text-3xl md:text-5xl lg:text-7xl">{title}</h1>
      <p className="text-4xl md:text-5xl lg:text-6xl">{description}</p>
    </div>
  );
};
