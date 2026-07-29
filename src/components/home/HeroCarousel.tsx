import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import heroMobile1Asset from "@/assets/hero-mobile-1.png.asset.json";
import heroMobile2Asset from "@/assets/hero-mobile-2.png.asset.json";
import heroMobile3Asset from "@/assets/hero-mobile-3.png.asset.json";

const heroMobile1 = heroMobile1Asset.url;
const heroMobile2 = heroMobile2Asset.url;
const heroMobile3 = heroMobile3Asset.url;

const slides = [
  { desktop: hero1, mobile: heroMobile1 },
  { desktop: hero2, mobile: heroMobile2 },
  { desktop: hero3, mobile: heroMobile3 },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  

  return (
    <section className="relative h-screen overflow-hidden bg-navy">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <picture>
            <source media="(max-width: 640px)" srcSet={slides[current].mobile} />
            <img
              src={slides[current].desktop}
              alt="Logiin"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Stronger vertical gradient on mobile for readability, horizontal on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy)/0.85)] via-[hsl(var(--navy)/0.7)] to-[hsl(var(--navy)/0.85)] sm:bg-gradient-to-r sm:from-[hsl(var(--navy)/0.92)] sm:via-[hsl(var(--navy)/0.75)] sm:to-[hsl(var(--navy)/0.5)]" />
        </motion.div>
      </AnimatePresence>

      {/* Static Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 mb-6">
              Especialistas em CFTV em Manaus
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6">
              Instalação de{" "}
              <span className="text-gradient">Câmeras de Segurança</span>{" "}
              em Manaus com Qualidade e Garantia
            </h1>
            <p className="text-lg text-[hsl(210,30%,70%)] max-w-lg mb-8 leading-relaxed">
              Proteja sua residência, empresa ou condomínio com projetos personalizados, equipamentos das melhores marcas e instalação profissional. Solicite um orçamento personalizado pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5592982122563?text=Ol%C3%A1%2C%20vinda%20atrav%C3%A9s%20do%20site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="font-semibold text-base px-8 py-6 rounded-full w-full sm:w-auto">
                  Solicitar Orçamento
                </Button>
              </a>
              <a href="#pacotes">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-full w-full sm:w-auto"
                >
                  Conhecer Nossos Projetos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-8"
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
