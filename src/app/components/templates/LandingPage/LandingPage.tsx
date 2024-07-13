import { Mosaic } from "@organisms/Mosaic";
import { LogoBanner } from "@organisms/LogoBanner";
import { TitleDescription } from "@organisms/TitleDescription";
import Benhacker from "@assets/BannerPhotos/Benhacker.jpg";
import Blachowicz from "@assets/BannerPhotos/Blachowicz.jpg";
import Collection from "@assets/BannerPhotos/Collection.jpg";
import Ostaszewska from "@assets/BannerPhotos/Ostaszewska.jpg";
import Zewlakow from "@assets/BannerPhotos/Zewlakow.jpg";
import Lewandowski from "@assets/BannerPhotos/Lewandowski.jpg";
import { ImageProps } from "next/image";
import { HeroImage } from "@organisms/HeroImage";

const images: ImageProps[] = [
  { src: Benhacker, alt: "Benhacker" },
  { src: Blachowicz, alt: "Blachowicz" },
  { src: Lewandowski, alt: "Lewandowski" },
  { src: Collection, alt: "Collection" },
  { src: Ostaszewska, alt: "Ostaszewska" },
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
      <LogoBanner images={images} />
      <TitleDescription title={title} description={description} />
      <HeroImage
        title="Antoni Padalak"
        description="Antoni Padalak to utalentowany grafik, znany z kreatywnego podejścia oraz dbałości o szczegóły. Z pasją łączy innowacyjne podejście artystyczne z funkcjonalnymi zasadami projektowania, co pozwoliło mu zyskać uznanie w branży.
        Swoją przygodę z grafiką rozpoczął z fascynacją opowiadaniem historii za pomocą obrazu oraz zobowiązaniem do tworzenia przekonujących narracji wizualnych. Przez lata doskonalił swoje umiejętności w typografii, projektowaniu układów oraz brandingowym, dbając o to, by każdy projekt miał mocny oddźwięk wśród jego odbiorców.
        Prace Antoniego Padalaka obejmują różnorodne sektory, od tworzenia identyfikacji wizualnej i kampanii reklamowych po projektowanie edytorskie i sztukę cyfrową. Jego portfolio wyróżnia się różnorodnością i oryginalnym stylem, co czyni go cenionym specjalistą w dziedzinie grafiki."
        imageUrl={Zewlakow}
      />
      <HeroImage
        title="Antoni Padalak"
        description="Antoni Padalak to utalentowany grafik, znany z kreatywnego podejścia oraz dbałości o szczegóły. Z pasją łączy innowacyjne podejście artystyczne z funkcjonalnymi zasadami projektowania, co pozwoliło mu zyskać uznanie w branży.
        Swoją przygodę z grafiką rozpoczął z fascynacją opowiadaniem historii za pomocą obrazu oraz zobowiązaniem do tworzenia przekonujących narracji wizualnych. Przez lata doskonalił swoje umiejętności w typografii, projektowaniu układów oraz brandingowym, dbając o to, by każdy projekt miał mocny oddźwięk wśród jego odbiorców.
        Prace Antoniego Padalaka obejmują różnorodne sektory, od tworzenia identyfikacji wizualnej i kampanii reklamowych po projektowanie edytorskie i sztukę cyfrową. Jego portfolio wyróżnia się różnorodnością i oryginalnym stylem, co czyni go cenionym specjalistą w dziedzinie grafiki."
        imageUrl={Zewlakow}
        imagePosition="right"
      />
      <HeroImage
        title="Antoni Padalak"
        description="Antoni Padalak to utalentowany grafik, znany z kreatywnego podejścia oraz dbałości o szczegóły. Z pasją łączy innowacyjne podejście artystyczne z funkcjonalnymi zasadami projektowania, co pozwoliło mu zyskać uznanie w branży.
        Swoją przygodę z grafiką rozpoczął z fascynacją opowiadaniem historii za pomocą obrazu oraz zobowiązaniem do tworzenia przekonujących narracji wizualnych. Przez lata doskonalił swoje umiejętności w typografii, projektowaniu układów oraz brandingowym, dbając o to, by każdy projekt miał mocny oddźwięk wśród jego odbiorców.
        Prace Antoniego Padalaka obejmują różnorodne sektory, od tworzenia identyfikacji wizualnej i kampanii reklamowych po projektowanie edytorskie i sztukę cyfrową. Jego portfolio wyróżnia się różnorodnością i oryginalnym stylem, co czyni go cenionym specjalistą w dziedzinie grafiki."
        imageUrl={Zewlakow}
      />
      {/* <Mosaic /> */}
    </div>
  );
};
