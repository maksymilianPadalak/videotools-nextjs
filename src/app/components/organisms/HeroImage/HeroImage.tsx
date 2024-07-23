import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";

type HeroImageProps = {
  imageUrl: StaticImport;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
};

export const HeroImage: FC<HeroImageProps> = ({
  imageUrl,
  title,
  description,
  imagePosition = "left", // Default to 'left' if not specified
}) => {
  const imageContainerClasses =
    imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className={`w-full lg:w-1/2 ${imageContainerClasses} p-6`}>
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={800}
          className="rounded-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-extrabold mb-4">{title}</h1>
        <h2 className="text-2xl font-semibold">{description}</h2>
      </div>
    </div>
  );
};
