import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, Cloud, Zap, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    icon: Smartphone,
    title: "App Logiin",
    desc: "Controle total no smartphone. Acesse câmeras, abra portas, gerencie alarmes e controle a automação — tudo na palma da mão, disponível para iOS e Android.",
    items: ["Acesso remoto 24/7", "Notificações em tempo real", "Controle de câmeras ao vivo", "Gestão de acessos"],
    imageRight: true,
  },
  {
    icon: Monitor,
    title: "Painel Web",
    desc: "Dashboard completo para gestão centralizada. Visualize todos os seus dispositivos, gere relatórios e configure regras de automação pelo navegador.",
    items: ["Dashboard interativo", "Relatórios detalhados", "Configuração avançada", "Multi-unidades"],
    imageRight: false,
  },
];

const highlights = [
  { icon: Smartphone, title: "App Mobile", desc: "iOS e Android com interface intuitiva" },
  { icon: Cloud, title: "Nuvem Segura", desc: "Dados criptografados em servidores brasileiros" },
  { icon: Zap, title: "Integração Total", desc: "Compatível com os principais protocolos" },
];

const howSteps = [
  { num: 1, title: "Cadastro rápido", desc: "Crie sua conta em minutos" },
  { num: 2, title: "Conecte dispositivos", desc: "Adicione câmeras, sensores e automação" },
  { num: 3, title: "Configure regras", desc: "Personalize cenários e alertas" },
  { num: 4, title: "Monitore tudo", desc: "Acompanhe em tempo real de qualquer lugar" },
];

const LogiinPage = () => (
  <div>
    {/* Hero */}
    <section className="bg-navy pt-28 pb-16 px-4 text-center">
      <div className="container-max">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            A plataforma <span className="text-gradient">Logiin</span>
          </h1>
          <p className="text-[hsl(210,30%,70%)] max-w-xl mx-auto text-lg">
            Gerencie câmeras, acessos e automação em tempo real de qualquer lugar do mundo.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Feature Showcase */}
    {features.map((feat, idx) => (
      <section key={idx} className={`section-padding ${idx % 2 === 0 ? "bg-white" : "bg-light-gray"}`}>
        <div className="container-max">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${!feat.imageRight ? "lg:grid-flow-dense" : ""}`}>
            {/* Text */}
            <AnimatedSection className={!feat.imageRight ? "lg:col-start-2" : ""}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feat.icon size={24} className="text-primary" />
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">{feat.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{feat.desc}</p>
              <ul className="space-y-2">
                {feat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Image Placeholder */}
            <AnimatedSection delay={0.15} className={!feat.imageRight ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-2 border border-white/10 flex items-center justify-center">
                <feat.icon size={64} className="text-primary/30" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}

    {/* Highlights */}
    <section className="section-padding bg-navy">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <h.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{h.title}</h3>
                <p className="text-sm text-white/50">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-white">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-foreground">Como funciona</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          {howSteps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold relative z-10">
                {step.num}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Compatibility */}
    <section className="section-padding bg-light-gray">
      <div className="container-max text-center">
        <AnimatedSection>
          <h3 className="text-xl font-bold text-foreground mb-6">Compatível com os principais sistemas</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Intelbras", "Hikvision", "Alexa", "Google Home", "Apple HomeKit", "Z-Wave"].map((brand) => (
              <div key={brand} className="w-28 h-12 rounded-lg bg-white border border-border flex items-center justify-center text-sm font-semibold text-muted-foreground">
                {brand}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-brand-gradient section-padding">
      <div className="container-max text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Solicitar demonstração gratuita
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Conheça a plataforma Logiin na prática. Sem compromisso.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-8 py-6">
              Agendar demonstração
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default LogiinPage;
