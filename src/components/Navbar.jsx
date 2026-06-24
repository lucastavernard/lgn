import { Button } from './Button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logolgn.png" alt="LGN Soluções Tech Logo" className="h-10 w-auto object-contain" />
          <span className="font-semibold text-xl tracking-tight hidden sm:block">LGN Soluções Tech</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-textMuted">
            <a href="#portfolio" className="hover:text-textMain transition-colors">Portfólio</a>
            <a href="#preco" className="hover:text-textMain transition-colors">Planos</a>
          </div>
          <Button 
            href="https://wa.me/5591993170109?text=Ol%C3%A1%21+Gostaria+de+fazer+um+or%C3%A7amento."
            className="px-6 py-2.5 text-sm"
          >
            Fazer Orçamento
          </Button>
        </div>
      </div>
    </nav>
  );
};
