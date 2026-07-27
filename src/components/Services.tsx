import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SERVICES, WHATSAPP_URL } from '../data/content';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group space-y-6"
            >
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div>
                <div className="w-8 h-px bg-slate-900 mb-6"></div>
                <h4 className="font-bold uppercase text-xs tracking-[0.2em] text-slate-900">{service.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium mt-4">{service.description}</p>
                <a
                  href={WHATSAPP_URL}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors pt-6"
                >
                  Saiba Mais <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
