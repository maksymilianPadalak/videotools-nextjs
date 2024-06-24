import { MosaicElement } from "@molecules/MosaicElement";

export const Mosaic = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
      <MosaicElement className="bg-green-700 border-2 row-span-2 border-pink-500" />
      <MosaicElement className="bg-pink-400 border-2 border-pink-500" />
      <MosaicElement className="bg-yellow-500 border-2 border-pink-500" />
    </div>
  );
};
