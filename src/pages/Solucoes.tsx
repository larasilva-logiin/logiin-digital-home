import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { solutions, solutionCategories } from "@/data/solutions";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const Solucoes = () => {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos"
    ? solutions
    : solutions.filter((s) => s.segments.includes(filter));

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-12 px-4">
        <div className="container-max">
          <p className="text-white/40 text-sm mb-2">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            {" / "}
            <span className="text-white/60">Soluções</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Nossas Soluções
          </h1>
          <p className="text-[hsl(210,30%,70%)] max-w-xl">
            Tecnologia integrada para cada necessidade. Filtre por segmento e encontre a solução ideal.
          </p>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 mb-10">
            {solutionCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((sol) => {
                const Icon = sol.icon;
                return (
                  <motion.div
                    key={sol.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    id={sol.id}
                  >
                    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{sol.title}</h3>
                          <div className="flex gap-2 mt-1.5">
                            {sol.segments.map((seg) => (
                              <span key={seg} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                {seg}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sol.description}</p>
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Benefícios</h4>
                        <ul className="space-y-1.5">
                          {sol.benefits.slice(0, 3).map((b, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle size={14} className="text-primary flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link to="/contato">
                        <Button size="sm" className="font-semibold rounded-full">
                          Ver detalhes
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-light-gray">
        <div className="container-max text-center">
          <AnimatedSection>
            <h3 className="text-xl font-bold text-foreground mb-6">Equipamentos das melhores marcas</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {["Intelbras", "Hikvision", "Dahua", "Axis", "Bosch", "Honeywell"].map((brand) => (
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
              Não sabe qual solução ideal para você?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Nossos especialistas fazem um diagnóstico gratuito do seu espaço.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-8 py-6">
                Solicitar diagnóstico gratuito
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Solucoes;
