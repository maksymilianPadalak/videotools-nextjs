import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import cx from "classnames";
import "./globals.css";
import { LogoBanner } from "@organisms/LogoBanner";
import Benhacker from "@assets/BannerPhotos/Benhacker.jpg";
import Blachowicz from "@assets/BannerPhotos/Blachowicz.jpg";
import Collection from "@assets/BannerPhotos/Collection.jpg";
import Ostaszewska from "@assets/BannerPhotos/Ostaszewska.jpg";

import { ImageProps } from "next/image";

//TODO move font to font folder
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Videotools",
  description: "Photo, Video, 3D",
};

const images: ImageProps[] = [
  { src: Benhacker, alt: "Benhacker" },
  { src: Blachowicz, alt: "Blachowicz" },
  { src: Collection, alt: "Collection" },
  { src: Ostaszewska, alt: "Ostaszewska" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(openSans.variable)}>
        <LogoBanner images={images} />
        {children}
      </body>
    </html>
  );
}
