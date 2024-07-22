import { FC } from "react";
import cx from "classnames";

type HeroProps = { title: string; description: string; className?: string };

export const Hero: FC<HeroProps> = ({ title, description, className }) => {
  return (
    <div className={cx("flex flex-col justify-center items-center", className)}>
      <h1 className="text-9xl">{title}</h1>
      <p className="text-4xl">{description}</p>
    </div>
  );
};
