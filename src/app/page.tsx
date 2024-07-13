import { Mosaic } from "@organisms/Mosaic/Mosaic";
import { LandingPage } from "./components/templates/LandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LandingPage />
    </main>
  );
}
