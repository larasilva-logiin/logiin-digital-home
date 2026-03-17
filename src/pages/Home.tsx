import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Wifi, Users, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import SolutionsAccordion from "@/components/home/SolutionsAccordion";
import BlogPreview from "@/components/home/BlogPreview";

/* ── Counter ── */
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

const Home = () => {
  const stats = [
    { label: "Clientes", value: 500, suffix: "+" },
    { label: "Anos de mercado", value: 10, suffix: "+" },
    { label: "Satisfação", value: 98, suffix: "%" },
  ];

  const whyItems = [
    { icon: Shield, title: "Equipamentos certificados", desc: "Trabalhamos com marcas homologadas e certificadas pela Anatel" },
    { icon: Users, title: "Equipe especializada", desc: "Técnicos treinados e certificados nas melhores tecnologias" },
    { icon: Clock, title: "Suporte dedicado", desc: "Acompanhamento e suporte contínuo para sua tranquilidade" },
    { icon: Wifi, title: "Integração total", desc: "Todos os sistemas conectados e gerenciados em um só lugar" },
  ];

  const howSteps = [
    { num: 1, title: "Diagnóstico gratuito", desc: "Avaliamos suas necessidades e identificamos a melhor solução" },
    { num: 2, title: "Projeto personalizado", desc: "Desenvolvemos um projeto sob medida para seu espaço" },
    { num: 3, title: "Instalação profissional", desc: "Execução técnica com garantia e acabamento impecável" },
    { num: 4, title: "Acompanhamento", desc: "Acompanhamento pós-instalação com suporte dedicado" },
  ];

  return (
    <>
      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />


      {/* ── SOLUTIONS ACCORDION ── */}
      <SolutionsAccordion />

      {/* ── WHY LOGIIN ── */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={familiaSegura} alt="Família tranquila em casa com segurança" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                Por que escolher a Logiin
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8 leading-tight">
                Segurança real começa com{" "}
                <span className="text-gradient">tecnologia certa</span>
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

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Como funciona
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            {howSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative text-center">
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

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-gradient section-padding">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Pronto para proteger o que é seu?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Fale com nossos especialistas e receba um diagnóstico gratuito.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-base px-8 py-6 rounded-full">
                Solicitar Diagnóstico Gratuito
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <BlogPreview />
    </>
  );
};

export default Home;
