import { useEffect, useState, useRef } from "react";
import { Award, Users, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Award, value: 100, suffix: "+", label: "Projetos entregues" },
  { icon: Users, value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { icon: Clock, value: 5, suffix: "+", label: "Anos de experiência" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="section-padding bg-brand-dark">
    <div className="container-max">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.15} className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={28} className="text-primary" />
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-primary-foreground/50 font-medium">{stat.label}</p>
            </AnimatedSection>
          );
        })}
      </div>
      <AnimatedSection delay={0.4} className="text-center">
        <p className="font-heading text-xl sm:text-2xl text-primary-foreground/80 font-medium max-w-xl mx-auto">
          "Tecnologia que você vê.{" "}
          <span className="text-gradient">Segurança que você sente.</span>"
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default StatsSection;
