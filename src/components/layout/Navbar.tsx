import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { solutions, getSolutionRoute } from "@/data/solutions";
import logoBranca from "@/assets/logo-branca.webp";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Soluções", path: "/solucoes", hasDropdown: true },
  { label: "Logiin", path: "/quem-somos" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <img src={logoBranca} alt="Logiin — Câmeras de Segurança em Manaus" width="160" height="40" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-72 bg-navy-2 border border-white/10 rounded-xl shadow-2xl p-2 backdrop-blur-xl transition-[opacity,transform] duration-150 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {solutions.map((sol) => {
                      const Icon = sol.icon;
                      return (
                        <Link
                          key={sol.id}
                          to={getSolutionRoute(sol.id)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon size={16} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{sol.title}</p>
                            <p className="text-xs text-white/40 line-clamp-1">{sol.short}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}

              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contato">
              <Button className="font-semibold rounded-full px-6">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Alternar menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — slide em transform/opacity (composto pela GPU) */}
      <div
        aria-hidden={!isOpen}
        className={`lg:hidden fixed inset-0 top-14 sm:top-16 bg-navy/98 backdrop-blur-xl z-40 transition-[opacity,transform] duration-300 ease-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="container-max px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              tabIndex={isOpen ? 0 : -1}
              className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contato" className="mt-4" tabIndex={isOpen ? 0 : -1}>
            <Button className="w-full font-semibold rounded-full text-base py-6">
              Solicitar Orçamento
            </Button>
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
