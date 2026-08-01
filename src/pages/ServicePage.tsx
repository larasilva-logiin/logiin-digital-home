import { Link } from "react-router-dom";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { servicePages, getService } from "@/data/services";

const WHATSAPP_URL =
  "https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site";

interface Props {
  slug: string;
}

const ServicePage = ({ slug }: Props) => {
  const service = getService(slug);
  if (!service) return null;
  const Icon = service.icon;
  const others = servicePages.filter((s) => s.slug !== slug);

  return (
    <div>
      <SEO
        title={service.title}
        description={service.description}
        path={service.route}
        breadcrumbs={[
          { name: "Início", path: "/" },
          { name: "Soluções", path: "/solucoes" },
          { name: service.name, path: service.route },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy pt-28 pb-14 px-4">
        <div className="container-max">
          <p className="text-white/40 text-sm mb-3">
            <Link to="/" className="hover:text-primary transition-colors">Início</Link>
            {" / "}
            <Link to="/solucoes" className="hover:text-primary transition-colors">Soluções</Link>
            {" / "}
            <span className="text-white/60">{service.name}</span>
          </p>
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
              <Icon size={28} className="text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              {service.h1}
            </h1>
          </div>
          <p className="text-[hsl(210,30%,70%)] max-w-2xl leading-relaxed">
            {service.intro}
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-7">
            <Button size="lg" className="font-semibold rounded-full px-7">
              <MessageCircle size={18} className="mr-2" />
              {service.ctaText}
            </Button>
          </a>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding bg-background">
        <div className="container-max grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {service.blocks.map((block, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <h2 className="text-2xl font-bold text-foreground mb-4">{block.heading}</h2>
                {block.paragraphs?.map((p, k) => (
                  <p key={k} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                ))}
                {block.bullets && (
                  <ul className="space-y-2.5 mt-2">
                    {block.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2.5 text-muted-foreground">
                        <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </AnimatedSection>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-7 sticky top-28">
                <h2 className="text-lg font-bold text-foreground mb-4">Para quem serve</h2>
                <ul className="space-y-3 mb-6">
                  {service.audience.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  Cada projeto tem particularidades técnicas. Fazemos visita técnica e enviamos um orçamento personalizado.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full font-semibold rounded-full">
                    <MessageCircle size={18} className="mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </section>

      {/* Veja também */}
      <section className="section-padding bg-light-gray">
        <div className="container-max mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
            Perguntas frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {service.faq.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">Veja também</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((s) => {
              const OtherIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={s.route}
                  className="group h-full bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <OtherIcon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{s.intro.split(". ")[0]}.</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ver detalhes
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
