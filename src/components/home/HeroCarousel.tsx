import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import heroMobile1 from "@/assets/hero-mobile-1.webp";
import heroMobile2 from "@/assets/hero-mobile-2.webp";
import heroMobile3 from "@/assets/hero-mobile-3.webp";

const slides = [
  { desktop: hero1, mobile: heroMobile1 },
  { desktop: hero2, mobile: heroMobile2 },
  { desktop: hero3, mobile: heroMobile3 },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const firstRender = useRef(true);

  const next = useCallback(() => {
    firstRender.current = false;
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);


  

  return (
    <section className="relative h-[100svh] overflow-hidden bg-navy">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={firstRender.current ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <picture>
            <source media="(max-width: 640px)" srcSet={slides[current].mobile} width={768} height={1280} />
            <img
              src={slides[current].desktop}
              alt="Sistema de segurança eletrônica e automação em Manaus pela Logiin"
              fetchPriority={current === 0 ? "high" : "low"}
              loading="eager"
              decoding="async"
              width={1536}
              height={1024}
              className="w-full h-full object-cover object-center"
            />
          </picture>

          {/* Stronger vertical gradient on mobile for readability, horizontal on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy)/0.85)] via-[hsl(var(--navy)/0.7)] to-[hsl(var(--navy)/0.9)] sm:bg-gradient-to-r sm:from-[hsl(var(--navy)/0.92)] sm:via-[hsl(var(--navy)/0.75)] sm:to-[hsl(var(--navy)/0.5)]" />
        </motion.div>
      </AnimatePresence>

      {/* Static Content */}
      <div className="relative z-10 h-full flex flex-col justify-center sm:justify-center pt-16 sm:pt-20 pb-28 sm:pb-0">
        <div className="container-max px-5 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-primary/15 text-primary border border-primary/20 mb-3 sm:mb-6">
              Especialistas em segurança eletrônica em Manaus
            </span>
            <h1 className="text-[1.5rem] leading-[1.2] sm:text-4xl sm:leading-[1.25] lg:text-[52px] lg:leading-[1.2] font-extrabold text-white mb-3 sm:mb-6 lg:mb-7 tracking-tight [text-wrap:balance]">
              Segurança eletrônica e automação em Manaus
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[hsl(210,30%,72%)] max-w-lg mb-5 sm:mb-8 leading-relaxed lg:leading-8">
              Proteja sua residência, empresa ou condomínio com projetos personalizados e instalação profissional. Solicite um orçamento personalizado pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full w-full sm:w-auto">
                  Solicitar Orçamento
                </Button>
              </a>
              <a href="#pacotes" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full w-full sm:w-auto"
                >
                  Conhecer Nossos Projetos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-6 sm:w-8"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
