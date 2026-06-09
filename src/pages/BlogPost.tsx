import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const WHATSAPP_URL = "https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/blog">
            <Button className="rounded-full font-semibold">Voltar ao blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div>
      {/* Header */}
      <section className="bg-navy pt-28 pb-14 px-4">
        <div className="container-max max-w-3xl">
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-6"
            >
              <ArrowLeft size={16} />
              Voltar ao blog
            </Link>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
              style={{ backgroundColor: `${post.color}30`, color: post.color }}
            >
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <User size={14} /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-max max-w-3xl">
          <AnimatedSection>
            <article className="prose prose-lg max-w-none">
              {post.content.map((section, i) => {
                switch (section.type) {
                  case "heading":
                    return (
                      <h2
                        key={i}
                        className="text-xl sm:text-2xl font-extrabold text-foreground mt-8 mb-3"
                      >
                        {section.text}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                        {section.text}
                      </p>
                    );
                  case "list":
                    return (
                      <ul key={i} className="space-y-2 mb-4 ml-1">
                        {section.items?.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                              style={{ backgroundColor: post.color }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  case "cta":
                    return (
                      <div key={i} className="mt-8 mb-4">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                          <Button className="font-semibold rounded-full text-base px-8 py-6">
                            {section.text} →
                          </Button>
                        </a>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </article>
          </AnimatedSection>

          {/* Related */}
          <AnimatedSection className="mt-16 pt-10 border-t border-border">
            <h3 className="text-xl font-extrabold text-foreground mb-6">Outros artigos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/blog/${rp.slug}`}
                  className="group p-4 rounded-xl border border-border hover:shadow-md transition-all"
                >
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${rp.color}15`, color: rp.color }}
                  >
                    {rp.category}
                  </span>
                  <h4 className="font-semibold text-sm text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h4>
                  <span className="text-xs text-muted-foreground mt-1 block">{rp.readTime}</span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
