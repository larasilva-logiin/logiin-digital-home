import { Link } from "react-router-dom";
import { blogPosts, categoryColors } from "@/lib/data";
import { Clock, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const BlogPreview = () => (
  <section className="section-padding bg-brand-light">
    <div className="container-max">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">
          Conteúdo
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          Blog Logiin
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((post, i) => (
          <AnimatedSection key={post.id} delay={i * 0.1}>
            <Link to="/blog" className="block group">
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
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
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
