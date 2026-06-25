export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src="/logolgn.png" alt="LGN Soluções Tech Logo" className="h-8 w-auto object-contain" />
          <span className="font-display font-semibold text-lg tracking-tight">LGN Soluções Tech</span>
        </div>
        
        <p className="text-textMuted text-sm">
          &copy; {year} LGN Soluções Tech. Todos os direitos reservados.
        </p>

        <a 
          href="https://wa.me/5591993170109?text=Ol%C3%A1%21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-textMuted hover:text-primary transition-colors text-sm font-medium"
        >
          Contato Direto
        </a>
      </div>
    </footer>
  );
};
