import { useState } from "react";
import { blogPosts, categoryColors } from "@/lib/data";
import { Clock, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";

const blogCategories = ["Todos", "CFTV", "Automação", "Alarmes", "Controle de Acesso", "Dicas", "Tendências"];

const BlogPage = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const featured = blogPosts[0];

  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-dark text-center">
        <div className="container-max">
          <AnimatedSection>
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">Blog</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Conteúdo que <span className="text-gradient">educa e inspira</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          {/* Featured */}
          <AnimatedSection className="mb-14">
            <div className="bg-card rounded-xl border border-border overflow-hidden grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit ${categoryColors[featured.category] || "bg-muted text-muted-foreground"}`}>
                  {featured.category}
                </span>
                <h2 className="font-heading text-2xl font-bold text-foreground mt-3 mb-3">{featured.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogCategories.map((cat) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {filtered.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.05}>
                <div className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
                      {post.category}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter */}
          <AnimatedSection>
            <div className="bg-brand-dark rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                Receba novidades e dicas exclusivas
              </h3>
              <p className="text-primary-foreground/60 text-sm mb-6 max-w-md mx-auto">
                Inscreva-se na nossa newsletter e fique por dentro das últimas tendências em segurança e automação.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input placeholder="Seu melhor e-mail" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold flex-shrink-0">
                  Inscrever
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
