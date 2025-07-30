import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitMerge, Book, Clapperboard, MicVocal } from 'lucide-react';

const RoadmapNode = ({ icon, title, description, isBranch = false }: { icon: React.ElementType, title: string, description: string, isBranch?: boolean }) => (
  <div className={`flex items-center gap-4 ${isBranch ? 'items-start' : ''}`}>
    {!isBranch && <div className="w-px h-16 bg-border" />}
    <div className="flex-1">
      <Card className="text-left w-full hover:shadow-lg transition-shadow duration-300 bg-card">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
          <div className="bg-primary/10 p-2 rounded-full">
            {React.createElement(icon, { className: "w-6 h-6 text-primary" })}
          </div>
          <CardTitle className="text-lg font-headline">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  </div>
);

const BranchLine = () => (
    <div className="relative h-16 w-full flex justify-center">
        <div className="absolute top-0 h-full w-px bg-border"></div>
        <div className="absolute top-0 h-px w-1/2 left-1/2 bg-border"></div>
    </div>
);

const RoadmapBranch = ({ title, items }: { title: string, items: { icon: React.ElementType, title: string }[] }) => (
  <div className="flex flex-col items-center">
    <div className="bg-accent/20 text-accent-foreground text-white sfont-semibold py-2 px-4 rounded-full border border-accent">
      {title}
    </div>
    <div className="h-8 w-px bg-border" />
    <div className="flex flex-col gap-4 self-stretch">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
          {React.createElement(item.icon, { className: "w-4 h-4 text-accent" })}
          <span className='font-semibold text-white'>{item.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            📚 Roadmaps guiados com direção clara
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Siga trilhas de conhecimento estruturadas para aprofundar sua fé de maneira sólida e confiável.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Start Node */}
          <Card className="text-center max-w-md shadow-lg border-primary border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary">Comece com um tema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Escolha um roadmap como "Sabedoria Cristã" para iniciar sua jornada.</p>
            </CardContent>
          </Card>
          
          {/* Connecting Line */}
          <div className="h-16 w-px bg-border my-4" />

          {/* Branches */}
          <div className="relative w-full text-center">
             <p className="text-muted-foreground mb-4">Explore tópicos e aprofunde-se com materiais confiáveis</p>
             <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2" />
             <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 z-10">
                <RoadmapBranch title="Vida Prática" items={[{icon: Book, title: "Livros"}, {icon: MicVocal, title: "Sermões"}]} />
                <RoadmapBranch title="Teologia" items={[{icon: Book, title: "Pregações"}, {icon: Clapperboard, title: "Vídeos"}]} />
                <RoadmapBranch title="Piedade" items={[{icon: Book, title: "Livros"}, {icon: MicVocal, title: "Podcasts"}]} />
             </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            💡 “Como uma árvore plantada junto às águas... que dá o seu fruto no tempo certo” – Salmos 1:3
          </p>
        </div>
      </div>
    </section>
  );
}
