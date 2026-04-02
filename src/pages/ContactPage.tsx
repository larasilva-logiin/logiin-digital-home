import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Mail, Instagram, Copy, Check, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { solutions } from "@/data/solutions";

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
    <div>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-12 px-4 text-center">
        <div className="container-max">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Vamos <span className="text-gradient">conversar?</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-[hsl(210,30%,70%)]">
              <Clock size={16} />
              <p>Resposta em até 2 horas nos dias úteis</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          {/* Form */}
          <AnimatedSection>
            <div className="bg-card rounded-xl border border-border p-6 sm:p-8 mb-10">
              <h2 className="text-xl font-bold text-foreground mb-6">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Nome completo" required className="rounded-lg" />
                  <Input type="email" placeholder="E-mail" required className="rounded-lg" />
                </div>
                <Input placeholder="Telefone / WhatsApp" required className="rounded-lg" />
                <Select required>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Serviço de interesse" />
                  </SelectTrigger>
                  <SelectContent>
                    {solutions.map((s) => (
                      <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>
                    ))}
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Sua mensagem..." rows={5} required className="rounded-lg" />
                <Button type="submit" disabled={loading} className="w-full font-semibold rounded-full text-base py-5">
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Cards */}
          <AnimatedSection delay={0.2}>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="https://wa.me/5592982122563"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,49%)] flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">WhatsApp</h3>
                <p className="text-xs text-muted-foreground mb-3">Fale diretamente conosco</p>
                <Button size="sm" className="w-full font-semibold rounded-full text-xs bg-[hsl(142,70%,49%)] hover:bg-[hsl(142,70%,38%)] text-white">
                  Abrir WhatsApp
                </Button>
              </a>

              <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">E-mail</h3>
                <p className="text-xs text-muted-foreground mb-3">contato@logiin.com.br</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-semibold rounded-full text-xs border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={copyEmail}
                >
                  {copied ? <Check size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
                  {copied ? "Copiado!" : "Copiar e-mail"}
                </Button>
              </div>

              <a
                href="https://instagram.com/logiin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Instagram size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">Instagram</h3>
                <p className="text-xs text-muted-foreground mb-3">@logiin</p>
                <Button variant="outline" size="sm" className="w-full font-semibold rounded-full text-xs border-primary text-primary hover:bg-primary hover:text-white">
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
