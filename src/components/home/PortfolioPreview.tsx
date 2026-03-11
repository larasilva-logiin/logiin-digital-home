import { Link } from "react-router-dom";
import { portfolioProjects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const PortfolioPreview = () => (
  <section className="section-padding">
    <div className="container-max">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">
          Nosso trabalho
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Portfólio
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioProjects.slice(0, 6).map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.1}>
            <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-foreground/30 text-lg">{project.title}</span>
                </div>
                <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-semibold text-sm">Ver detalhes</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={12} />
                  {project.location}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-10">
        <Link to="/portfolio">
          <Button variant="outline" size="lg" className="font-heading font-semibold">
            Ver portfólio completo
          </Button>
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default PortfolioPreview;
