import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTABanner = () => (
  <section className="relative overflow-hidden">
    <div className="bg-brand-gradient section-padding">
      <AnimatedSection className="container-max text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Pronto para transformar seu espaço?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Entre em contato e receba um orçamento personalizado para o seu projeto.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contato">
            <Button
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-semibold px-8"
            >
              Solicitar orçamento
            </Button>
          </Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold px-8"
            >
              <MessageCircle size={18} className="mr-2" />
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABanner;
