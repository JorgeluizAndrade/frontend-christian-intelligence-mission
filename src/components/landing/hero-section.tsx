import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative text-center py-24 md:py-40 flex items-center justify-center min-h-[70dvh] md:min-h-[80dvh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/0f/44/64/0f44645ad33411cd810fcfdc8721feb4.jpg"
          alt="Céu com nuvens"
          data-ai-hint="sky clouds"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 text-foreground animate-fade-in-down">
          Missão Inteligência Cristã
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
          Roadmaps(knowledge graph ui) de leitura para cristãos que querem crescer em fé e sabedoria.
        </p>
        <Button size="lg" className="text-lg px-8 py-6 shadow-lg">
           <Link href={"/roadmap"}>
          Comece sua jornada
          </Link>
        </Button>
        <p className="mt-12 text-base md:text-lg italic text-muted-foreground">
          “Não vos conformeis com este mundo, mas transformai-vos pela renovação da vossa mente.” – Romanos 12:2
        </p>
      </div>
    </section>
  );
}
