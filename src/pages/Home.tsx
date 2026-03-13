import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Wifi, Users, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { solutions } from "@/data/solutions";
import { blogPosts } from "@/data/blog";
import AnimatedSection from "@/components/AnimatedSection";

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
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(cur));
            }
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

/* ── Home ── */
const Home = () => {
  const stats = [
    { label: "Clientes", value: 500, suffix: "+" },
    { label: "Anos de mercado", value: 10, suffix: "+" },
    { label: "Suporte", value: 24, suffix: "/7" },
    { label: "Satisfação", value: 98, suffix: "%" },
  ];

  const whyItems = [
    { icon: Shield, title: "Equipamentos certificados", desc: "Trabalhamos com marcas homologadas e certificadas pela Anatel" },
    { icon: Users, title: "Equipe especializada", desc: "Técnicos treinados e certificados nas melhores tecnologias" },
    { icon: Clock, title: "Suporte 24 horas", desc: "Monitoramento e suporte contínuo para sua tranquilidade" },
    { icon: Wifi, title: "Integração total", desc: "Todos os sistemas conectados e gerenciados em um só lugar" },
  ];

  const howSteps = [
    { num: 1, title: "Diagnóstico gratuito", desc: "Avaliamos suas necessidades e identificamos a melhor solução" },
    { num: 2, title: "Projeto personalizado", desc: "Desenvolvemos um projeto sob medida para seu espaço" },
    { num: 3, title: "Instalação profissional", desc: "Execução técnica com garantia e acabamento impecável" },
    { num: 4, title: "Suporte contínuo", desc: "Acompanhamento pós-instalação com suporte dedicado" },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Animated Grid */}
        <div className="absolute inset-0 hero-grid" style={{
          backgroundImage: `linear-gradient(hsl(var(--brand-cyan) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-cyan) / 0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
        
        {/* Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}

        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 mb-6">
                Segurança & Automação
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6">
                Conectividade inteligente que{" "}
                <span className="text-gradient">protege o que importa</span>
              </h1>
              <p className="text-lg text-[hsl(210,30%,70%)] max-w-lg mb-8 leading-relaxed">
                Soluções integradas de CFTV, controle de acesso e automação para residências, condomínios e empresas em todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solucoes">
                  <Button size="lg" className="font-semibold text-base px-8 py-6 rounded-full">
                    Conheça as Soluções
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white font-semibold text-base px-8 py-6 rounded-full"
                  >
                    Solicitar Orçamento
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — Hero Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-white/10 backdrop-blur-sm" />
                <div className="absolute inset-4 rounded-2xl bg-navy-2/80 border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <Shield size={64} className="text-primary/60 mx-auto mb-4" />
                    <p className="text-white/40 text-sm font-medium">Segurança Inteligente</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Wifi size={28} className="text-primary/60" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <Users size={24} className="text-secondary/60" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 lg:mt-20"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                  <div key={i} className={`text-center ${i < stats.length - 1 ? "md:border-r md:border-white/10" : ""}`}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      <Counter target={s.value} suffix={s.suffix} />
                    </div>
                    <p className="text-xs text-white/40 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <ChevronDown size={28} className="text-white/30" />
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Nossas Soluções
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tecnologia integrada para cada necessidade
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <AnimatedSection key={sol.id} delay={i * 0.08}>
                  <Link to={`/solucoes#${sol.id}`} className="block group">
                    <div className="relative bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5 ${i % 2 === 0 ? "bg-primary" : "bg-secondary"} opacity-0 group-hover:opacity-100`} />
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{sol.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sol.short}</p>
                      <span className="text-sm font-medium text-primary group-hover:underline">
                        Saiba mais →
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY LOGIIN ── */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Image Placeholder */}
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-navy to-navy-2 border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Shield size={80} className="text-primary/30 mx-auto mb-4" />
                  <p className="text-white/30 text-sm">Tecnologia & Segurança</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right */}
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
            {/* Connector line (desktop) */}
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
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Conteúdo especializado
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1}>
                <Link to="/blog" className="block group">
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="h-2" style={{ backgroundColor: post.color }} />
                    <div className="p-6">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${post.color}15`, color: post.color }}>
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-sm font-medium text-primary mt-3 inline-block group-hover:underline">
                        Ler artigo →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline" className="font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Ver todos os artigos
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
