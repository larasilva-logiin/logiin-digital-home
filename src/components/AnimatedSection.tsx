import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Reveal on scroll usando IntersectionObserver + CSS (transform/opacity).
 * Substitui framer-motion para reduzir JavaScript no carregamento inicial,
 * mantendo exatamente o mesmo efeito visual (fade + slide de 30px).
 */
const AnimatedSection = ({ children, className = "", delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "-50px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: delay ? `${delay}s` : undefined,
        willChange: visible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
