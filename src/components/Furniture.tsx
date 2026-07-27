import { motion } from 'motion/react';
import {
  FURNITURE_FEATURES,
  FURNITURE_GALLERY,
  furnitureHighlight1,
  furnitureHighlight2,
  furnitureHighlight3,
  furnitureHighlight4,
} from '../data/content';

interface FurnitureProps {
  onSelectImage: (url: string) => void;
}

export default function Furniture({ onSelectImage }: FurnitureProps) {
  return (
    <section id="furniture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="md:w-1/2">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 block">Exclusividade</span>
            <h2 className="text-3xl md:text-5xl font-display font-light text-slate-900 mb-8 leading-tight">
              Mobiliário Personalizado em <span className="font-bold">Vidro, Ferro, Alumínio e Madeira</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Desenvolvemos peças exclusivas que unem a leveza do vidro à resistência do alumínio. Adegas, cristaleiras, estantes e detalhes que transformam ambientes comuns em espaços extraordinários.
            </p>
            <div className="space-y-4">
              {FURNITURE_FEATURES.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-900"></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={furnitureHighlight1} alt="Funiture 1" className="w-full aspect-[3/4] object-cover bg-slate-50" />
              <img src={furnitureHighlight4} alt="Funiture 4" className="w-full aspect-square object-cover bg-slate-50" />
            </div>
            <div className="pt-12 space-y-4">
              <img src={furnitureHighlight2} alt="Funiture 2" className="w-full aspect-square object-cover bg-slate-50" />
              <img src={furnitureHighlight3} alt="Funiture 3" className="w-full aspect-[3/4] object-cover bg-slate-50" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FURNITURE_GALLERY.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square bg-slate-50 overflow-hidden cursor-pointer"
              onClick={() => onSelectImage(item.url)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
