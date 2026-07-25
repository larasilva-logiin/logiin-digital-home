import { Button } from "@/components/ui/button";
import { Shield, Layers, Users, Clock, CheckCircle, ShieldCheck, Smartphone, BadgeCheck, Award, Zap, Wrench, Star, MessageCircle, Home as HomeIcon, Building2, Building } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import SolutionsAccordion from "@/components/home/SolutionsAccordion";
import BlogPreview from "@/components/home/BlogPreview";
import familiaSegura from "@/assets/familia-segura.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL =
  "https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site";

const Home = () => {
  const whyItems = [
    { icon: Shield, title: "Equipamentos certificados", desc: "Trabalhamos com marcas homologadas e certificadas pela Anatel" },
    { icon: Users, title: "Equipe especializada", desc: "Técnicos treinados e certificados nas melhores tecnologias" },
    { icon: Clock, title: "Suporte dedicado", desc: "Acompanhamento e suporte contínuo para sua tranquilidade" },
    { icon: Layers, title: "Integração total", desc: "Segurança, automação e acesso conectados em uma só plataforma" },
  ];

  const beneficios = [
    { icon: ShieldCheck, title: "Segurança 24 horas", desc: "Monitoramento visual contínuo do seu patrimônio, dia e noite." },
    { icon: Award, title: "Instaladores especializados", desc: "Equipe técnica treinada com anos de experiência em Manaus." },
    { icon: Smartphone, title: "Acesso pelo celular", desc: "Acompanhe suas câmeras em tempo real de qualquer lugar." },
    { icon: BadgeCheck, title: "Marcas líderes", desc: "Trabalhamos com Intelbras, Hikvision e outras referências do mercado." },
    { icon: Zap, title: "Orçamento rápido", desc: "Resposta ágil pelo WhatsApp e visita técnica sem compromisso." },
    { icon: Wrench, title: "Garantia na instalação", desc: "Serviço com garantia e suporte pós-venda dedicado." },
  ];

  const pacotes = [
    {
      icon: HomeIcon,
      title: "Residências",
      desc: "Proteção completa para sua casa e família com câmeras discretas e acesso pelo celular.",
      items: [
        "Kit com 4 a 8 câmeras HD/Full HD",
        "Gravador (DVR/NVR) com HD dedicado",
        "Configuração de acesso remoto",
        "Cabeamento oculto e organizado",
      ],
    },
    {
      icon: Building2,
      title: "Empresas",
      desc: "CFTV corporativo com câmeras de alta resolução, monitoramento por área e integração com controle de acesso.",
      items: [
        "Câmeras IP profissionais",
        "Gravação contínua e por evento",
        "Detecção inteligente de movimento",
        "Integração com alarmes e acesso",
      ],
    },
    {
      icon: Building,
      title: "Condomínios",
      desc: "Projetos completos para portaria, áreas comuns e perímetro com visualização centralizada.",
      items: [
        "Cobertura de portaria e garagem",
        "Câmeras de perímetro com visão noturna",
        "Central de monitoramento",
        "Suporte técnico dedicado",
      ],
    },
  ];

  const marcas = ["Intelbras", "Hikvision", "Control iD", "PPA", "JFL"];

  const depoimentos = [
    {
      nome: "Rafael M.",
      bairro: "Adrianópolis, Manaus",
      texto:
        "Instalação rápida e organizada. As câmeras têm imagem excelente e o app funciona muito bem. Recomendo a Logiin.",
    },
    {
      nome: "Camila F.",
      bairro: "Ponta Negra, Manaus",
      texto:
        "Equipe muito profissional. Fizeram o projeto sob medida para a nossa casa e o cabeamento ficou impecável.",
    },
    {
      nome: "Síndico — Ed. Vista Rio",
      bairro: "Flores, Manaus",
      texto:
        "Modernizamos o CFTV do condomínio com a Logiin. Suporte ágil e imagens muito melhores que o sistema anterior.",
    },
  ];

  const faqs = [
    {
      q: "Quanto custa instalar câmeras de segurança em Manaus?",
      a: "O valor depende do número de câmeras, tipo de equipamento e complexidade da instalação. Fazemos orçamento gratuito e personalizado pelo WhatsApp após entender sua necessidade.",
    },
    {
      q: "Posso acompanhar as câmeras pelo celular?",
      a: "Sim. Todas as instalações são configuradas com acesso remoto pelo aplicativo, permitindo visualização ao vivo e revisão das gravações de qualquer lugar.",
    },
    {
      q: "Quanto tempo demora a instalação das câmeras?",
      a: "A maioria das instalações residenciais é concluída em 1 dia. Projetos maiores em condomínios e empresas podem levar de 2 a 5 dias, dependendo da estrutura.",
    },
    {
      q: "As câmeras funcionam sem internet?",
      a: "Sim. A gravação continua funcionando localmente no DVR/NVR mesmo sem internet. A conexão é necessária apenas para o acesso remoto pelo celular.",
    },
    {
      q: "Existe garantia na instalação?",
      a: "Sim. Oferecemos garantia sobre o serviço de instalação e os equipamentos possuem garantia direta do fabricante (Intelbras, Hikvision, etc.).",
    },
  ];

  return (
    <>
      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── BENEFÍCIOS CFTV ── */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
              Por que instalar com a Logiin
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Câmeras de segurança com <span className="text-gradient">instalação profissional</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mais de uma década ajudando famílias, empresas e condomínios de Manaus a proteger o que importa.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b, i) => {
              const Icon = b.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="h-full bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PACOTES DE CÂMERAS ── */}
      <section id="pacotes" className="section-padding bg-light-gray">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Projetos de CFTV para cada necessidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o cenário que mais combina com você e receba um orçamento personalizado.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pacotes.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                  <div className="h-full bg-card border border-border rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {p.items.map((it, k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button className="w-full font-semibold rounded-full">
                        Solicitar orçamento
                      </Button>
                    </a>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AUTORIDADE ── */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={familiaSegura} alt="Família protegida por sistema de câmeras de segurança instalado em Manaus" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                Autoridade e experiência em Manaus
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8 leading-tight">
                Segurança de verdade começa com{" "}
                <span className="text-gradient">quem entende do assunto</span>
              </h2>
              <div className="space-y-5">
                {whyItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/quem-somos" className="inline-block mt-8">
                <Button variant="outline" className="font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Conhecer a empresa
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section className="py-12 bg-light-gray border-y border-border">
        <div className="container-max px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Tecnologias que utilizamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {marcas.map((m) => (
              <span
                key={m}
                className="text-lg sm:text-xl font-bold text-foreground/60 hover:text-foreground transition-colors"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              O que dizem nossos clientes
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Projetos entregues em toda Manaus com nota máxima em atendimento.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {depoimentos.map((d, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <div className="h-full bg-card border border-border rounded-xl p-6 flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-5 flex-grow">
                    “{d.texto}”
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{d.nome}</p>
                    <p className="text-xs text-muted-foreground">{d.bairro}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUÇÕES COMPLEMENTARES ── */}
      <SolutionsAccordion />

      {/* ── FAQ ── */}
      <section className="section-padding bg-light-gray">
        <div className="container-max max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground">
              Tudo o que você precisa saber antes de instalar suas câmeras.
            </p>
          </AnimatedSection>
          <div className="bg-card border border-border rounded-2xl p-2 sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-gradient section-padding">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Pronto para proteger o que é seu em Manaus?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Fale com nossos especialistas pelo WhatsApp e receba um orçamento rápido, sem compromisso.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-full">
                <MessageCircle size={20} className="mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <BlogPreview />
    </>
  );
};

export default Home;
