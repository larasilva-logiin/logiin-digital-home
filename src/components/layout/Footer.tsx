import { Link } from "react-router-dom";
import { Instagram, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";
import { solutions } from "@/data/solutions";
import logoBranca from "@/assets/logo-branca.png";

const Footer = () =>
<footer className="bg-navy text-white">
    <div className="container-max section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Logo & Description */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <img src={logoBranca} alt="Logiin" className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            Conectividade inteligente que protege o que importa. Soluções integradas de segurança e automação para todo o Brasil.
          </p>
          <div className="flex gap-3">
            {[
          { icon: Instagram, href: "#", label: "Instagram" },
          { icon: Linkedin, href: "#", label: "LinkedIn" },
          { icon: MessageCircle, href: "https://wa.me/5592982122563", label: "WhatsApp" }].
          map(({ icon: Icon, href, label }) =>
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white/60"
            aria-label={label}>
                <Icon size={18} />
              </a>
          )}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
            Soluções
          </h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            {solutions.map((s) =>
          <li key={s.id}>
                <Link to={`/solucoes#${s.id}`} className="hover:text-primary transition-colors">
                  {s.title}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
            Empresa
          </h4>
          <ul className="space-y-2.5 text-sm text-white/50">
            {[
          { label: "Início", path: "/" },
          { label: "Logiin", path: "/quem-somos" },
          { label: "Blog", path: "/blog" },
          { label: "Contato", path: "/contato" }].
          map((l) =>
          <li key={l.path}>
                <Link to={l.path} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary flex-shrink-0" />
              (92) 98212-2563
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary flex-shrink-0" />
              logiin.automacao@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <p>© {new Date().getFullYear()} Logiin. Todos os direitos reservados.</p>
        <p>Desenvolvido com tecnologia Logiin</p>
      </div>
    </div>
  </footer>;

export default Footer;