import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Pastor João Calvino",
    title: "Teólogo e Pastor",
    quote: "Uma ferramenta indispensável para o cristão moderno que busca aprofundar-se na sã doutrina. A curadoria é excelente e fiel às Escrituras.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "pastor portrait",
  },
  {
    name: "Maria da Graça",
    title: "Líder de Estudo Bíblico",
    quote: "Finalmente um guia claro e confiável! Os roadmaps me ajudaram a orientar meu grupo de estudo com muito mais segurança e profundidade.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
  },
  {
    name: "Dr. Agostinho de Hipona",
    title: "Pai da Igreja",
    quote: "Se eu tivesse acesso a esta plataforma em meu tempo, teria poupado muitas noites de busca solitária. A sabedoria dos séculos, organizada para a glória de Deus.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "scholar portrait",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Construído sobre a Rocha
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Nossa base é a confiança, a fidelidade às Escrituras e o zelo pela verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold">100% Gratuito</h3>
            <p className="text-muted-foreground">Acesso livre para todos que buscam a sabedoria.</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold">Fiel às Escrituras</h3>
            <p className="text-muted-foreground">Baseado na tradição cristã piedosa e histórica.</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold">Curadoria Piedosa</h3>
            <p className="text-muted-foreground">Feita com temor, oração e dedicação manual.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
