import { Maximize, GlassWater, Fence } from 'lucide-react';

import g4 from '../assets/g_4.webp';
import g5 from '../assets/g_5.webp';
import g6 from '../assets/g_6.webp';
import g8 from '../assets/g_8.webp';
import g9 from '../assets/g_9.webp';
import companyFacadeImage from '../assets/fachada-empresa.webp';

import pEsquadriaPortaExterna from '../assets/portfolio/esquadria-porta-externa.webp';
import pEsquadriaPortasExterna from '../assets/portfolio/esquadria-portas-externa.webp';
import pEsquadriaPortaMarcio from '../assets/portfolio/esquadria-porta-marcio.webp';
import pEsquadriaPortaRicardo from '../assets/portfolio/esquadria-porta-ricardo.webp';
import pEsquadriaPortasInterna from '../assets/portfolio/esquadria-portas-interna.webp';
import pVidracariaPortaDeVidro from '../assets/portfolio/vidracaria-porta-de-vidro.webp';

import pEsquadriaGuardaCorpoKlabin from '../assets/portfolio/esquadria-guarda-corpo-klabin.webp';
import pEsquadriaGuardaCorpoRicardo from '../assets/portfolio/esquadria-guarda-corpo-ricardo.webp';
import pVidracariaGuardaCorpoParapeito from '../assets/portfolio/vidracaria-guarda-corpo-parapeito.webp';
import pVidracariaGuardaCorpoVidro from '../assets/portfolio/vidracaria-guarda-corpo-vidro.webp';
import pVidracariaGuardaCorpoTiboRedondo from '../assets/portfolio/vidracaria-guarda-corpo-tibo-redondo.webp';
import pSerralheriaPredioGuardaCorpo from '../assets/portfolio/serralheira-predio-guarda-corpo.webp';

import pEsquadriaFechamentoSacada from '../assets/portfolio/esquadria-fechamento-sacada.webp';
import pVidracariaFechamentoDeSacada from '../assets/portfolio/vidracaria-fechamento-de-sacada.webp';

import pVidracariaTelhadoDeVidro from '../assets/portfolio/vidracaria-telhado-de-vidro.webp';
import pVidracariaTelhadoDeVidro2 from '../assets/portfolio/vidracaria-telhado-de-vidro-2.webp';
import pVidracariaTelhadoPergolado from '../assets/portfolio/vidracaria-telhado-pergolado.webp';

import pVidracariaBoxBranco from '../assets/portfolio/vidracaria-box-branco.webp';
import pVidracariaBoxDuplo from '../assets/portfolio/vidracaria-box-duplo.webp';
import pVidracariaBoxPreto from '../assets/portfolio/vidracaria-box-preto.webp';
import pVidracariaBoxRosee from '../assets/portfolio/vidracaria-box-rosee.webp';
import pSerralheriaBoxBarolo from '../assets/portfolio/serralheria-box-barolo.webp';
import pSerralheriaEstruturaBoxBarolo from '../assets/portfolio/serralheira-estrutura-box-barolo.webp';

import pEsquadriaJanelaIntegradaCloset from '../assets/portfolio/esquadria-janela-integrada-closet.webp';

import pVidracariaEscadaDeVidro from '../assets/portfolio/vidracaria-escada-de-vidro.webp';
import pVidracariaEscadaDeVidro2 from '../assets/portfolio/vidracaria-escada-de-vidro-2.webp';

import pVidracariaEspelhoBisote from '../assets/portfolio/vidracaria-espelho-bisote.webp';
import pVidracariaEspelhoSemiLuaBanheiro from '../assets/portfolio/vidracaria-espelho-semi-lua-banheiro.webp';
import pVidracariaEspelhoBanheiro from '../assets/portfolio/vidracaria-espelho-banheiro.webp';
import pVidracariaEspelhoAnamorficoPenteadeira from '../assets/portfolio/vidracaria-espelho-anamorfico-penteadeira.webp';
import pVidracariaEspelhoSemiLuaLed from '../assets/portfolio/vidracaria-espelho-semi-lua-led.webp';

import pVidracariaFachada1 from '../assets/portfolio/vidracaria-fachada-1.webp';
import pVidracariaFachada2 from '../assets/portfolio/vidracaria-fachada-2.webp';

import pSerralheriaPortao from '../assets/portfolio/serralheira-portao.webp';
import pSerralheriaGradilRicardo from '../assets/portfolio/serralheira-gradil-ricardo.webp';
import pSerralheriaTelhadoSanduiche from '../assets/portfolio/serralheria-telhado-sanduiche.webp';

import pSerralheriaEquipeInstalacao1 from '../assets/portfolio/serralheria-equipe-instalacao-1.webp';
import pSerralheriaEquipeInstalacao2 from '../assets/portfolio/serralheria-equipe-instalacao-2.webp';
import pSerralheriaEquipeInstalacao3 from '../assets/portfolio/serralheria-equipe-instalacao-3-corredor.webp';
import pSerralheriaEquipeInstalacao4 from '../assets/portfolio/serralheria-equipe-instalacao-4-corredor.webp';
import pSerralheriaEquipeInstalacao5 from '../assets/portfolio/serralheria-equipe-instalacao-5-caminhao.webp';
import pSerralheriaEquipeInstalacao6 from '../assets/portfolio/serralheria-equipe-instalacao-6-espelho.webp';

import pMoveisCristaleira from '../assets/portfolio/moveis-cristaleira.webp';

import m1 from '../assets/m_1.svg';
import m2 from '../assets/m_2.svg';
import m3 from '../assets/m_3.svg';
import m4 from '../assets/m_4.svg';
import m5 from '../assets/m_5.svg';
import m6 from '../assets/m_6.svg';
import m7 from '../assets/m_7.svg';
import m8 from '../assets/m_8.svg';

export const WHATSAPP_URL = "https://wa.me/5511966446215?text=Olá,%20vim%20pelo%20site%20de%20vocês.%20Tenho%20interesse%20em%20fazer%20um%20orçamento!";

export const ADDRESS = "Rua dos Cedros, 133, Mairiporã - SP";

export const NAV_LINKS = [
  { name: 'A Yarth', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Avaliações', href: '#reviews' },
  { name: 'Diferenciais', href: '#why-us' },
  { name: 'Contato', href: '#contact' },
];

export const SERVICES = [
  {
    title: 'Esquadrias de Alumínio',
    description: 'Portas, janelas, fachadas e divisórias personalizadas com isolamento acústico e design minimalista.',
    icon: Maximize,
    image: g5,
    slug: 'esquadrias',
    areaTag: 'Esquadrias',
    longDescription: [
      'Desenvolvemos esquadrias de alumínio sob medida para projetos residenciais, comerciais e corporativos, unindo design minimalista, isolamento acústico e alta durabilidade.',
      'Da especificação técnica à instalação final, cada peça é pensada para se integrar perfeitamente à arquitetura do ambiente, com acabamento impecável e resistência às condições externas.',
    ],
    highlights: [
      'Portas e janelas de correr e abrir',
      'Fachadas e divisórias personalizadas',
      'Fechamento de sacadas',
      'Vedação térmica e acústica',
    ],
  },
  {
    title: 'Vidraçaria Completa',
    description: 'Boxes, guarda-corpos em vidro, espelhos e envidraçamento de sacadas com segurança e sofisticação.',
    icon: GlassWater,
    image: g9,
    slug: 'vidracaria',
    areaTag: 'Vidraçaria',
    longDescription: [
      'Trabalhamos com vidro temperado e laminado para criar soluções que unem segurança, transparência e sofisticação em cada ambiente.',
      'De boxes e espelhos a guarda-corpos e fachadas envidraçadas, cada projeto é executado com precisão técnica e acabamento de alto padrão.',
    ],
    highlights: [
      'Boxes de banheiro sob medida',
      'Guarda-corpos e sacadas envidraçadas',
      'Espelhos e escadas de vidro',
      'Fachadas e coberturas em vidro',
    ],
  },
  {
    title: 'Serralheria Moderna',
    description: 'Portões automáticos, estruturas metálicas sob medida e corrimãos com acabamento impecável.',
    icon: Fence,
    image: g8,
    slug: 'serralheria',
    areaTag: 'Serralheria',
    longDescription: [
      'Projetamos e executamos estruturas metálicas sob medida — de portões automáticos a corrimãos e coberturas — com acabamento impecável e resistência para uso residencial e comercial.',
      'Nossa equipe acompanha cada etapa da obra, da fabricação à instalação, garantindo segurança e durabilidade em cada estrutura entregue.',
    ],
    highlights: [
      'Portões automáticos e gradis',
      'Guarda-corpos e corrimãos metálicos',
      'Estruturas e coberturas sob medida',
      'Acabamento e pintura eletrostática',
    ],
  },
];

export interface PortfolioItem {
  title: string;
  areas: string[];
  images: string[];
}

export const PROJECT_GALLERY: PortfolioItem[] = [
  {
    title: 'Portas',
    areas: ['Esquadrias', 'Vidraçaria'],
    images: [
      pEsquadriaPortaExterna,
      pEsquadriaPortasExterna,
      pEsquadriaPortaMarcio,
      pEsquadriaPortaRicardo,
      pEsquadriaPortasInterna,
      pVidracariaPortaDeVidro,
    ],
  },
  {
    title: 'Guarda-Corpo',
    areas: ['Esquadrias', 'Vidraçaria', 'Serralheria'],
    images: [
      pEsquadriaGuardaCorpoKlabin,
      pEsquadriaGuardaCorpoRicardo,
      pVidracariaGuardaCorpoParapeito,
      pVidracariaGuardaCorpoVidro,
      pVidracariaGuardaCorpoTiboRedondo,
      pSerralheriaPredioGuardaCorpo,
    ],
  },
  {
    title: 'Fechamento de Sacada',
    areas: ['Esquadrias', 'Vidraçaria'],
    images: [pEsquadriaFechamentoSacada, pVidracariaFechamentoDeSacada],
  },
  {
    title: 'Telhado de Vidro',
    areas: ['Esquadrias', 'Vidraçaria'],
    images: [pVidracariaTelhadoDeVidro, pVidracariaTelhadoDeVidro2, pVidracariaTelhadoPergolado],
  },
  {
    title: 'Box de Vidro',
    areas: ['Vidraçaria', 'Serralheria'],
    images: [
      pVidracariaBoxBranco,
      pVidracariaBoxDuplo,
      pVidracariaBoxPreto,
      pVidracariaBoxRosee,
      pSerralheriaBoxBarolo,
      pSerralheriaEstruturaBoxBarolo,
    ],
  },
  {
    title: 'Janela Integrada',
    areas: ['Esquadrias'],
    images: [pEsquadriaJanelaIntegradaCloset],
  },
  {
    title: 'Escada de Vidro',
    areas: ['Vidraçaria'],
    images: [pVidracariaEscadaDeVidro, pVidracariaEscadaDeVidro2],
  },
  {
    title: 'Espelhos',
    areas: ['Vidraçaria'],
    images: [
      pVidracariaEspelhoBisote,
      pVidracariaEspelhoSemiLuaBanheiro,
      pVidracariaEspelhoBanheiro,
      pVidracariaEspelhoAnamorficoPenteadeira,
      pVidracariaEspelhoSemiLuaLed,
    ],
  },
  {
    title: 'Fachada de Vidro',
    areas: ['Vidraçaria'],
    images: [pVidracariaFachada1, pVidracariaFachada2, g6],
  },
  {
    title: 'Estruturas Metálicas',
    areas: ['Serralheria'],
    images: [pSerralheriaPortao, pSerralheriaGradilRicardo, pSerralheriaTelhadoSanduiche],
  },
  {
    title: 'Mobiliário',
    areas: ['Mobiliário'],
    images: [m1, m2, m3, m4, m5, m6, m7, m8, pMoveisCristaleira],
  },
  {
    title: 'Instalação',
    areas: ['Esquadrias', 'Vidraçaria', 'Serralheria'],
    images: [
      pSerralheriaEquipeInstalacao1,
      pSerralheriaEquipeInstalacao2,
      pSerralheriaEquipeInstalacao3,
      pSerralheriaEquipeInstalacao4,
      pSerralheriaEquipeInstalacao5,
      pSerralheriaEquipeInstalacao6,
    ],
  },
];

export { m5 as furnitureBannerImage };

export const FURNITURE_TITLE = 'Mobiliário Personalizado';

export const FURNITURE_TAGLINE = 'Peças exclusivas em vidro, ferro, alumínio e madeira, desenvolvidas sob medida para cada ambiente.';

export const FURNITURE_INTRO = [
  'Desenvolvemos peças exclusivas que unem a leveza do vidro à resistência do alumínio e do ferro — adegas, cristaleiras, estantes e detalhes que transformam ambientes comuns em espaços extraordinários.',
  'Cada peça é projetada sob medida, com acabamento de alta fixação e integração de iluminação LED, complementando os projetos de esquadrias, vidraçaria e serralheria da Yarth.',
];

export const FURNITURE_FEATURES = [
  'Design Sob Medida',
  'Acabamentos de Alta Fixação',
  'Integração com Iluminação LED',
];

export const FURNITURE_GALLERY = [
  { url: m1, title: 'Design de Interiores' },
  { url: m2, title: 'Mobiliário Exclusivo' },
  { url: m3, title: 'Cristaleiras e Adegas' },
  { url: m4, title: 'Estruturas Minimalistas' },
  { url: m5, title: 'Conceito Yarth' },
  { url: m6, title: 'Estanteria Premium' },
  { url: m7, title: 'Detalhes Técnicos' },
  { url: m8, title: 'Ambientes Integrados' },
];

export const GOOGLE_RATING = {
  average: 4.9,
  count: 130,
};

export const GOOGLE_REVIEWS = [
  {
    name: 'Marina Ferreira',
    initials: 'MF',
    color: 'bg-slate-800',
    rating: 5,
    date: 'há 2 semanas',
    text: 'Equipe extremamente profissional, o acabamento das esquadrias ficou impecável. Recomendo muito a Yarth!',
  },
  {
    name: 'Roberto Almeida',
    initials: 'RA',
    color: 'bg-amber-600',
    rating: 5,
    date: 'há 1 mês',
    text: 'Contratei a Yarth para o box do banheiro e ficou show. Prazo cumprido à risca e time muito atencioso.',
  },
  {
    name: 'Camila Souza',
    initials: 'CS',
    color: 'bg-emerald-700',
    rating: 5,
    date: 'há 3 meses',
    text: 'Serviço de serralheria excelente, o portão automático funciona perfeitamente até hoje. Nota 10.',
  },
  {
    name: 'Eduardo Lima',
    initials: 'EL',
    color: 'bg-sky-700',
    rating: 4,
    date: 'há 4 meses',
    text: 'Bom atendimento e material de qualidade, só demorou um pouco além do combinado. No mais, sem reclamações.',
  },
  {
    name: 'Patrícia Nogueira',
    initials: 'PN',
    color: 'bg-rose-700',
    rating: 5,
    date: 'há 5 meses',
    text: 'A vidraçaria da minha sacada ficou linda, superou minhas expectativas. Equipe muito educada e limpa no serviço.',
  },
  {
    name: 'Fernando Costa',
    initials: 'FC',
    color: 'bg-indigo-700',
    rating: 5,
    date: 'há 6 meses',
    text: 'Profissionalismo do início ao fim. Já fechei outros dois projetos com eles e a qualidade se mantém sempre alta.',
  },
];

export const WHY_US = [
  { title: 'Atendimento Personalizado', description: 'Soluções sob medida para a sua necessidade.' },
  { title: 'Qualidade Premium', description: 'Uso exclusivo de materiais de altíssima qualidade.' },
  { title: 'Expertise', description: 'Equipe técnica altamente especializada.' },
  { title: 'Compromisso', description: 'Entregas rigorosamente dentro do prazo.' },
];

export { g4 as aboutImage, g6 as heroImage, g6 as philosophyImage, companyFacadeImage };
