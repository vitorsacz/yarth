import { motion } from 'motion/react';
import { WHATSAPP_URL, type PortfolioItem } from '../data/content';
import PortfolioCard from './PortfolioCard';

interface ServicePageLayoutProps {
  breadcrumb: string;
  title: string;
  tagline: string;
  bannerImage: string;
  introParagraphs: string[];
  highlights: string[];
  galleryHeading: string;
  galleryItems: PortfolioItem[];
  onOpenGallery: (images: string[]) => void;
}

export default function ServicePageLayout({
  breadcrumb,
  title,
  tagline,
  bannerImage,
  introParagraphs,
  highlights,
  galleryHeading,
  galleryItems,
  onOpenGallery,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-40">
        <img
          src={bannerImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <p className="text-xs font-bold text-white/60 uppercase tracking-[0.3em] mb-4">{breadcrumb}</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-3xl leading-tight">
            {title}
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-8 leading-relaxed">{tagline}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-slate-900 px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Explanatory text + highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div className="space-y-6 text-neutral-600 leading-relaxed text-lg">
            {introParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-8 content-start">
            {highlights.map((item) => (
              <div key={item} className="space-y-3">
                <div className="w-6 h-px bg-slate-900" />
                <p className="text-sm font-bold uppercase tracking-wide text-slate-900 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryItems.length > 0 && (
        <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Portfólio</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tighter mb-16">
              {galleryHeading}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <PortfolioCard item={item} onOpenGallery={onOpenGallery} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
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
          </div>
        </div>
      </section>
    </>
  );
}
