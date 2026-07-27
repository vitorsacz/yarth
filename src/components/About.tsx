import { aboutImage } from '../data/content';

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
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-neutral-900 p-8 rounded-3xl z-20 flex flex-col justify-end">
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

            <div className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-neutral-100">
              <div>
                <p className="text-3xl font-display font-black text-neutral-950">+20</p>
                <p className="text-sm font-bold text-neutral-500 uppercase tracking-tighter">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-display font-black text-neutral-950">+500</p>
                <p className="text-sm font-bold text-neutral-500 uppercase tracking-tighter">Projetos Executados</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mt-32 border-t border-neutral-100 pt-20">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.3em] mb-6">Nossa Filosofia</h4>
            <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
              <p>
                Nosso verdadeiro diferencial está na união perfeita entre tecnologia, design e experiência. Acreditamos que cada detalhe importa. Por isso, desenvolvemos projetos sob medida que combinam estética, funcionalidade e durabilidade.
              </p>
              <p>
                Para nós, a satisfação do cliente é prioridade absoluta. Garantimos um acompanhamento técnico rigoroso em todas as etapas — desde o primeiro atendimento até o cuidado no pós-venda —, entregando resultados que valorizam e transformam cada ambiente.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-4 border-b border-slate-100 pb-2">Nossa Essência</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Missão</span>
                  <p className="text-sm text-neutral-700">Transformar ideias em projetos reais, com máxima qualidade e confiança.</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Visão</span>
                  <p className="text-sm text-neutral-700">Ser a grande referência nacional em soluções de alumínio, vidro e estruturas metálicas.</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Valores</span>
                  <p className="text-sm text-neutral-700 font-medium">Compromisso, inovação, respeito e excelência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
