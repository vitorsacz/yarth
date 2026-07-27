import { motion } from 'motion/react';
import { GALLERY } from '../data/content';

interface PortfolioProps {
  onSelectImage: (url: string) => void;
}

export default function Portfolio({ onSelectImage }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Portfólio</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter">
              Galeria de Projetos Realizados.
            </h3>
          </div>
          <p className="text-slate-500 max-w-xs font-medium text-sm leading-relaxed">
            Uma seleção de nossas melhores entregas em residências e espaços corporativos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-square overflow-hidden bg-slate-100 cursor-zoom-in"
              onClick={() => onSelectImage(item.url)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
