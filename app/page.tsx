import { Configurator } from "@/components/configurator";
import { Engineering } from "@/components/engineering";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Legacy } from "@/components/legacy";
import { Models } from "@/components/models";
import { Navbar } from "@/components/navbar";
import { Performance } from "@/components/performance";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Models />
      <Performance />
      <Engineering />
      <Configurator />
      <Legacy />
      <Footer />
    </main>
  );
}
