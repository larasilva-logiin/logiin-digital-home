import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import AnimatedSection from "@/components/AnimatedSection";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogImages = [blog1, blog2, blog3];

const BlogPreview = () => (
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
            <Link to={`/blog/${post.slug}`} className="block group">
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blogImages[i]}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: post.color }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center mt-10">
        <Link to="/blog">
          <Button
            variant="outline"
            className="font-semibold rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
          >
            Ver todos os artigos
          </Button>
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default BlogPreview;
