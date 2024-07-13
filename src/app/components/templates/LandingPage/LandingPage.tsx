import { Mosaic } from "../../organisms/Mosaic";
import { LogoBanner } from "@organisms/LogoBanner";
import Benhacker from "@assets/BannerPhotos/Benhacker.jpg";
import Blachowicz from "@assets/BannerPhotos/Blachowicz.jpg";
import Collection from "@assets/BannerPhotos/Collection.jpg";
import Ostaszewska from "@assets/BannerPhotos/Ostaszewska.jpg";
import Zewlakow from "@assets/BannerPhotos/Zewlakow.jpg";
import { ImageProps } from "next/image";

const images: ImageProps[] = [
  { src: Benhacker, alt: "Benhacker" },
  { src: Blachowicz, alt: "Blachowicz" },
  { src: Collection, alt: "Collection" },
  { src: Ostaszewska, alt: "Ostaszewska" },
  { src: Zewlakow, alt: "Zewlakow" },
];

export const LandingPage = () => {
  return (
    <div className="w-full">
      <LogoBanner images={images} />
      <h1>This is landing page</h1>
      <Mosaic />
    </div>
  );
};
