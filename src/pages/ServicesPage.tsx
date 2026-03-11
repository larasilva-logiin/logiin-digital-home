import { services } from "@/lib/data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesPage = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-brand-dark text-center">
      <div className="container-max">
        <AnimatedSection>
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">
            Serviços
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Soluções completas em{" "}
            <span className="text-gradient">segurança e automação</span>
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Conheça cada um dos nossos serviços e descubra como podemos transformar seu espaço.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    {services.map((service, idx) => {
      const Icon = service.icon;
      const isAlt = idx % 2 === 1;
      return (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${isAlt ? "bg-brand-light" : ""}`}
        >
          <div className="container-max">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${idx % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                    <Icon size={28} />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Como funciona
                  </h3>
                  <div className="space-y-4 mb-8">
                    {service.howItWorks.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm">
                          {i + 1}
                        </div>
                        <p className="text-muted-foreground text-sm pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Benefícios
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <Link to="/contato" className="block mt-6">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                        Solicitar orçamento
                      </Button>
                    </Link>
                  </div>

                  {/* Related */}
                  <div className="mt-6">
                    <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Serviços relacionados
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services
                        .filter((s) => s.id !== service.id)
                        .slice(0, 3)
                        .map((s) => (
                          <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {s.title.split("(")[0].trim()}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      );
    })}
  </div>
);

export default ServicesPage;
