import { Camera, DoorOpen, Bell, Zap, Home, KeyRound, LucideIcon } from "lucide-react";

export interface ServiceBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ServicePageData {
  slug: string;
  route: string;
  icon: LucideIcon;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  blocks: ServiceBlock[];
  audience: string[];
  ctaText: string;
}

export const servicePages: ServicePageData[] = [
  {
    slug: "cameras-de-seguranca-manaus",
    route: "/cameras-de-seguranca-manaus",
    icon: Camera,
    name: "Câmeras de Segurança (CFTV)",
    h1: "Instalação de Câmeras de Segurança em Manaus",
    title: "Instalação de Câmeras de Segurança em Manaus (CFTV) | Logiin",
    description:
      "Instalação de câmeras de segurança em Manaus para casas, empresas e condomínios. Projeto técnico, acesso pelo celular e garantia na instalação. Fale pela WhatsApp.",
    intro:
      "A Logiin projeta e instala sistemas de CFTV em Manaus com foco em imagem útil: câmeras posicionadas nos pontos que realmente importam, gravação confiável e visualização ao vivo pelo celular. Cada projeto começa por uma visita técnica, porque a quantidade de câmeras, o tipo de gravador e a infraestrutura variam de acordo com o imóvel.",
    blocks: [
      {
        heading: "O que é um sistema de CFTV",
        paragraphs: [
          "CFTV é um circuito fechado de televisão: as imagens ficam restritas a quem tem autorização e são gravadas em um equipamento local (DVR ou NVR) com disco dedicado. Diferente de câmeras domésticas de prateleira, o CFTV é dimensionado para funcionar de forma contínua, com cabeamento próprio, alimentação estável e proteção contra o calor e a umidade de Manaus.",
        ],
      },
      {
        heading: "Como trabalhamos",
        bullets: [
          "Visita técnica para mapear pontos cegos, acessos e áreas críticas",
          "Projeto com definição de ângulos, resolução e tempo de gravação",
          "Instalação com cabeamento organizado e acabamento discreto",
          "Configuração do acesso remoto e treinamento de uso para o cliente",
        ],
      },
      {
        heading: "Benefícios de instalar com quem é da cidade",
        bullets: [
          "Imagem nítida de dia e à noite, com visão noturna e alta resolução",
          "Gravação local que continua funcionando mesmo sem internet",
          "Notificações e detecção de movimento configuradas por área",
          "Suporte técnico presencial em Manaus e garantia sobre a instalação",
        ],
      },
    ],
    audience: [
      "Residências que querem acompanhar a entrada, garagem e áreas externas",
      "Comércios e empresas que precisam registrar atendimento, estoque e caixa",
      "Condomínios com portaria, garagem e perímetro para cobrir",
    ],
    ctaText: "Quero um projeto de câmeras para o meu imóvel",
  },
  {
    slug: "controle-de-acesso-manaus",
    route: "/controle-de-acesso-manaus",
    icon: DoorOpen,
    name: "Controle de Acesso",
    h1: "Controle de Acesso em Manaus: biometria, cartão e facial",
    title: "Controle de Acesso em Manaus | Biometria e Facial | Logiin",
    description:
      "Instalação de controle de acesso em Manaus com biometria, cartão de proximidade, senha e reconhecimento facial para empresas, condomínios e residências.",
    intro:
      "Controlar quem entra e quem sai é o primeiro passo para reduzir riscos. A Logiin instala em Manaus sistemas de controle de acesso que substituem a chave por biometria, cartão, senha ou reconhecimento facial — com registro automático de cada movimentação.",
    blocks: [
      {
        heading: "O que o sistema faz",
        paragraphs: [
          "Cada pessoa recebe uma credencial individual. O equipamento libera a passagem apenas para quem tem permissão, no horário permitido, e guarda um histórico consultável de entradas e saídas. Perdeu um cartão ou desligou um colaborador? A credencial é revogada em segundos, sem trocar fechadura.",
        ],
      },
      {
        heading: "Métodos de autenticação disponíveis",
        bullets: [
          "Biometria digital para pontos de alto fluxo",
          "Cartão e tag de proximidade para colaboradores e moradores",
          "Senha individual como alternativa ou segundo fator",
          "Reconhecimento facial para acesso sem contato",
        ],
      },
      {
        heading: "Ganhos no dia a dia",
        bullets: [
          "Fim do rodízio de chaves e cópias não autorizadas",
          "Restrição de horários por perfil de usuário",
          "Relatórios de acesso para auditoria e gestão de pessoas",
          "Integração com as câmeras já instaladas no local",
        ],
      },
    ],
    audience: [
      "Empresas com setores restritos, almoxarifado ou salas técnicas",
      "Condomínios que querem controlar portaria social e de serviço",
      "Clínicas, escolas e escritórios com fluxo diário de visitantes",
    ],
    ctaText: "Quero controlar o acesso do meu espaço",
  },
  {
    slug: "alarmes-manaus",
    route: "/alarmes-manaus",
    icon: Bell,
    name: "Alarmes e Sensores",
    h1: "Instalação de Alarmes e Sensores em Manaus",
    title: "Instalação de Alarme e Sensores em Manaus | Logiin",
    description:
      "Instalação de sistemas de alarme em Manaus com sensores de presença, abertura e sirene. Alertas no celular e integração com câmeras. Solicite um orçamento.",
    intro:
      "Um bom alarme age antes do prejuízo. A Logiin instala em Manaus centrais de alarme com sensores posicionados nos pontos de entrada e nas áreas de circulação, enviando alerta direto para o celular no momento em que algo é detectado.",
    blocks: [
      {
        heading: "Como o alarme é dimensionado",
        paragraphs: [
          "Antes de instalar, analisamos janelas, portas, muros e rotas de circulação. Cada ambiente recebe o sensor adequado — presença, abertura ou vibração — para evitar disparos falsos e garantir cobertura real. A central fica protegida, com bateria de backup para continuar operando em queda de energia.",
        ],
      },
      {
        heading: "Componentes do sistema",
        bullets: [
          "Central inteligente com aplicativo e bateria de backup",
          "Sensores de presença com filtro para animais domésticos",
          "Sensores magnéticos de abertura em portas e janelas",
          "Sirene de alta potência e acionamento remoto por app",
        ],
      },
      {
        heading: "Por que vale a pena",
        bullets: [
          "Aviso imediato no celular, esteja você onde estiver",
          "Efeito inibidor: o barulho interrompe a tentativa em andamento",
          "Armar e desarmar por app, controle remoto ou teclado",
          "Funciona em conjunto com câmeras para confirmar o evento",
        ],
      },
    ],
    audience: [
      "Casas que ficam vazias durante o horário comercial",
      "Lojas, depósitos e escritórios fechados à noite",
      "Imóveis com muitos acessos ou área externa ampla",
    ],
    ctaText: "Quero instalar um alarme",
  },
  {
    slug: "cerca-eletrica-manaus",
    route: "/cerca-eletrica-manaus",
    icon: Zap,
    name: "Cerca Elétrica",
    h1: "Instalação de Cerca Elétrica em Manaus",
    title: "Instalação de Cerca Elétrica em Manaus | Logiin",
    description:
      "Instalação e manutenção de cerca elétrica em Manaus com central de choque, hastes padronizadas e integração com alarme. Proteção de perímetro para casas e empresas.",
    intro:
      "A cerca elétrica é a primeira barreira do imóvel: ela protege o perímetro antes que alguém chegue à porta. A Logiin instala em Manaus cercas com central de choque de fábrica, hastes bem alinhadas e sinalização conforme as boas práticas de segurança.",
    blocks: [
      {
        heading: "Como funciona a proteção de perímetro",
        paragraphs: [
          "A central envia pulsos de alta tensão e baixa corrente pelos fios instalados sobre o muro. Ao tocar ou romper a linha, o intruso recebe o choque e a central dispara o alarme, avisando quem está dentro do imóvel. O sistema é dimensionado para ser dissuasivo, não letal, seguindo as normas de instalação.",
        ],
      },
      {
        heading: "O que entregamos na instalação",
        bullets: [
          "Central de choque com bateria para funcionar sem energia elétrica",
          "Hastes fixadas com alinhamento e espaçamento padronizados",
          "Fios tensionados corretamente para reduzir disparos falsos",
          "Placas de advertência e acionamento remoto por controle",
        ],
      },
      {
        heading: "Manutenção também faz parte",
        bullets: [
          "Revisão de isoladores, fios frouxos e vegetação encostando na linha",
          "Teste de tensão e da bateria da central",
          "Correção de disparos frequentes sem causa aparente",
          "Integração com o alarme e as câmeras já instaladas",
        ],
      },
    ],
    audience: [
      "Residências com muro voltado para a rua ou terreno vizinho",
      "Empresas, galpões e depósitos com pátio ou estacionamento",
      "Condomínios que precisam proteger todo o perímetro",
    ],
    ctaText: "Quero uma cerca elétrica instalada",
  },
  {
    slug: "automacao-residencial-manaus",
    route: "/automacao-residencial-manaus",
    icon: Home,
    name: "Automação Residencial",
    h1: "Automação Residencial em Manaus: sua casa inteligente",
    title: "Automação Residencial em Manaus | Casa Inteligente | Logiin",
    description:
      "Automação residencial em Manaus: iluminação, cortinas, ar-condicionado e cenários controlados por app ou voz, integrados com Alexa e Google. Fale com a Logiin.",
    intro:
      "Automação residencial é conforto que você percebe todos os dias: a luz que acende sozinha ao anoitecer, o ar-condicionado que liga antes de você chegar, a cortina que abre no horário certo. A Logiin projeta e integra tudo isso em Manaus, com dispositivos compatíveis entre si e um único app de controle.",
    blocks: [
      {
        heading: "O que pode ser automatizado",
        bullets: [
          "Iluminação por ambiente, com dimerização e horários",
          "Cortinas e persianas motorizadas",
          "Ar-condicionado e ventilação por cômodo",
          "Som ambiente, tomadas inteligentes e portão social",
        ],
      },
      {
        heading: "Cenários que fazem sentido para a sua rotina",
        paragraphs: [
          "Em vez de acionar dispositivo por dispositivo, criamos cenários: um comando de \"sair de casa\" apaga as luzes, fecha as cortinas e arma o alarme. O cenário \"cinema\" reduz a iluminação e ajusta o som. Tudo pode ser acionado pelo celular, por voz ou automaticamente por horário.",
        ],
      },
      {
        heading: "Integração e economia",
        bullets: [
          "Compatível com Alexa, Google Assistente e Siri",
          "Redução de consumo com desligamento automático",
          "Projeto pensado para expandir aos poucos, sem retrabalho",
          "Integração com câmeras, alarme e fechaduras da casa",
        ],
      },
    ],
    audience: [
      "Quem está construindo ou reformando e quer sair na frente",
      "Famílias que buscam praticidade e economia de energia",
      "Apartamentos que precisam de automação sem obra pesada",
    ],
    ctaText: "Quero automatizar minha casa",
  },
  {
    slug: "fechaduras-eletronicas-manaus",
    route: "/fechaduras-eletronicas-manaus",
    icon: KeyRound,
    name: "Fechaduras Eletrônicas",
    h1: "Fechaduras Eletrônicas em Manaus: instalação e configuração",
    title: "Fechadura Eletrônica em Manaus | Instalação | Logiin",
    description:
      "Instalação de fechadura eletrônica em Manaus com biometria, senha, cartão e app. Escolha do modelo certo para a sua porta e configuração completa pela Logiin.",
    intro:
      "Trocar a chave por biometria muda a rotina de quem entra e sai várias vezes por dia. A Logiin ajuda a escolher o modelo compatível com a sua porta e faz a instalação e a configuração completa da fechadura eletrônica em Manaus.",
    blocks: [
      {
        heading: "Formas de abertura",
        bullets: [
          "Biometria digital para os moradores ou colaboradores",
          "Senha numérica, útil para visitas e prestadores",
          "Cartão ou tag de proximidade",
          "Aplicativo no celular e chave mecânica de emergência",
        ],
      },
      {
        heading: "A escolha do modelo depende da porta",
        paragraphs: [
          "Espessura, sentido de abertura, material e a fechadura existente definem qual equipamento pode ser usado. Por isso avaliamos a porta antes de indicar o produto — instalar um modelo incompatível compromete o alinhamento e a durabilidade. Também orientamos sobre autonomia de bateria e alerta de carga baixa.",
        ],
      },
      {
        heading: "Vantagens no dia a dia",
        bullets: [
          "Sem cópia de chave e sem risco de perder o molho",
          "Senha temporária para diaristas, hóspedes e entregas",
          "Histórico de aberturas nos modelos com aplicativo",
          "Integração com a automação e o controle de acesso do imóvel",
        ],
      },
    ],
    audience: [
      "Casas e apartamentos que querem praticidade na entrada",
      "Imóveis de locação por temporada com troca frequente de hóspedes",
      "Escritórios e salas comerciais com poucos usuários fixos",
    ],
    ctaText: "Quero uma fechadura eletrônica",
  },
];

export const getService = (slug: string) =>
  servicePages.find((s) => s.slug === slug);
