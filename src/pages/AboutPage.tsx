import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, Star, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos sempre as melhores tecnologias do mercado para entregar soluções que realmente fazem diferença." },
  { icon: ShieldCheck, title: "Confiança", desc: "Construímos relações duradouras com honestidade, transparência e compromisso em cada projeto." },
  { icon: Star, title: "Qualidade", desc: "Entregamos excelência em cada instalação, com equipamentos de ponta e acabamento profissional." },
  { icon: Heart, title: "Atendimento humanizado", desc: "Cada cliente é único para nós. Ouvimos, entendemos e superamos expectativas." },
];

const AboutPage = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-brand-dark text-center">
      <div className="container-max">
        <AnimatedSection>
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">Sobre nós</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Quem é a <span className="text-gradient">Logiin</span>
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Tecnologia, segurança e automação inteligente — é isso que nos move.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Nossa História */}
    <section className="section-padding">
      <div className="container-max max-w-3xl">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Nossa história</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg font-medium text-foreground">
              A Logiin nasceu da paixão por tecnologia e do desejo de tornar soluções de segurança e automação acessíveis para todos.
            </p>
            <p>
              Somos uma empresa nova, mas que já nasceu com propósito claro: transformar espaços com inteligência. Desde o primeiro projeto, entendemos que segurança não é luxo — é necessidade. E que automação não é complicação — é praticidade.
            </p>
            <p>
              Nossa missão é entregar soluções que combinam tecnologia de ponta com atendimento humanizado, criando experiências que transformam a forma como as pessoas vivem e se sentem em seus lares.
            </p>
            <p>
              Nossa visão é ser referência em automação residencial e segurança eletrônica, levando inovação com confiança para cada vez mais famílias e empresas no Brasil.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Valores */}
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

    {/* CTA */}
    <section className="section-padding bg-primary text-center">
      <div className="container-max">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <Link to="/contato">
            <Button size="lg" variant="dark" className="font-heading font-semibold">
              Fale com a nossa equipe
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default AboutPage;
