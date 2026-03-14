import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, Star, Heart, Leaf, Droplets, TreePine, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos sempre as melhores tecnologias do mercado para proteger você e sua família.", color: "from-emerald-400 to-teal-500" },
  { icon: ShieldCheck, title: "Confiança", desc: "Construímos relações duradouras com honestidade e transparência em cada projeto.", color: "from-sky-400 to-blue-500" },
  { icon: Star, title: "Qualidade", desc: "Entregamos excelência em cada instalação, com equipamentos certificados e garantia.", color: "from-emerald-400 to-teal-500" },
  { icon: Heart, title: "Atendimento humanizado", desc: "Cada cliente é único. Ouvimos, entendemos e personalizamos cada solução.", color: "from-amber-400 to-orange-400" },
];

const stats = [
  { value: 500, suffix: "+", label: "Instalações realizadas" },
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 24, suffix: "/7", label: "Suporte disponível" },
];

const timeline = [
  { year: "2014", title: "Fundação", desc: "Início das operações em Manaus, com o sonho de levar tecnologia de ponta à Amazônia." },
  { year: "2016", title: "Primeiro grande projeto", desc: "Entregamos nosso primeiro sistema integrado para um condomínio residencial." },
  { year: "2018", title: "Automação residencial", desc: "Expandimos nosso portfólio para incluir soluções de automação completa." },
  { year: "2020", title: "Plataforma Logiin", desc: "Lançamos nosso app proprietário para gestão remota de segurança." },
  { year: "2023", title: "Expansão nacional", desc: "Começamos a atender clientes em todo o Brasil com suporte remoto." },
  { year: "2025", title: "O futuro", desc: "500+ clientes ativos e investindo em IA para segurança preditiva." },
];

const QuemSomos = () => (
  <div>
    {/* Hero — Amazonian warm tones */}
    <section className="relative pt-28 pb-20 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(152, 30%, 96%) 0%, hsl(190, 30%, 95%) 50%, hsl(140, 25%, 93%) 100%)" }}>
      {/* Decorative leaves */}
      <div className="absolute top-10 right-10 opacity-10">
        <Leaf size={120} className="text-emerald-600" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <TreePine size={100} className="text-emerald-700" />
      </div>
      <div className="container-max text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <MapPin size={16} />
            Nascidos em Manaus, conectados ao Brasil
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: "hsl(160, 30%, 25%)" }}>
            Tecnologia com o{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
              calor da Amazônia
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "hsl(160, 15%, 45%)" }}>
            Conheça a empresa que protege o que você mais valoriza, com a dedicação e o acolhimento de quem entende a nossa terra.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Nossa História */}
    <section className="section-padding" style={{ backgroundColor: "hsl(40, 25%, 98%)" }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "hsl(160, 50%, 40%)" }}>
              Nossa História
            </span>
            <h2 className="text-3xl font-extrabold mt-2 mb-6" style={{ color: "hsl(160, 30%, 20%)" }}>
              Do coração da Amazônia para todo o Brasil
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "hsl(160, 10%, 40%)" }}>
              <p>
                A Logiin nasceu em Manaus, no coração da floresta, com a missão de mostrar que tecnologia de ponta e atendimento humanizado podem caminhar juntos. Fundada por profissionais apaixonados por inovação, a empresa começou pequena, mas com uma visão gigante.
              </p>
              <p>
                Acreditamos que segurança não é luxo — é direito. Por isso, desde o primeiro dia trabalhamos para oferecer soluções acessíveis e de alta qualidade, adaptadas à realidade de cada cliente, seja uma residência simples ou um grande empreendimento.
              </p>
              <p>
                Hoje, com mais de 500 clientes ativos e uma equipe dedicada, seguimos crescendo com o mesmo propósito: proteger e conectar pessoas com tecnologia que realmente faz diferença.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {/* Regional image placeholder */}
            <div className="rounded-3xl overflow-hidden border-2 border-emerald-100" style={{ background: "linear-gradient(135deg, hsl(160, 30%, 90%) 0%, hsl(190, 25%, 88%) 100%)" }}>
              <div className="aspect-[4/3] flex flex-col items-center justify-center gap-4 p-8">
                <Droplets size={64} className="text-emerald-300" />
                <div className="text-center">
                  <p className="font-semibold" style={{ color: "hsl(160, 30%, 35%)" }}>Manaus, Amazonas</p>
                  <p className="text-sm" style={{ color: "hsl(160, 15%, 55%)" }}>Onde tudo começou</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding" style={{ backgroundColor: "hsl(152, 20%, 96%)" }}>
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold" style={{ color: "hsl(160, 30%, 20%)" }}>
            Nossa Trajetória
          </h2>
        </AnimatedSection>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: "hsl(160, 30%, 85%)" }} />
          <div className="space-y-8 lg:space-y-12">
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`flex flex-col lg:flex-row items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm max-w-md mx-auto lg:mx-0">
                      <span className="text-2xl font-extrabold text-emerald-500">{t.year}</span>
                      <h4 className="font-semibold mt-1 mb-2" style={{ color: "hsl(160, 30%, 25%)" }}>{t.title}</h4>
                      <p className="text-sm" style={{ color: "hsl(160, 10%, 50%)" }}>{t.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-emerald-400 border-4 border-white shadow-md flex-shrink-0" />
                  <div className="flex-1 hidden lg:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding" style={{ background: "linear-gradient(135deg, hsl(160, 35%, 30%) 0%, hsl(190, 40%, 28%) 100%)" }}>
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white/50 text-sm">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Valores */}
    <section className="section-padding" style={{ backgroundColor: "hsl(40, 25%, 98%)" }}>
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold" style={{ color: "hsl(160, 30%, 20%)" }}>
            Nossos Valores
          </h2>
          <p className="mt-3 max-w-lg mx-auto" style={{ color: "hsl(160, 10%, 50%)" }}>
            Os pilares que guiam cada decisão e cada projeto que entregamos
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-emerald-100 p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-5`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "hsl(160, 30%, 25%)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(160, 10%, 50%)" }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding" style={{ background: "linear-gradient(135deg, hsl(160, 45%, 42%) 0%, hsl(175, 50%, 38%) 100%)" }}>
      <div className="container-max text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Conheça nosso trabalho de perto. Nossa equipe está pronta para atender você.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 font-semibold rounded-full px-8 py-6">
              Fale com a nossa equipe
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default QuemSomos;
