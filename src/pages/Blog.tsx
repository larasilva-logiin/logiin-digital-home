import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, blogCategories } from "@/data/blog";
import { Clock, User, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const Blog = () => {
  const [filter, setFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = blogPosts
    .filter((p) => filter === "Todos" || p.category === filter)
    .filter((p) => !search || p.title.toLowerCase().includes(search.toLowerCase()));

  const featured = blogPosts[0];

  return (
    <div>
      {/* Header */}
      <section className="bg-navy pt-28 pb-12 px-4 text-center">
        <div className="container-max">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Blog <span className="text-gradient">Logiin</span>
            </h1>
            <p className="text-[hsl(210,30%,70%)] max-w-lg mx-auto mb-8">
              Conteúdo especializado em segurança eletrônica e automação
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <Input
                placeholder="Buscar artigos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 pl-10 rounded-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Featured */}
          <AnimatedSection className="mb-14">
            <div className="bg-card rounded-xl border border-border overflow-hidden grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto relative overflow-hidden" style={{ minHeight: 200 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-foreground">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit" style={{ backgroundColor: `${featured.color}15`, color: featured.color }}>
                  {featured.category}
                </span>
                <h2 className="text-2xl font-extrabold text-foreground mt-3 mb-3">{featured.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
                <Link to={`/blog/${featured.slug}`}>
                  <Button className="mt-4 w-fit font-semibold rounded-full">
                    Ler artigo
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                  <div className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="h-2" style={{ backgroundColor: post.color }} />
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${post.color}15`, color: post.color }}>
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                            {post.author[0]}
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Newsletter */}
          <AnimatedSection>
            <div className="bg-navy rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Receba novidades e dicas exclusivas
              </h3>
              <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
                Inscreva-se na newsletter e fique por dentro das tendências em segurança e automação.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Seu melhor e-mail"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-full"
                />
                <Button className="font-semibold rounded-full flex-shrink-0">
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

export default Blog;
