import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Gem, 
  Maximize, 
  GlassWater, 
  Fence, 
  Wrench,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import images from assets
import g1 from './assets/g_1.webp';
import g2 from './assets/g_2.webp';
import g3 from './assets/g_3.webp';
import g4 from './assets/g_4.webp';
import g5 from './assets/g_5.webp';
import g6 from './assets/g_6.webp';
import g8 from './assets/g_8.webp';
import g9 from './assets/g_9.webp';
import logoPreto from './assets/logo-escrita-preto.svg';
import logoBranco from './assets/logo-escrita-branco.svg';

// Import furniture assets
import m1 from './assets/m_1.svg';
import m2 from './assets/m_2.svg';
import m3 from './assets/m_3.svg';
import m4 from './assets/m_4.svg';
import m5 from './assets/m_5.svg';
import m6 from './assets/m_6.svg';
import m7 from './assets/m_7.svg';
import m8 from './assets/m_8.svg';

// Custom WhatsApp Icon since it's not in standard Lucide
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'A Yarth', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Mobiliário', href: '#furniture' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Diferenciais', href: '#why-us' },
  { name: 'Contato', href: '#contact' },
];

const SERVICES = [
  {
    title: 'Esquadrias de Alumínio',
    description: 'Portas, janelas, fachadas e divisórias personalizadas com isolamento acústico e design minimalista.',
    icon: Maximize,
    image: g5
  },
  {
    title: 'Vidraçaria Completa',
    description: 'Boxes, guarda-corpos em vidro, espelhos e envidraçamento de sacadas com segurança e sofisticação.',
    icon: GlassWater,
    image: g2
  },
  {
    title: 'Serralheria Moderna',
    description: 'Portões automáticos, estruturas metálicas sob medida e corrimãos com acabamento impecável.',
    icon: Fence,
    image: g8
  },
  {
    title: 'Instalação e Manutenção',
    description: 'Equipe técnica especializada para garantir a durabilidade e o funcionamento perfeito de cada projeto.',
    icon: Wrench,
    image: g3
  },
];

const FEATURES = [
  {
    title: 'Atendimento Personalizado',
    description: 'Projetos exclusivos que se adaptam perfeitamente à sua necessidade arquitetônica.',
    icon: Gem
  },
  {
    title: 'Materiais Premium',
    description: 'Utilizamos apenas as melhores ligas de alumínio e vidros de alta resistência.',
    icon: ShieldCheck
  },
  {
    title: 'Entrega Rigorosa',
    description: 'Compromisso absoluto com os prazos estabelecidos em contrato.',
    icon: Clock
  }
];

const GALLERY = [
  { url: g5, title: 'Fachadas de Vidro' },
  { url: g2, title: 'Arquitetura Interna' },
  { url: g1, title: 'Vista Panorâmica' },
  { url: g6, title: 'Boxes de Luxo' },
  { url: g9, title: 'Serralheria Fina' },
  { url: g3, title: 'Áreas Externas' },
  { url: g8, title: 'Adegas e Cristaleiras' },
  { url: g4, title: 'Espaços Gourmet' },
];

const FURNITURE_GALLERY = [
  { url: m1, title: 'Design de Interiores' },
  { url: m2, title: 'Mobiliário Exclusivo' },
  { url: m3, title: 'Cristaleiras e Adegas' },
  { url: m4, title: 'Estruturas Minimalistas' },
  { url: m5, title: 'Conceito Yarth' },
  { url: m6, title: 'Estanteria Premium' },
  { url: m7, title: 'Detalhes Técnicos' },
  { url: m8, title: 'Ambientes Integrados' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const whatsappUrl = "https://wa.me/5511966446215?text=Olá,%20vim%20pelo%20site%20de%20vocês.%20Tenho%20interesse%20em%20fazer%20um%20orçamento!";

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 transition-colors rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6 md:gap-12">
          <a href="#home" className="flex items-center shrink-0">
            <img 
              src={logoPreto} 
              alt="Yarth logo" 
              className={`${scrolled ? 'h-10 md:h-14' : 'h-14 md:h-36'} w-auto transition-all duration-300`} 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 shrink-0">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 text-white px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all whitespace-nowrap ml-4"
            >
              Falar com Especialista
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>


        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 p-8 lg:hidden flex flex-col gap-6 shadow-xl"
            >
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display font-medium text-neutral-900"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-neutral-900 text-white w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Falar com Especialista
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-48 lg:pt-64">
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
                href={whatsappUrl}
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
              src={g6}
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


      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-stretch">
            <div className="relative h-full min-h-[400px]">
              <div className="h-full bg-neutral-100 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={g4}
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                    href={whatsappUrl} 
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
      {/* Personalized Furniture Section */}
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
                {['Design Sob Medida', 'Acabamentos de Alta Fixação', 'Integração com Iluminação LED'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-900"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={m1} alt="Funiture 1" className="w-full aspect-[3/4] object-cover bg-slate-50" />
                <img src={m4} alt="Funiture 4" className="w-full aspect-square object-cover bg-slate-50" />
              </div>
              <div className="pt-12 space-y-4">
                <img src={m2} alt="Funiture 2" className="w-full aspect-square object-cover bg-slate-50" />
                <img src={m3} alt="Funiture 3" className="w-full aspect-[3/4] object-cover bg-slate-50" />
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
                onClick={() => setSelectedImage(item.url)}
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


      {/* Portfolio Gallery Section */}
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
                onClick={() => setSelectedImage(item.url)}
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
      <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative">
          <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">Por que escolher a Yarth?</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { t: 'Atendimento Personalizado', d: 'Soluções sob medida para a sua necessidade.' },
              { t: 'Qualidade Premium', d: 'Uso exclusivo de materiais de altíssima qualidade.' },
              { t: 'Expertise', d: 'Equipe técnica altamente especializada.' },
              { t: 'Compromisso', d: 'Entregas rigorosamente dentro do prazo.' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-3">
                <div className="w-6 h-px bg-white"></div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-white leading-tight">{item.t}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{item.d}</p>
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
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="minimal-button"
            >
              Falar com um Consultor
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final Contact / Footer */}
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
                  href={whatsappUrl}
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
            <a href="www.vitorsantos.dev.br" target="blank"><p>Desenvolvido por <span className="text-slate-900">Vitor Sacz</span></p></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
