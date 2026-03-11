import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Mail, Instagram, Copy, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const serviceOptions = [
  "Câmeras de Segurança (CFTV)",
  "Alarmes",
  "Controle de Acesso",
  "Fechaduras Eletrônicas",
  "Automação Residencial",
  "Interfones e Vídeo Porteiro",
  "Outros",
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("contato@logiin.com.br");
    setCopied(true);
    toast.success("E-mail copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-dark text-center">
        <div className="container-max">
          <AnimatedSection>
            <p className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-2">Contato</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Vamos <span className="text-gradient">conversar?</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl mx-auto">
              Resposta em até 2 horas nos dias úteis.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <AnimatedSection>
            <div className="bg-card rounded-xl border border-border p-6 sm:p-8 mb-10">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Nome completo" required />
                  <Input type="email" placeholder="E-mail" required />
                </div>
                <Input placeholder="Telefone / WhatsApp" required />
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Serviço de interesse" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea placeholder="Sua mensagem..." rows={5} required />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full font-heading font-semibold"
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact cards */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,49%)] flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">WhatsApp</h3>
                <p className="text-xs text-muted-foreground mb-3">Fale diretamente conosco</p>
                <Button variant="whatsapp" size="sm" className="w-full font-heading font-semibold text-xs">
                  Abrir WhatsApp
                </Button>
              </a>

              {/* Email */}
              <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">E-mail</h3>
                <p className="text-xs text-muted-foreground mb-3">contato@logiin.com.br</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-heading font-semibold text-xs"
                  onClick={copyEmail}
                >
                  {copied ? <Check size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
                  {copied ? "Copiado!" : "Copiar e-mail"}
                </Button>
              </div>

              {/* Instagram */}
              <a
                href="https://instagram.com/logiin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Instagram size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Instagram</h3>
                <p className="text-xs text-muted-foreground mb-3">@logiin</p>
                <Button variant="outline" size="sm" className="w-full font-heading font-semibold text-xs">
                  Ver perfil
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
