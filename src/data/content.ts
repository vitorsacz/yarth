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

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'A Yarth', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Mobiliário', href: '#furniture' },
  { name: 'Portfólio', href: '#portfolio' },
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

export const WHY_US = [
  { title: 'Atendimento Personalizado', description: 'Soluções sob medida para a sua necessidade.' },
  { title: 'Qualidade Premium', description: 'Uso exclusivo de materiais de altíssima qualidade.' },
  { title: 'Expertise', description: 'Equipe técnica altamente especializada.' },
  { title: 'Compromisso', description: 'Entregas rigorosamente dentro do prazo.' },
];

export { g4 as aboutImage, g6 as heroImage, g2 as philosophyImage };
