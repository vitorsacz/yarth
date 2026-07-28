import { motion } from 'motion/react';
import { heroImage, WHATSAPP_URL } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-36 lg:pt-64">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
        >
          <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 block">Soluções Personalizadas</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] mb-8 text-slate-900">
            Soluções de Alto Padrão em <br className="hidden sm:block"/>
            <span className="font-bold">Ferro, Alumínio e Vidro.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Elegância e precisão técnica para projetos residenciais e corporativos de alto padrão em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="minimal-button w-full sm:w-auto"
            >
              Solicitar Orçamento
            </a>
            <div className="flex gap-8 md:gap-10 items-center justify-center sm:border-l sm:border-slate-200 sm:pl-10">
              <div className="text-center sm:text-left">
                <p className="text-2xl md:text-3xl font-bold text-slate-900">20+</p>
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-tight text-slate-400">Anos de Experiência</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl md:text-3xl font-bold text-slate-900">500+</p>
                <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-tight text-slate-400">Clientes Atendidos</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Aesthetic Focal Point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:col-span-5 lg:flex justify-end"
        >
          <div className="w-full aspect-[4/5] bg-slate-50 border border-slate-100 flex flex-col relative transition-transform hover:scale-[1.02] duration-700">
            <div className="absolute inset-4 border border-slate-200 flex items-center justify-center pointer-events-none">
               <div className="text-slate-100 text-8xl font-thin tracking-widest -rotate-90">YARTH</div>
            </div>
            <img
            src={heroImage}
              alt="Modern Detail"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-10 -left-10 bg-white p-8 shadow-2xl border border-slate-100 max-w-[240px]">
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Destaque</p>
               <p className="text-lg font-bold text-slate-900 leading-tight">Fachadas em Structural Glazing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
