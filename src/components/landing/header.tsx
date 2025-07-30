import { Button } from "@/components/ui/button";
import { BookHeart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <BookHeart className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold">Cristo Saber</span>
        </a>
        <nav>
          <Button>Comece sua jornada</Button>
        </nav>
      </div>
    </header>
  );
}
