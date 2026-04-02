import { useState } from "react";
import { motion } from "framer-motion";
import { solutions } from "@/data/solutions";
import AnimatedSection from "@/components/AnimatedSection";

import solCftv from "@/assets/sol-cftv.jpg";
import solAcesso from "@/assets/sol-acesso.jpg";
import solAutomacao from "@/assets/sol-automacao.jpg";
import solAlarmes from "@/assets/sol-alarmes.jpg";
import solRedes from "@/assets/sol-redes.jpg";
import solSuporte from "@/assets/sol-suporte.jpg";

const images: Record<string, string> = {
  cftv: solCftv,
  "controle-acesso": solAcesso,
  automacao: solAutomacao,
  alarmes: solAlarmes,
  redes: solRedes,
  outros: solSuporte,
};

const SolutionsAccordion = () => {
  const [active, setActive] = useState(0);
  const activeSol = solutions[active];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Nossas Soluções
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tecnologia integrada para cada necessidade
          </p>
        </AnimatedSection>

        {/* Cards row — stacks vertically on mobile */}
        <div className="hidden sm:flex gap-3 h-[480px] mb-8">
          {solutions.map((sol, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={sol.id}
                layout
                onClick={() => setActive(i)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={images[sol.id]}
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black"
                  animate={{ opacity: isActive ? 0 : 0.65 }}
                  transition={{ duration: 0.4 }}
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                )}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 font-semibold text-sm [writing-mode:vertical-lr] rotate-180 tracking-wider">
                      {sol.title}
                    </span>
                  </div>
                )}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <sol.icon size={24} className="text-primary" />
                      <h3 className="text-2xl font-extrabold text-white">
                        {sol.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-base max-w-md leading-relaxed">
                      {sol.short}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical card list */}
        <div className="flex flex-col gap-3 sm:hidden mb-8">
          {solutions.map((sol, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={sol.id}
                onClick={() => setActive(i)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                animate={{ height: isActive ? 220 : 56 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <img
                  src={images[sol.id]}
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black"
                  animate={{ opacity: isActive ? 0.3 : 0.65 }}
                  transition={{ duration: 0.4 }}
                />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                )}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center px-5">
                    <div className="flex items-center gap-3">
                      <sol.icon size={18} className="text-primary" />
                      <span className="text-white/90 font-semibold text-sm">
                        {sol.title}
                      </span>
                    </div>
                  </div>
                )}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-5"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <sol.icon size={20} className="text-primary" />
                      <h3 className="text-lg font-extrabold text-white">
                        {sol.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {sol.short}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Active description below */}
        <motion.div
          key={activeSol.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">
            {activeSol.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {activeSol.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsAccordion;
