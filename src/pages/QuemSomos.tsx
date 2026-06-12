import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, Star, Heart, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import florestaHero from "@/assets/floresta-amazonica.jpg";
import manausAerea from "@/assets/manaus-aerea.jpg";

const values = [
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos sempre as melhores tecnologias do mercado para proteger você e sua família.", gradient: "from-emerald-400 to-teal-500", ring: "ring-emerald-400/30" },
  { icon: ShieldCheck, title: "Confiança", desc: "Construímos relações duradouras com honestidade e transparência em cada projeto.", gradient: "from-sky-400 to-blue-500", ring: "ring-sky-400/30" },
  { icon: Star, title: "Qualidade", desc: "Entregamos excelência em cada instalação, com equipamentos certificados e garantia.", gradient: "from-fuchsia-400 to-purple-500", ring: "ring-fuchsia-400/30" },
  { icon: Heart, title: "Atendimento humanizado", desc: "Cada cliente é único. Ouvimos, entendemos e personalizamos cada solução.", gradient: "from-amber-400 to-orange-500", ring: "ring-amber-400/30" },
];


const QuemSomos = () => (
  <div>
    {/* Hero — Amazonian warm tones */}
    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={florestaHero} alt="Floresta Amazônica" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container-max text-center relative z-10">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <MapPin size={16} />
            Nascidos em Manaus, conectados ao Brasil
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Tecnologia com o{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-300">
              calor da Amazônia
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white/80">
            Conheça a empresa que protege o que você mais valoriza, com a dedicação e o acolhimento de quem entende a nossa terra.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Nossa História */}
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nossa História
            </span>
            <h2 className="text-3xl font-extrabold mt-2 mb-6 text-foreground">
              Cuidando do que importa, perto de você
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                A Logiin nasceu em Manaus com um objetivo claro: oferecer soluções de segurança e automação que realmente funcionam no dia a dia.
              </p>
              <p>
                Fundada por uma mulher apaixonada por tecnologia, a empresa surgiu da vontade de tornar esse mercado mais acessível, simples e próximo das pessoas, sem complicação e sem promessas vazias.
              </p>
              <p>
                Desde o início, o foco é entender a necessidade de cada cliente e entregar soluções práticas, bem planejadas e que façam sentido para a realidade de cada espaço, seja uma casa ou um negócio.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-3xl overflow-hidden border-2 border-border shadow-xl">
              <img src={manausAerea} alt="Vista aérea de Manaus" className="w-full aspect-[4/3] object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>


    {/* Valores */}
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-foreground">
            Nossos Valores
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-muted-foreground">
            Os pilares que guiam cada decisão e cada projeto que entregamos
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.1} className="h-full">
                <div className="group relative bg-card rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border h-full flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Custom layered icon badge */}
                    <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-[28%] bg-gradient-to-br ${v.gradient} rotate-6 opacity-30 blur-md group-hover:rotate-12 transition-transform duration-500`} />
                      <div className={`absolute inset-1 rounded-[28%] bg-gradient-to-br ${v.gradient} opacity-20`} />
                      <div className={`relative w-16 h-16 rounded-[28%] bg-gradient-to-br ${v.gradient} flex items-center justify-center shadow-xl ring-4 ${v.ring} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                        <Icon size={28} className="text-white" strokeWidth={2.4} />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-foreground">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
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
