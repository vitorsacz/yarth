import { Instagram } from 'lucide-react';
import { WHATSAPP_URL } from '../data/content';
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
              <span className="text-sm font-bold text-slate-900 uppercase tracking-tight">Mairiporã - SP | Atendimento Nacional</span>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex flex-col md:items-end gap-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Telefone</span>
              <span className="text-2xl font-display font-black text-slate-900 tracking-tighter">+55 (11) 96644-6215</span>
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

        <div className="pt-8 border-t border-slate-100 flex flex-col justify-center items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <p>© 2026 Yarth. Todos os direitos reservados</p>
          <a href="https://www.vitorsantos.dev.br" target="blank"><p>Desenvolvido por <span className="text-slate-900">Vitor Santos</span></p></a>
        </div>
      </div>
    </footer>
  );
}
