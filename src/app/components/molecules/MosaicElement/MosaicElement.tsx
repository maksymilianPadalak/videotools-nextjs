import { FC } from "react";
import cx from "classnames";

type MosaicElementProps = {
  className?: string;
};

export const MosaicElement: FC<MosaicElementProps> = ({ className }) => {
  return (
    <div className={cx("flex flex-row justify-center items-center", className)}>
      <h1>Mosaic element</h1>
    </div>
  );
};
