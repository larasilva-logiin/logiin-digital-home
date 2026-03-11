import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold">
                Log<span className="text-primary">iin</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Segurança e automação que transformam seu espaço. Soluções inteligentes para residências e empresas.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {[
                "Câmeras de Segurança",
                "Alarmes",
                "Controle de Acesso",
                "Fechaduras Eletrônicas",
                "Automação Residencial",
                "Interfones e Vídeo Porteiro",
              ].map((s) => (
                <li key={s}>
                  <Link to="/servicos" className="hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {[
                { label: "Início", path: "/" },
                { label: "Portfólio", path: "/portfolio" },
                { label: "Blog", path: "/blog" },
                { label: "Sobre nós", path: "/sobre" },
                { label: "Contato", path: "/contato" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                contato@logiin.com.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                São Paulo, SP — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Logiin. Todos os direitos reservados.</p>
          <p>Desenvolvido com 💙 pela Logiin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
