import { Camera, DoorOpen, Bell, Zap, Home, KeyRound, LucideIcon } from "lucide-react";

export interface ServiceBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
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
  faq: ServiceFaq[];
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
      "Câmera mal posicionada grava o telhado do vizinho. A diferença entre um sistema que resolve e um que só ocupa parede está no ângulo, na lente e no tempo de retenção das gravações. A Logiin dimensiona CFTV em Manaus a partir da planta do imóvel e dos pontos de acesso reais — não de um kit fechado vendido por quantidade.",
    blocks: [
      {
        heading: "Resolução, lente e distância: o que define a imagem útil",
        paragraphs: [
          "Uma câmera 4MP com lente de 2,8 mm abre um campo amplo, ideal para varanda e garagem, mas o rosto de alguém a 15 metros vira um borrão. Já a lente de 3,6 mm ou 6 mm fecha o ângulo e entrega placa de carro e feição reconhecível. Definimos lente por ponto, e não um modelo único para o imóvel inteiro.",
          "À noite, o que separa uma imagem preta de uma imagem legível é o alcance do infravermelho e a iluminação de apoio. Em áreas com pouca luz usamos câmeras com IR real de 30 m ou tecnologia colorida noturna, que mantém a cor mesmo no escuro — determinante quando o que importa é a cor da roupa ou do veículo.",
        ],
      },
      {
        heading: "DVR, NVR e quantos dias de gravação você realmente precisa",
        bullets: [
          "DVR para câmeras analógicas HD: custo menor, cabo coaxial, ótimo para reaproveitar infraestrutura existente",
          "NVR com PoE para câmeras IP: cabo de rede único levando dados e energia, resolução maior e recursos de análise",
          "HD dedicado de videovigilância (linha Purple/SkyHawk): discos comuns de PC falham em regime 24/7",
          "Cálculo de retenção: definimos o disco pelo número de dias que você quer poder voltar atrás, normalmente 15 ou 30 dias",
        ],
      },
      {
        heading: "Instalação preparada para o clima de Manaus",
        paragraphs: [
          "Calor constante, umidade alta e chuva de fim de tarde castigam emenda mal feita e conector exposto. Usamos caixa de passagem vedada, conector com proteção, cabo com trato UV nos trechos externos e aterramento no rack — a maior causa de queima de gravador na cidade é surto elétrico durante temporal, não defeito de fábrica.",
        ],
      },
      {
        heading: "Acesso remoto sem dor de cabeça",
        bullets: [
          "App configurado no celular de cada pessoa autorizada, com usuário próprio",
          "Detecção por área e por linha virtual, para notificar só o que interessa",
          "Gravação local que continua rodando mesmo com a internet fora do ar",
          "Orientação de como exportar um trecho de vídeo caso precise levar a um boletim de ocorrência",
        ],
      },
    ],
    audience: [
      "Residências que querem cobrir entrada, garagem e área externa",
      "Comércios que precisam registrar caixa, estoque e atendimento",
      "Condomínios com portaria, garagem e perímetro para monitorar",
    ],
    faq: [
      {
        q: "Quantas câmeras minha casa precisa?",
        a: "Depende dos acessos, não do tamanho. Uma casa com um portão e um quintal pode resolver com 4 câmeras bem posicionadas; outra com duas frentes de rua precisa de mais. A visita técnica define isso.",
      },
      {
        q: "Funciona se a internet cair?",
        a: "Sim. A gravação é local, no DVR ou NVR. A internet só é necessária para você assistir de fora do imóvel.",
      },
      {
        q: "Consigo ver a placa dos carros?",
        a: "Só com câmera e lente escolhidas para isso, apontadas para um trecho fixo da via. É um ponto específico do projeto, não um resultado automático de qualquer câmera.",
      },
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
      "Chave é uma credencial anônima: quem abriu a porta ontem às 22h? Com controle de acesso, cada passagem tem nome, horário e porta registrados. A Logiin implanta em Manaus sistemas em que a permissão vira um dado editável — concedida, restrita por horário e revogada sem trocar segredo de fechadura.",
    blocks: [
      {
        heading: "Escolher o leitor certo para cada porta",
        paragraphs: [
          "Biometria digital é excelente em recepção e sala administrativa, mas sofre em ambiente com poeira, graxa ou mão molhada — em oficina e cozinha industrial, cartão ou facial performam melhor. O facial resolve fluxo alto sem contato e sem fila, ao custo de exigir posicionamento e iluminação estáveis. Em porta de emergência, o que vale é a barra antipânico com contato monitorado, não leitor algum.",
        ],
      },
      {
        heading: "A parte que ninguém vê: a fechadura e a energia",
        bullets: [
          "Fecho elétrico, eletroímã ou solenoide escolhido pelo peso e uso da porta",
          "Nobreak dedicado: sem energia, o sistema precisa ter comportamento definido (fail-safe ou fail-secure)",
          "Botoeira de saída e sensor de porta aberta para evitar arrombamento silencioso",
          "Cabeamento em conduíte separado da rede elétrica, reduzindo interferência no leitor",
        ],
      },
      {
        heading: "Regras, perfis e relatórios",
        paragraphs: [
          "O ganho real aparece na administração: grupos de usuários com horários diferentes (limpeza entra 6h às 9h, administrativo 7h às 19h, TI liberado no fim de semana), bloqueio imediato no desligamento de um colaborador e relatório exportável de quem passou por onde. Em condomínio, a mesma lógica separa portaria social, garagem e área de lazer.",
        ],
      },
      {
        heading: "Integrações que fazem diferença",
        bullets: [
          "Snapshot da câmera vinculado a cada liberação de porta",
          "Anti-passback para impedir que uma credencial seja emprestada na sequência",
          "Cadastro de visitante com validade automática de expiração",
          "Liberação remota pela portaria ou pelo app do síndico",
        ],
      },
    ],
    audience: [
      "Empresas com almoxarifado, sala técnica ou setor restrito",
      "Condomínios que querem separar portaria social e de serviço",
      "Clínicas, escolas e escritórios com visitantes diários",
    ],
    faq: [
      {
        q: "Biometria funciona para todo mundo?",
        a: "Uma pequena parte das pessoas tem digital de leitura difícil, por desgaste natural da pele. Por isso sempre configuramos um segundo método, como cartão ou senha individual.",
      },
      {
        q: "E se faltar energia?",
        a: "Definimos no projeto se a porta deve destravar (rota de fuga) ou permanecer travada (área de valor), e instalamos autonomia por bateria.",
      },
      {
        q: "Dá para usar junto com a catraca ou o portão que já tenho?",
        a: "Na maioria dos casos sim. Avaliamos a placa do equipamento existente antes de indicar substituição.",
      },
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
      "O maior inimigo de um alarme não é o intruso: é o disparo falso. Sistema que toca sozinho toda semana acaba desarmado dentro de um mês. Todo o projeto da Logiin em Manaus é pensado para que cada disparo signifique alguma coisa — sensor certo, no lugar certo, com sensibilidade ajustada ao ambiente.",
    blocks: [
      {
        heading: "Cada sensor tem uma função específica",
        bullets: [
          "Sensor magnético de abertura: avisa no instante em que a porta ou janela é aberta, antes de alguém entrar",
          "Infravermelho passivo (PIR): detecta movimento em corredores e salas, com filtro pet para animais de até certo peso",
          "Sensor de barreira (feixe): protege o quintal e a lateral sem cobrir a área interna",
          "Sensor de vibração e de quebra de vidro: para vitrine, cofre e portas de correr",
        ],
      },
      {
        heading: "Por que o disparo falso acontece",
        paragraphs: [
          "Ventilador batendo em cortina, ar-condicionado soprando sobre o sensor, sol da tarde entrando pela janela e barata dentro do infravermelho: todas essas são causas clássicas em Manaus. Por isso avaliamos altura de instalação, ângulo em relação ao fluxo de ar e uso de sensor com dupla tecnologia em ambientes problemáticos. Também separamos zonas, o que permite armar só o perímetro à noite e deixar a casa livre por dentro.",
        ],
      },
      {
        heading: "Particionamento: armar em partes",
        paragraphs: [
          "Uma central bem programada divide o imóvel em partições. Modo noturno arma janelas, portas e área externa enquanto a família circula pelos quartos. Modo ausente arma tudo. Em empresa, o depósito pode ficar armado durante o expediente enquanto a loja opera normalmente.",
        ],
      },
      {
        heading: "O que acontece no momento do disparo",
        bullets: [
          "Notificação push imediata no celular identificando qual zona disparou",
          "Sirene de alta potência interna e externa, com tempo de toque configurado",
          "Consulta rápida à câmera daquele ponto para confirmar antes de agir",
          "Registro de eventos na central para entender o que ocorreu depois",
        ],
      },
    ],
    audience: [
      "Casas vazias durante o horário comercial",
      "Lojas, depósitos e escritórios fechados à noite",
      "Imóveis com vários acessos ou área externa ampla",
    ],
    faq: [
      {
        q: "O sensor dispara com meu cachorro?",
        a: "Usamos sensores com imunidade pet e ajustamos altura e ângulo conforme o porte do animal. Em casos com animais grandes, indicamos barreira externa em vez de PIR interno.",
      },
      {
        q: "Preciso de linha telefônica?",
        a: "Não. As centrais atuais trabalham por Wi-Fi ou chip celular e enviam o alerta direto ao seu aplicativo.",
      },
      {
        q: "Alarme com fio ou sem fio?",
        a: "Sem fio é mais rápido em imóvel pronto e evita quebra-quebra; com fio é mais estável em obra ou reforma. Muitas vezes a melhor solução é híbrida.",
      },
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
      "A cerca elétrica age antes de todo o resto: ela trabalha no topo do muro, no exato ponto em que a tentativa começa. Bem instalada, dissuade sem ferir; mal instalada, vira um emaranhado de fio frouxo que dispara com o vento e não segura ninguém. A Logiin instala e recupera cercas em Manaus com foco em tensionamento, isolação e altura correta.",
    blocks: [
      {
        heading: "Altura, hastes e espaçamento dos fios",
        paragraphs: [
          "A regra prática é simples: a linha eletrificada deve ficar acima do alcance de quem passa na calçada, normalmente com hastes de 1 m fixadas no topo de um muro de pelo menos 2 m, totalizando cerca de 3 m de barreira. As hastes ficam espaçadas em torno de 2,5 a 3 m para evitar barriga no fio, e os fios são distribuídos com espaçamento fechado na parte inferior — se o vão permite passar o braço entre os fios, a cerca perde a função.",
          "Em muro baixo ou divisa com terreno vizinho, usamos haste em L ou Z inclinada para dentro do imóvel, aumentando a dificuldade de transposição sem invadir o espaço alheio.",
        ],
      },
      {
        heading: "Como o choque funciona (e por que não é perigoso)",
        paragraphs: [
          "A central gera pulsos de alta tensão e corrente muito baixa, com intervalo de aproximadamente um segundo entre eles. O efeito é um susto forte e involuntário, suficiente para fazer a pessoa soltar o muro — não há corrente contínua nem risco de eletrocussão em uma instalação dentro da norma. Placas de advertência amarelas são obrigatórias e fazem parte do trabalho, tanto por lei quanto pelo efeito inibidor.",
        ],
      },
      {
        heading: "Integração com o alarme do imóvel",
        bullets: [
          "Ao romper ou aterrar a linha, a central dispara sirene e envia alerta pelo aplicativo",
          "Zonas independentes: você sabe se o toque foi na frente, no fundo ou na lateral",
          "Acionamento por controle remoto junto com o armar/desarmar do alarme",
          "Bateria interna mantendo o perímetro energizado durante a queda de luz",
        ],
      },
      {
        heading: "Manutenção: o que realmente estraga uma cerca",
        bullets: [
          "Isolador rachado pelo sol, que faz a tensão fugir para o muro",
          "Galho e trepadeira encostando na linha — causa número um de disparo sem motivo em Manaus",
          "Fio frouxo depois de meses, exigindo retensionamento",
          "Bateria da central viciada, que só aparece quando falta energia",
        ],
      },
    ],
    audience: [
      "Residências com muro voltado para rua ou terreno vizinho",
      "Galpões, empresas e depósitos com pátio ou estacionamento",
      "Condomínios que precisam fechar todo o perímetro",
    ],
    faq: [
      {
        q: "A cerca elétrica pode matar alguém?",
        a: "Não. A central trabalha com corrente baixíssima e pulsos intermitentes, projetada para dissuadir. Instalações com equipamento improvisado ligado direto na rede são ilegais e perigosas — nunca fazemos isso.",
      },
      {
        q: "Continua funcionando sem energia?",
        a: "Sim, pela bateria interna da central, por várias horas. Trocamos a bateria periodicamente na manutenção.",
      },
      {
        q: "Minha cerca dispara sozinha à noite, tem conserto?",
        a: "Quase sempre. As causas mais comuns são vegetação encostando, isolador com fuga ou fio frouxo. Fazemos teste de tensão trecho a trecho para localizar o ponto.",
      },
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
      "O erro mais comum em casa inteligente é comprar dispositivos soltos de marcas diferentes e terminar com cinco aplicativos que não conversam entre si. Automação boa é a que some: você fala, toca uma vez ou nem precisa fazer nada. A Logiin projeta a integração em Manaus escolhendo o protocolo antes do produto.",
    blocks: [
      {
        heading: "Wi-Fi, Zigbee ou Matter: por que o protocolo importa",
        paragraphs: [
          "Dispositivos Wi-Fi são baratos e fáceis de começar, mas cada lâmpada ocupa um endereço na sua rede e depende da internet para responder — com trinta pontos, o roteador doméstico começa a engasgar. Zigbee cria uma malha própria, de baixo consumo, em que cada tomada instalada reforça o sinal da rede; funciona mesmo com a internet fora. Matter é o padrão que faz marcas diferentes falarem a mesma língua e é o que priorizamos em projeto novo, para você não ficar preso a um fabricante.",
        ],
      },
      {
        heading: "O que faz sentido automatizar em uma casa de Manaus",
        bullets: [
          "Ar-condicionado por cômodo via controle IR ou módulo dedicado — o maior ganho de conforto e de conta de luz na cidade",
          "Iluminação com dimerização e acionamento por horário do pôr do sol",
          "Cortinas e persianas motorizadas, controlando o calor que entra à tarde",
          "Portão social e de garagem acionados pelo app, sem depender do controle",
          "Tomadas inteligentes com medição de consumo em equipamentos críticos",
        ],
      },
      {
        heading: "Cenários e rotinas: onde a automação vira hábito",
        paragraphs: [
          "\"Sair de casa\" apaga tudo, fecha as cortinas, desliga o ar e arma o alarme com um comando. \"Bom dia\" abre a cortina do quarto no horário do despertador e liga o som na cozinha. \"Cinema\" reduz a iluminação para 20% e fecha a persiana. Também criamos rotinas invisíveis: luz externa acendendo no anoitecer e desligando na madrugada, ar do quarto ajustando temperatura durante a noite.",
          "Comandos por voz funcionam com Alexa, Google Assistente e Siri (via Apple Home). Definimos nomes curtos e sem ambiguidade para os ambientes, porque metade da frustração com assistente de voz vem de cômodos batizados de forma parecida.",
        ],
      },
      {
        heading: "Casa pronta ou em obra: caminhos diferentes",
        bullets: [
          "Em reforma: módulos atrás do interruptor, sem quebrar parede e mantendo os interruptores físicos funcionando",
          "Em obra: previsão de neutro nas caixas e conduítes, o que abre todas as possibilidades depois",
          "Projeto modular, começando por um ambiente e expandindo sem retrabalho",
          "Integração com câmeras, fechadura e alarme dentro do mesmo aplicativo",
        ],
      },
    ],
    audience: [
      "Quem está construindo ou reformando e quer deixar a infraestrutura pronta",
      "Famílias buscando conforto e controle do consumo de energia",
      "Apartamentos que precisam de automação sem obra pesada",
    ],
    faq: [
      {
        q: "Se a internet cair, minha casa para?",
        a: "Não, se o projeto for bem feito. Interruptores continuam funcionando na parede e cenários locais em Zigbee/Matter seguem rodando. Só o controle remoto de fora de casa depende de internet.",
      },
      {
        q: "Funciona com a Alexa que eu já tenho?",
        a: "Sim. Integramos os dispositivos à Alexa, ao Google Assistente ou à Apple Home, conforme o que você já usa.",
      },
      {
        q: "Dá para começar pequeno?",
        a: "Sim, e recomendamos. Normalmente começamos por iluminação de área social ou ar-condicionado e ampliamos por ambiente.",
      },
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
      "Antes de escolher a fechadura, é preciso olhar a porta. Espessura, material, sentido de abertura e o tipo de fechadura atual eliminam metade dos modelos do mercado logo de cara. A Logiin faz essa avaliação em Manaus e instala apenas o que encaixa de fato — instalação forçada compromete o alinhamento e a porta passa a raspar em poucos meses.",
    blocks: [
      {
        heading: "Sobrepor, embutir ou digital de gaveta",
        paragraphs: [
          "A fechadura de sobrepor fica na face interna da porta e é a saída mais comum em reposição, por não exigir usinagem grande. A de embutir substitui a máquina inteira e entrega acabamento superior, mas exige rasgo preciso na porta — inviável em algumas portas de alumínio finas. Já modelos de gaveta com trinco simples servem para porta interna e escritório, enquanto porta principal pede trava com rolete ou pino reforçado.",
          "Porta de vidro tem regra própria: exige fechadura específica com fixação sem furação estrutural, e nem todo modelo do mercado atende.",
        ],
      },
      {
        heading: "Formas de abertura e para que serve cada uma",
        bullets: [
          "Biometria: uso diário dos moradores, abertura em menos de um segundo",
          "Senha numérica com dígitos aleatórios antes do código, para não marcar o desgaste das teclas",
          "Cartão ou tag: prático para quem carrega crachá ou para funcionário",
          "Aplicativo com senha temporária por período — a função mais útil em imóvel de temporada e para diarista",
          "Chave mecânica de emergência, que deve ficar fora do imóvel, não dentro",
        ],
      },
      {
        heading: "Bateria: o ponto que mais gera chamado",
        paragraphs: [
          "Fechadura eletrônica funciona com pilhas AA, normalmente por 6 a 12 meses conforme o número de aberturas por dia. Ela avisa com semanas de antecedência por bipe e pelo app. Se ainda assim acabar, os modelos que instalamos permitem alimentação de emergência por powerbank na entrada USB, além da chave física. Explicamos esse procedimento na entrega, junto com o cadastro de usuários e a troca da senha de administrador — que nunca deve permanecer a de fábrica.",
        ],
      },
      {
        heading: "Integração com o resto da casa",
        bullets: [
          "Notificação de quem abriu e a que horas, nos modelos com app",
          "Acionamento junto ao cenário de \"chegar em casa\" da automação",
          "Uso das mesmas credenciais do controle de acesso em ambiente corporativo",
          "Vinculação com a câmera da entrada para registrar cada abertura",
        ],
      },
    ],
    audience: [
      "Casas e apartamentos que querem praticidade na porta principal",
      "Imóveis de locação por temporada com troca frequente de hóspedes",
      "Escritórios e salas comerciais com poucos usuários fixos",
    ],
    faq: [
      {
        q: "E se acabar a bateria com a porta trancada?",
        a: "Você alimenta a fechadura por um powerbank na entrada USB e abre normalmente, ou usa a chave mecânica de emergência. O equipamento avisa da carga baixa muito antes disso.",
      },
      {
        q: "Serve na minha porta de alumínio?",
        a: "Depende da espessura e do perfil. Existem modelos próprios para esse caso; avaliamos a porta com fotos e medidas antes de indicar.",
      },
      {
        q: "Quantas digitais posso cadastrar?",
        a: "Varia por modelo, em geral de 50 a 100 usuários, com possibilidade de excluir um cadastro individualmente a qualquer momento.",
      },
    ],
    ctaText: "Quero uma fechadura eletrônica",
  },
];

export const getService = (slug: string) =>
  servicePages.find((s) => s.slug === slug);
