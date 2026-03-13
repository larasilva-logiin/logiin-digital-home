import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, Star, Heart, Linkedin, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          const inc = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(cur));
          }, 1500 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const values = [
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos sempre as melhores tecnologias do mercado", color: "bg-primary" },
  { icon: ShieldCheck, title: "Confiança", desc: "Construímos relações duradouras com honestidade", color: "bg-secondary" },
  { icon: Star, title: "Qualidade", desc: "Entregamos excelência em cada projeto", color: "bg-primary" },
  { icon: Heart, title: "Atendimento humanizado", desc: "Cada cliente é único para nós", color: "bg-secondary" },
];

const team = [
  { name: "Carlos Silva", role: "CEO & Fundador" },
  { name: "Ana Costa", role: "Diretora Comercial" },
  { name: "Lucas Mendes", role: "Gerente Técnico" },
  { name: "Mariana Santos", role: "Coordenadora de Projetos" },
  { name: "Rafael Oliveira", role: "Engenheiro de Sistemas" },
  { name: "Juliana Lima", role: "Suporte ao Cliente" },
];

const timeline = [
  { year: "2014", title: "Fundação", desc: "Início das operações em Manaus" },
  { year: "2016", title: "Expansão", desc: "Primeiro grande projeto corporativo" },
  { year: "2018", title: "Automação", desc: "Entrada no mercado de automação residencial" },
  { year: "2020", title: "Plataforma", desc: "Lançamento da plataforma Logiin" },
  { year: "2023", title: "Nacional", desc: "Expansão para todo o Brasil" },
  { year: "2025", title: "Futuro", desc: "500+ clientes ativos e crescendo" },
];

const stats = [
  { value: 500, suffix: "+", label: "Instalações" },
  { value: 10, suffix: "+", label: "Anos" },
  { value: 98, suffix: "%", label: "Satisfação" },
  { value: 24, suffix: "/7", label: "Suporte" },
];

const QuemSomos = () => (
  <div>
    {/* Hero */}
    <section className="relative bg-navy pt-28 pb-16 px-4">
      <div className="container-max text-center">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Tecnologia a serviço da sua{" "}
            <span className="text-gradient">segurança</span>
          </h1>
          <p className="text-[hsl(210,30%,70%)] max-w-xl mx-auto">
            Conheça a empresa por trás das soluções que protegem o que você mais valoriza.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* About */}
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-foreground mb-6">Nossa história</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Logiin nasceu em Manaus, no coração da Amazônia, com a missão de levar tecnologia de segurança e automação de ponta para residências e empresas de todo o Brasil.
              </p>
              <p>
                Fundada por profissionais apaixonados por tecnologia, a empresa cresceu combinando expertise técnica com atendimento humanizado, criando soluções que realmente fazem diferença na vida das pessoas.
              </p>
              <p>
                Hoje, com mais de 500 clientes ativos, a Logiin é referência em soluções integradas de CFTV, controle de acesso, alarmes e automação residencial, atendendo desde pequenas residências até grandes empreendimentos.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-2 border border-white/10 flex items-center justify-center">
              <Users size={80} className="text-primary/30" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Values */}
    <section className="section-padding bg-light-gray">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-foreground">Nossos Valores</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className={`h-1.5 ${v.color}`} />
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-navy">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white/40 text-sm">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-white">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-foreground">Nosso Time</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-card rounded-xl border border-border p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">{t.name[0]}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-light-gray">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-foreground">Nossa Trajetória</h2>
        </AnimatedSection>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="w-48 bg-card rounded-xl border border-border p-5">
                  <span className="text-2xl font-extrabold text-primary">{t.year}</span>
                  <h4 className="font-semibold text-foreground mt-2 mb-1">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default QuemSomos;
