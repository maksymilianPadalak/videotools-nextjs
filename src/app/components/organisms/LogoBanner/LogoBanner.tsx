"use client";
import Image, { ImageProps } from "next/image";
import Bubbles from "@assets/Bubbles.png";
import { FC, useEffect, useState } from "react";

type LogoBannerProps = { images: ImageProps[] };

export const LogoBanner: FC<LogoBannerProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevState) => {
        if (prevState === images.length - 1) return 0;
        return prevState + 1;
      });
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1000px] 2xl:h-[1200px] 3xl:h-[1400px]">
      <div className="absolute inset-0 z-10">
        <Image
          src={Bubbles}
          alt="Bubbles Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute inset-0">
        <Image
          {...images[activeImageIndex]}
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white">
        <h1 className="text-6xl font-extrabold mb-4">Videotools</h1>
        <h2 className="text-2xl font-semibold">Photo, Video, 3D</h2>
      </div>
    </div>
  );
};

export default LogoBanner;
