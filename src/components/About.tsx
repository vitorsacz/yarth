import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutImage, philosophyImage, SERVICES } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-stretch">
          <div className="relative h-full min-h-[400px]">
            <div className="h-full bg-neutral-100 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src={aboutImage}
                alt="Quality Details"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-neutral-900/30 backdrop-blur-xl border border-white/20 p-8 rounded-3xl z-20 flex flex-col justify-end shadow-2xl">
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Compromisso</p>
              <p className="text-white text-xl font-display italic">"Transformamos ideias visionárias em obras de arte funcionais."</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em] mb-4">A Yarth</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold leading-tight text-neutral-950 mb-8">
              Excelência técnica que <br /> define novos padrões.
            </h3>
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                Com mais de uma década de experiência, a Yarth nasceu com um propósito claro: oferecer soluções completas e de alto padrão em esquadrias de alumínio, vidraçaria e serralheria.
              </p>
              <p>
                Sediada em Mairiporã (SP), nossa operação abraça todo o Brasil, entregando excelência em obras residenciais, comerciais e corporativas, independentemente do tamanho do projeto.
              </p>
            </div>

            <div className="pt-10 mt-10 border-t border-neutral-100">
              <p className="text-3xl font-display font-black text-neutral-950">+1000</p>
              <p className="text-sm font-bold text-neutral-500 uppercase tracking-tighter">Projetos Executados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed Nossa Filosofia / Nossa Essência panel */}
      <div className="mt-32">
        <div className="relative overflow-hidden">
          <img
            src={philosophyImage}
            alt="Nossa Filosofia"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
            <div className="max-w-2xl">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Nossa Filosofia</h4>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                <p>
                  Nosso verdadeiro diferencial está na união perfeita entre tecnologia, design e experiência. Acreditamos que cada detalhe importa. Por isso, desenvolvemos projetos sob medida que combinam estética, funcionalidade e durabilidade.
                </p>
                <p>
                  Para nós, a satisfação do cliente é prioridade absoluta. Garantimos um acompanhamento técnico rigoroso em todas as etapas — desde o primeiro atendimento até o cuidado no pós-venda —, entregando resultados que valorizam e transformam cada ambiente.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">Nossa Essência</h4>
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <span className="text-[10px] font-bold text-white/50 uppercase block mb-1">Missão</span>
                  <p className="text-sm text-white/80">Transformar ideias em projetos reais, com máxima qualidade e confiança.</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/50 uppercase block mb-1">Visão</span>
                  <p className="text-sm text-white/80">Ser a grande referência nacional em soluções de alumínio, vidro e estruturas metálicas.</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/50 uppercase block mb-1">Valores</span>
                  <p className="text-sm text-white/90 font-medium">Compromisso, inovação, respeito e excelência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 -mt-16 md:-mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                to={`/${service.slug}`}
                className="group rounded-2xl overflow-hidden bg-white shadow-xl block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-900">{service.title}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors pt-4">
                    Saiba Mais <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
