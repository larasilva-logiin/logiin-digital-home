import { Link } from "react-router-dom";
import { services } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-brand-light">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">
            O que fazemos
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Nossos Serviços
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <Link to="/servicos" className="block group">
                  <div
                    className={`relative bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5 ${
                        isEven ? "bg-primary" : "bg-secondary"
                      } opacity-0 group-hover:opacity-100`}
                    />
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        isEven
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.short}
                    </p>
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
  );
};

export default ServicesPreview;
