import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-white text-primary-foreground">
          🛡️ Sua jornada começa agora
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Comece por um tema e mergulhe em uma trilha de livros e contéudos que moldam mente e coração — tudo para a glória de Deus.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Começar agora
        </Button>
      </div>
    </section>
  );
}
