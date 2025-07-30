import { Mail, Info, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">
          <p className="mb-4">Feito com oração, estudo e zelo pela Verdade.</p>
          <p className="italic mb-6">“Examinais as Escrituras, porque vós cuidais ter nelas a vida eterna...” – João 5:39</p>
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Contato</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Heart  className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Info className="w-5 h-5" />
              <span>Sobre o projeto</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
