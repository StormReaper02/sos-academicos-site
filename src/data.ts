import { ServiceCategory, StepItem, GuaranteeItem, TestimonialItem, FaqItem, InstagramPost } from './types';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5591985072416'; // Número do WhatsApp oficial da SOS Acadêmicos
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/trabalhos_academicos_sos/';
export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Gostaria de um orçamento para meu trabalho acadêmico com a SOS Acadêmicos.';

export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
  const cleanNumber = String(WHATSAPP_NUMBER).replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${text}`;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'trabalhos',
    title: 'Trabalhos acadêmicos',
    iconName: 'document',
    color: '#0d48ff',
    items: [
      'TCC',
      'Artigos científicos',
      'Resenhas',
      'Resumos e fichamentos',
      'Monografias',
      'Dissertações',
    ],
  },
  {
    id: 'projetos',
    title: 'Projetos',
    iconName: 'lightbulb',
    color: '#fc520a',
    items: [
      'Projeto de pesquisa',
      'Projeto integrador',
      'Projeto de extensão',
      'Projeto interdisciplinar',
      'Estudos de caso',
    ],
  },
  {
    id: 'estagio',
    title: 'Estágio e práticas',
    iconName: 'users',
    color: '#f20961',
    items: [
      'Relatórios de estágio',
      'Relatórios de aula prática',
      'Atividades em laboratórios virtuais',
      'Memoriais',
      'Planos de ação',
    ],
  },
  {
    id: 'portfolios',
    title: 'Portfólios e atividades',
    iconName: 'laptop',
    color: '#ffae1e',
    items: [
      'Portfólios acadêmicos',
      'Atividades interdisciplinares',
      'Atividades de AVA',
      'Relatórios acadêmicos',
      'Outras atividades',
    ],
  },
];

export const COURSES_LIST = [
  'Enfermagem',
  'Direito',
  'Administração',
  'Pedagogia',
  'Engenharias',
  'Educação Física',
  'Psicologia',
  'Biomedicina',
  'Farmácia',
  'Contabilidade',
  'Recursos Humanos',
  'Fisioterapia',
  'Serviço Social',
  'Gestão Pública',
  'História',
  'Letras',
  'entre outros',
];

export const STEPS: StepItem[] = [
  {
    step: '01',
    badgeColor: '#0d48ff',
    title: 'Você chama',
    description: 'Envia as orientações, arquivos e prazo.',
    icon: 'message',
  },
  {
    step: '02',
    badgeColor: '#fc520a',
    title: 'A gente analisa',
    description: 'Verificamos a demanda e passamos todas as informações.',
    icon: 'file-search',
  },
  {
    step: '03',
    badgeColor: '#f20961',
    title: 'Começamos o suporte',
    description: 'O trabalho é desenvolvido conforme as orientações fornecidas.',
    icon: 'sparkles',
  },
  {
    step: '04',
    badgeColor: '#ffae1e',
    title: 'Você recebe',
    description: 'O material é entregue dentro do prazo combinado para conferência.',
    icon: 'check-circle',
  },
];

export const GUARANTEES: GuaranteeItem[] = [
  {
    id: 1,
    text: 'Trabalho personalizado conforme as exigências do aluno',
    highlight: 'personalizado',
  },
  {
    id: 2,
    text: 'Trabalho completo',
    highlight: 'completo',
  },
  {
    id: 3,
    text: 'Sem plágio',
    highlight: 'Sem plágio',
  },
  {
    id: 4,
    text: 'Dentro das solicitações da faculdade',
    highlight: 'solicitações da faculdade',
  },
  {
    id: 5,
    text: 'Correções incluídas, caso sejam solicitadas pela faculdade, professora da disciplina, tutora ou orientadora',
    highlight: 'Correções incluídas',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Ilza Carvalho',
    course: 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Entrega dentro do prazo e exatamente como eu precisava. Super recomendo!',
    linkUrl: INSTAGRAM_URL,
    verified: true,
  },
  {
    id: '2',
    name: 'Rafael Lima',
    course: 'Administração',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Atendimento excelente, sempre muito atenciosos. O trabalho ficou impecável!',
    linkUrl: INSTAGRAM_URL,
    verified: true,
  },
  {
    id: '3',
    name: 'Juliana Mendes',
    course: 'Mestranda',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Me ajudaram em um momento decisivo do curso. Profissionais e muito dedicados!',
    linkUrl: INSTAGRAM_URL,
    verified: true,
  },
  {
    id: '4',
    name: 'Lucas Ferreira',
    course: 'Engenharia Civil',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Fiquei impressionado com o rigor metodológico e a formatação ABNT perfeita. Aprovado!',
    linkUrl: INSTAGRAM_URL,
    verified: true,
  },
  {
    id: '5',
    name: 'Camila Rocha',
    course: 'Pedagogia',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'O relatório de estágio estava tirando meu sono. A SOS Acadêmicos foi literalmente meu salva-vidas!',
    linkUrl: INSTAGRAM_URL,
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Vocês atendem minha faculdade?',
    answer:
      'Sim! Atendemos faculdades e universidades públicas e privadas de todo o Brasil, nas modalidades presencial e EAD. Seguimos as normas e o manual específico da sua instituição.',
  },
  {
    id: 2,
    question: 'Como faço para pedir um orçamento?',
    answer:
      'Basta clicar no botão "FALAR COM A SOS" e nos enviar no WhatsApp o tema, tipo de trabalho e prazo. Passamos as informações e valores rapidamente e sem compromisso.',
  },
  {
    id: 3,
    question: 'Vocês atendem pós-graduação?',
    answer:
      'Sim! Atendemos graduação, pós-graduação, especialização e mestrado, com rigor técnico e metodológico adequado para cada nível.',
  },
  {
    id: 4,
    question: 'Posso enviar meus arquivos pelo WhatsApp?',
    answer:
      'Sim! Você pode enviar manuais da faculdade, modelos, orientações e prazos diretamente pelo WhatsApp para nossa análise.',
  },
  {
    id: 5,
    question: 'Meu curso não apareceu na lista. E agora?',
    answer:
      'Não se preocupe! Atendemos diversas áreas do conhecimento além das listadas. Fale conosco no WhatsApp informando seu curso e tema.',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    imageUrl: '/assets/insta_post1.png', // Imersão Profissional
    linkUrl: INSTAGRAM_URL,
    altText: 'Imersão Profissional',
  },
  {
    id: 'post-2',
    imageUrl: '/assets/insta_post2.png', // Feedbacks
    linkUrl: INSTAGRAM_URL,
    altText: 'Feedbacks de clientes',
  },
  {
    id: 'post-3',
    imageUrl: '/assets/insta_post3.png', // Quem Somos
    linkUrl: INSTAGRAM_URL,
    altText: 'Quem somos',
  },
  {
    id: 'post-4',
    imageUrl: '/assets/insta_post4.png', // Bóia de salvação
    linkUrl: INSTAGRAM_URL,
    altText: 'A Bóia de salvação',
  },
  {
    id: 'post-5',
    imageUrl: '/assets/insta_post5.png', // Mona Lisa
    linkUrl: INSTAGRAM_URL,
    altText: 'Mona Lisa SOS',
  },
  {
    id: 'post-6',
    imageUrl: '/assets/insta_post6.png', // Do desespero ao alívio
    linkUrl: INSTAGRAM_URL,
    altText: 'Do desespero ao alívio',
  },
];
