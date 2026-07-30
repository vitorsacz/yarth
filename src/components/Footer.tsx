import { Instagram } from 'lucide-react';
import { ADDRESS, companyFacadeImage, WHATSAPP_URL } from '../data/content';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Email</span>
              <a href="mailto:contato@yarth.com.br" className="text-sm font-bold text-slate-900 hover:underline">contato@yarth.com.br</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Escritório</span>
              <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">{ADDRESS}</span>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex flex-col md:items-end gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Telefone</span>
              <a
                href="tel:+5511966446215"
                className="text-2xl font-display font-black text-slate-900 tracking-tighter hover:text-slate-600 transition-colors"
              >
                +55 (11) 96644-6215
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/grupoyarth/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all rounded-full"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all rounded-full"
                title="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <img
              src={companyFacadeImage}
              alt="Fachada da Yarth"
              className="w-full h-[360px] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Yarth"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col justify-center items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <p>© 2026 Yarth. Todos os direitos reservados</p>
          <a href="https://www.vitorsantos.dev.br" target="blank"><p>Desenvolvido por <span className="text-slate-900">Vitor Santos</span></p></a>
        </div>
      </div>
    </footer>
  );
}
