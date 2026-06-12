import cftvImg from "@/assets/blog/cftv.jpg";
import automacaoImg from "@/assets/blog/automacao.jpg";
import alarmeImg from "@/assets/blog/alarme.jpg";
import fechaduraImg from "@/assets/blog/fechadura.jpg";
import videoporteiroImg from "@/assets/blog/videoporteiro.jpg";
import casaInteligenteImg from "@/assets/blog/casa-inteligente.jpg";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  color: string;
  image: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list" | "cta";
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "cftv-x-cameras-comuns",
    title: "CFTV x Câmeras Comuns: qual é a diferença?",
    excerpt: "Entenda as diferenças técnicas entre câmeras de segurança profissionais e câmeras comuns, e por que isso importa para sua proteção.",
    category: "Segurança Eletrônica",
    author: "Logiin",
    readTime: "5 min",
    date: "10 Mar 2025",
    color: "hsl(190, 100%, 43%)",
    image: cftvImg,
    content: [
      { type: "paragraph", text: "Se você já pensou em instalar câmeras em casa ou no seu negócio, provavelmente se deparou com essa dúvida: preciso mesmo de um sistema de CFTV ou uma câmera comum resolve? A resposta curta é: depende do que você precisa. Mas entender a diferença vai te ajudar a fazer a escolha certa." },
      { type: "heading", text: "O que é CFTV?" },
      { type: "paragraph", text: "CFTV significa Circuito Fechado de Televisão — um sistema de monitoramento contínuo, onde as imagens ficam restritas a quem tem acesso autorizado. Ele é formado por câmeras, cabeamento e um gravador central (DVR ou NVR) que armazena tudo com segurança." },
      { type: "heading", text: "E as câmeras comuns?" },
      { type: "paragraph", text: "Câmeras domésticas simples — como as vendidas em eletrônicos — são práticas para uso casual: monitorar um pet, verificar uma entrada. Mas não foram projetadas para funcionar 24 horas, resistir a chuva ou gravar com qualidade suficiente para identificar um rosto ou uma placa." },
      { type: "heading", text: "As principais diferenças na prática" },
      { type: "list", items: [
        "Qualidade de imagem: câmeras CFTV oferecem resolução Full HD ou 4K. Câmeras comuns geralmente ficam abaixo disso.",
        "Funcionamento contínuo: o CFTV é projetado para rodar sem parar, com proteção contra calor, chuva e poeira.",
        "Armazenamento confiável: DVRs e NVRs guardam dias ou semanas de gravação. Câmeras comuns dependem de cartão de memória.",
        "Integração com alarmes: sistemas CFTV se conectam a alarmes, controle de acesso e automação residencial.",
      ]},
      { type: "paragraph", text: "Se o objetivo é segurança de verdade — seja em casa, no comércio ou na empresa — o CFTV é a escolha certa. A Logiin faz a avaliação do seu espaço e indica o sistema ideal para você." },
      { type: "cta", text: "Fale com um especialista Logiin" },
    ],
  },
  {
    id: 2,
    slug: "5-razoes-automacao-residencial-2026",
    title: "5 razões para ter automação residencial em 2026",
    excerpt: "Descubra como a automação pode transformar sua rotina, economizar energia e trazer mais conforto ao seu dia a dia.",
    category: "Automação",
    author: "Logiin",
    readTime: "4 min",
    date: "05 Mar 2025",
    color: "hsl(105, 64%, 33%)",
    image: automacaoImg,
    content: [
      { type: "paragraph", text: "Automatizar a casa já não é coisa de ficção científica. Em 2026, a tecnologia está mais acessível, mais intuitiva e mais integrada do que nunca. Mas por que investir agora?" },
      { type: "heading", text: "1. Segurança com mais controle" },
      { type: "paragraph", text: "Com a automação, câmeras, alarmes e fechaduras digitais trabalham juntos. Você recebe alertas no celular, vê quem está na porta e trava ou destrava a entrada de onde estiver." },
      { type: "heading", text: "2. Economia na conta de energia" },
      { type: "paragraph", text: "Sensores de presença, iluminação programada e ar-condicionado inteligente reduzem o desperdício sem você precisar lembrar de apagar a luz. O retorno do investimento costuma aparecer em menos de quatro anos." },
      { type: "heading", text: "3. Praticidade no dia a dia" },
      { type: "paragraph", text: "Um comando de voz ou um toque no celular já é suficiente para ajustar a iluminação, ligar o ar, fechar o portão ou preparar o ambiente para o cinema. A rotina fica mais simples." },
      { type: "heading", text: "4. Valorização do imóvel" },
      { type: "paragraph", text: "Casas com automação instalada saem na frente na hora de vender ou alugar. O diferencial tecnológico pode representar uma valorização de até 20% em relação a imóveis equivalentes." },
      { type: "heading", text: "5. Conforto para todos" },
      { type: "paragraph", text: "Para quem tem mobilidade reduzida ou idosos em casa, o controle por voz e pelo celular oferece autonomia e independência no cotidiano." },
      { type: "paragraph", text: "Não é preciso automatizar tudo de uma vez. A Logiin ajuda você a começar com o que faz mais sentido para sua rotina e expandir no seu ritmo." },
      { type: "cta", text: "Quero um projeto de automação para minha casa" },
    ],
  },
  {
    id: 3,
    slug: "alarme-monitorado-vale-a-pena",
    title: "Alarme monitorado: vale a pena?",
    excerpt: "Análise completa sobre os benefícios de ter um sistema de alarme monitorado versus sistemas convencionais.",
    category: "Segurança Eletrônica",
    author: "Logiin",
    readTime: "6 min",
    date: "28 Fev 2025",
    color: "hsl(204, 100%, 9%)",
    image: alarmeImg,
    content: [
      { type: "paragraph", text: "Um alarme que toca mas ninguém atende — você já viu isso acontecer. O alarme monitorado é diferente: quando ele dispara, alguém age." },
      { type: "heading", text: "Como funciona?" },
      { type: "paragraph", text: "Os sensores detectam uma invasão ou movimentação suspeita e enviam um alerta imediato para uma central que funciona 24 horas. A central verifica o que aconteceu e decide: contata o morador, envia equipe de resposta ou aciona a polícia. Tudo isso em segundos." },
      { type: "heading", text: "Diferença para o alarme comum" },
      { type: "paragraph", text: "O alarme tradicional só emite uma sirene. Ele depende de você — ou de um vizinho — perceber o barulho e tomar alguma atitude. O monitorado não depende de ninguém: a proteção funciona enquanto você dorme, trabalha ou viaja." },
      { type: "heading", text: "Vale o investimento?" },
      { type: "paragraph", text: "As mensalidades de monitoramento giram entre R$ 110 e R$ 180 — menos do que muitos planos de streaming. E o efeito preventivo é real: a simples presença de sensores visíveis já desestimula boa parte das tentativas de invasão." },
      { type: "paragraph", text: "A Logiin instala e integra sistemas de alarme monitorado adaptados ao perfil do seu imóvel. Solicite uma avaliação sem compromisso." },
      { type: "cta", text: "Quero avaliar o alarme monitorado para meu imóvel" },
    ],
  },
  {
    id: 4,
    slug: "como-escolher-fechadura-eletronica",
    title: "Como escolher a fechadura eletrônica ideal",
    excerpt: "Guia prático para escolher a fechadura digital perfeita para sua casa ou empresa, considerando tipo de porta e necessidades.",
    category: "Controle de Acesso",
    author: "Logiin",
    readTime: "7 min",
    date: "20 Fev 2025",
    color: "hsl(190, 100%, 43%)",
    image: fechaduraImg,
    content: [
      { type: "paragraph", text: "Chave perdida, cópia para vários moradores, preocupação com quem tem acesso. A fechadura eletrônica resolve tudo isso — mas qual modelo é o certo para você?" },
      { type: "heading", text: "Primeiro: pense no método de acesso" },
      { type: "list", items: [
        "Senha numérica: prática, sem precisar carregar nada. Permite cadastrar senhas para diferentes pessoas.",
        "Biometria: acesso por impressão digital, rápido e pessoal. Sem risco de esquecer ou perder.",
        "Cartão ou tag RFID: ideal para escritórios e condomínios com muitos usuários.",
        "Aplicativo Wi-Fi: controle pelo celular, histórico de acessos, senhas temporárias. Perfeito para quem aluga ou recebe visitas frequentes.",
      ]},
      { type: "paragraph", text: "Os modelos mais modernos combinam dois ou mais métodos — por exemplo, biometria e senha — para mais segurança e flexibilidade." },
      { type: "heading", text: "Depois: verifique a compatibilidade com sua porta" },
      { type: "paragraph", text: "Antes de comprar, confira a espessura e o material da porta. A maioria dos modelos funciona bem em portas de madeira entre 30 mm e 55 mm de espessura. Para portas de vidro ou alumínio, existem modelos específicos." },
      { type: "heading", text: "Recursos que fazem a diferença" },
      { type: "list", items: [
        "Travamento automático ao fechar a porta.",
        "Alarme sonoro após tentativas de senha errada.",
        "Bateria com entrada de emergência (micro-USB).",
        "Chave física como backup.",
      ]},
      { type: "paragraph", text: "A Logiin avalia sua porta e indica o modelo ideal, cuidando de toda a instalação. Você só precisa escolher como quer entrar em casa." },
      { type: "cta", text: "Quero instalar uma fechadura eletrônica" },
    ],
  },
  {
    id: 5,
    slug: "video-porteiro-seguranca-praticidade",
    title: "Vídeo porteiro: segurança e praticidade juntos",
    excerpt: "Saiba como o vídeo porteiro pode aumentar a segurança da sua casa e facilitar o controle de visitantes.",
    category: "Controle de Acesso",
    author: "Logiin",
    readTime: "4 min",
    date: "15 Fev 2025",
    color: "hsl(105, 64%, 33%)",
    image: videoporteiroImg,
    content: [
      { type: "paragraph", text: "Você já abriu a porta sem saber quem estava do outro lado? O vídeo porteiro resolve isso — e faz muito mais do que um interfone com câmera." },
      { type: "heading", text: "O que é e como funciona?" },
      { type: "paragraph", text: "É um sistema com câmera na entrada e um monitor interno — ou direto no seu celular — que permite ver, ouvir e conversar com quem está na porta antes de qualquer decisão. Tudo sem precisar se aproximar da entrada." },
      { type: "heading", text: "Por que vai além do interfone?" },
      { type: "paragraph", text: "O interfone tradicional permite só ouvir a voz. O vídeo porteiro mostra quem está lá, mesmo à noite — com visão noturna por infravermelho. E nos modelos conectados ao Wi-Fi, você atende de qualquer lugar pelo celular: do trabalho, da academia ou de viagem." },
      { type: "heading", text: "Com fio ou sem fio?" },
      { type: "list", items: [
        "Com fio: transmite pelo cabeamento da casa. Mais estável, sem depender do Wi-Fi. Indicado para residências e condomínios.",
        "Sem fio (Wi-Fi): instalação simples, atendimento pelo smartphone. Ideal para quem quer praticidade sem obra.",
      ]},
      { type: "heading", text: "O que observar na hora de comprar?" },
      { type: "list", items: [
        "Resolução Full HD para identificar rostos com clareza.",
        "Resistência à chuva (proteção IP65 ou superior para o painel externo).",
        "Compatibilidade com fechadura eletrônica para abertura remota.",
      ]},
      { type: "paragraph", text: "A Logiin instala vídeo porteiros com ou sem fio, integrados às fechaduras e ao sistema de segurança da sua casa." },
      { type: "cta", text: "Quero instalar um vídeo porteiro" },
    ],
  },
  {
    id: 6,
    slug: "casa-inteligente-por-onde-comecar",
    title: "Casa inteligente: por onde começar?",
    excerpt: "Um guia para iniciantes sobre como transformar sua casa em um ambiente inteligente, passo a passo.",
    category: "Casa Inteligente",
    author: "Logiin",
    readTime: "8 min",
    date: "10 Fev 2025",
    color: "hsl(204, 100%, 9%)",
    image: casaInteligenteImg,
    content: [
      { type: "paragraph", text: "A ideia de ter uma casa inteligente pode parecer complexa — mas na prática, você provavelmente já tem o primeiro passo na sua mão: o celular. Uma casa inteligente é aquela em que os dispositivos se conectam e podem ser controlados de um único lugar. Não precisa fazer tudo de uma vez. O segredo é começar com o que faz mais sentido para a sua rotina." },
      { type: "heading", text: "Comece pelas prioridades" },
      { type: "paragraph", text: "O que incomoda mais no seu dia a dia? Esquecer de apagar a luz? Não saber quem está na porta? Preocupação com a segurança quando está fora? A resposta define por onde começar." },
      { type: "heading", text: "Os primeiros passos mais comuns" },
      { type: "list", items: [
        "Lâmpadas inteligentes: o início mais acessível. Controle pelo celular, programação por horário, economia de energia.",
        "Fechadura eletrônica: segurança e conveniência sem chave física.",
        "Vídeo porteiro: saber quem está na porta de onde estiver.",
        "Câmeras CFTV: monitoramento da casa mesmo à distância.",
        "Sensor de presença: aciona luzes e alarmes de forma automática.",
      ]},
      { type: "heading", text: "Escolha um ecossistema" },
      { type: "paragraph", text: "Google Home, Amazon Alexa ou Apple HomeKit são os principais. Escolha um e compre dispositivos compatíveis com ele. Assim, tudo conversa entre si e você controla por voz ou por um único app." },
      { type: "heading", text: "Evolua no seu ritmo" },
      { type: "paragraph", text: "Casa inteligente é um projeto de longo prazo. Você não precisa instalar tudo de uma vez — pode começar com dois ou três dispositivos e ir expandindo conforme a necessidade e o orçamento." },
      { type: "paragraph", text: "A Logiin cuida de todo o processo: do planejamento à instalação e configuração. Você só precisa dizer como quer que sua casa funcione." },
      { type: "cta", text: "Quero um projeto para minha casa inteligente" },
    ],
  },
];

export const blogCategories = ["Todos", "Segurança Eletrônica", "Automação", "Controle de Acesso", "Casa Inteligente"];
