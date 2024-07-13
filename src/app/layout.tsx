import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import cx from "classnames";
import "./globals.css";

//TODO move font to font folder
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Videotools",
  description: "Photo, Video, 3D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(openSans.variable)}>{children}</body>
    </html>
  );
}
