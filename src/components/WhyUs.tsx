import { motion } from 'motion/react';
import { WHATSAPP_URL, WHY_US } from '../data/content';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 relative">
        <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Por que escolher a Yarth?</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {WHY_US.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="w-6 h-px bg-white"></div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-white leading-tight">{item.title}</h5>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-lg text-center md:text-left text-slate-900">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">Inicie seu projeto com quem entende.</h4>
            <p className="text-slate-500 text-sm">Atendimento especializado em Mairiporã e execução nacional.</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="minimal-button"
          >
            Falar com um Consultor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
