import cx from "classnames";
import { FC } from "react";

type TitleDescriptionProps = {
  title: string;
  description: string;
  className?: string;
};

export const TitleDescription: FC<TitleDescriptionProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cx(
        "bg-primary text-white rounded-lg shadow-lg overflow-hidden",
        className
      )}
    >
      <div className="px-12 py-8 sm:p-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default TitleDescription;
