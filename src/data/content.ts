import { Maximize, GlassWater, Fence } from 'lucide-react';

import g1 from '../assets/g_1.webp';
import g2 from '../assets/g_2.webp';
import g3 from '../assets/g_3.webp';
import g4 from '../assets/g_4.webp';
import g5 from '../assets/g_5.webp';
import g6 from '../assets/g_6.webp';
import g8 from '../assets/g_8.webp';
import g9 from '../assets/g_9.webp';

import m1 from '../assets/m_1.svg';
import m2 from '../assets/m_2.svg';
import m3 from '../assets/m_3.svg';
import m4 from '../assets/m_4.svg';
import m5 from '../assets/m_5.svg';
import m6 from '../assets/m_6.svg';
import m7 from '../assets/m_7.svg';
import m8 from '../assets/m_8.svg';

export const WHATSAPP_URL = "https://wa.me/5511966446215?text=Olá,%20vim%20pelo%20site%20de%20vocês.%20Tenho%20interesse%20em%20fazer%20um%20orçamento!";

export const ADDRESS = "Rua dos Cedros, 163, Mairiporã - SP";

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'A Yarth', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Mobiliário', href: '#furniture' },
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
    image: g5
  },
  {
    title: 'Vidraçaria Completa',
    description: 'Boxes, guarda-corpos em vidro, espelhos e envidraçamento de sacadas com segurança e sofisticação.',
    icon: GlassWater,
    image: g9
  },
  {
    title: 'Serralheria Moderna',
    description: 'Portões automáticos, estruturas metálicas sob medida e corrimãos com acabamento impecável.',
    icon: Fence,
    image: g8
  },
];

export const GALLERY = [
  { url: g5, title: 'Fachadas de Vidro' },
  { url: g2, title: 'Arquitetura Interna' },
  { url: g1, title: 'Vista Panorâmica' },
  { url: g6, title: 'Boxes de Luxo' },
  { url: g9, title: 'Serralheria Fina' },
  { url: g3, title: 'Áreas Externas' },
  { url: g8, title: 'Adegas e Cristaleiras' },
  { url: g4, title: 'Espaços Gourmet' },
];

export { m1 as furnitureHighlight1, m2 as furnitureHighlight2, m3 as furnitureHighlight3, m4 as furnitureHighlight4 };

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

export { g4 as aboutImage, g6 as heroImage, g6 as philosophyImage };
