import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const projects = [
  {
    id: 1,
    title: 'Clínica Freire',
    category: 'Odontologia Premium',
    image: '/clinica.png',
    link: 'https://clinicafreire.netlify.app/'
  },
  {
    id: 2,
    title: 'AWS Water',
    category: 'Engenharia de Tratamento',
    image: '/aws.png',
    link: 'https://grupoawswater.netlify.app/'
  },
  {
    id: 3,
    title: 'Gerat Geradores',
    category: 'Energia Ininterrupta',
    image: '/gerat.png',
    link: 'https://gerat-site.vercel.app/'
  }
];

export const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="portfolio" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Projetos Recentes</h2>
            <p className="text-textMuted text-lg">
              Confira alguns dos trabalhos que desenvolvemos. Cada projeto é único e focado em gerar o máximo de resultados para nossos clientes.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project, index) => (
            <div className="embla__slide" key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group block relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary font-medium mb-2">{project.category}</span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
