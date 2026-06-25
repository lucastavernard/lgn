import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './Button';

const benefits = [
  'Design Profissional Premium',
  'Totalmente Responsivo (Mobile, Tablet, PC)',
  'Otimização para o Google (SEO)',
  'Integração com WhatsApp',
  'Alta Velocidade de Carregamento',
  'Certificado de Segurança (SSL)'
];

export const Pricing = () => {
  return (
    <section id="preco" className="py-24 bg-surface/30 border-y border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-slow-spin" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Pronto para dar o próximo passo?</h2>
          <p className="text-textMuted text-lg">
            Tenha um site de alto nível pagando um preço justo. Sem surpresas e com qualidade garantida.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-surface/60 backdrop-blur-md border border-border/50 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)] hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] transition-shadow duration-500">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white font-medium px-5 py-1.5 rounded-bl-2xl text-sm shadow-lg">
              Mais Vendido
            </div>
            
            <h3 className="text-2xl font-semibold mb-2">Plano Pro</h3>
            <p className="text-textMuted mb-6">Tudo o que sua empresa precisa para começar a vender online hoje.</p>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm text-textMuted">a partir de</span>
              <span className="text-5xl font-bold">R$ 500</span>
            </div>
            <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 font-medium text-sm rounded-full mb-8">
              Sem mensalidade
            </div>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-textMuted">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button 
              href="https://wa.me/5591993170109?text=Ol%C3%A1%21+Gostaria+de+comprar+um+site+profissional+a+partir+de+R%24+500."
              className="w-full text-lg py-5"
            >
              Quero meu site agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
