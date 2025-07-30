import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2 } from "lucide-react";

const wordsOfGod = [
  {
    name: "Salmos 119:1-4",
    title: "Palavra de Deus",
    quote: "¹ Bem-aventurados os retos em seus caminhos, que andam na lei do Senhor. ² Bem-aventurados os que guardam os seus testemunhos, e que o buscam com todo o coração. ³ E não praticam iniquidade, mas andam nos seus caminhos. ⁴ Tu ordenaste os teus mandamentos, para que diligentemente os observássemos. Salmos 119:1-4",
    avatar: "https://i.pinimg.com/736x/a0/d8/4c/a0d84cb17df0790cf844edc9fd13ef34.jpg",
    aiHint: "verse bible",
  },
  {
    name: "AP. João ",
    title: "AP. João, o amado do Senhor.",
    quote: "¹ No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. ² Ele estava no princípio com Deus. ³ Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez. ⁴ Nele estava a vida, e a vida era a luz dos homens. ⁵ E a luz resplandece nas trevas, e as trevas não a compreenderam. João 1:1-5",
    avatar: "https://i.pinimg.com/736x/a9/40/de/a940de0a101afbf58da504312d36981f.jpg",
    aiHint: "verse bible",
  },
  {
    name: "Jesus, nosso DEUS E SENHOR!",
    title: "O CAMINHO, A VERDADE E A VIDA!",
    quote: "⁶ Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim. João 14:6",
    avatar: "https://i.pinimg.com/1200x/f5/d4/ef/f5d4ef434985c534998a4ebc2ef860f8.jpg",
    aiHint: "verse bible",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Construído sobre a Rocha, Cristo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Nossa base é a confiança, a fidelidade às Escrituras e o zelo pela verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold">100% Gratuito</h3>
            <p className="text-muted-foreground">Acesso livre a todos os tópicos para todos que buscam a sabedoria.</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold">Fiel às Escrituras</h3>
            <p className="text-muted-foreground">Baseado na tradição cristã piedosa e histórica.</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-10 h-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold">Curadoria Piedosa</h3>
            <p className="text-muted-foreground">Feita com temor, oração e dedicação para glória de Cristo, nosso Senhor.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordsOfGod.map((verses, index) => (
            <Card key={index} className="flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic">"{verses.quote}"</p>
              </CardContent>
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={verses.avatar} alt={verses.name} data-ai-hint={verses.aiHint} />
                  <AvatarFallback>{verses.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{verses.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{verses.title}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
