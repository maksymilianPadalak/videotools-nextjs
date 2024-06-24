import Image from "next/image";
import { Heading } from "@atoms/Heading";
import { Mosaic } from "@organisms/Mosaic/Mosaic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <Heading></Heading>
      </div>
      <Mosaic />
    </main>
  );
}
