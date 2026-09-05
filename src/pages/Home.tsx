import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Layers, Users, Clock, Smartphone, Award, Zap, Wrench, MessageCircle, Home as HomeIcon, Building2, Building } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import HeroCarousel from "@/components/home/HeroCarousel";
import familiaSegura from "@/assets/familia-segura.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Seções abaixo da dobra: carregadas sob demanda para aliviar o JS inicial
const SolutionsAccordion = lazy(() => import("@/components/home/SolutionsAccordion"));
const BlogPreview = lazy(() => import("@/components/home/BlogPreview"));


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
    { icon: Award, title: "Instaladores especializados", desc: "Equipe técnica certificada e treinada nas principais tecnologias do mercado." },
    { icon: Smartphone, title: "Acesso pelo celular", desc: "Acompanhe suas câmeras em tempo real de qualquer lugar." },
    { icon: Zap, title: "Orçamento personalizado", desc: "Resposta ágil pelo WhatsApp, com avaliação técnica para um orçamento sob medida." },
    { icon: Wrench, title: "Garantia na instalação", desc: "Serviço com garantia e suporte pós-venda dedicado." },
  ];

  const pacotes = [
    {
      icon: HomeIcon,
      title: "Residências",
      desc: "Proteção completa para sua casa e família com câmeras discretas e acesso pelo celular.",
    },
    {
      icon: Building2,
      title: "Empresas",
      desc: "CFTV corporativo com câmeras de alta resolução, monitoramento por área e integração com controle de acesso.",
    },
    {
      icon: Building,
      title: "Condomínios",
      desc: "Projetos completos para portaria, áreas comuns e perímetro com visualização centralizada.",
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
      <SEO
        title="Segurança Eletrônica em Manaus | CFTV e Automação | Logiin"
        description="Instalação de câmeras, alarmes, controle de acesso, cerca elétrica e automação em Manaus. Projetos para residências e empresas. Solicite um orçamento."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://logiin.com.br/#website",
              name: "Logiin Segurança & Automação",
              url: "https://logiin.com.br/",
              inLanguage: "pt-BR",
              publisher: { "@id": "https://logiin.com.br/#empresa" },
            },
            {
              "@type": "FAQPage",
              "@id": "https://logiin.com.br/#faq",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── NOSSAS SOLUÇÕES ── */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SolutionsAccordion />
      </Suspense>


      {/* ── PACOTES DE CÂMERAS ── */}
      <section id="pacotes" className="section-padding bg-light-gray">
        <div className="container-max">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Projetos de CFTV para cada necessidade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o cenário que mais combina com você e receba um orçamento personalizado.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {pacotes.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                  <div className="h-full bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{p.desc}</p>
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={familiaSegura} alt="Família protegida por sistema de câmeras de segurança instalado em Manaus pela Logiin" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                Autoridade e experiência em Manaus
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                Segurança de verdade começa com{" "}
                <span className="text-gradient">quem entende do assunto</span>
              </h2>
              <div className="space-y-4">
                {whyItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/quem-somos" className="inline-block mt-6">
                <Button variant="outline" className="font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  Conhecer a empresa
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS CFTV ── */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
              Por que instalar com a Logiin
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Câmeras de segurança com <span className="text-gradient">instalação profissional</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ajudando famílias, empresas e condomínios de Manaus a proteger o que importa, com projetos personalizados e equipamentos certificados.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-12 sm:gap-y-10 max-w-4xl mx-auto">
            {beneficios.map((b, i) => {
              const Icon = b.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="h-full bg-card border border-border rounded-xl p-6 pt-8 hover:shadow-lg transition-shadow flex flex-col relative">
                    <div className="w-12 h-12 rounded-lg bg-brand-gradient shadow-md flex items-center justify-center mb-4 -mt-10">
                      <Icon size={24} className="text-primary-foreground" />
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

      {/* ── FAQ ── */}
      <section className="section-padding bg-light-gray">
        <div className="container-max max-w-3xl">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
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
            <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={26} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Pronto para proteger o que é seu?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Fale com nossos especialistas pelo WhatsApp e receba um orçamento personalizado para o seu projeto.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-sm sm:text-base px-6 sm:px-8 py-6 rounded-full max-w-full">
                <MessageCircle size={20} className="mr-2" />
                Falar no WhatsApp
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <BlogPreview />
      </Suspense>

    </>
  );
};

export default Home;
