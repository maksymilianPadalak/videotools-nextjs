"use client";
import { Mosaic } from "@organisms/Mosaic";
import { ImageCarousel } from "@/app/components/organisms/ImageCarousel";
import { TitleDescription } from "@organisms/TitleDescription";
import Gessler from "@assets/CarouselPhotos/Gessler.jpg";
import Gardias from "@assets/CarouselPhotos/Gardias.jpg";
import Blachowicz from "@assets/CarouselPhotos/Blachowicz.jpg";
import Collection from "@assets/CarouselPhotos/Collection.jpg";
import Ostaszewska from "@assets/CarouselPhotos/Ostaszewska.jpg";
import Zewlakow from "@assets/CarouselPhotos/Zewlakow.jpg";
import Hubert from "@assets/ExecutivesPhotos/Hubert.jpg";
import Maks from "@assets/ExecutivesPhotos/Maks.jpg";
import Antek from "@assets/ExecutivesPhotos/Antek.jpg";

import { ImageProps } from "next/image";
import { HeroImage } from "@organisms/HeroImage";
import { Hero } from "../../organisms/Hero";
import { Sidetab } from "@typeform/embed-react";
import { VideoReel } from "../../organisms/VideoReel/VideoReel";

const images: ImageProps[] = [
  { src: Gessler, alt: "Gessler" },
  { src: Blachowicz, alt: "Blachowicz" },
  { src: Collection, alt: "Collection" },
  { src: Ostaszewska, alt: "Ostaszewska" },
  { src: Gardias, alt: "Gardias" },
  { src: Zewlakow, alt: "Zewlakow" },
];

const title = "Videotools: Twórcy Zdjęć, Filmów i Grafiki 3D";
const description = `
  Jesteśmy zespołem kreatywnym specjalizującym się w produkcji wysokiej jakości materiałów wizualnych.
  Nasze usługi obejmują fotografię, filmy i grafikę 3D. Mamy przyjemność współpracować z takimi renomowanymi markami jak Kompania Piwowarska, Audi, Orange, Ikea, Polska Reprezentacja Narodowa w Piłce Nożnej, Santander, Redbull, Crunchips.
  Nasz zespół składa się z pasjonatów, którzy nie boją się wyzwań i zawsze dążą do doskonałości.
  Oferujemy nie tylko profesjonalizm, ale również kreatywne podejście i innowacyjne rozwiązania.
`;

export const LandingPage = () => {
  return (
    <div className="w-full">
      <Sidetab id="Mp51JRww" buttonText="Zadzwoń kurwiszko" />
      <Hero
        title="VIDEOTOOLS"
        description="Nakręcimy Twój Biznes"
        className="py-24"
      />
      <ImageCarousel images={images} />
      <TitleDescription title={title} description={description} />
      <VideoReel src={"/assets/Video/reel.mp4"} className="m-10" />
      <HeroImage
        title="Hubert Padalak"
        description="Chief Executive Officer"
        imageUrl={Hubert}
      />
      <HeroImage
        title="Antek Padalak"
        description="Chief Technology Officer"
        imageUrl={Antek}
        imagePosition="right"
      />
      <HeroImage
        title="Maks Padalak"
        description="Chief Operation Officer"
        imageUrl={Maks}
      />
      {/* <Mosaic /> */}
    </div>
  );
};
