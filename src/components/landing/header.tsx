import { Button } from "@/components/ui/button";
import { ShieldHalf } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <ShieldHalf className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold">Cristo Saber</span>
        </a>
        <nav>
          <Button>
          <Link href={"/roadmap"}>
            Comece sua jornada
            </Link>
            </Button>
        </nav>
         <nav>
          <Link  href={"/blog"} className="flex items-center gap-2">  
            <Button className="bg-primary text-white">
              Visite nosso blog!
            </Button>
          </Link >
        </nav>
      </div>
    </header>
  );
}
