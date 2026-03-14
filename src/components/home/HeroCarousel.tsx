import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

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
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy)/0.92)] via-[hsl(var(--navy)/0.75)] to-[hsl(var(--navy)/0.5)]" />
        </motion.div>
      </AnimatePresence>

      {/* Static Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-max px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/20 mb-6">
              Segurança & Automação
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6">
              Conectividade inteligente que{" "}
              <span className="text-gradient">protege o que importa</span>
            </h1>
            <p className="text-lg text-[hsl(210,30%,70%)] max-w-lg mb-8 leading-relaxed">
              Soluções integradas de CFTV, controle de acesso e automação para residências, condomínios e empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/solucoes">
                <Button size="lg" className="font-semibold text-base px-8 py-6 rounded-full">
                  Conheça as Soluções
                </Button>
              </Link>
              <Link to="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold text-base px-8 py-6 rounded-full"
                >
                  Solicitar Orçamento
                </Button>
              </Link>
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
