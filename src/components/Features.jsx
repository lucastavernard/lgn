import { motion } from 'framer-motion';
import { Target, Users, Search, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: 'Conversão de Clientes',
    description: 'Design estratégico pensado para guiar o usuário e maximizar as vendas e contatos.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Aumento de Público',
    description: 'Alcance pessoas além da sua região física, com uma vitrine aberta 24 horas por dia.'
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: 'Visibilidade no Google',
    description: 'Código otimizado para SEO, fazendo sua empresa ser encontrada por quem procura seus serviços.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: 'Confiança e Credibilidade',
    description: 'Um design premium e profissional transmite autoridade e segurança para o seu cliente.'
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-surface/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Por que ter um site profissional?</h2>
          <p className="text-textMuted text-lg">
            No mercado atual, as redes sociais não são suficientes. Ter um site próprio é o que separa empresas amadoras das marcas líderes do seu setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              className="group p-8 md:p-10 rounded-3xl bg-surfaceHighlight border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-display">{feature.title}</h3>
                <p className="text-textMuted text-lg leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
