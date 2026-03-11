import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, Star, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos as melhores tecnologias do mercado para entregar soluções que fazem a diferença." },
  { icon: ShieldCheck, title: "Confiança", desc: "Transparência e compromisso com a qualidade em cada projeto que realizamos." },
  { icon: Star, title: "Qualidade", desc: "Equipamentos de ponta e instalação profissional, garantindo durabilidade e performance." },
  { icon: Heart, title: "Atendimento humanizado", desc: "Tratamos cada cliente como único, entendendo suas necessidades e superando expectativas." },
];

const timeline = [
  { year: "2020", text: "Fundação da Logiin com foco em segurança eletrônica residencial" },
  { year: "2021", text: "Expansão para automação residencial e controle de acesso" },
  { year: "2022", text: "Primeiros projetos comerciais e parcerias estratégicas" },
  { year: "2023", text: "Marco de 50 projetos entregues e equipe ampliada" },
  { year: "2024", text: "Lançamento do portfólio de casa inteligente completa" },
  { year: "2025", text: "100+ projetos e referência em automação no estado de São Paulo" },
];

const team = [
  { name: "Lucas Mendes", role: "CEO & Fundador" },
  { name: "Ana Costa", role: "Gerente de Projetos" },
  { name: "Rafael Silva", role: "Engenheiro de Automação" },
  { name: "Juliana Santos", role: "Atendimento ao Cliente" },
];

const AboutPage = () => (
  <div className="pt-20">
    <section className="section-padding bg-brand-dark text-center">
      <div className="container-max">
        <AnimatedSection>
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">Sobre nós</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Quem é a <span className="text-gradient">Logiin</span>
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Somos uma empresa brasileira especializada em transformar espaços com tecnologia, segurança e automação inteligente.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container-max max-w-3xl">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Nossa história</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>A Logiin nasceu da paixão por tecnologia e do desejo de tornar soluções de segurança e automação acessíveis para todos. Desde 2020, trabalhamos para proteger famílias e transformar residências em espaços inteligentes.</p>
            <p>Nossa missão é entregar soluções que combinam tecnologia de ponta com atendimento humanizado, criando experiências que transformam a forma como as pessoas vivem e se sentem em seus lares.</p>
            <p>Com mais de 100 projetos entregues e uma taxa de 98% de satisfação, nos orgulhamos de ser referência em automação e segurança no estado de São Paulo.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-brand-light">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold text-foreground">Nossos valores</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="container-max max-w-2xl">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold text-foreground">Nossa trajetória</h2>
        </AnimatedSection>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-xs flex-shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <p className="text-xs font-heading font-semibold text-primary mb-1">{item.year}</p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-brand-light">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl font-bold text-foreground">Nosso time</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-muted-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm">{member.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-brand-gradient text-center">
      <div className="container-max">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <Link to="/contato">
            <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-semibold">
              Entrar em contato
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default AboutPage;
