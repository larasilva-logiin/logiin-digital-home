import { Camera, Bell, DoorOpen, Lock, Home, Phone } from "lucide-react";

export const services = [
  {
    id: "cftv",
    icon: Camera,
    title: "Câmeras de Segurança (CFTV)",
    short: "Monitoramento 24h com imagens em alta resolução",
    description: "Sistemas de CFTV profissionais com câmeras de alta definição, acesso remoto pelo celular e gravação contínua. Monitore seu patrimônio de qualquer lugar do mundo.",
    howItWorks: [
      "Avaliamos seu espaço e identificamos os pontos críticos de monitoramento",
      "Instalamos câmeras de alta resolução com infraestrutura adequada",
      "Configuramos o acesso remoto para acompanhamento em tempo real",
    ],
    benefits: [
      "Monitoramento 24/7 em tempo real",
      "Acesso remoto via smartphone",
      "Gravação em nuvem e local",
      "Detecção de movimento inteligente",
      "Visão noturna avançada",
    ],
  },
  {
    id: "alarmes",
    icon: Bell,
    title: "Alarmes",
    short: "Sistemas de alarme inteligentes que alertam antes que seja tarde",
    description: "Alarmes monitorados com sensores de presença, abertura e vibração. Receba notificações instantâneas no celular e tenha resposta rápida em caso de emergência.",
    howItWorks: [
      "Analisamos as vulnerabilidades do local e pontos de entrada",
      "Instalamos sensores estratégicos e central de alarme",
      "Ativamos o monitoramento 24h com alertas em tempo real",
    ],
    benefits: [
      "Alertas instantâneos no celular",
      "Sensores de presença e abertura",
      "Monitoramento profissional 24h",
      "Integração com câmeras",
      "Sirene de alta potência",
    ],
  },
  {
    id: "controle-acesso",
    icon: DoorOpen,
    title: "Controle de Acesso",
    short: "Gerencie quem entra e sai com total controle",
    description: "Sistemas de controle de acesso por biometria, cartão, senha ou reconhecimento facial. Ideal para condomínios, empresas e residências que precisam de segurança reforçada.",
    howItWorks: [
      "Definimos o método de autenticação ideal para seu espaço",
      "Instalamos leitores e controladores em pontos de acesso",
      "Configuramos permissões e registros de entrada/saída",
    ],
    benefits: [
      "Biometria e reconhecimento facial",
      "Registro de entradas e saídas",
      "Controle de horários e permissões",
      "Integração com portaria remota",
      "Gestão via aplicativo",
    ],
  },
  {
    id: "fechaduras",
    icon: Lock,
    title: "Fechaduras Eletrônicas",
    short: "Praticidade e segurança sem chave",
    description: "Fechaduras digitais com abertura por senha, biometria, cartão ou aplicativo. Elimine a preocupação com chaves perdidas e tenha controle total de quem acessa seu espaço.",
    howItWorks: [
      "Avaliamos o tipo de porta e recomendamos o modelo ideal",
      "Realizamos a instalação profissional da fechadura",
      "Cadastramos usuários e configuramos modos de acesso",
    ],
    benefits: [
      "Abertura por senha, biometria ou app",
      "Sem necessidade de chaves",
      "Cadastro de múltiplos usuários",
      "Registro de acessos",
      "Design moderno e discreto",
    ],
  },
  {
    id: "automacao",
    icon: Home,
    title: "Automação Residencial",
    short: "Transforme sua casa numa casa inteligente",
    description: "Controle iluminação, cortinas, ar-condicionado, som ambiente e muito mais pelo celular ou por voz. Crie cenários personalizados e economize energia de forma inteligente.",
    howItWorks: [
      "Entendemos suas necessidades e rotinas do dia a dia",
      "Projetamos a automação com dispositivos compatíveis",
      "Instalamos e integramos tudo em um único app de controle",
    ],
    benefits: [
      "Controle por voz e aplicativo",
      "Cenários personalizados",
      "Economia de energia",
      "Integração com assistentes virtuais",
      "Conforto e praticidade",
    ],
  },
  {
    id: "interfones",
    icon: Phone,
    title: "Interfones e Vídeo Porteiro",
    short: "Veja e atenda a porta de qualquer lugar",
    description: "Interfones com vídeo, áudio HD e acesso remoto. Veja quem está na porta pelo celular e libere a entrada de qualquer lugar, com segurança e praticidade.",
    howItWorks: [
      "Avaliamos a estrutura do local e necessidades de comunicação",
      "Instalamos o sistema de interfone ou vídeo porteiro",
      "Configuramos o acesso remoto para atendimento à distância",
    ],
    benefits: [
      "Vídeo em alta definição",
      "Atendimento remoto pelo celular",
      "Comunicação interna entre ambientes",
      "Abertura de porta à distância",
      "Gravação de visitantes",
    ],
  },
];

export const portfolioProjects = [
  { id: 1, title: "Residência Alphaville", category: "Residencial", tags: ["CFTV", "Automação", "Alarmes"], description: "Projeto completo de segurança e automação para residência de alto padrão.", location: "Alphaville, SP" },
  { id: 2, title: "Condomínio Solar", category: "Residencial", tags: ["Controle de Acesso", "CFTV", "Interfone"], description: "Sistema integrado de segurança condominial com portaria remota.", location: "Campinas, SP" },
  { id: 3, title: "Escritório Tech Hub", category: "Comercial", tags: ["Controle de Acesso", "CFTV", "Alarmes"], description: "Segurança corporativa com controle biométrico e monitoramento 24h.", location: "São Paulo, SP" },
  { id: 4, title: "Casa Smart Vila Nova", category: "Automação", tags: ["Automação", "Fechaduras"], description: "Automação completa com controle por voz e cenários inteligentes.", location: "Guarulhos, SP" },
  { id: 5, title: "Loja Centro Comercial", category: "Comercial", tags: ["CFTV", "Alarmes"], description: "Sistema de segurança com câmeras PTZ e alarme monitorado.", location: "Osasco, SP" },
  { id: 6, title: "Residência Jardins", category: "Segurança", tags: ["CFTV", "Alarmes", "Fechaduras", "Interfone"], description: "Projeto de segurança perimetral e controle de acesso residencial.", location: "São Paulo, SP" },
];

export const blogPosts = [
  { id: 1, title: "CFTV x Câmeras comuns: qual é a diferença?", excerpt: "Entenda as diferenças técnicas entre câmeras de segurança profissionais e câmeras comuns, e por que isso importa para sua proteção.", category: "CFTV", author: "Lucas Mendes", readTime: "5 min", date: "10 Mar 2025" },
  { id: 2, title: "5 razões para ter automação residencial em 2025", excerpt: "Descubra como a automação pode transformar sua rotina, economizar energia e trazer mais conforto ao seu dia a dia.", category: "Automação", author: "Ana Costa", readTime: "4 min", date: "05 Mar 2025" },
  { id: 3, title: "Alarme monitorado: vale a pena?", excerpt: "Análise completa sobre os benefícios de ter um sistema de alarme monitorado versus sistemas convencionais.", category: "Alarmes", author: "Lucas Mendes", readTime: "6 min", date: "28 Fev 2025" },
  { id: 4, title: "Como escolher a fechadura eletrônica ideal", excerpt: "Guia prático para escolher a fechadura digital perfeita para sua casa ou empresa, considerando tipo de porta e necessidades.", category: "Dicas", author: "Ana Costa", readTime: "7 min", date: "20 Fev 2025" },
  { id: 5, title: "Vídeo porteiro: segurança e praticidade juntos", excerpt: "Saiba como o vídeo porteiro pode aumentar a segurança da sua casa e facilitar o controle de visitantes.", category: "Controle de Acesso", author: "Lucas Mendes", readTime: "4 min", date: "15 Fev 2025" },
  { id: 6, title: "Casa inteligente: por onde começar?", excerpt: "Um guia para iniciantes sobre como transformar sua casa em um ambiente inteligente, passo a passo.", category: "Tendências", author: "Ana Costa", readTime: "8 min", date: "10 Fev 2025" },
];

export const categoryColors: Record<string, string> = {
  CFTV: "bg-primary/10 text-primary",
  Automação: "bg-secondary/10 text-secondary",
  Alarmes: "bg-destructive/10 text-destructive",
  Dicas: "bg-brand-cyan/10 text-brand-cyan",
  "Controle de Acesso": "bg-brand-green/10 text-brand-green",
  Tendências: "bg-muted text-muted-foreground",
};
