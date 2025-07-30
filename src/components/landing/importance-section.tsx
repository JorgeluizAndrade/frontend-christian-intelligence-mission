import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, ShieldCheck, HelpCircle } from "lucide-react";

export default function ImportanceSection() {
  return (
    <section id="importance" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <BookOpenCheck className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-headline font-bold mb-2">Combate às Heresias</h3>
                <p className="text-lg text-muted-foreground">
                📖 Com o aumento das heresias, muitos estão sendo enganados.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-headline font-bold mb-2">Leituras Sólidas</h3>
                <p className="text-lg text-muted-foreground">
                🛡️ Esta plataforma existe para ajudar cristãos a terem leituras piedosas e sólidas, <strong>para que não sejam levados por qualquer vento de doutrina.</strong>
                </p>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <HelpCircle className="w-7 h-7 text-accent" />
                Você já se perguntou?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-muted-foreground">
              <p>• "Por onde melhorar minha leitura cristã?"</p>
              <p>• "Quais autores realmente glorificam a Deus?"</p>
              <p>• "Como posso aprofundar meu conhecimento teológico de forma segura?"</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
