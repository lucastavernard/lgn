import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-float" />
      <div className="absolute bottom-1/4 -right-10 w-[600px] h-[600px] bg-accent/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen animate-slow-spin" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              LGN Soluções Tech
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold tracking-tight text-balance mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transforme visitantes em clientes com um site de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">alta performance</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Criamos experiências digitais premium, minimalistas e focadas em conversão. Elevamos a autoridade da sua marca no mundo digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              href="https://wa.me/5591993170109?text=Ol%C3%A1%21+Gostaria+de+fazer+um+or%C3%A7amento+para+um+site+profissional." 
              className="w-full sm:w-auto text-lg px-10 py-5"
            >
              Fazer Orçamento <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              href="#portfolio" 
              variant="secondary"
              className="w-full sm:w-auto text-lg px-10 py-5"
            >
              Ver Projetos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
