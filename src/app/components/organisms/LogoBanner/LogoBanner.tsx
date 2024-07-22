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
  }, [images.length]);

  return (
    <div className="relative h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1000px] 2xl:h-[1200px] 3xl:h-[1400px]">
      {images.map((image, index) => (
        <Image
          key={index}
          {...image}
          layout="fill"
          objectPosition="top"
          objectFit="cover"
          quality={100}
          className={`transition-opacity duration-1000 ease-in-out ${
            index === activeImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default LogoBanner;
