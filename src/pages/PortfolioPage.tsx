import { useState } from "react";
import { portfolioProjects } from "@/lib/data";
import { MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const categories = ["Todos", "Residencial", "Comercial", "Automação", "Segurança"];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<(typeof portfolioProjects)[0] | null>(null);

  const filtered = filter === "Todos"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-dark text-center">
        <div className="container-max">
          <AnimatedSection>
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">Portfólio</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Nossos <span className="text-gradient">Projetos</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl mx-auto">
              Conheça alguns dos projetos que já realizamos para clientes residenciais e comerciais.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <button onClick={() => setSelected(project)} className="block w-full text-left group">
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="font-heading font-bold text-foreground/20">{project.title}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((t) => (
                          <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} /> {project.location}
                      </div>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading">{selected.title}</DialogTitle>
                <DialogDescription>{selected.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 mt-2">
                <div>
                  <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Serviços</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.tags.map((t) => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Localização</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin size={14} /> {selected.location}</p>
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Categoria</p>
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">{selected.category}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioPage;
